import React from "react";
import { ColorInputs } from "./ColorInputs";
import { FontInputs } from "./FontInputs";
import { ImageInputs } from "./ImageInputs";
import { TextInputs } from "./TextInputs";
import { TextSizeInputs } from "./TextSizeInputs";

export const FormSection = () => {
  return (
    <section className="h-full w-full flex justify-center ">
      <form className="flex flex-col justify-around w-full p-8 sm:p-32">
        <ImageInputs />
        <TextInputs />
        <TextSizeInputs />
        <ColorInputs />
        <FontInputs />
      </form>
    </section>
  );
};
