import React from "react";

export const ImageInputs = () => {
  return (
    <fieldset>
      <legend className="text-lg pb-4 ">Upload Image</legend>
      <div className="flex flex-col sm:justify-between gap-4 sm:flex-row">
        <label className="flex flex-col gap-2 w-full" htmlFor="urlImage">
          From URL
          <input
            type="text"
            id="urlImage"
            name="urlImage"
            placeholder="Insert an image url"
            className="p-2"
          />
        </label>
        <label className="flex flex-col gap-2 w-full" htmlFor="userImage">
          From Local
          <input type="file" id="userImage" name="userImage" />
        </label>
      </div>
    </fieldset>
  );
};
