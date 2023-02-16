import React from "react";
import {
  ActionTypes,
  AppContextActions,
  SetSelectedImage,
  SetTextObject,
} from "./types";

export const AppActions = (dispatch: React.Dispatch<AppContextActions>) => ({
  setSelectedImage: (payload: SetSelectedImage["payload"]) => {
    dispatch({
      type: ActionTypes.SET_SELECTED_IMAGE,
      payload,
    });
  },
  setTextObject: (payload: SetTextObject["payload"]) => {
    dispatch({
      type: ActionTypes.SET_TEXT_OBJECT,
      payload,
    });
  },
});
