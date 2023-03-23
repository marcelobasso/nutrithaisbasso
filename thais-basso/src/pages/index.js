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
import Woman from '../images/undraw/undraw_woman.svg';
import ActionBanner from '../components/common/ActionBanner';
import Flowery from '../components/home/Flowery';

export default function Home({ data }) {
    return (
        <Layout>
            <Header title="Thaís Basso" subtitle="Nutricionista funcional e comportamental" />
            <Flowery />
            <AboutMe />
            <Treatment />
            <Features />
            <SpecialFeatures />
            <SocialProof />
            {/* <GoogleEvaluations />  */}
            <ActionBanner text="Relaxe e venha comigo desvendar uma forma mais saudável de se alimentar" image={<Woman />} />
        </Layout>
    );
}

export const Head = () => <Seo />;
