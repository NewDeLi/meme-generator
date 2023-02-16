import React from "react";

export const TextSizeInputs = () => {
  return (
    <fieldset>
      <legend className="text-lg pb-4 pt-8">Choose Text Size</legend>
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <label className="flex flex-col gap-2 w-full" htmlFor="fontSizeTop">
          Font Size Top
          <input
            type="range"
            id="fontSizeTop"
            name="fontSizeTop"
            min="2"
            max="40"
            step="2"
          />
        </label>
        <label className="flex flex-col gap-2 w-full" htmlFor="fontSizeBottom">
          Font Size Bottom
          <input
            type="range"
            id="fontSizeBottom"
            name="fontSizeBottom"
            min="2"
            max="40"
            step="2"
          />
        </label>
      </div>
    </fieldset>
  );
};
