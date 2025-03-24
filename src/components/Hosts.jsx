import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aboutHosts = [
  {
    name: "Pedro Rangel",
    image: "https://osagilistas.com/wp-content/uploads/2023/08/Pedro.png",
    description: [
      "Entusiasta do agilismo e do mundo digital, Pedro é natural de Belo Horizonte e formado em Engenharia de Controle e Automação pela UFMG e MBA em Gestão Empresarial pela FGV. Já navegou por diferentes papéis no agilismo, atendendo a grandes clientes da dti desde 2019.",
      "Adora mergulhar em conversas sobre produtos, liderança e inovação. Quem conhece sabe que ele aprecia um bom churrasco e que sua vira-lata caramelo é a dona da casa."
    ]
  },
  {
    name: "Marcelo Szuster",
    image: "https://osagilistas.com/wp-content/uploads/2021/12/Marce-Szuster-Perfil.png",
    description: [
      "Sabe aquela velha sentença 'eu lembro quando aqui era só mato'? Então, lá em 2002, quando quase ninguém ainda falava sobre agilismo, Marcelo Szuster foi um dos pioneiros em defender o recém-criado 'Manifesto Ágil' e apoiar essa nova filosofia.",
      "Belo-horizontino, casado e pai de três filhos, Szuster é um leitor ávido – mas não acredita na expressão 'livro favorito' – e apaixonado por esportes – principalmente, tênis."
    ]
  },
  {
    name: "Vinícius Paiva",
    image: "https://osagilistas.com/wp-content/uploads/2023/05/Vinicao-site.png",
    description: [
      "Engenheiro de formação e agilista de coração, Vinicius Paiva – ou Vinição, para os mais íntimos – também é nascido e criado na capital mineira, casado e pai de duas filhas. Além disso, ele não perde um futebol com os amigos e 'Breaking Bad' está no topo da sua lista de séries favoritas.",
      "Se você acompanha o podcast, já sabe que livros sobre comportamento, complexidade, pessoas e liderança não saem da estante do Vinição."
    ]
  },
  {
    name: "Diulia Almada",
    image: "https://osagilistas.com/wp-content/uploads/2023/08/Prancheta-1.png",
    description: [
      "A Diulia é mineira de nascença e de coração, mas em qualquer oportunidade que tem quer descobrir e aprender sobre lugares novos. Designer gráfico de formação pela UEMG e pós-graduada em Design de Interação pela PUC Minas, apaixonada por psicologia e design de serviços.",
      "Casada e mãe do Thomás, tem aprendido a ver o mundo por diversos olhares, através de boas conversas e do olhar atento para a vida acontecendo dentro e fora das telas."
    ]
  }
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
          <div className="hosts">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="about-hosts"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img src={aboutHosts[currentIndex].image} alt={aboutHosts[currentIndex].name} />
                <div>
                  <h3 id="text-name">{aboutHosts[currentIndex].name}</h3>
                  {aboutHosts[currentIndex].description.map((text, index) => (
                    <p key={index} id="text-about">{text}</p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
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
