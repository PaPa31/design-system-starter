import React from "react"
import PropTypes from "prop-types"


import Nav from "./Nav"

import styles from "./layout.module.scss";

const Layout = ({ children }) => {

  return (
      <div className={styles.root}>
        <Nav />
        <div className={styles.container}>
          <div className={styles.mainContainer}>
            <main>{children}</main>
          </div>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
