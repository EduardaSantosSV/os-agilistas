import { useState, useEffect } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const images = [
    {
        src: "https://osagilistas.com/wp-content/uploads/2025/01/Report-tendencias-de-2025.png",
        link: "https://osagilistas.com/tendencias-tecnologia-2025/?utm_source=AG&utm_medium=bannersite&utm_campaign=report2025&utm_id=tendencias2025"
    },
    {
        src: "https://osagilistas.com/wp-content/uploads/2025/02/banner-site.png",
        link: "https://www.linkedin.com/pulse/32newsagilistas-n%C3%A3o-olhar-para-essas-quest%C3%B5es-vai-custar-caro-5flof/?trackingId=L%2BdY8J3%2FmYRC6Quk4Kf0Tw%3D%3D"
    },
    {
        src: "https://osagilistas.com/wp-content/uploads/2024/03/MicrosoftTeams-image-34.png",
        link: "https://osagilistas.com/transformacao-e-eficiencia-digital-2024/?utm_source=banner-site&utm_medium=eficiencia2024&utm_campaign=eficienciaIA&utm_id=agilistas"
    }
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="slider">
            <GrFormPrevious className="prev-button" onClick={prevSlide} />

            <div className="slides">
                {images.map((image, index) => (
                    <div key={index} className={`slide ${currentIndex === index ? "active" : ""}`}>
                        <a href={image.link} target="_blank" rel="noopener noreferrer">
                            <img src={image.src} alt={`Slide ${index + 1}`} />
                        </a>
                    </div>
                ))}
            </div>

            <GrFormNext className="next-button" onClick={nextSlide} />

            <div className="manual-navigation">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={currentIndex === index ? "active" : ""}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;
