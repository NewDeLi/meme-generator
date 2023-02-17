import React from "react";
import { useStore } from "../context/appContext";
import { CirclePicker } from "react-color";

export const ColorInputs = () => {
  const { state, actions } = useStore();
  const { fontColor } = state.textObject;
  const colorPalette = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
    "#000",
    "#fff",
  ];

  const handleOnChange = (color: any) => {
    const newColor = color.hex;
    actions?.setTextObject({ ...state.textObject, fontColor: newColor });
  };

  return (
    <fieldset>
      <legend className="text-lg pb-4 pt-8 ">Choose Color</legend>
      <CirclePicker
        className="min-w-full"
        colors={colorPalette}
        color={fontColor}
        onChange={handleOnChange}
      />
    </fieldset>
  );
};
