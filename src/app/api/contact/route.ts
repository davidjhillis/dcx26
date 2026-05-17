import { NextRequest } from "next/server";
import { forward } from "../_handler";

export async function POST(req: NextRequest) {
  return forward(req, "contact");
}
