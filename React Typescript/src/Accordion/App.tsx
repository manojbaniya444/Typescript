import React, { useState } from "react";
import "./accordion.css";
import { data } from "./data";
import SingleAccordion from "./SingleAccordion";

type dataType = {
  id: number;
  question: string;
  answer: string;
};

type showType = {
  id: number;
  show: boolean;
};

const App: React.FC = () => {
  const [currentAccordionOpen, setCurrentAccordionOpen] = useState<showType>({
    id: 0,
    show: false,
  });

  return (
    <>
      <h2 className="title">Accordion</h2>
      <div className="container">
        {data?.map((item: dataType) => {
          return (
            <SingleAccordion
              key={item.id}
              item={item}
              currentAccordionOpen={currentAccordionOpen}
              setCurrentAccordionOpen={setCurrentAccordionOpen}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
