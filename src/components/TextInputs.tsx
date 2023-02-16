import React from "react";
import { useStore } from "../context/appContext";

export const TextInputs = () => {
  const { state, actions } = useStore();
  return (
    <fieldset>
      <legend className="text-lg pb-4 pt-8">Add Text</legend>
      <div className="flex flex-col sm:justify-between gap-4 sm:flex-row">
        <label className="flex flex-col w-full" htmlFor="textTop">
          Text Top
          <input
            type="text"
            id="textTop"
            name="textTop"
            placeholder="Add text top"
            className="p-2"
            onChange={(event) =>
              actions?.setTextObject({
                ...state.textObject,
                textTop: event.target.value,
              })
            }
          />
        </label>
        <label className="flex flex-col w-full" htmlFor="textBottom">
          Text Bottom
          <input
            type="text"
            id="textBottom"
            name="textBottom"
            placeholder="Add text bottom"
            className="p-2"
            onChange={(event) =>
              actions?.setTextObject({
                ...state.textObject,
                textBottom: event.target.value,
              })
            }
          />
        </label>
      </div>
    </fieldset>
  );
};
