import React, { useRef, useEffect } from "react";
import { useStore } from "../context/appContext";
import { drawImageWithText } from "../utils/drawImageWithText";

export const CanvasElement = () => {
  const { state } = useStore();
  const { textTop, textBottom, fontSizeTop, fontSizeBottom, fontColor, font } =
    state.textObject;
  const { url, local } = state.selectedImage;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    drawImageWithText({
      canvasRef,
      textTop,
      textBottom,
      fontSizeTop,
      fontSizeBottom,
      font,
      fontColor,
      local,
      url,
    });
  });
  return (
    <canvas ref={canvasRef} className="w-full h-full min-h-[500px]"></canvas>
  );
};
