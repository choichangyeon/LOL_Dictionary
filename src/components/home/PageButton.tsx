import Link from "next/link";

const PageButton = ({
  title,
  path,
  children,
}: Readonly<{
  title: string;
  path: string;
  children: React.ReactNode;
}>) => {
  return (
    <Link
      className="group m-[20px] flex flex-col items-center justify-center transition-transform hover:scale-105"
      href={path}
    >
      <div className="relative mb-4">
        {children}
        <div className="absolute inset-0 rounded-lg bg-yellow-400/0 transition-all duration-300 group-hover:bg-yellow-400/10"></div>
      </div>
      <div className="text-center">
        <span className="relative px-6 py-3 text-xl font-bold text-slate-200 transition-colors duration-300 group-hover:text-yellow-400">
          {title}
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </div>
    </Link>
  );
};

export default PageButton;
