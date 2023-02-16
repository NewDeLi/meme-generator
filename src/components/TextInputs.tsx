import React from "react";

export const TextInputs = () => {
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
          />
        </label>
      </div>
    </fieldset>
  );
};
