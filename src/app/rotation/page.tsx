import RotationSection from "@components/rotation/RotationSection";

const RotationPage = async () => {
  return (
    <main className="flex min-h-screen justify-center bg-gradient-to-b from-slate-950 to-slate-900 py-8 text-white">
      <div className="container min-w-screen">
        <h1 className="mb-8 text-center text-[36px] font-bold text-yellow-400">
          로테이션 챔피언
        </h1>
        <div>
          <RotationSection />
        </div>
      </div>
    </main>
  );
};
export default RotationPage;
