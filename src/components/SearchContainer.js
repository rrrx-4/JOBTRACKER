import { FormRow, FormRowSelect  } from './index'
import Wrapper from '../assets/wrappers/SearchContainer'
import { useSelector, useDispatch } from 'react-redux'
import { clearFilters, handleChange } from '../features/allJobs/allJobsSlice';

const SearchContainer = () => {

  const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useSelector((store)=>store.allJobs);

  const {statusOptions, jobTypeOptions} = useSelector((store)=>store.job)

  const dispatch = useDispatch();

  const handleSearch = (e) =>{

    dispatch(handleChange({name: e.target.name, value: e.target.value}))

  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(clearFilters())
  }

  return (
    <Wrapper>
      <form className='form' >
        <h4>search form</h4>
        <div className='form-center' >
          <FormRow type='text' name='search' value={search}  handleChange={handleSearch} ></FormRow>

            <FormRowSelect labelText='status' name='searchStatus' value={searchStatus} handleChange={handleSearch} list={['all', ...statusOptions]} ></FormRowSelect>

            <FormRowSelect labelText='type' name='searchType' value={searchType} handleChange={handleSearch} list={['all', ...jobTypeOptions]} ></FormRowSelect>

            <FormRowSelect name='sort' value={sort} handleChange={handleSearch} list={sortOptions} ></FormRowSelect>

            <button className='btn btn-block btn-danger' disabled={isLoading} onClick={handleSubmit} >clear Filters</button>

        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer