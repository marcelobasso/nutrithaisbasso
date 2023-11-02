import * as React from "react";
import Layout from "../../components/common/Layout";
import Seo from "../../components/common/Seo";
import Header from "../../components/common/Header";
import AboutMe from "../../components/home/AboutMe";
import Treatment from "../../components/home/Treatment";
import Woman from "../../images/undraw/undraw_woman_white.svg";
import ActionBanner from "../../components/common/ActionBanner";
import Flowery from "../../components/home/Flowery";
import { Link, graphql } from "gatsby";
import SpecialFeatures from "../../components/home/SpecialFeatures";
import './seja-real-nao-perfeito.css';
import Advice from "../../components/atendimentos/Advice";
import { CallToAction, Container, Row, SectionTitle } from "../../components/common/interface/UI";

export default function sejaRealNaoPerfeito(props) {
    const image = props.data.ProfileImageCampaign.childImageSharp.gatsbyImageData;
    const treatmentSection = [
        {
            title: "PARA QUEM É O GRUPO?",
            content: (
                <>
                    <p className="header-text">
                    O grupo é para todas aquelas pessoas que querem perder peso, melhorar a qualidade de vida, criar novos hábitos saudáveis, ter mais saúde, ter mais disposição, motivação, e energia. Para as pessoas que querem iniciar o seu processo de mudança e não sabem por onde começar, que querem parar de consumir conteúdos rasos e fake news na internet. Que tem responsabilidade com a sua saúde e querem mudar de vida. Para todas as pessoas que querem parar de se comparar e começar a focar na mudança que precisam fazer em suas próprias vidas!!
                    </p>
                </>
            ),
            images: null
        },
        {
            title: "O QUE VOU GANHAR COM O GRUPO?",
            content: (
                <>
                    <p className="header-text">
                    Você conseguirá criar 10 novos hábitos importantes para a melhora da sua saúde, funcionamento do seu corpo, disposição, energia e melhora do seu sono! Serão 3 desafios por 3 semanas, totalizando 9 novos hábitos saudáveis, e o décimo desafio no final do grupo! Você estará muito mais perto de consolidar novos comportamentos saudáveis em sua vida, envolvendo alimentação, sono, exercício físico, manejo do stress, controle de vícios e relacionamentos saudáveis. Estarei acompanhando cada participante pelo grupo fechado no WhatsApp e praticando ativamente com todos vocês! Serão  3 semanas intensas e importantes para todos nós.
                    </p>
                </>
            ),
            images: null
        }
    ];
    const specialFeatures = [
        {
            icon: "fa-solid fa-bars-progress",
            title: "Desafios semanais",
            description: "Serão lançados 3 desafios por semana a partir do dia 13/11, no domingo à noite, totalizando 9 novos hábitos cultivados ao final do grupo."
        },
        {
            icon: "fa-brands fa-pagelines",
            title: "Acompanhamento de resultados",
            description: <>Os desafios serão lançados e os participantes serão acompanhados e participarão no grupo por: 
                <ul style={{marginTop: '8px'}}>
                    <li>Fotos cumprindo os desafios</li>
                    <li>Dúvidas compartilhadas com o grupo</li>
                    <li>Envio de ideias e receitas</li>
                    <li>Compartilhamento de dificuldades</li>
                    <li>Tira-dúvidas com a nutri mentora diariamente</li>
                </ul>
            </>
        },
        {
            icon: "fa-solid fa-comments",
            title: "Encontros ao vivo",
            description: "Faremos 1 encontro ao vivo no início e no final das 3 semanas, possibilitando um contato mais real e próximo com a nutri e com os desafios."
        }

    ];

    return (
        <Layout page="seja-real-nao-perfeito">
            <Header title="Thaís Basso" className="home" page="seja-real-nao-perfeito">
                <div className="d-flex justify-content-center">
                    <Link to="/">
                        <img className="logo-home" src="/icons/logo-with-name.png" alt="Logo Thaís Basso" />
                    </Link>
                </div>
            </Header>
            
            <Flowery />
            
            <AboutMe 
                title="SEJA REAL, NÃO PERFEITO"  
                subtitle={<>O GRUPO DE DESAFIOS MAIS ESPERADO DO ANO!<br/>De 13/11 a 04/12</>}
                content={<>Sou a Thaís Basso, nutricionista pós-graduada em nutrição funcional e comportamento alimentar. Sou apaixonada pela minha profissão e por como ela pode mudar a vida das pessoas. <br/><br/>Sei da importância da mudança de hábitos e de comportamentos para manutenção dos resultados a longo prazo. Também sei que saúde é um conjunto de pilares de estilo de vida, e que precisamos estar cuidando de cada um deles diariamente! Esse grupo vai te ajudar a <u>criar 10 novos hábitos</u> em um período de 21 dias, de 13/11 a 04/12, e dar início a uma grande mudança na sua vida!</>} 
                image={image}
                callToAction="Inscreva-se agora"
                href="https://mpago.la/18mL4Lp"
            />
            
            <Treatment 
                sections={treatmentSection} 
                query={props.data}  
            />
            
            <SpecialFeatures specialFeatures={specialFeatures} />

            <Advice title="IMPORTANTE" advice="O grupo tem o objetivo de abranger mais pessoas que desejam cuidar da sua saúde e ter mais qualidade de vida. No grupo compartilharemos dúvidas, fotos, desafios, dificuldades. Não haverá envio de planos individualizados, isso acontece somente nas consultas de forma personalizada. Vocês irão receber acesso aos cardápios ilustrados, e ideias de cardápios e organização das refeições! Um ponto de partida para melhorar sua vida por completo!" />

            <section className="investimento my-4">
                <Container>
                    <div className="m-3">
                        <Row>
                            <div className="col-lg-6 col-md-12">
                                <div className="my-5">
                                    <SectionTitle className="text-center">VOCÊ IRÁ APRENDER NO GRUPO:</SectionTitle>
                                </div>
                                <div className="my-3 mx-3">
                                    <ul className="formas-pagamento">
                                        <li>Por onde começar sua vida saudável</li>
                                        <li>Montar refeições completas</li>
                                        <li>Criar novos hábitos sustentáveis</li>
                                        <li>Como fazer planilha de metas</li>
                                        <li>Como gerenciar o stress</li>
                                        <li>Como organizar as refeições</li>
                                        <li>Como lidar com as recaídas</li>
                                        <li>Como lidar com a fome social e a fome emocional</li>
                                        <li><b>Vencer barreiras e crenças sobre emagrecimento e saúde</b></li>
                                        <li>Como fortalecer sua autoestima</li>
                                        <li>Ter manutenção dos hábitos a longo prazo!</li>
                                        <li>Como fazer trocas nutricionais inteligentes</li>
                                    </ul>
                                    <p style={{marginTop: '8px'}}>
                                        Também está incluso no grupo: check-in semanal para monitoramento e posts diários dos desafios.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="my-5">
                                    <SectionTitle className="text-center">QUAL O INVESTIMENTO?</SectionTitle>
                                </div>
                                <div className="my-3">
                                    <div className="bigger shadow-custom">
                                        <h3>Valor do grupo: <span className="price">R$ 119,90</span></h3>
                                        <p><b><i>Pacientes têm <u>50% de desconto!</u></i></b></p>
                                        <p style={{marginTop: "16px"}}>*caso for paciente, entre em contato para receber informações do cupom de desconto!</p>
                                        <div className="text-center mt-3">
                                            <CallToAction 
                                                text="Seja real, não perfeito"
                                                href="https://mpago.la/18mL4Lp"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                    <h4 className="effect-phrase">"CHEGA DE SE COMPARAR, COMECE AGORA MESMO A FOCAR EM VOCÊ!"</h4>
                </Container>
            </section>

            <ActionBanner 
                callToAction="Venha fazer parte do nosso grupo" 
                href="https://mpago.la/18mL4Lp"
                content={<>Não existe hora certa para começar, a melhor hora é quando você decide mudar. <br/>Comece a investir no seu eu do futuro agora mesmo!</>} 
                text="SERÁ UM PRAZER COMPARTILHAR E APRENDER CONTIGO!" 
                image={<Woman />} 
            />
        </Layout>
    );
}

export const Head = () => <Seo title="Seja Rea, Não Perfeito | Thaís Basso" />;

export const query = graphql`
    query Campaing {
        ProfileImageCampaign: file(relativePath: { eq: "fotos-thais/bebendo-cafe-square.png" }) {
            childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
            }
        }

        plates: allFile(filter: { relativePath: { regex: "/campaign-first-section/" } }) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
                    }
                }
            }
        }

        foods: allFile(filter: { relativePath: { regex: "/campaign-second-section/" } }) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
                    }
                }
            }
        }
    }
`;