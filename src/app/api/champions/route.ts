import { ChampionsData } from "@/types/ChampionsData";
import { LOL_CHAMPIONS_JSON_URL } from "@app/api/RiotDataAPI";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(LOL_CHAMPIONS_JSON_URL);
    const data: ChampionsData = await res.json();

    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
