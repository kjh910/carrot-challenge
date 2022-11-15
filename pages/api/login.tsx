import client from "../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../lib/server/withSession";

import withHandler, { ResponseType } from "../../lib/server/withHandler";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email } = req.body;
  const user = await client.user.findUnique({
    where: { email }
  });

  if (user) {
    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email
    };
    await req.session.save();
    return res.status(200).send({
      ok: true
    });
  } else if (!user) {
    return res.status(200).send({
      ok: false,
      error: "Email　doesn`t exist"
    });
  } else {
    return res.status(500).send({
      ok: false,
      error: "Login Fail"
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
