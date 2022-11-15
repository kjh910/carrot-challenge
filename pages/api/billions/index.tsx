import axios, { AxiosResponse } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const response = await axios.get("https://billions-api.nomadcoders.workers.dev/")
                    .then((res:AxiosResponse) => {
                        return res.data;
                    })
    if(response){
        res.status(200).json(
            {
                ...response,
                "error":null
            }
          );
    } else {
        res.status(500).json(
            {
                "error":false
            }
          );
    }
}
