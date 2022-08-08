// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

interface User {
  avatar: string,
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<User> ) {
  res.status(200).json(
    { avatar: 'https://i.pinimg.com/564x/1a/e0/e6/1ae0e6d5048bc83d2c4f73ced19073db.jpg', name: 'Superman' }
  )
}
