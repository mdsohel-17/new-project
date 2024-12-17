import React from "react";

const GenericButton = (props) => {
  const {
    text,
    mainClass,
    primary,
    primaryBgColor,
    rounded,
    childClass,
    animate,
  } = props;
  return (
    <>
      <div
        className={`${mainClass} relative group overflow-hidden ${
          rounded ? "rounded-full" : ""
        } ${
          primary ? "bg-primarycolor" : ""
        } border  cursor-pointer text-center border-primarycolor`}
      >
        <p
          className={`${childClass} ${
            animate || primary ? "group-hover:text-white" : ""
          } z-10 relative font-medium `}
        >
          {text}
        </p>
        {animate ? (
          <div
            className={`absolute w-full h-full ${
              primaryBgColor ? primaryBgColor : "bg-primarycolor"
            } inset-0 ${
              rounded ? `rounded-full` : ""
            } translate-x-[-105%] group-hover:translate-x-0  transition-transform duration-[.4s] ease-in-out`}
          ></div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default GenericButton;
