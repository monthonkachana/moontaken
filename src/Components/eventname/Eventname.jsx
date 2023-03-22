import "./Eventname.scss";
import "react-circular-progressbar/dist/styles.css";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EventNoteIcon from "@mui/icons-material/EventNote";
import socut from "../assets/socut.jpg";
import { color } from "@mui/system";
const Eventname = () => {
  return (
    <div className="featured">
      <div className="bottom">
        <img src={socut} className="featuredChart" />
        <p className="amountus" >Event Name</p>
        <p className="desc">
          <EventNoteIcon fontSize="small" />
          Web 12 JAN 2022 - Fri 14 JAN 2022
        </p>
        <a className="desc">
          <FmdGoodIcon fontSize="small" />
          impact Exhibition Hall 5 Muang Thong Thani
        </a>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Selling Start</div>
            <div className="itemResult negative">
              <div className="resultAmountus">1 MAY 2022</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Selling End</div>
            <div className="itemResult positive">
              <div className="resultAmountus">15 APR 2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventname;
