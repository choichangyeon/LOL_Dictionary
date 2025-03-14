import { LOL_ROTATION_CHAMPION_URL } from "@constants/RiotDataURL";
import { NextResponse } from "next/server";

export const GET = async () => {
  const res = await fetch(LOL_ROTATION_CHAMPION_URL, {
    headers: {
      "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY!,
    },
  });
  const data = await res.json();

  return NextResponse.json(data);
};
