import React from "react";
import { CanvasElement } from "./Canvas";

export const GifSection = () => {
  return (
    <section className="h-full w-full flex justify-center">
      <div className="flex flex-col w-full p-4 sm:p-8 ">
        <CanvasElement />
        <button className="bg-[#3B82F6] text-white p-4">
          Download
        </button>
      </div>
    </section>
  );
};
