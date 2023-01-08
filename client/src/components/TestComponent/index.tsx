import React, { useEffect } from "react";
import { useGetTodosQuery } from "../../rtkAPIs";
import { useDispatch } from "react-redux";
import { handleToasterVisibility } from "../../reducers/ToasterSlice";
import { CircularProgress, Box } from "@mui/material";
import CustomizedToaster from "../../components/toaster";
import { TOASTER_PARAMS } from "../../constants";

const Index = () => {
  const { isLoading, isSuccess } = useGetTodosQuery(20);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(handleToasterVisibility(true));
    }
  }, [isSuccess, dispatch]);

  return (
    <>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <CustomizedToaster
        toasterText="Data Fetching Successful"
        severity={TOASTER_PARAMS.SEVERITY.SUCCESS}
      />
    </>
  );
};

export default Index;
