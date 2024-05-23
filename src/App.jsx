import "./App.css";
import Content from "./components/Content";
import { Link } from "react-scroll";

function App() {
  return (
    <>
      <div className="">
        <Content></Content>
        <div className="text-lg breadcrumbs sticky bottom-0 items-center flex flex-col">
          <ul>
            <li>
              <Link to="nav" smooth={true} duration={500}>
                Hero
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500}>
                Education
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="extras" smooth={true} duration={500}>
                Hobbies
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
