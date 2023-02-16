import React from "react";

export const FontInputs = () => {
  return (
    <fieldset>
      <legend className="text-lg pb-4 pt-8">Choose Font</legend>
      <div className="flex flex-col justify-center sm:justify-between sm:flex-row">
        <label htmlFor="arial" className="flex gap-2">
          <input type="radio" id="arial" name="font" value="Arial" />
          Arial
        </label>
        <label htmlFor="comicSans" className="flex gap-2">
          <input type="radio" id="comicSans" name="font" value="Comic Sans" />
          Comic Sans
        </label>
        <label htmlFor="pacifico" className="flex gap-2">
          <input type="radio" id="pacifico" name="font" value="Pacifico" />
          Pacifico
        </label>
      </div>
    </fieldset>
  );
};
