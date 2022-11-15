import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../lib/server/withHandler";
import client from "../../lib/db";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { name, email } = req.body;

  const check = await client.user.findUnique({
    where: {
      email
    }
  });

  if (check) {
    return res.status(200).send({
      ok: false,
      error: "user exist"
    });
  }
  const user = await client.user.create({
    data: { email, name }
  });

  if (user) {
    return res.status(200).send({
      ok: true
    });
  }
  return res.status(500).send({
    ok: false,
    error: "fail create"
  });
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });
