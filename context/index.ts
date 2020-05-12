export enum Stores {
  user,
  myPosts,
  theory,
  loading
}

export interface IStoreContent {
  [Stores.user]: { username: string; id: string };
  [Stores.myPosts]: { opened: boolean };
  [Stores.theory]: { detailID: string | null };
  [Stores.loading]: { loading: boolean };
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
  [Stores.myPosts]: { opened: true },
  [Stores.theory]: { detailID: null },
  [Stores.loading]: { loading: false },
};
