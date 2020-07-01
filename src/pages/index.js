import React from "react"
import Styles from "./main.module.scss"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Nav from "../components/navbar"
const home = props => {
  return (
    <>
      <header className={Styles.header}>
        <Nav />
        <div className={Styles.backgroundtest}></div>
        <div className={Styles.flex}>
          <div className={Styles.flexitem}>
            <h1>Sunshine Farms</h1>
            <p>
              Locally owned and operated since 1943.<br></br> Proudly serving
              the NRV with fresh produce.
            </p>
          </div>
          <div className={Styles.flexitem}>
            <Img fluid={props.data.front1.childImageSharp.fluid} />
          </div>
        </div>
      </header>
      <main className={Styles.main}>
        <div className={Styles.center}>
          <div className={Styles.flex4}>
            <div>
              <h3>Our Story</h3>
              <p>
                Random random random random random random random randomRandom
                random random random random random random random Random random
                random random random random random random Random random random
                random random random random random
              </p>
            </div>
            <div>
              <h3>Our Story</h3>
              <p>
                Random random random random random random random randomRandom
                random random random random random random random Random random
                random random random random random random Random random random
                random random random random random
              </p>
            </div>
            <div>
              <h3>Our Story</h3>
              <p>
                Random random random random random random random randomRandom
                random random random random random random random Random random
                random random random random random random Random random random
                random random random random random
              </p>
            </div>
          </div>
        </div>
      </main>

      <section className={Styles.two}>
        <div className={Styles.flex}>
          <div>
            <Img fluid={props.data.front1.childImageSharp.fluid} />
          </div>
          <div>
            <h2>Hello</h2>
            <p>
              Random random random random random random random randomRandom
              random random random random random random random Random random
              random random random random random random Random random random
              random random random random random
            </p>
            <div className={Styles.buttonbox}>
              <a className={Styles.b1}>Learn More</a>
              <a className={Styles.b2}>Contact</a>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.two}>
        <div className={Styles.flex}>
          <div>
            <h2>Hello</h2>
            <p>
              Random random random random random random random randomRandom
              random random random random random random random Random random
              random random random random random random Random random random
              random random random random random
            </p>
            <div className={Styles.buttonbox}>
              <a className={Styles.b1}>Learn More</a>
              <a className={Styles.b2}>Contact</a>
            </div>
          </div>
          <div>
            <Img fluid={props.data.front1.childImageSharp.fluid} />
          </div>
        </div>
      </section>
    </>
  )
}
export default home

export const query = graphql`
  query {
    front1: file(relativePath: { eq: "roa.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
