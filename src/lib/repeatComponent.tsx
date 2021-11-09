import React from "react";

export const repeatComponent = (Component: React.ComponentType, n: number) => {
  return [...Array(n).map((_, idx) => <Component key={idx} />)];
};
