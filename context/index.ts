export enum Stores {
  user,
}

export interface IStoreContent {
  [Stores.user]: { username: string; id: string };
}

export type IStoreSet = <T, K extends keyof IStore>(key: K, value: T) => void;

export interface IStore extends IStoreContent {
  set<T, K extends keyof IStore>(key: K, value: T): void;
}

export interface IContext {
  context: IStore;
}

export const store: IStoreContent = {
  [Stores.user]: { username: null, id: null },
};
