import React from "react";

export const MainLayout = ({ children }: any) => {
  return (
    <>
      <header className="text-center text-3xl text-[#3B82F6] bg-slate-300">
        <span className="border-b-2 border-[#3B82F6] border-dashed">
          Meme-Generator
        </span>
      </header>
      <main className="w-full h-full grid sm:grid-rows-2 lg:grid-cols-2 sm:items-center sm:justify-items-center text-gray-500 bg-slate-300">
        {children}
      </main>
    </>
  );
};
