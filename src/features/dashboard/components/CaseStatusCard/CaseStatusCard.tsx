import { Typography } from "@mui/material";
import React, { useState } from "react";

interface CaseStatusModel {
  status: string;
  isSelected: boolean;
  className: string;
  bgColor: string;
}

const CaseStatusCard = () => {
  const data: CaseStatusModel[] = [
    {
      status: "New",
      isSelected: true,
      className: "text-blue-400 border-blue-500 border",
      bgColor: "bg-blue-500",
    },
    {
      status: "High",
      isSelected: false,
      className: "text-red-600 border-red-600 border",
      bgColor: "bg-red-600",
    },
    {
      status: "In Progress",
      isSelected: false,
      className: "text-yellow-400 border-yellow-400 border",
      bgColor: "bg-yellow-400",
    },
    {
      status: "Completed",
      isSelected: false,
      className: "text-green-600 border-green-600 border",
      bgColor: "bg-green-600",
    },
  ];

  const [cardData, setCardData] = useState<CaseStatusModel[]>(data);

  const handleCardClick = (index: number) => {
    const mappedData = cardData.map(
      (card: CaseStatusModel, cardIndex: number) => {
        return { ...card, isSelected: cardIndex === index };
      }
    );
    setCardData(mappedData)
  };

  return (
    <div className="flex w-full h-full items-center justify-between gap-11">
      {cardData.map((caseModel: CaseStatusModel, index: number) => (
        <div
          key={caseModel.status}
          className={`flex w-full h-1/2 flex-1 rounded-3xl items-center justify-center cursor-pointer ${
            caseModel.className
          } ${caseModel.isSelected ? caseModel.bgColor : ""}`}
          onClick={() => handleCardClick(index)}
        >
          <Typography
            variant="h6"
            className={caseModel.isSelected ? "text-white" : ""}
          >
            {caseModel.status}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default CaseStatusCard;
