export interface ChampionsRotationData {
  freeChampionIds: number[]; // 로테이션 챔피언 목록
  freeChampionIdsForNewPlayers: number[]; // 신규 유저를 위한 무료 챔피언 목록
  maxNewPlayerLevel: number; // 신규 유저 기준 레벨
}
