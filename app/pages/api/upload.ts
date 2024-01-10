// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { title, description } = req.body;

  // Handle video upload and storage here
  // ...

  res.status(200).json({ message: "Video uploaded successfully" });
}
