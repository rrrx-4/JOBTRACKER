import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import FormRow from '../../components/FormRow'
import { useState } from 'react';
import { updateUser } from '../../features/user/userSlice';

const Profile = ()=>{

    const {isLoading, user} = useSelector((store)=>store.user)
    const dispatch = useDispatch();

 const [userData,setUserData] = useState({
  name:user?.name ||'',
  email:user?.email ||'',
  lastName:user?.lastName ||'',
  location:user?.location ||'',
})

    const {name, lastName, email, location} = userData;

    const handleSubmit = (e)=>{

        e.preventDefault();

        if(!name || !email || !lastName || !location)
        {
            toast.error('please fill out all fields')
            return 
        }

        dispatch(updateUser({ name, email, lastName, location }));
    }

    const handleChange = (e)=>{

        const name = e.target.name
        const value = e.target.value

        setUserData({...userData, [name]:value})
    }

    return (
       <Wrapper>
        <form className='form' onSubmit={handleSubmit} >
        <h3>profile</h3>
        <div className='form-center' >
    <FormRow type='text' name='name'  value={name} handleChange={handleChange} ></FormRow>
    <FormRow type='text' labelText='last name' name='lastName'  value={lastName} handleChange={handleChange} ></FormRow>
    <FormRow type='email' name='email'  value={email} handleChange={handleChange} ></FormRow>
    <FormRow type='text' name='location'  value={location} handleChange={handleChange} ></FormRow>
    <button type='submit' className='btn btn-block' disabled={isLoading} >
        {isLoading?'Please wait...':'save changes'}
    </button>
        </div>
        </form>
       </Wrapper>
    )


}

export default Profile;