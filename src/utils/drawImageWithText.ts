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

    const textWidth = canvasRef.current.width - 20;
    const textHeight = canvasRef.current.height - 10;

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
        context.fillStyle = fontColor;
        canvasTxt.font = font;
        canvasTxt.fontVariant = "small-caps";
        canvasTxt.fontWeight = "bold";
        canvasTxt.justify = true;
        canvasTxt.align = "center";
        canvasTxt.fontSize = parseInt(fontSizeTop);
        canvasTxt.vAlign = "top";
        canvasTxt.drawText(context, textTop, 10, 0, textWidth, textHeight);

        //draw text bottom
        canvasTxt.fontSize = parseInt(fontSizeBottom);
        canvasTxt.vAlign = "bottom";
        canvasTxt.drawText(context, textBottom, 10, 0, textWidth, textHeight);
      };
    }
  }
};
