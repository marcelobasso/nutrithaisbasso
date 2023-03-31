import * as React from "react";
import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import Header from "../components/common/Header";
import AboutMe from "../components/home/AboutMe";
import GoogleEvaluations from "../components/home/GoogleEvaluations";
import Treatment from "../components/home/Treatment";
import Features from "../components/home/Features";
import SpecialFeatures from "../components/home/SpecialFeatures";
import SocialProof from "../components/home/SocialProof";
import Woman from "../images/undraw/undraw_woman_white.svg";
import ActionBanner from "../components/common/ActionBanner";
import Flowery from "../components/home/Flowery";
import Portfolio from "../components/home/Portfolio";

export default function Home({ data }) {
    return (
        <Layout>
            <Header title="Thaís Basso" subtitle="Nutricionista funcional e comportamental" className="home">
                <div className="d-flex justify-content-center">
                    <img className="logo-home" src="/icons/logo-with-name.png" />
                </div>
            </Header>
            <Flowery />
            <AboutMe />
            <Treatment />
            <Portfolio />
            <Features />
            <SpecialFeatures />
            <SocialProof />
            {/* <GoogleEvaluations />  */}
            <ActionBanner text="Relaxe e venha comigo desvendar uma forma mais saudável de se alimentar" image={<Woman />} />
        </Layout>
    );
}

export const Head = () => <Seo />;
