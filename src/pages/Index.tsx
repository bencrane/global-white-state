
import { Logo } from "@/components/Logo";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white border-2 sm:border-4 lg:border-[52px] border-black relative p-2 sm:p-4">
      <div className="border-2 sm:border-4 lg:border-8 border-black px-2 py-4 sm:px-8 sm:py-6 lg:px-16 lg:py-8 w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-auto">
        <Logo />
      </div>
    </div>
  );
};

export default Index;