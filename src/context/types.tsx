export interface AppState {
  selectedImage: { url: string; local: File | null };
  textObject: {
    textTop: string;
    textBottom: string;
    fontSizeTop: string;
    fontSizeBottom: string;
    fontColor: string;
    font: string;
  };
}

export enum ActionTypes {
  SET_SELECTED_IMAGE = "APP/SET_SELECTED_IMAGE",
  SET_TEXT_OBJECT = "APP/SET_TEXT_OBJECT",
}

export interface SetSelectedImage {
  type: ActionTypes.SET_SELECTED_IMAGE;
  payload: { url: string; local: File | null };
}
export interface SetTextObject {
  type: ActionTypes.SET_TEXT_OBJECT;
  payload: {
    textTop: string;
    textBottom: string;
    fontSizeTop: string;
    fontSizeBottom: string;
    fontColor: string;
    font: string;
  };
}

export type AppContextActions = SetSelectedImage | SetTextObject;
