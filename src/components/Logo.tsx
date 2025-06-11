
import { Globe } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 lg:space-y-4">
      <Globe className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32 xl:h-48 xl:w-48 text-black" strokeWidth={1} />
      <h1 className="text-sm sm:text-lg lg:text-2xl xl:text-4xl tracking-wider text-black font-bauhaus text-center leading-tight">
        STATE DEPARTMENT
      </h1>
    </div>
  );
};
