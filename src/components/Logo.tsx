
import { Globe } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Globe className="h-32 w-32 text-black" strokeWidth={2} />
      <h1 className="mt-4 text-2xl font-bold tracking-wider text-black">STATE DEPARTMENT</h1>
    </div>
  );
};
