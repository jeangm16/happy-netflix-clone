import React from "react";
import "./Nav.css";

function Nav() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        // handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="nav">
      <img
        className="nav__logo"
        scr="https://upload.wikimedia.org/wikipedia/commons/0/0f/"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        scr="https://pbs.twimg.com/profile_images/124011999041155"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
