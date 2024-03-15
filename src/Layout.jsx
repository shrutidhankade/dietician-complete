import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header'


const Layout = ({ children }) => {
    return (
        <>
            <div className="w-full overflow-hidden">
                <Header />

                {children}

                
                <Footer />
            </div>
        </>
    );
};

export default Layout;
