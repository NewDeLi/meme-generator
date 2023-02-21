import React from "react";
import { useStore } from "../context/appContext";
import { FaTextHeight } from "react-icons/fa";

export const TextSizeInputs = () => {
  const { state, actions } = useStore();
  return (
    <fieldset>
      <legend className="text-lg pb-4 pt-8 flex items-center gap-2">
        <FaTextHeight />
        Choose Text Size
      </legend>
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <label className="flex flex-col gap-2 w-full" htmlFor="fontSizeTop">
          Font Size Top: {state.textObject.fontSizeTop}
          <input
            type="range"
            id="fontSizeTop"
            name="fontSizeTop"
            min="2"
            max="40"
            step="2"
            defaultValue="16"
            onChange={(event) =>
              actions?.setTextObject({
                ...state.textObject,
                fontSizeTop: event.target.value,
              })
            }
          />
        </label>
        <label className="flex flex-col gap-2 w-full" htmlFor="fontSizeBottom">
          Font Size Bottom: {state.textObject.fontSizeBottom}
          <input
            type="range"
            id="fontSizeBottom"
            name="fontSizeBottom"
            min="2"
            max="40"
            step="2"
            defaultValue="16"
            onChange={(event) =>
              actions?.setTextObject({
                ...state.textObject,
                fontSizeBottom: event.target.value,
              })
            }
          />
        </label>
      </div>
    </fieldset>
  );
};
