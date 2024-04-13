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
            title: "PARA QUEM É A COMUNIDADE?",
            content: (
                <>
                    <p className="header-text">
                    Para aquelas pessoas que querem melhorar a qualidade de vida, criar novos hábitos saudáveis, ter mais saúde, ter mais disposição, motivação, e energia, alcançar e manter um peso saudável. Para as pessoas que querem iniciar o seu processo de mudança e não sabem por onde começar, que querem parar de consumir conteúdos rasos e fake news na internet. Que tem responsabilidade com a sua saúde e querem mudar de vida. Para todas as pessoas que querem parar de se comparar e começar a focar na mudança que precisam fazer em suas próprias vidas!</p>
                </>
            ),
            images: null
        },
        {
            title: "O QUE VOU APRENDER COM A COMUNIDADE?",
            content: (
                <>
                    <p className="header-text">
                        Você terá acesso a módulos de aulas gravadas esclarecendo o que é saúde, como você pode começar a ter uma vida mais saudável, inovações na área da nutrição e saúde, desmistificando mitos e dietas radicais.
                    </p>
                    <p className="header-text">
                        Com o acesso ao conhecimento, e aumento da consciência sobre a importância da prevenção na sua vida, você conseguirá, finalmente, criar novos hábitos importantes para a melhora da sua saúde, funcionamento do seu corpo, disposição, energia e melhora do seu sono!
                    </p>
                    <p className="header-text">
                        Teremos aulas ao vivo de forma mensal para trocas entre os participantes e a mentora.
                    </p>
                    <p className="header-text">
                        Você estará muito mais perto de consolidar novos comportamentos saudáveis em sua vida, envolvendo alimentação, sono, exercício físico, manejo do stress, controle de vícios e relacionamentos saudáveis. Acompanharei cada participante pelo grupo fechado no WhatsApp e praticando ativamente com todos vocês! Tirando todas as dúvidas e trazendo conteúdos novos semanalmente.
                    </p>
                </>
            ),
            images: null
        }
    ];

    const specialFeatures = [
        {
            icon: "fa-solid fa-user-clock",
            title: "No seu tempo e do seu jeito",
            description: "Conteúdos semanais: aulas gravadas com temas como alimentação saudável, tipos de fome, comportamento alimentar, sono, exercícios físicos, intestino, psicologia nutricional, relação saudável com a comida, relacionamentos e nutrição, manejo do stress, controle de vícios, novidades na área da saúde."
        },
        {
            icon: "fa-solid fa-users",
            title: "Com acompanhamento",
            description: "Ao final de cada módulo teremos alguns desafios e temas de casa, para que você consiga colocar em ação tudo que está aprendendo... Iremos compartilhar via grupo do WhatsApp todas as ações, dúvidas e inspirações para vocês."
        },
        {
            icon: "fa-solid fa-headset",
            title: "Encontros mensais ao vivo",
            description: "Todo mês teremos encontro ao vivo para vocês tirarem todas as dúvidas e compartilharem com toda a comunidade."
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
                subtitle={<>UMA COMUNIDADE SOBRE SAÚDE, NUTRIÇÃO E ESTILO DE VIDA, BASEADA EM EVIDÊNCIAS</>}
                content={<>Sou a Thaís Basso, nutricionista pós-graduada em nutrição funcional e comportamento alimentar. Sou apaixonada pela minha profissão e acho incrível como ela pode mudar a vida das pessoas.<br/><br/>Sei da importância da mudança de hábitos e de comportamentos para manutenção dos resultados a longo prazo. Também sei que saúde é um conjunto de pilares de estilo de vida, e que precisamos estar cuidando de cada um deles diariamente! Essa comunidade ajuda a criar hábitos, baseados em educação de qualidade, e aumento da consciência sobre saúde e estilo de vida. Fazendo você finalmente alcançar seus objetivos e mantê-los a longo prazo, sem ficar refém de dietas da moda.</>} 
                image={image}
                callToAction="Inscreva-se agora"
                href="https://pay.kiwify.com.br/SL9Mijn"
            />
            
            <Treatment 
                sections={treatmentSection} 
                query={props.data}  
            />
            
            <SpecialFeatures specialFeatures={specialFeatures} />

            <Advice title="IMPORTANTE" advice={<>
                <p>
                    A comunidade tem o objetivo de abranger mais pessoas que desejam cuidar da sua saúde e ter mais qualidade de vida. No grupo  do WhatsApp compartilharemos dúvidas, fotos, desafios, dificuldades. Não haverá envio de planos individualizados, pois para isso é necessário fazer uma avaliação individualizada. Vocês irão receber acesso aos cardápios ilustrados, e ideias de cardápios e organização das refeições! Um ponto de partida para melhorar sua vida por completo! 
                </p>
                <p>
                    Vocês irão receber acesso aos cardápios ilustrados, e ideias de cardápios e organização das refeições! Um ponto de partida para melhorar sua vida por completo!
                </p>
                <p>
                    Você irá aprender como organizar sua própria alimentação, sem depender de uma dieta restritiva. Terá autonomia e liberdade para escolher o que faz sentido comer em cada situação. Isso não é incrível?
                </p>
                </>}/>

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
                                        <li>O que é saúde?</li>
                                        <li>Como criar hábitos sustentáveis?</li>
                                        <li>Como fazer planilha de metas</li>
                                        <li>Como gerenciar o stress</li>
                                        <li>Como organizar as refeições</li>
                                        <li>Como lidar com as recaídas</li>
                                        <li>Como lidar com a fome social e a fome emocional</li>
                                        <li><b>Vencer barreiras e crenças sobre emagrecimento e saúde</b></li>
                                        <li>Como fortalecer sua autoestima</li>
                                        <li>Ter manutenção dos hábitos a longo prazo!</li>
                                        <li>Como fazer trocas nutricionais inteligentes</li>
                                        <li>Pilares da medicina do estilo de vida</li>
                                        <li>Evidências sobre saúde e longevidade</li>
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
                                        <h3>Plano Semestral <span className="price">R$ 269,90</span></h3>
                                        <p style={{marginTop: "16px"}}>*caso for paciente, entre em contato para receber informações do cupom de desconto!</p>
                                        <div className="text-center mt-3">
                                            <CallToAction 
                                                text="Inscrever-me"
                                                href="https://pay.kiwify.com.br/SL9Mijn"
                                            />
                                        </div>
                                    </div>
                                    <div className="bigger inline">
                                        <h3>Plano Mensal <span className="price">R$ 49,90</span></h3>
                                        <CallToAction 
                                            text="Inscrever-me"
                                            href="https://pay.kiwify.com.br/u4HUyBl"
                                        />
                                    </div>
                                    <div className="bigger inline">
                                        <h3>Plano Anual <span className="price">R$ 480,00</span></h3>
                                        <CallToAction 
                                            text="Inscrever-me"
                                            href="https://pay.kiwify.com.br/Cut7cv8"
                                        />
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
                href="https://pay.kiwify.com.br/SL9Mijn"
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