import * as React from 'react';
import Layout from '../components/common/Layout';
import Seo from '../components/common/Seo';
import Header from '../components/home/Header';
import AboutMe from '../components/home/AboutMe';
import AboutTreatment from '../components/home/AboutTreatment'
import GoogleEvaluations from '../components/home/GoogleEvaluations';

export default function Home({ data }) {
    return (
        <Layout>
            <Header />
            <AboutMe />
            <AboutTreatment /> 
            <GoogleEvaluations /> 
        </Layout>
    );
}

export const Head = () => <Seo />;
