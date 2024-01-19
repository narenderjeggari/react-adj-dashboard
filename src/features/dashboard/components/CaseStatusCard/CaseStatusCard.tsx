import { Typography } from "@mui/material";
import React, { useState } from "react";

interface CaseStatusModel {
  status: string;
  className: string;
  numberOfCases: number;
}

const CaseStatusCard = () => {
  const data: CaseStatusModel[] = [
    {
      status: "New",
      className:
        "border-blue-400 border bg-blue-400 hover:-translate-y-1 hover:bg-blue-400 duration-300",
      numberOfCases: 20,
    },
    {
      status: "High Priority",
      className:
        "border-red-400 border bg-red-400 hover:-translate-y-1 hover:bg-red-400 duration-300",
      numberOfCases: 30,
    },
    {
      status: "Overdue",
      className:
        "text-yellow-400 border-yellow-400 border bg-yellow-400 hover:-translate-y-1 hover:yellow-400 hover:bg-yellow-400 duration-300",
      numberOfCases: 10,
    },
    {
      status: "Bankruptcy",
      className:
        "border-green-400 border bg-green-400 hover:-translate-y-1 hover:bg-green-400 duration-300",
      numberOfCases: 50,
    },
  ];

  const [cardData, setCardData] = useState<CaseStatusModel[]>(data);

  const handleCardClick = (index: number) => {
    const mappedData = cardData.map(
      (card: CaseStatusModel, cardIndex: number) => {
        return { ...card, isSelected: cardIndex === index };
      }
    );
    setCardData(mappedData);
  };

  return (
    <div className="flex w-full h-full items-center justify-between gap-6">
      {cardData.map((caseModel: CaseStatusModel, index: number) => (
        <div
          key={caseModel.status}
          className={`flex flex-col w-full flex-1 rounded items-start justify-center cursor-pointer p-5 ${caseModel.className}`}
          onClick={() => handleCardClick(index)}
        >
          <Typography variant="h3" className="text-white">
            {caseModel.numberOfCases}
          </Typography>
          <Typography variant="h6" className="text-white">
            {caseModel.status}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default CaseStatusCard;
