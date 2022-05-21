import { CurrentPageStateType } from "../slices/current-page";

interface State {
  currentPage: CurrentPageStateType;
}

export const getCurrentPageState = (state: State) => state.currentPage;
