import React from 'react';
// import 'mdb-ui-kit'; // lib
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../../fontawesome-free-6.2.1-web/css/all.min.css';
import '../../styles/style.css';

export default function Layout(props) {
    return (
        <>
            <Navbar />
            <div className="filler" style={{display: 'block', height: '100px'}}></div>
            <div className='page-content'>
                {props.children}
            </div>
            <Footer />
        </>
    );
}
