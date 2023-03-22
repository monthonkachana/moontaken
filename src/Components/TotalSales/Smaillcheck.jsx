import React from "react";
import "./Smaill.scss";
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
function Smaillcheck() {
  return (
    <div className="smaill">
      <div className="bottom">
        <div className="itemTitle">
          <WhereToVoteIcon
            fontSize="small"
            style={{
              backgroundColor: "red",
              borderRadius: "10px",
              color: "#F08080",
              margin:"5px"
            }}
          />
          Total Check-In{" "}
        </div>
      </div>
      <p
        className="amountus"
        style={{ textAlign: "center", fontFamily: "cursive" }}
      >
        5,053,980 / 6,000,000
      </p>
    </div>
  );
}

export default Smaillcheck;
