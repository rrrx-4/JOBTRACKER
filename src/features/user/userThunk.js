import customFetch, { checkForUnauthorizedResponse }   from "../../utils/axios"
import { clearAllJobsState } from "../allJobs/allJobsSlice";
import { clearValue } from "../job/jobSlice";
import { logoutUser } from "./userSlice"

export const registerUserThunk = async (url, user, thunkAPI)=>{
    try {
        const resp = await customFetch.post(url, user);
        return resp.data
    } catch (error) {
        
        return thunkAPI.rejectWithValue(error.response.data.msg);

    }
}

export const loginUserThunk = async (url, user, thunkAPI)=>{
    try {

        const resp = await customFetch.post(url, user);

        // console.log(resp.data);
        return resp.data;

    } catch (error) {
        
        return thunkAPI.rejectWithValue(error.response.data.msg);

    }
}

export const updateUserThunk = async (url, user, thunkAPI)=>{
    try {
        const resp = await customFetch.patch(url,user)
        // console.log(resp.data);
        return resp.data;
    } catch (error) {
        console.log(error.response);

        if(error.response.status === 401)
        {
            thunkAPI.dispatch(logoutUser());
            return thunkAPI.rejectWithValue('Unauthorized logging out...')
        }

        return checkForUnauthorizedResponse(error, thunkAPI)
    }
}

export const clearStoreThunk = async (message, thunkAPI)=>{

    try {
        thunkAPI.dispatch(logoutUser(message))
        thunkAPI.dispatch(clearAllJobsState());
        thunkAPI.dispatch(clearValue());
        return Promise.resolve();
    } catch (error) {
        return Promise.reject();
    }

}


