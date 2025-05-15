
import { Logo } from "@/components/Logo";
import { ScrollingTicker } from "@/components/ScrollingTicker";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Border container - positioned underneath the content */}
      <div className="absolute inset-0 border-[52px] border-black"></div>
      
      {/* Top ticker */}
      <div className="absolute top-0 left-0 right-0 h-8 -mt-[30px]">
        <ScrollingTicker text="STATE DEPARTMENT" />
      </div>
      
      {/* Right ticker */}
      <div className="absolute top-0 bottom-0 right-0 w-8 -mr-[30px] transform rotate-90 origin-top-right mt-[30px]">
        <ScrollingTicker text="STATE DEPARTMENT" />
      </div>
      
      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 h-8 -mb-[30px]">
        <ScrollingTicker text="STATE DEPARTMENT" />
      </div>
      
      {/* Left ticker */}
      <div className="absolute top-0 bottom-0 left-0 w-8 -ml-[30px] transform -rotate-90 origin-top-left mt-[30px]">
        <ScrollingTicker text="STATE DEPARTMENT" />
      </div>
      
      {/* Content container - positioned above the border */}
      <div className="flex min-h-screen items-center justify-center relative z-10 mx-[52px] my-[52px]">
        <div className="border-8 border-black px-16 py-8 bg-white">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Index;
