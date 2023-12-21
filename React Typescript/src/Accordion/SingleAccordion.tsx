import React from "react";

type showType = {
  id: number;
  show: boolean;
};

interface props {
  item: {
    id: number;
    question: string;
    answer: string;
  };
  currentAccordionOpen: showType;
  setCurrentAccordionOpen: React.Dispatch<React.SetStateAction<showType>>;
}

const SingleAccordion: React.FC<props> = ({
  item,
  currentAccordionOpen,
  setCurrentAccordionOpen,
}) => {
  const accordionHandler = (id: number): void => {
    setCurrentAccordionOpen((prev) => {
      if (prev.id === id) {
        return {
          id,
          show: false,
        };
      } else {
        return {
          id,
          show: true,
        };
      }
    });
  };
  return (
    <div className="single__accordion">
      <h3>{item.question}</h3>
      <button className="btn" onClick={() => accordionHandler(item.id)}>
        {currentAccordionOpen.show && currentAccordionOpen.id === item.id
          ? "-"
          : "+"}
      </button>
      {currentAccordionOpen.show && currentAccordionOpen.id === item.id && (
        <p>{item.answer}</p>
      )}
    </div>
  );
};

export default SingleAccordion;
