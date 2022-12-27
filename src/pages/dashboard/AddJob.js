import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormRowSelect } from '../../components';
import FormRow from '../../components/FormRow'
import jobSlice, { clearValue, createJob, handleChange, editJob } from '../../features/job/jobSlice';

const AddJob = ()=>{


    const {isLoading, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, editJobId,} = useSelector((store)=>store.job)

    const {user} = useSelector((store)=>store.user); 

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!position || !company || !jobLocation)
        {
            toast.error('Please fill out all fields')
            return
        }

        if(isEditing){
            dispatch(editJob({jobId : editJobId, job: {position, company, jobLocation, jobType, status}}))

            return 
        }

        dispatch(createJob({ position, company, jobLocation, status, jobType } ));
    }
    const handleJobInput = (e)=>{
        const name = e.target.name
        const value = e.target.value

        // console.log(name, value);
        dispatch(handleChange({name , value}));
    }

    useEffect(()=>{

        if(!isEditing){
        dispatch(handleChange({name:'jobLocation', value:user.location}))
        }
    }, [])

    return (
        <Wrapper>
            <form className='form' >
                <h3>{isEditing ? 'edit job': 'add job'}</h3>
                <div className='form-center' >
                    <FormRow type='text' name='position' value={position} handleChange={handleJobInput} >

                    </FormRow>
                    <FormRow type='text' name='company' value={company} handleChange={handleJobInput} >

                    </FormRow>
                    <FormRow type='text'
                    labelText='job location'
                    name='jobLocation' value={jobLocation} handleChange={handleJobInput} >

                    </FormRow>

                    <FormRowSelect name='status' value={status} handleChange={handleJobInput} list={statusOptions} ></FormRowSelect>

                    <FormRowSelect name='jobType' labelText='job type' value={jobType} handleChange={handleJobInput} list={jobTypeOptions} ></FormRowSelect>

                    

                    <div className='btn-container' >
                        <button type='button' className='btn btn-block clear-btn' onClick={()=>dispatch(clearValue())} >clear</button>

                        <button type='button' className='btn btn-block submit-btn' disabled={isLoading} onClick={(e)=>handleSubmit(e)} >Submit</button>
                    </div>

                </div>
            </form>
        </Wrapper>
    )
}

export default AddJob;