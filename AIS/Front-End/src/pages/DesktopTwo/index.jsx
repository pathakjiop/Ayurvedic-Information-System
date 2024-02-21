import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Img, Text } from "components";

const DesktopTwoPage = () => {
  const navigate = useNavigate();

  // Function to handle button click
  const handleHerbFactClick = () => {
    // Use navigate function to redirect
    navigate('/herbpage');
  };

  const handleConsultantClick = () => {
    // Use navigate function to redirect
    navigate('/consultant');
  };
  
  return (
    <>
      <div className="bg-lime-100 flex flex-col font-inter items-center justify-start mx-auto p-[132px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[22px] justify-start max-w-[1156px] mb-[101px] mt-6 mx-auto w-full">
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[7px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <Text
                className="leading-[80.00px] md:mt-0 mt-9 md:text-5xl text-[75px] text-black-900"
                size="txtInterBold75"
              >
                AYURVEDIC INFORMATION SYSTEM
              </Text>
              <Img
                className="h-[312px] md:h-auto mb-1 object-cover w-[312px]"
                src="images/img_rectangle.png"
                alt="rectangle"
              />
            </div>
            <Text
              className="leading-[35.00px] text-[19px] text-black-900 w-[33%] sm:w-full"
              size="txtInterMedium19"
            >
              Ayurvedic Information System helps you Connect with ancient
              remedies
            </Text>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start w-1/5 md:w-full">
            <Button onClick = {handleHerbFactClick} className="cursor-pointer font-medium min-w-[229px] sm:text-[23px] md:text-[25px] text-[27px] text-center">
              Herbs Facts
            </Button>
            <Button onClick = {handleConsultantClick} className="cursor-pointer font-medium min-w-[229px] sm:text-[23px] md:text-[25px] text-[27px] text-center">
              Ayurvedic Dr.
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
