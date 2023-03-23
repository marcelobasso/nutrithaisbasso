import React from 'react';
import Navbar from '../Navbar';
// import 'mdb-ui-kit'; // lib
import '../../fontawesome-free-6.2.1-web/css/all.min.css';
import Footer from '../Footer';
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
