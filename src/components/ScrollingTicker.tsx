
import React from "react";

interface ScrollingTickerProps {
  text: string;
}

export const ScrollingTicker = ({ text }: ScrollingTickerProps) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-black text-white absolute">
      <div className="animate-[ticker_20s_linear_infinite] inline-block">
        <span className="font-bauhaus text-2xl font-normal">{text}</span>
        <span className="inline-block w-96"></span> {/* Spacer between iterations */}
      </div>
    </div>
  );
};
