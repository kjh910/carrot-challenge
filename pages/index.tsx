import axios, { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import BillionTemplete from "../components/templete/billions/billions";
import { IBillions } from "../components/templete/billions/props";

export default function Home() {
  const [billions, setBillions] = useState<IBillions[]>([]);

  useEffect(() => {
    axios.get("api/billions").then((res:AxiosResponse) => {
      setBillions(res.data);
    });
  },[]);

  return (
    <BillionTemplete billions={billions} />
  );
}

export const getServerSideProps: GetServerSideProps = async (context:any) => {
  const res = await axios.get('api/billions');
  if(res.status === 200){
    return {
      props:{
        ...res.data
      }
    }
  }

  return {
    props: {
      data,
    },
  }
}
