import { useNavigate, useLocation } from "react-router-dom";
import "./NavigationArrows.css";

const pages = ["/", "/create-account", "/login", "/account"];

const NavigationArrows = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = pages.indexOf(location.pathname);

  const goBack = () => {
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
    }
  };

  const goForward = () => {
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1]);
    }
  };

  return (
    <div className="nav-arrows">
      <button onClick={goBack} disabled={currentIndex === 0}>
        ←
      </button>

      <button onClick={goForward} disabled={currentIndex === pages.length - 1}>
        →
      </button>
    </div>
  );
};

export default NavigationArrows;
