import "./Chart.scss";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BorderTopIcon from '@mui/icons-material/BorderTop';
function Chart() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title"  style={{textAlign: "center", fontFamily: "fantasy"}}>
          <BorderTopIcon fontSize="small" />
          Ticket Sold / Total Available
        </h1>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={67} text={"67%"} strokeWidth={5} />
        </div>
        <p className="title">667/1000</p>

        <div className="summary">
          <div className="item"></div>

          <div className="item">
            <div className="itemTitle">General Admission</div>
            <ProgressBar completed="80" bgColor="blue"></ProgressBar>
            <div className="itemTitle" >VIP</div>
            <ProgressBar completed="50" bgColor="#00BFFF"></ProgressBar>
            <div className="itemTitle">VVIP</div>
            <ProgressBar completed="20" bgColor="#87CEEB"></ProgressBar>
            <div className="itemTitle">VVIP2</div>
            <ProgressBar completed="5" bgColor="#ADD8E6"></ProgressBar>
            <div className="itemTitle">VVIP3</div>
            <ProgressBar completed="10" width="550px" bgColor="#7B68EE"></ProgressBar>

            <div className="itemResult positive"></div>
          </div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
