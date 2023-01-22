import Image from "../LauraSmith.png";
import { GrMail, GrLinkedin } from "react-icons/gr";
export default function Info() {
  return (
    <div className="info">
      <img src={Image} />
      <div className="info-details">
        <h1>Laura Smith</h1>
        <p>Frontend Developer</p>
        <a href="#">laurasmith.website</a>
      <div className="btn">
        <button className="btn-secondary">
          <GrMail />
          Email
        </button>
        <button className="btn-primary">
          <GrLinkedin />
          LinkedIn
        </button>
      </div>
      </div>
    </div>
  );
}
