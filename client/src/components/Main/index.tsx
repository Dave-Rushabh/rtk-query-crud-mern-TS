import React, { useEffect } from 'react'
import { useGetTodosQuery } from '../../rtkAPIs'
import { useDispatch } from 'react-redux'
import { handleToasterVisibility } from '../../reducers/ToasterSlice'
import { CircularProgress, Box } from '@mui/material'
import CustomizedToaster from '../toaster'
import { TOASTER_PARAMS } from '../../constants'
import { setTotalAvailable } from '../../reducers/PaginationSlice'

const Index = () => {
  const { isLoading, isSuccess, data } = useGetTodosQuery(2)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isSuccess) {
      dispatch(handleToasterVisibility(true))
      dispatch(setTotalAvailable(data.totalAvailable))
    }
  }, [isSuccess, dispatch, data])

  return (
    <>
      {isLoading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <CustomizedToaster
        toasterText='Data Fetching Successful'
        severity={TOASTER_PARAMS.SEVERITY.SUCCESS}
      />
    </>
  )
}

export default Index
