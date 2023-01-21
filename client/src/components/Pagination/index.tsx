import { FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setPageLimit } from '../../reducers/PaginationSlice'

import './style.css'

const Index = () => {
  const dispatch = useDispatch()

  const {
    page: currentPage,
    limit: paginationLimit,
    totalAvailable,
  } = useSelector((state: any) => state.pagination)

  const pageNumber = Math.ceil(totalAvailable / paginationLimit)

  const selectJSX = () => {
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>Rows / Page</InputLabel>
          <Select
            value={paginationLimit}
            defaultValue={paginationLimit}
            label='Rows / Page'
            onChange={e => {
              dispatch(setPageLimit(e.target.value))
            }}
          >
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={6}>6</MenuItem>
          </Select>
        </FormControl>
      </Box>
    )
  }

  return (
    <>
      <div className='pagination-wrapper'>
        <div>{selectJSX()}</div>
        <div>{`Page ${currentPage} of total ${pageNumber}`}</div>
      </div>
    </>
  )
}

export default Index
