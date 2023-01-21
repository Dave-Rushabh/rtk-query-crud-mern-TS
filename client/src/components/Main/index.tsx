import React, { useEffect } from 'react'
import { useGetUsersQuery } from '../../rtkAPIs'
import { useDispatch, useSelector } from 'react-redux'
import { handleToasterVisibility } from '../../reducers/ToasterSlice'
import { CircularProgress, Box } from '@mui/material'
import CustomizedToaster from '../toaster'
import { TOASTER_PARAMS } from '../../constants'
import { setTotalAvailable } from '../../reducers/PaginationSlice'
import Pagination from '../Pagination'

const Index = () => {
  const dispatch = useDispatch()
  const {
    page: currentPage,
    limit: paginationLimit,
    totalAvailable,
  } = useSelector((state: any) => state.pagination)

  const { isLoading, isSuccess, data } = useGetUsersQuery(paginationLimit)

  useEffect(() => {
    if (isSuccess) {
      dispatch(handleToasterVisibility(true))
      dispatch(setTotalAvailable(data.totalAvailable))
    }
  }, [isSuccess, dispatch, data, paginationLimit])

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
      {data ? (
        <Pagination {...{ currentPage, paginationLimit, totalAvailable }} />
      ) : null}
    </>
  )
}

export default Index
