import { useState, useEffect, useContext } from "react";
import Store from "../context/Store";
import { Stores } from "../context";

export default function useGlobalLoader(loading) {
  const store = useContext(Store);

  useEffect(() => {
    const load = store?.[Stores.loading].loading;

    if (load !== loading) {
      store?.set(Stores.loading, { loading });
    }
  }, [loading]);

  return null;
}
