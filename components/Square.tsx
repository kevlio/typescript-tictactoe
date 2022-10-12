import React from "react";

const Square = ({ onClick, value }: { onClick: () => void; value: string }) => {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "15px 0",
        fontSize: "2em",
        alignContent: "center",
        maxWidth: "100%",
        aspectRatio: "1/1",
        textAlign: "center",
        border: "1px solid white",
      }}
    >
      {value}
    </div>
  );
};

export default Square;
