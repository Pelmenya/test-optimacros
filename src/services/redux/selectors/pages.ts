import { PagesStateType } from '../slices/pages';
interface State {
  pages: PagesStateType;
}

export const getPagesState = (state: State) => state.pages;
