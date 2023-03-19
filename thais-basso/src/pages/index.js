import * as React from 'react';
import Layout from '../components/common/Layout';
import Seo from '../components/common/Seo';
import Header from '../components/common/Header';
import AboutMe from '../components/home/AboutMe';
import GoogleEvaluations from '../components/home/GoogleEvaluations';
import Treatment from '../components/home/Treatment';
import Features from '../components/home/Features';

export default function Home({ data }) {
    return (
        <Layout>
            <Header title="Thaís Basso" subtitle="Nutricionista funcional e comportamental" />
            <AboutMe />
            <Treatment />
            <Features />
            <GoogleEvaluations /> 
            {/* change for social proof component */}
            
        </Layout>
    );
}

export const Head = () => <Seo />;
