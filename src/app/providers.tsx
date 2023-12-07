"use client";

import { Provider } from "react-redux";
import { reduxStore } from "../lib/redux/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={reduxStore}>{children}</Provider>;
}
