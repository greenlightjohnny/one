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
        <div className={Styles.flex4}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
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
