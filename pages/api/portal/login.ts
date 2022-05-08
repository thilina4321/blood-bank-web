// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

    if(req.method === 'POST'){
        const {email, password} = req.body
        if(!email  || !password){
            return   res.status(404).json({ data: null, message :'Email oPassword Invalid' })
        }

        if(email === 'admin@bbsl.com' && password === 'adminbbsl'){
            return   res.status(200).json({ data: null, message :'Successfully login' })

        }else{
            return   res.status(404).json({ data: null, message :'Email or Password Invalid' })

        }
    }
}
