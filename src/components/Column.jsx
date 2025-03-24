import { MdDoubleArrow } from "react-icons/md";  // Alterando o ícone

const links = [
    {
        url: "https://osagilistas.com/equipes-multigeracionais/",
        thumbnail: "https://osagilistas.com/wp-content/uploads/2025/02/equipes-multigeracionais-1024x576.png",
        title: "Equipes multigeracionais: o guia definitivo para gestão de times diversos",
        text: "Descubra como liderar equipes multigeracionais com estratégias práticas para integrar a Geração X, Millennials e Z no trabalho. Nosso report de tendências trouxe",
        subject: "LIDERANÇA",
    },
    {
        url: "https://osagilistas.com/ciberseguranca/",
        thumbnail: "https://osagilistas.com/wp-content/uploads/2025/02/ciberseguranca-os-agilistas-1024x576.jpg",
        title: "Cibersegurança: o que é e como as empresas podem melhorar a sua",
        text: "A cibersegurança ainda é uma questão muito mais séria do que parece. Só no Brasil, o aumento dos ciberataques foi de 67% apenas",
        subject: "INTELIGÊNCIA ARTIFICIAL",
    },
    {
        url: "https://osagilistas.com/fintech/",
        thumbnail: "https://osagilistas.com/wp-content/uploads/2024/07/fintech-modelo-de-inovacao-1024x683.jpg",
        title: "Fintech como modelo de estratégia e inovação digital",
        text: "Descubra as lições que o modelos de negócios das fintechs tem a oferecer",
        subject: "INOVAÇÃO",
    }
];

const Column = () => {
    return (
        <div className="column-container">
            <div className="columns">
                <h2 id="titles">Coluna ágil</h2>
                <div className="list-column">
                    {links.map((link, index) => (
                        <div key={index} className="column" onClick={() => window.open(link.url, "_blank", "noopener noreferrer")}>
                            <div className="image-container">
                                <img src={link.thumbnail} alt="Thumbnail" className="thumbnail"/>
                                <div className="overlay">
                                    <p>{link.subject}</p>
                                </div>
                            </div>
                            <div className="about-subject">
                                <h3>{link.title}</h3>
                                <p>{link.text}</p>
                                <span href="url">
                                    Leia mais 
                                    <MdDoubleArrow size={9}/>   
                                </span>
                            </div>
                            <img src="https://osagilistas.com/wp-content/uploads/2022/08/cropped-logo-agilistas-128x128.jpg" className="column-logo" alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Column;
