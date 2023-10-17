import { NextApiRequest } from "next";
import fs from "fs";

export async function GET(req: NextApiRequest) {
  if (req.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const data = fs.readFileSync("./public/data.json", "utf8");
    const parsedData = JSON.parse(data);

    return new Response(JSON.stringify(parsedData), { status: 200 });
  } catch (err) {
    return new Response("Something went wrong", { status: 500 });
  }
}
