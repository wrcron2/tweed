import { Avatar } from "@radix-ui/themes";
import { Link } from "react-router";
import ProfileModal from "./profileModal";
import { useSelector } from "react-redux";
import { profileSelector } from "../redux/slices/userProfileSlice";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const userData = useSelector(profileSelector);

  return (
    <header className="header flex h-12  ">
      <nav className="container flex gap-14 items-center">
        <section className="logo" style={{ width: "110px", height: "24px" }}>
          <svg
            style={{ width: "100%", height: "100%" }}
            viewBox="0 0 110 24"
            preserveAspectRatio="none"
          >
            <use href="#svg2016097279_1868" width="110" height="24"></use>
            <svg width="110" height="24" fill="none" id="svg2016097279_1868">
              <path
                d="M30.414 15.866v-5.64h-2.05v-3.42h2.104l.218-3.557h3.853v3.557h5.465v3.418h-5.465v5.502c0 1.418.464 2.056 1.53 2.056 1.067 0 1.312-.777 1.312-1.083h2.95v1.89c-.573 1.472-1.994 2.667-4.589 2.667-3.387 0-5.328-2.029-5.328-5.39v-.001Zm21.146-3.112-2.35 8.086h-3.715L41.369 8.753V6.808h3.716l2.541 8.364 2.487-8.364H53.5l2.569 8.336 2.459-8.336h3.497V8.67L57.79 20.84h-3.715l-2.514-8.086Zm11.775 1.111c0-4.112 2.623-7.474 7.268-7.474s6.693 2.862 6.693 6.613c0 .972-.191 1.778-.191 1.778h-9.617c.246 1.89 1.34 3.113 3.36 3.113 2.46 0 2.952-1.279 2.952-1.279h3.224v1.862s-1.34 2.778-6.257 2.778-7.431-3.223-7.431-7.392l-.001.001Zm10-1.612c0-1.333-.902-2.528-2.76-2.528-1.858 0-2.677 1.056-3.005 2.528h5.765Zm5.928 1.612c0-4.112 2.622-7.474 7.267-7.474 4.646 0 6.694 2.862 6.694 6.613 0 .972-.191 1.778-.191 1.778h-9.617c.246 1.89 1.339 3.113 3.36 3.113 2.46 0 2.952-1.279 2.952-1.279h3.223v1.862s-1.339 2.778-6.256 2.778-7.431-3.223-7.431-7.392l-.001.001Zm10-1.612c0-1.333-.902-2.528-2.76-2.528-1.858 0-2.677 1.056-3.006 2.528h5.765Zm5.956 1.585c0-4.196 2.431-7.447 6.229-7.447 1.995 0 3.47.861 4.454 2.306V0H110v20.84h-3.825l-.246-2c-.902 1.472-2.542 2.417-4.563 2.417-3.88 0-6.147-3.334-6.147-7.42Zm10.683-.028c0-2.056-1.312-3.64-3.279-3.64-2.13 0-3.278 1.612-3.278 3.668s1.148 3.64 3.278 3.64c1.967 0 3.279-1.584 3.279-3.668ZM2.146 11.399v6.6c0 2.11 1.68 3.819 3.754 3.819h1.303v-7.45l-5.057-2.97Z"
                fill="#000"
              ></path>
              <path
                d="M2.146 7.899v1.198l7.429 4.362v8.359H10.6v-8.96l-8.455-4.96Z"
                fill="#000"
              ></path>
              <path
                d="M2.778 4.425a3.81 3.81 0 0 0-.45.947l10.645 6.243.004.002v2.712l-.004-.002v7.49h4.188c1.758 0 3.233-1.228 3.641-2.887l-6.8-3.998V12.22l6.913 4.064v-1.21L2.778 4.425Zm18.137 2.121c0-2.108-1.681-3.818-3.754-3.818H5.899c-.312 0-.613.04-.902.112l15.918 9.347v-5.64Z"
                fill="#000"
              ></path>
            </svg>
          </svg>
        </section>
        <section className="links">
          <ul className="flex space-x-4">
            <li>
              <Link to="/quiz-creator">Create</Link>
            </li>
            <li>
              <Link to="/quiz-viewer">View</Link>
            </li>
            {/* <li>
              <Link to="/quiz-details/:id">Details</Link>
            </li> */}
          </ul>
        </section>
        <section className="user-preference absolute right-0 flex gap-2 align-center">
          <h3>name: {userData.name}</h3>
          <ProfileModal />
        </section>
      </nav>
    </header>
  );
};

export default Header;
