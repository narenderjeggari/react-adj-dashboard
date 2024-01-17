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
      className: "text-blue-400 border-blue-500 border bg-blue-500 hover:-translate-y-1 hover:blue-500 hover:bg-blue-500 duration-300",
      numberOfCases: 20,
    },
    {
      status: "High Priority",
      className: "text-red-600 border-red-600 border bg-red-600 hover:-translate-y-1 hover:red-600 hover:bg-red-600 duration-300",
      numberOfCases: 30,
    },
    {
      status: "Overdue",
      className: "text-yellow-400 border-yellow-400 border bg-yellow-400 hover:-translate-y-1 hover:yellow-400 hover:bg-yellow-400 duration-300",
      numberOfCases: 10,
    },
    {
      status: "Bankruptcy",
      className:
        "text-green-600 border-green-600 border bg-green-600 hover:-translate-y-1 hover:green-600 hover:bg-green-600 duration-300",
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
