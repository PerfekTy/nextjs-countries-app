import fs from "fs";
import {NextRequest} from "next/server";
import path from "path";

export async function GET(req: NextRequest) {
  if (req.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const dataFilePath = path.join(process.cwd(), 'public/data.json');
    const data = fs.readFileSync(dataFilePath, "utf8");
    const parsedData = JSON.parse(data);

    return new Response(JSON.stringify(parsedData), { status: 200 });
  } catch (err:any) {
    return new Response(err.message, { status: 500 });
  }
}

