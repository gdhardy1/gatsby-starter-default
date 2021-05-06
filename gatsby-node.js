/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "	https://gatsbystarterdefault65297.gatsbyjs.io/*",
    toPath: "https://gregorydhardy.com/*",
    isPermanent: true,
  })
  // Create pages here
}
