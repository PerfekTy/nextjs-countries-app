import fs from "fs";
import {NextRequest} from "next/server";

export async function handler(req: NextRequest) {
  if (req.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const data = fs.readFileSync("./public/data.json", "utf8");
    const parsedData = JSON.parse(data);

    const url = new URL(req.url as string);
    const parts = url.pathname.split("/");
    let id = parts[parts.length - 1];

    const filteredData = parsedData.filter(
      (country: any) => country.name === id,
    );

    return new Response(JSON.stringify(filteredData), { status: 200 });
  } catch (err) {
    return new Response("Something went wrong", { status: 500 });
  }
}

export {handler as GET}