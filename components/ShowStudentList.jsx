import * as React from "react";
import axios from "axios";
import { Box } from "@mui/material";
import ShowList from "../components/ShowList";
import FadeLoader from "react-spinners/FadeLoader";
import useSWR from "swr";
const getPaymentList = (url) => axios.get(url).then((res) => res.data);
export default function PaymentTable() {
  const { data, error } = useSWR("/api/getPaymentList", getPaymentList);

  if (!data) {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "grid",
          placeContent: "center",
        }}
      >
        <FadeLoader size={50} color={"#001E3C"} />
      </Box>
    );
  }

  return <ShowList data={data} />;
}
