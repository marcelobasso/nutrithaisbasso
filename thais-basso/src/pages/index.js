import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/common/Layout';
import Seo from '../components/common/Seo';
import Header from '../components/home/Header';

export default function Home({ data }) {
    return (
        <Layout>
            <Header />
            <Wave rotate="0deg" d="M0,144L34.3,144C68.6,144,137,144,206,152C274.3,160,343,176,411,156C480,136,549,80,617,68C685.7,56,754,88,823,84C891.4,80,960,40,1029,32C1097.1,24,1166,48,1234,68C1302.9,88,1371,104,1440,104C1508.6,104,1577,88,1646,84C1714.3,80,1783,88,1851,84C1920,80,1989,64,2057,72C2125.7,80,2194,112,2263,120C2331.4,128,2400,112,2469,112C2537.1,112,2606,128,2674,148C2742.9,168,2811,192,2880,196C2948.6,200,3017,184,3086,148C3154.3,112,3223,56,3291,48C3360,40,3429,80,3497,116C3565.7,152,3634,184,3703,168C3771.4,152,3840,88,3909,68C3977.1,48,4046,72,4114,76C4182.9,80,4251,64,4320,60C4388.6,56,4457,64,4526,92C4594.3,120,4663,168,4731,168C4800,168,4869,120,4903,96L4937.1,72L4937.1,240L4902.9,240C4868.6,240,4800,240,4731,240C4662.9,240,4594,240,4526,240C4457.1,240,4389,240,4320,240C4251.4,240,4183,240,4114,240C4045.7,240,3977,240,3909,240C3840,240,3771,240,3703,240C3634.3,240,3566,240,3497,240C3428.6,240,3360,240,3291,240C3222.9,240,3154,240,3086,240C3017.1,240,2949,240,2880,240C2811.4,240,2743,240,2674,240C2605.7,240,2537,240,2469,240C2400,240,2331,240,2263,240C2194.3,240,2126,240,2057,240C1988.6,240,1920,240,1851,240C1782.9,240,1714,240,1646,240C1577.1,240,1509,240,1440,240C1371.4,240,1303,240,1234,240C1165.7,240,1097,240,1029,240C960,240,891,240,823,240C754.3,240,686,240,617,240C548.6,240,480,240,411,240C342.9,240,274,240,206,240C137.1,240,69,240,34,240L0,240Z" />
            <section id="aboutMe">
                <div class="container-xl d-flex justify-content-between align-items-center">
                    <div class="row">
                        <div id="aboutMeText" class="col-lg-7 col-md-12">
                            <h2 class="mb-4 text fs-1gg">
                                Venha comigo <u>revolucionar a nutrição</u>
                            </h2>
                            <p class="text fs-5 mb-4">
                                Sou a Thaís Basso, nutricionista pós-graduada em nutrição funcional e comportamento alimentar, uma das áreas mais atuais da Nutrição. Sou apaixonada pela minha profissão e por como ela pode mudar a vida das
                                pessoas. Vem conhecer melhor meu trabalho e ver como a nutrição pode mudar a sua?
                            </p>
                            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5554996224005" alt="Whatsapp link" target="_blank" aria-label="Mandar mensagem no Whatsapp">
                                <button type="button" class="btn btn-rounded fs-6">
                                    Agende sua consulta!
                                </button>
                            </a>
                        </div>
                        <div class="col-lg-5 col-md-12 p-4">{/* <img id="profile" src="./src/images/fotos-thais/foto-profile.webp" class="rounded-circle" alt="Profile image"> */}</div>
                    </div>
                </div>
            </section>
            <Wave rotate="180deg" d="M0,144L34.3,156C68.6,168,137,192,206,176C274.3,160,343,104,411,92C480,80,549,112,617,108C685.7,104,754,64,823,68C891.4,72,960,120,1029,116C1097.1,112,1166,56,1234,40C1302.9,24,1371,48,1440,80C1508.6,112,1577,152,1646,164C1714.3,176,1783,160,1851,140C1920,120,1989,96,2057,76C2125.7,56,2194,40,2263,64C2331.4,88,2400,152,2469,184C2537.1,216,2606,216,2674,212C2742.9,208,2811,200,2880,164C2948.6,128,3017,64,3086,32C3154.3,0,3223,0,3291,32C3360,64,3429,128,3497,160C3565.7,192,3634,192,3703,184C3771.4,176,3840,160,3909,144C3977.1,128,4046,112,4114,100C4182.9,88,4251,80,4320,68C4388.6,56,4457,40,4526,44C4594.3,48,4663,72,4731,100C4800,128,4869,160,4903,176L4937.1,192L4937.1,240L4902.9,240C4868.6,240,4800,240,4731,240C4662.9,240,4594,240,4526,240C4457.1,240,4389,240,4320,240C4251.4,240,4183,240,4114,240C4045.7,240,3977,240,3909,240C3840,240,3771,240,3703,240C3634.3,240,3566,240,3497,240C3428.6,240,3360,240,3291,240C3222.9,240,3154,240,3086,240C3017.1,240,2949,240,2880,240C2811.4,240,2743,240,2674,240C2605.7,240,2537,240,2469,240C2400,240,2331,240,2263,240C2194.3,240,2126,240,2057,240C1988.6,240,1920,240,1851,240C1782.9,240,1714,240,1646,240C1577.1,240,1509,240,1440,240C1371.4,240,1303,240,1234,240C1165.7,240,1097,240,1029,240C960,240,891,240,823,240C754.3,240,686,240,617,240C548.6,240,480,240,411,240C342.9,240,274,240,206,240C137.1,240,69,240,34,240L0,240Z" />
        </Layout>
    );
}

export function Head({ data }) {
    const { description, title } = data.site.siteMetadata;
    return (
        <Seo>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Seo>
    );
}

export function Wave(props) {
    return (
        <svg id="wave" style={{ transform: `rotate(${props.rotate})`, transition: '0.3s' }} viewBox="0 0 1440 240" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                    <stop stop-color="rgba(222, 208, 231, 1)" offset="0%"></stop>
                    <stop stop-color="rgba(222, 208, 231, 1)" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path
                style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                fill="url(#sw-gradient-0)"
                d={props.d}
            ></path>
        </svg>
    );
}

export const query = graphql`
    query Projects {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;
