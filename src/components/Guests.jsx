import { useState, useEffect } from "react";

const img = [
    "https://osagilistas.com/wp-content/uploads/2024/10/Allos-site-1040-1040-300x300.png",
    "https://osagilistas.com/wp-content/uploads/2021/12/Mercado-pago-300x300.png",
    "https://osagilistas.com/wp-content/uploads/2021/12/Nestle-300x300.png",
    "https://osagilistas.com/wp-content/uploads/2021/12/Nike-300x300.png",
    "https://osagilistas.com/wp-content/uploads/2021/12/OLX-300x300.png",
    "https://osagilistas.com/wp-content/uploads/2021/12/PG-300x300.png",
    "https://osagilistas.com/wp-content/uploads/2021/12/Picpay-300x300.png",
    "https://osagilistas.com/wp-content/uploads/2021/12/Bain-300x300.png",
    "https://osagilistas.com/wp-content/uploads/2021/12/Conquer.png",
    "https://osagilistas.com/wp-content/uploads/2021/12/Itau-300x300.png",
    "https://osagilistas.com/wp-content/uploads/2021/12/Localiza-300x300.png",
    "https://osagilistas.com/wp-content/uploads/2021/12/Locaweb-300x300.png",
    "https://osagilistas.com/wp-content/uploads/2021/12/Magalu-300x300.png"
];

const Guests = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerPage = 5;

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + imagesPerPage) % img.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - imagesPerPage + img.length) % img.length);
    };

    return (
        <div className="guests-container">

            <h2 id="titles">Quem já passou pelo podcast</h2>

            <div className="guest-slider">
                <button className="prev-btn" onClick={prevSlide}>{"<"}</button>

                <div className="guest-images">
                    {Array.from({ length: imagesPerPage }).map((_, i) => {
                        const index = (currentIndex + i) % img.length;
                        return (
                            <img key={index} src={img[index]} alt={`Guest ${index + 1}`} className="guest-image" />
                        );
                    })}
                </div>

                <button className="next-btn" onClick={nextSlide}>{">"}</button>
            </div>
        </div>
    );
};

export default Guests;
