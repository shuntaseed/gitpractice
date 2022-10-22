// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../types";



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.json([
    {
      id: 1,
      name: "神童",
      age: 20,
    },
    { id: 2, name: "小川", age: 50 },
    { id: 3, name: "たかみ", age: 40,weight:['80','90'] },
  ]);

  // res.status(200).json({ name: 'John Doe' })
}
