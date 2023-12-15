import { Itodo } from '../app.component';

export interface iAppState {
  conter: number;
  todos:Itodo[];
}

export const appInitalState: iAppState = {
  conter: 10,
  todos: [],
};

