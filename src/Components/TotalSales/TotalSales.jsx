import React from "react";
import "./TotalSales.scss";
import "react-circular-progressbar/dist/styles.css";
import SwitchAccessShortcutAddIcon from "@mui/icons-material/SwitchAccessShortcutAdd";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
function TotalSales() {
  return (
    <div className="featured">
      <div className="bottom">
        <div className="itemTitle">
          <AutoAwesomeIcon
            fontSize="small"
            className="itemicon"
            style={{
              backgroundColor: "#e3bb1c",
              borderRadius: "10px",
              margin: "10px",
              color: "#f0dd8e",
            }}
          />
          Total Sales (THB)
        </div>
        <p
          className="amount"
          style={{ textAlign: "center", fontFamily: "cursive" }}
        >
          1,000,000,000
        </p>
        <p
          className="desc"
          style={{
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

        <div className="summary">
          <div className="item">
            <div className="itemTitle"> Platform fee (VAT Incl.)</div>
            <div className="itemResult negative">
              <div className="resultAmount">Platment fee (VAT Incl.)</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">500,000</div>
            <div className="itemResult positive">
              <div className="resultAmount">300,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalSales;
