import Image from "next/image";
import { Badge } from "@components/ui/badge";

const SplashHeader = ({
  splashImgUrl,
  championImgUrl,
  name,
  title,
  tags,
}: {
  splashImgUrl: string;
  championImgUrl: string;
  name: string;
  title: string;
  tags: string[];
}) => {
  return (
    <div className="relative mb-8 h-[550px] w-full overflow-hidden">
      <Image
        src={splashImgUrl || "/placeholder.svg"}
        alt={name}
        fill
        className="object-cover object-center"
        priority
        style={{ objectPosition: "center 20%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-8">
        <div className="container mx-auto">
          <div className="flex items-end gap-6">
            <div className="hidden h-32 w-32 overflow-hidden border-4 border-yellow-500 bg-slate-800 sm:block">
              <Image
                src={championImgUrl || "/placeholder.svg"}
                alt={name}
                width={130}
                height={130}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-lg md:text-5xl">
                {name}
              </h1>
              <p className="mt-2 text-xl text-gray-200 italic drop-shadow-lg">
                {title}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} className="bg-blue-900/80 text-blue-100">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashHeader;
