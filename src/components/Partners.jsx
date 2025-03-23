import { useState, useEffect } from "react";

const logoPartners = [
    "https://osagilistas.com/wp-content/uploads/2024/07/pcamp-logo-3.png",
    "https://osagilistas.com/wp-content/uploads/2024/03/agile-site-e1714487844739.png",
    "https://osagilistas.com/wp-content/uploads/2024/10/RD-Summit.png.png",
    "https://osagilistas.com/wp-content/uploads/2024/03/agile-summit-site.png",
    "https://osagilistas.com/wp-content/uploads/2024/04/AF_FBB_Tech_Evento_Assinatura_Simplificada_Horizontal_Positivo_RGB.png",
    "https://osagilistas.com/wp-content/uploads/2024/04/IOTSC_Brasil-Black-e1714487833473.png"
];

const Partners = () => {
    const [currentSection, setCurrentSection] = useState(0); 
    const imagesPerPage = 5;
    const totalSections = 3;  

    useEffect(() => {
        const interval = setInterval(() => {
            nextSection(); 
        }, 3000);

        return () => clearInterval(interval);
    }, [currentSection]);

    const nextSection = () => {
        setCurrentSection((prevSection) => (prevSection + 1) % totalSections); 
    };

    const sectionStartIndex = (currentSection * imagesPerPage) % logoPartners.length;

    return (
        <div className="partners-container">
            <h2 id="titles">Parceiros</h2>
            <div className="partner-slider">
                <div className="partner-images">
                    {Array.from({ length: imagesPerPage }).map((_, i) => {
                        const index = (sectionStartIndex + i) % logoPartners.length;
                        return (
                            <img key={index} src={logoPartners[index]} alt={`Partner ${index + 1}`} className="partner-image" />
                        );
                    })}
                </div>
                <div className="manual-navigation-partner">
                    {Array.from({ length: totalSections }).map((_, index) => (
                        <button
                            key={index}
                            className={currentSection === index ? "active-partner" : ""}
                            onClick={() => setCurrentSection(index)} 
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
