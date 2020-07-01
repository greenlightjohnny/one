import React, { useState, useRef, useMemo, useLayoutEffect } from "react"
import { Link } from "gatsby"
import Styles from "./navbar.module.scss"

import { useScrollPosition } from "@n8tb1t/use-scroll-position"
const Navbar = ({ props }) => {
  const [navnames, setNavnames] = useState(false)
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const [scrollp, setScrollp] = useState(0)
  const rendersCount = useRef(0)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      setScrollp(currPos.y)
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    false,
    false,
    300
  )

  const showtime = hideOnScroll ? Styles.showme : Styles.hideme
  const bshadow = scrollp === 0 ? "" : Styles.bshadow
  const ismenuopen = navnames && !hideOnScroll ? Styles.showme : Styles.hideme
  console.log(showtime)
  console.log(ismenuopen)
  //${showtime} ${ismenuopen} place in the .outer div tag to hide header on scroll.
  return useMemo(
    () => (
      <div className={`${Styles.outer}  ${showtime} ${ismenuopen} ${bshadow}`}>
        <div className={Styles.container}>
          <h3 className="blue">
            <Link to="/">Trinity Farms</Link>
          </h3>

          <nav
            className={`${Styles.mobile} ${
              navnames ? Styles.showmenu : Styles.hidemenu
            }`}
          >
            <ul>
              <li onClick={() => setNavnames(false)}>
                <Link
                  activeClassName={Styles.active}
                  to="/"
                  activeClassName={Styles.active}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  activeClassName={Styles.active}
                  className={Styles.darrow}
                  to="/basics"
                >
                  Services
                </Link>
                <div className={Styles.drop}></div>
              </li>
              <li>
                <Link
                  activeClassName={Styles.active}
                  className={Styles.darrow}
                  to="/traditional"
                >
                  About
                </Link>
                <div className={Styles.drop}></div>
              </li>
              <li>
                <Link activeClassName={Styles.active} to="/alternative">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className={Styles.navbutton}
            onClick={() => setNavnames(!navnames)}
          >
            <span
              className={`${Styles.navspan} ${
                navnames ? Styles.animate : null
              } `}
            ></span>
          </button>
        </div>
      </div>
    )
    // [hideOnScroll]
  )
}

export default Navbar
