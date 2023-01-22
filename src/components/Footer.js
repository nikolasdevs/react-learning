import { GrTwitter, GrFacebook, GrInstagram, GrGithub } from "react-icons/gr";

export default function Footer() {
  return (
    <div className="icons">
      <ul>
        <li>
          <a href="#">
            <GrTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <GrFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <GrInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <GrGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}
