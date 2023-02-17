import canvasTxt from "canvas-txt";

interface DrawImageProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  textTop: string;
  textBottom: string;
  fontSizeTop: string;
  fontSizeBottom: string;
  font: string;
  fontColor: string;
  local: File | null;
  url: string;
}

export const drawImageWithText = ({
  canvasRef,
  textTop,
  textBottom,
  fontSizeTop,
  fontSizeBottom,
  font,
  fontColor,
  local,
  url,
}: DrawImageProps) => {
  if (canvasRef.current) {
    const context = canvasRef.current.getContext("2d");
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;

    //create a new img element to draw it in canvas
    const img = new Image();
    img.src = local ? window.URL.createObjectURL(local) : url;
    img.width = canvasRef.current.width;

    if (context) {
      img.onload = () => {
        //draw image
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(img, 0, 0, width, height);

        //draw text top
        canvasTxt.font = font;
        canvasTxt.fontWeight = "bold";
        canvasTxt.fontSize = parseInt(fontSizeTop);
        canvasTxt.vAlign = "top";

        canvasTxt.drawText(context, textTop, 0, 0, width, height);

        //draw text bottom
        canvasTxt.fontSize = parseInt(fontSizeBottom);
        canvasTxt.vAlign = "bottom";
        canvasTxt.drawText(context, textBottom, 0, 0, width, height);
      };
    }
  }
};
