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
            <Link to="/">
              HER2.<span className={Styles.me}>ME</span>
            </Link>
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
                  Basics
                </Link>
                <div className={Styles.drop}>
                  <Link
                    activeClassName={Styles.active}
                    activeClassName={Styles.active}
                    to="/whatis"
                  >
                    What is HER2?
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    Stages
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    History
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    HER2+ (Positive)
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    HER2- (Negative)
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    link6
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  activeClassName={Styles.active}
                  className={Styles.darrow}
                  to="/traditional"
                >
                  Traditional
                </Link>
                <div className={Styles.drop}>
                  <Link activeClassName={Styles.active} to="/nope">
                    Chemotherapy
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    Immunotherapy
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    Surgery
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    Radiation
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    Herceptin (Trastuzumab)
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    Perjeta (Pertuzumab)
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    Kadcyla
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    Nerlynx (Neratinib)
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    Tykerb (Lapatinib)
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  activeClassName={Styles.active}
                  className={Styles.darrow}
                  to="/alternative"
                >
                  Alternative
                </Link>
                <div className={Styles.drop}>
                  <Link
                    activeClassName={Styles.active}
                    to="/alternative/oliveleaf"
                  >
                    Olive Leaf
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    Fake Treatments
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    link3
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    link4
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    link5
                  </Link>
                  <Link activeClassName={Styles.active} to="/nope">
                    link6
                  </Link>
                </div>
              </li>
              <li>
                <Link activeClassName={Styles.active} to="/blog">
                  Blog{" "}
                </Link>
              </li>
              <li>
                <Link activeClassName={Styles.active} to="/about">
                  About
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
