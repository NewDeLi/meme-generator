import React from "react";

export const MainLayout = ({ children }: any) => {
  return (
    <>
      <header className="text-center">Mimes-Generator</header>
      <main className="w-full h-screen bg-zinc-200 grid sm:grid-cols-2 sm:items-center justify-items-center">
        {children}
      </main>
    </>
  );
};
