import { ActionTypes, AppContextActions, AppState } from "./types";

export const AppReducer = (state: AppState, action: AppContextActions) => {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_IMAGE:
      return {
        ...state,
        selectedImage: action.payload,
      };
    case ActionTypes.SET_TEXT_OBJECT:
      return {
        ...state,
        textObject: action.payload,
      };
    default:
      return state;
  }
};
