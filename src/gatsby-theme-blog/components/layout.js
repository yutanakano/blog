import React from "react"
import Header from "components/universal/Header"
import useBlogThemeConfig from "gatsbyThemeBlog/hooks/configOptions"
import Helmet from "react-helmet"
import Footer from "components/universal/Footer"

const Layout = ({ children }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <div className="bg-gray-100">
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header />
      <div>
        <div className='flex flex-col min-h-screen'>
          {children}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
