import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FailComponent from "../components/failcomponent"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <FailComponent />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
