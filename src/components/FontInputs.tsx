import React from "react";
import { useStore } from "../context/appContext";
import { FaSignature } from "react-icons/fa";

export const FontInputs = () => {
  const { state, actions } = useStore();

  return (
    <fieldset>
      <legend className="text-lg pb-4 pt-8 flex items-center gap-2">
        <FaSignature />
        Choose Font
      </legend>
      <div className="flex flex-col justify-center sm:justify-between sm:flex-row">
        <label htmlFor="arial" className="flex gap-2">
          <input
            type="radio"
            id="arial"
            name="font"
            value="Arial"
            defaultChecked
            onChange={(event) => {
              actions?.setTextObject({
                ...state.textObject,
                font: event.target.value,
              });
            }}
          />
          Arial
        </label>
        <label htmlFor="comicSans" className="flex gap-2">
          <input
            type="radio"
            id="comicSans"
            name="font"
            value="Comic Sans MS"
            onChange={(event) => {
              actions?.setTextObject({
                ...state.textObject,
                font: event.target.value,
              });
            }}
          />
          Comic Sans
        </label>
        <label htmlFor="pacifico" className="flex gap-2">
          <input
            type="radio"
            id="pacifico"
            name="font"
            value="Pacifico"
            onChange={(event) => {
              actions?.setTextObject({
                ...state.textObject,
                font: event.target.value,
              });
            }}
          />
          Pacifico
        </label>
      </div>
    </fieldset>
  );
};
