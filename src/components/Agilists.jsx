import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

const aboutAgilists = [
    {
        name: "Vitor Peçanha",
        position: "Co-fundador da Rock Content",
        image: "https://osagilistas.com/wp-content/uploads/2022/01/Vitor-pecanha.png",
        comment: "Participar d’Os Agilistas foi um prazer, pois foi uma conversa espontânea e fluída, o que, ao mesmo tempo, tornou o papo bem mais interessante e valioso do que se tivéssemos seguido um script à risca. É um ótimo conteúdo que provoca os ouvintes a parar, refletir e melhorar a maneira como eles trabalham."
    },
    {
        name: "Gustavo Greco",
        position: "Fundador da Greco Design",
        image: "https://osagilistas.com/wp-content/uploads/2021/12/Gustavo-Greco.png",
        comment: "Foi um bate-papo agradável com perguntas inteligentes. O podcast aborda e valoriza os processos individuais e a importância de se colocar as ideias de pé no mundo. Os conteúdos falam de negócios, comportamento, mudanças e, principalmente, pessoas."
    },
    {
        name: "Gustavo Carriconde",
        position: "CEO Gutenberg Venture Builder e fundador do ResumoCast",
        image: "https://osagilistas.com/wp-content/uploads/2021/12/Gustavo-Carriconde.png",
        comment: "Adorei gravar um episódio com os Agilistas, sou ouvinte e sempre consigo aprender algo inovador a cada podcast."
    },
    {
        name: "Renata Horta",
        position: "Fundadora e Diretora de Conhecimento e Inovação da Troposlab",
        image: "https://osagilistas.com/wp-content/uploads/2022/01/Renata-horta.png",
        comment: "Os Agilistas é garantia de trabalhar temas importantes com senso crítico, profundidade e leveza. Adorei a interlocução e a troca que permitem a gente ressignificar nossas experiências."
    },
    {
        name: "João Resende",
        position: "Co-fundador da Toro Investimentos",
        image: "https://osagilistas.com/wp-content/uploads/2021/12/Joao-Resende.png",
        comment: "Vocês são referência em agilidade pra mim, foi ótimo poder dividir e aprender com Szuster no podcast."
    },
    {
        name: "Cristiane Costa Simons",
        position: "Líder de Tribo",
        image: "https://osagilistas.com/wp-content/uploads/2022/01/Cristiane-costa-simons.png",
        comment: "Os agilistas apresenta conteúdo de qualidade sobre tecnologia, agilidade e produtos digitais respeitando o momento dos profissionais e das empresas. Você encontrará caminhos com possíveis respostas para seus desafios."
    }
];

const Agilists = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutAgilists.length);
        }, 100000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? aboutAgilists.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % aboutAgilists.length
        );
    };

    return (
        <div className="agilists-container">
            <div className="agilists-slider">
                <h2 id="titles">O que dizem sobre Os Agilistas</h2>
 
                <div className="current-agilists">
                    <div className="agilist">
                    <GrFormPrevious className="prev-button-agilists" onClick={prevSlide} />
                    <GrFormNext className="next-button-agilists" onClick={nextSlide} />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className="aboutAgilists"
                                initial={{ x: "100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "-100%", opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <img src={aboutAgilists[currentIndex].image} alt={aboutAgilists[currentIndex].name} />
                                <div>
                                    <h3 id="text-name">{aboutAgilists[currentIndex].name}</h3>
                                    <h4 id="position">{aboutAgilists[currentIndex].position}</h4>
                                    <p id="text-comment">{aboutAgilists[currentIndex].comment}</p>
 
                                    <a href="https://www.linkedin.com/in/pedrorangel/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="linkedin-icon" />
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="manual-navigation-agilists">
                    {aboutAgilists.map((_, index) => (
                        <button key={index} className={currentIndex === index ? "active-agilists" : ""} onClick={() => setCurrentIndex(index)}></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Agilists;
