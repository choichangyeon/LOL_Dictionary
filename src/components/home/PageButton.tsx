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
      className="m-[20px] flex flex-col items-center justify-center"
      href={path}
    >
      {children}
      <div>{title}</div>
    </Link>
  );
};

export default PageButton;
