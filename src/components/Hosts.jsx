import { useState, useEffect } from "react";
const aboutHosts = [
    <div className="hosts">
        <div className="about-hosts">

            <img src="https://osagilistas.com/wp-content/uploads/2023/08/Pedro.png" alt="Pedro Rangel" />

            <div>
                <h3 id="text-name">Pedro Rangel</h3>
                <div>
                    <p id="text-about">
                        <strong>Entusiasta do agilismo e do mundo digital,</strong> &nbsp;Pedro é natural de Belo Horizonte e formado em&nbsp; Engenharia de Controle e Automação pela UFMG e MBA em Gestão Empresarial pela FGV. Já navegou por diferentes papéis no agilismo, atendendo a grandes clientes da dti desde 2019.
                    </p>
                    <p id="text-about">
                        Adora mergulhar em conversas sobre&nbsp; <strong>produtos, liderança e inovação.</strong> &nbsp;Quem conhece sabe que ele aprecia um bom churrasco e que sua vira-lata caramelo é a dona da casa.
                    </p>
                </div>
            </div>
        </div>
    </div>,

    <div className="hosts">
        <div className="about-hosts">

            <img src="https://osagilistas.com/wp-content/uploads/2021/12/Marce-Szuster-Perfil.png" alt="Outro Anfitrião" />

            <div>
                <h3 id="text-name">Marcelo Szuster</h3>
                <div>
                    <p id="text-about">
                        Sabe aquela velha sentença “eu lembro quando aqui era só mato”? Então, lá em 2002, quando quase ninguém ainda falava sobre agilismo,&nbsp; Marcelo Szuster foi um dos pioneiros em defender o recém-criado “Manifesto Ágil” e apoiar essa nova filosofia.
                    </p>
                    <p id="text-about">
                        Belo-horizontino, casado e pai de três filhos, Szuster é um leitor ávido – mas não acredita na expressão “livro favorito” – e apaixonado por esportes – principalmente, tênis. Formado em engenharia elétrica pela UFMG, o <strong>&nbsp;nosso host é um dos fundadores da dti digital</strong> , empresa de tecnologia integrante da global WPP, e é&nbsp; <strong>fã de uma boa conversa!</strong>
                    </p>
                </div>
            </div>
        </div>
    </div>,

    <div className="hosts">
        <div className="about-hosts">

            <img src="https://osagilistas.com/wp-content/uploads/2023/05/Vinicao-site.png" alt="Anfitrião 3" />

            <div>
                <h3 id="text-name">Vinícius Paiva</h3>
                <div>
                    <p id="text-about">
                        <strong>Engenheiro de formação e agilista de coração</strong> , Vinicius Paiva – ou Vinição, para os mais íntimos – também é nascido e criado na capital mineira, casado e pai de duas filhas. Além disso, ele não perde um futebol com os amigos e “Breaking Bad” está no topo da sua lista de séries favoritas.
                    </p>
                    <p id="text-about">
                        Se você acompanha o podcast, já sabe que livros sobre <strong>&nbsp;comportamento, complexidade, pessoas e liderança</strong> &nbsp;não saem da estante do Vinição. E, assim como Szuster, &nbsp;a sua relação com o agilismo já tem anos de história e foi um dos motivadores para fundar a dti digital, em 2009, e dar início ao projeto “Os Agilistas”.
                    </p>
                </div>
            </div>
        </div>
    </div>,

    <div className="hosts">
        <div className="about-hosts">

            <img src="https://osagilistas.com/wp-content/uploads/2023/08/Prancheta-1.png" alt="Anfitrião 4" />

            <div>
                <h3 id="text-name">Diulia Almada</h3>
                <div>
                    <p id="text-about">
                        A Diulia é mineira de nascença e de coração, mas em qualquer oportunidade que tem quer descobrir e aprender sobre lugares novos.&nbsp; Designer gráfico de formação pela UEMG e pós-graduada em Design de Interação pela PUC Minas, &nbsp;apaixonada por psicologia e design de serviços, se encanta pela complexidade que nos exige um olhar cada vez mais sistêmico.
                    </p>
                    <p id="text-about">
                        Casada e mãe do Thomás, tem aprendido a ver o mundo por diversos olhares, através de boas conversas e do olhar atento para a vida acontecendo dentro e fora das telas.
                    </p>
                </div>
            </div>
        </div>
    </div>
];

const Hosts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutHosts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="host-container">
            <div className="host-slider">
                <h2 id="titles">Sobre os hosts</h2>
                <div className="current-host">
                    {aboutHosts[currentIndex]}
                </div>

                <div className="manual-navigation-host">
                    {aboutHosts.map((_, index) => (
                        <button
                            key={index}
                            className={currentIndex === index ? "active-host" : ""}
                            onClick={() => setCurrentIndex(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hosts;
