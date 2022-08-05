import React from 'react'
import Navbar from './NavBar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
                <div style={{margin:'40px'}}>
                    {children}
                </div>
            <Footer/>
        </div>
    )
}

export default Layout
