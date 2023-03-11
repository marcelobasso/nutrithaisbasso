import React from 'react';
import '../../styles/style.css';
import Navbar from '../Navbar';
import 'mdb-ui-kit'; // lib
import '../../fontawesome-free-6.2.1-web/css/all.min.css';
import Footer from '../Footer';

export default function Layout(props) {
    return (
        <>
            <Navbar />
            <div className='page-content'>
                {props.children}
            </div>
            <Footer />
        </>
    );
}
