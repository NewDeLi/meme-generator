import React, { useRef, useState } from "react";
import { CanvasElement } from "./Canvas";

export const GifSection = () => {
  const [selectedValue, setSelectedValue] = useState<string>("png");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const saveImageLocal = (event: any) => {
    const link = event.target;
    link.setAttribute("download", `canvas.${selectedValue}`);
    const image = canvasRef.current?.toDataURL(`image/${selectedValue}`);
    link.setAttribute("href", image);
  };
  return (
    <section className="h-full w-full flex justify-center">
      <div className="flex flex-col w-full p-4 sm:p-8 ">
        <CanvasElement canvasRef={canvasRef} />
        <span className="grid grid-cols-[15%_85%]">
          <select
            name="file"
            id="file"
            className="text-center"
            onChange={(event) => setSelectedValue(event.currentTarget.value)}
          >
            <option value="png">PNG</option>
            <option value="jpg">JPG</option>
            <option value="gif">GIF</option>
          </select>
          <a
            href="randomTextToFillHref"
            className="text-white bg-[#3B82F6] p-4 w-full text-center"
            onClick={saveImageLocal}
          >
            Download
          </a>
        </span>
      </div>
    </section>
  );
};
