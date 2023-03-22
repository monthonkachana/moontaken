import React from "react";
import "./Smaill.scss";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SwitchAccessShortcutAddIcon from "@mui/icons-material/SwitchAccessShortcutAdd";
function Smaillticket() {
  return (
    <div className="smaill">
      <div className="bottom">
        <div className="itemTitle">
          <ConfirmationNumberIcon
            fontSize="small"
            style={{
              backgroundColor: "#e3bb1c",
              borderRadius: "10px",
              color: "#f0dd8e",
            }}
          />
          Total Ticket Sold{" "}
        </div>
      </div>
      <p
        className="amount"
        style={{ textAlign: "center", fontFamily: "cursive" }}
      >
        3,459,780
      </p>
      <p
        className="desc"
        style={{
          textAlign: "center",
          backgroundColor: "lightgreen",
          borderRadius: "10px",
          margin: "1px",
          color: "green",
        }}
      >
        <SwitchAccessShortcutAddIcon
          fontSize="small"
          style={{ color: "green" }}
        />
        + 11% from last week
      </p>
    </div>
  );
}

export default Smaillticket;
