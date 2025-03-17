import PageButton from "@components/home/PageButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto my-[100px] flex max-w-4xl flex-col items-center justify-center">
      <h1 className="mb-12 text-center text-4xl font-bold text-yellow-400">
        LOL 백과사전
      </h1>

      <div className="grid w-full grid-cols-1 gap-[100px] md:grid-cols-3">
        <PageButton title="챔피언 목록 확인" path="/champions">
          <div className="flex h-[200px] w-[310px] items-center justify-center">
            <Image
              src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_4.jpg"
              fill
              alt="챔피언"
            />
          </div>
        </PageButton>

        <PageButton title="아이템 목록 확인" path="/items">
          <div className="flex h-[200px] w-[310px] items-center justify-center">
            <Image
              src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_5.jpg"
              fill
              alt="아이템"
            />
          </div>
        </PageButton>

        <PageButton title="로테이션 확인" path="/rotation">
          <div className="flex h-[200px] w-[310px] items-center justify-center">
            <Image
              src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_6.jpg"
              fill
              alt="로테이션"
            />
          </div>
        </PageButton>
      </div>
    </div>
  );
}
