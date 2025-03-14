// 데이터 요청 URL - JSON_URL -> .json으로 요청해야 함

// 버전 확인 URL
export const LOL_REQUEST_VERSION_URL: string =
  "https://ddragon.leagueoflegends.com/api/versions.json";
// 로테이션 챔피언 데이터
export const LOL_ROTATION_CHAMPION_URL: string =
  "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
// BASE_URL
export const LOL_REQUEST_BASE_URL: string =
  "https://ddragon.leagueoflegends.com/cdn/";

export const REGION: Record<string, string> = {
  KOR: "/ko_KR",
  USA: "/en_US",
};
