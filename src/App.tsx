import React, { useState } from "react";
import data from "./data";
import List from "./List";
import { DataType } from "./obj.types";

const App = () => {
  const [people, setPeople] = useState<DataType>(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today!</h3>
        <List people={people} />
        <button type="button" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
};

export default App;
