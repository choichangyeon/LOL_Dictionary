import PageButton from "@components/home/PageButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-[150px] flex flex-col items-center justify-center">
      <PageButton title="챔피언 목록 확인" path="/champions">
        <Image src="" alt="챔피언" />
      </PageButton>
      <PageButton title="아이템 목록 확인" path="/items">
        <Image src="" alt="아이템" />
      </PageButton>
      <PageButton title="로테이션 확인" path="/rotation">
        <Image src="" alt="로테이션" />
      </PageButton>
    </div>
  );
}
