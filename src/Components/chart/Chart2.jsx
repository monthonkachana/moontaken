import "./Chart.scss";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
function Chart() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">
          <WhereToVoteIcon
            fontSize="small"
            style={{
              backgroundColor: "red",
              borderRadius: "10px",
              color: "#F08080",
              margin: "5px",
            }}
          />
          Admission Check-in / Sold
        </h1>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={67}
            text={"67%"}
            strokeWidth={5}
            styles={buildStyles({
              pathColor: "#9370DB",
            })}
          />
        </div>
        <p className="title">667/1000</p>

        <div className="summary">
          <div className="item"></div>

          <div className="item">
            <div className="itemTitle">General Admission</div>
            <ProgressBar completed="80" bgColor="#FF00FF"></ProgressBar>
            <div className="itemTitle">VIP</div>
            <ProgressBar completed="50" bgColor="#6A5ACD"></ProgressBar>
            <div className="itemTitle">VVIP</div>
            <ProgressBar completed="20" bgColor="#87CEEB"></ProgressBar>
            <div className="itemTitle">VVIP2</div>
            <ProgressBar completed="5" bgColor="#8A2BE2"></ProgressBar>
            <div className="itemTitle">VVIP3</div>
            <ProgressBar
              completed="10"
              width="550px"
              bgColor="#DDA0DD"
            ></ProgressBar>

            <div className="itemResult positive"></div>
          </div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
