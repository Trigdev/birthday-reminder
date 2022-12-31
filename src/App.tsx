import React, { useState, FC, ReactElement } from "react";
import data from "./data";
import List from "./List";
import { DataType } from "./obj.types";

const App: FC = (): ReactElement => {
  const [people, setPeople] = useState<DataType>(data);

  return (
    <main>
      <section className="container glassmorphism">
        <h3>{people.length} birthdays today!</h3>
        <List people={people} />
        <button
          className="bn632-hover bn26"
          type="button"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
};

export default App;
