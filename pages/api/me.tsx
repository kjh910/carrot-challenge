import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../lib/server/withHandler";
import { withApiSession } from "../../lib/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const challenge_session = req.cookies.challenge_session;
  if (challenge_session) {
    const user = req.session.user;
    res.status(200).send({
      ok: true,
      user
    });
  } else {
    res.status(200).send({
      ok: false,
      error: "not exist session"
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler
  })
);
