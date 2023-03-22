import React from "react";
import "./Smaill.scss";
import BorderTopIcon from '@mui/icons-material/BorderTop';
function Smaillorders() {
  return (
    <div className="smaill">
      <div className="bottom">
        <div className="itemTitle">
          <BorderTopIcon
            fontSize="small"
            style={{
              backgroundColor: "#9370DB",
              borderRadius: "10px",
              color: "#9400D3",
              margin:"5px"
            }}
          />
          Total Orders{" "}
        </div>
      </div>
      <p
        className="amount"
        style={{ textAlign: "center", fontFamily: "cursive" }}
      >
        1,459,780
      </p>
    </div>
  );
}

export default Smaillorders;
