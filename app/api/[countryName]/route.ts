import fs from "fs";
import {NextRequest} from "next/server";

export async function GET(req: NextRequest) {
  if (req.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const data = fs.readFileSync("/public/data.json", "utf8");
    const parsedData = JSON.parse(data);

    const url = new URL(req.url as string);
    const parts = url.pathname.split("/");
    let id = parts[parts.length - 1];

    const filteredData = parsedData.filter(
      (country: any) => country.name === id,
    );

    return new Response(JSON.stringify(filteredData), { status: 200 });
  } catch (err: any) {
    return new Response(err.message, { status: 500 });
  }
}

