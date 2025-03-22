import { useState, useEffect } from "react";

const images = [
    "https://osagilistas.com/wp-content/uploads/2025/01/Report-tendencias-de-2025.png",
    "https://osagilistas.com/wp-content/uploads/2025/02/banner-site.png",
    "https://osagilistas.com/wp-content/uploads/2024/03/MicrosoftTeams-image-34.png"
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        console.log("Mudou para slide:", currentIndex); // 🛠️ Log quando o slide muda

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [currentIndex]); // 🔥 Dependência atualizada para ver mudanças no estado

    return (
        <div className="slider">
            <div className="slides">
                {images.map((image, index) => (
                    <div key={index} className={`slide ${currentIndex === index ? "active" : ""}`}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="manual-navigation">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={currentIndex === index ? "active" : ""}
                        onClick={() => {
                            console.log("Clicou no botão do slide:", index); // 🛠️ Log ao clicar no botão
                            setCurrentIndex(index);
                        }}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;
