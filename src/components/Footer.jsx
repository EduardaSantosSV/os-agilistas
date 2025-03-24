const infos = [
    {
        title: "Quem somos",
        texts: ["Sobre os hosts", "Quem já passou pelo podcast", "O que dizem sobre Os Agilistas"],
        id: 'three',
    },
    {
        title: "Nosso Podcast",
        texts: ["Episódios", "Nossas Playlists"],
        id: 'four',
    },
    {
        title: "Insights ágeis",
        texts: ["Coluna ágil"],
        id: 'five',
    }
];

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-columns">
                    <div className="talk">
                        <p id="footer-titles">Fale com a gente</p>
                        <p id="footer-texts">osagilistas@dtidigital.com.br</p>
                    </div>
                    <div className="info-box two"></div>
                    {infos.map((info, index) => (
                        <div key={index} className={`info-box ${info.id}`}>
                            <p id="footer-titles">{info.title}</p>
                            <div id="footer-texts">
                                {info.texts.map((text, idx) => (
                                    <p key={idx} class="footer-text">{text}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="others-infos">
                        <p id="footer-titles">Os Agilistas indicam</p>
                        <p id="footer-titles">Nossa comunidade</p>
                    </div>
                </div>
                <div className="policy-privacy">
                    <div>
                        <p id="footer-texts">os agilistas 2025 @ todos os direitos reservados.</p>
                        <p id="footer-titles">Política de Privacidade.</p>
                    </div>
                    <img src="https://osagilistas.com/wp-content/uploads/2021/01/Powered.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
