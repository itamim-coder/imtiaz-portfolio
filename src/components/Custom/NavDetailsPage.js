import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Next.js Link

const NavBarDetailsPage = () => {
  const [navbarStyle, setNavbarStyle] = useState({});
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (scrollPercentage >= 2) {
        setScroll(true);
        setNavbarStyle({
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        });
      } else {
        setNavbarStyle({});
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        style={navbarStyle}
        className={`navbar ${open ? "nav-open" : ""} ${
          scroll ? "scrolled" : ""
        }`}
      >
        <div className="tophead">
          <h1>
            <Link href="/" className="name-logo">
              imtiaz.
            </Link>{" "}
            <span className="blink" />
          </h1>
          <div
            className={`menu-btn ${open ? "opened-btn" : ""}`}
            onClick={toggleMenu}
          />
        </div>
        <ul className={`menu ${open ? "open" : ""}`}>
          <li>
            <Link href="/" onClick={toggleMenu}>
              home
            </Link>
          </li>
          <li>
            <Link href="/#about" onClick={toggleMenu}>
              about
            </Link>
          </li>
          <li>
            <Link href="/#projects" onClick={toggleMenu}>
              projects
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={toggleMenu}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`scroll-to-top ${scroll ? "scroll-true" : ""}`}>
        <Link href="/" scroll={false}>
          <i className="fa-solid fa-arrow-up" />
        </Link>
      </div>
    </>
  );
};

export default NavBarDetailsPage;
