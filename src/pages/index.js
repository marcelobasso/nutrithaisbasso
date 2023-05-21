import * as React from "react";
import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import Header from "../components/common/Header";
import AboutMe from "../components/home/AboutMe";
import Treatment from "../components/home/Treatment";
import Features from "../components/home/Features";
import SpecialFeatures from "../components/home/SpecialFeatures";
import SocialProof from "../components/home/SocialProof";
import Woman from "../images/undraw/undraw_woman_white.svg";
import ActionBanner from "../components/common/ActionBanner";
import Flowery from "../components/home/Flowery";
import Portfolio from "../components/home/Portfolio";
import IlustratedMenus from "../components/home/IlustratedMenus";

export default function Home() {
    return (
        <Layout>
            <Header title="Thaís Basso" subtitle={<>Nutricionista funcional e comportamental<br />CRN-2: 16231D</>} className="home">
                <div className="d-flex justify-content-center">
                    <img className="logo-home" src="/icons/logo-with-name.png" alt="Logo Thaís Basso" />
                </div>
            </Header>
            <Flowery />
            <AboutMe />
            <Treatment />
            <IlustratedMenus />
            <Features />
            <Portfolio />
            <SpecialFeatures />
            <SocialProof />
            <ActionBanner text="Venha comigo desvendar uma forma mais saudável de se alimentar" image={<Woman />} />
        </Layout>
    );
}

export const Head = () => <Seo />;
