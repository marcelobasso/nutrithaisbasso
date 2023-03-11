import * as React from 'react';
import Layout from '../components/common/Layout';
import Seo from '../components/common/Seo';
import Header from '../components/common/Header';
import AboutMe from '../components/home/AboutMe';
import AboutTreatment from '../components/home/AboutTreatment'
import GoogleEvaluations from '../components/home/GoogleEvaluations';

export default function Home({ data }) {
    return (
        <Layout>
            <Header title="Thaís Basso" subtitle="Nutricionista funcional e comportamental" />
            <AboutMe />
            <AboutTreatment /> 
            <GoogleEvaluations /> 
        </Layout>
    );
}

export const Head = () => <Seo />;
