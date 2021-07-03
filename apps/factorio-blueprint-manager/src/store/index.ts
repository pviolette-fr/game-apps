import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface State {
  fakeProp: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    fakeProp: "test",
  },
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
