import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PersonTemplete from "../../components/templete/person/person";


export default function Person() {
  const router = useRouter();
  const name = router.query.name;
  const [person, setPerson] = useState<any>();

  useEffect(() => {
    if(name !== undefined){
      axios.get(`/api/billions/${name}`).then((res:AxiosResponse) => {
        setPerson(res.data);
      });
    }
  },[name]);

  return (
    <PersonTemplete person={person} />
  );
}
