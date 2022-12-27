import { useState, useEffect } from "react";
import {Logo, FormRow} from '../components'
import Wrapper from "../assets/wrappers/RegisterPage";

import {toast} from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}


const Register = ()=>{

    const navigate = useNavigate();

    const {isLoading, user} = useSelector(store=>{
        // console.log(store);
        return store.user})

    const dispathch = useDispatch();

    const [values, setValues] = useState(initialState);

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setValues({...values, [name]:value});
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        
        const {name, email, password, isMember} = values;

        if(!email || !password || (!isMember && !name))
        {
            toast.error('please fill out all fields');
            return
        }

        if(isMember)
        {
            dispathch(loginUser({email, password}))
            return ;
        }

        dispathch(registerUser({name, email, password}))
    }

    const togglePage = ()=>{
        setValues({...values, isMember: !values.isMember});
    }

    useEffect(()=>{
        if(user){
            setTimeout(()=>{

                navigate('/');

            }, 3000)
        }
    }, [user])


    return <Wrapper className="full-page" >
        <form className="form" onSubmit={onSubmit}>
            <Logo></Logo>
        <h3>{values.isMember?'Login':'Register'}</h3>
        {!values.isMember &&   <FormRow type='text' name='name' value={values.name} handleChange={handleChange} ></FormRow>
        
        }
       
        <FormRow type='email' name='email' value={values.email} handleChange={handleChange} ></FormRow>
        <FormRow type='password' name='password' value={values.password} handleChange={handleChange} ></FormRow>
            <button type="submit" className="btn btn-block" disabled={isLoading} >{isLoading?'loading':'submit'}</button>
            <button type="submit" className="btn btn-block btn-hipster" disabled={isLoading} onClick={()=>dispathch(loginUser({email:'testUser@test.com', password : 'secret'}))} >{isLoading?'loading':'Demo'}</button>
        <p>
            {values.isMember?'Not a member yet?':'Already a member?'}
            <button type="button" onClick={togglePage} className='member-btn' >{values.isMember?'Register':'Login'}</button>
        </p>
        </form>
    </Wrapper>
}

export default Register;