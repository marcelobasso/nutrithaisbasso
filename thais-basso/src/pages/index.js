import * as React from 'react';
import Layout from '../components/common/Layout';
import Seo from '../components/common/Seo';
import Header from '../components/common/Header';
import AboutMe from '../components/home/AboutMe';
import GoogleEvaluations from '../components/home/GoogleEvaluations';
import Treatment from '../components/home/Treatment';
import Features from '../components/home/Features';
import SpecialFeatures from '../components/home/SpecialFeatures';
import SocialProof from '../components/home/SocialProof';

export default function Home({ data }) {
    return (
        <Layout>
            <Header title="Thaís Basso" subtitle="Nutricionista funcional e comportamental" />
            <AboutMe />
            <Treatment />
            <Features />
            <SpecialFeatures />
            <SocialProof />
            {/* <GoogleEvaluations />  */}
        </Layout>
    );
}

export const Head = () => <Seo />;
