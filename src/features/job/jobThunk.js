import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import { clearValue } from "./jobSlice";
import { logoutUser } from "../user/userSlice";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";



export const createJobThunk = async (job, thunkAPI)=>{

        try {
            
            const resp = await customFetch.post('/jobs', job)

            thunkAPI.dispatch(clearValue());
            return resp.data.msg

        } catch (error) {
            if(error.response.status === 401){
                thunkAPI.dispatch(logoutUser())
                return thunkAPI.rejectWithValue('Unauthorized logging out')
            }

            return thunkAPI.rejectWithValue(error.response.data.msg);
        }

}

export const deleteJobThunk = async (jobId, thunkAPI)=>{
    thunkAPI.dispatch(showLoading());

    try {
        const resp = await customFetch.delete(`/jobs/${jobId}` )

            thunkAPI.dispatch(getAllJobs());
            return resp.data;
    } catch (error) {
        thunkAPI.dispatch(hideLoading());

        return checkForUnauthorizedResponse(error, thunkAPI)
    }
}

export const editJobThunk = async ({jobId, job}, thunkAPI)=>{
    try {
        const resp = await customFetch.patch(`/jobs/${jobId}`, job)
        thunkAPI.dispatch(clearValue());
        return resp.data;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI)
    }
}

