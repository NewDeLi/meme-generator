import React, { useEffect } from "react";
import { useStore } from "../context/appContext";
import { drawImageWithText } from "../utils/drawImageWithText";

export const CanvasElement = ({ canvasRef }: any) => {
  const { state } = useStore();
  const { textTop, textBottom, fontSizeTop, fontSizeBottom, fontColor, font } =
    state.textObject;
  const { url, local } = state.selectedImage;

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
    <canvas
      ref={canvasRef}
      width="664"
      height="980"
      className="w-full h-full max-w-[498px] max-h-[635px] border-2 border-dotted border-[#666666]"
    ></canvas>
  );
};
