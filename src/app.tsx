import React from "react";
import { Counter } from "./counter";
import "./styles.css";

import momma from "./momma.jpg";
import logo from "./donut.svg";

export const App = () => {
  const name = "Darius";
  const fruit = "apple";

  return (
    <>
      <h1>
        React TypeScript Webpack Starter Template {process.env.NODE_ENV}{" "}
        {process.env.name}
      </h1>
      <img src={momma} alt="Sherita Marie Grable" width={400} height={600} />
      <img src={logo} alt="donut" width={300} />

      <Counter />
    </>
  );
};
