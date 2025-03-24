import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    const [imagesPerPage, setImagesPerPage] = useState(5);

    useEffect(() => {
        const updateImagesPerPage = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setImagesPerPage(2); // Em telas menores que 768px, exibe 2 imagens
            } else if (width <= 1024) {
                setImagesPerPage(4); // Em telas menores que 1024px, exibe 4 imagens
            } else {
                setImagesPerPage(5); // Padrão: 5 imagens
            }
        };

        updateImagesPerPage();
        window.addEventListener("resize", updateImagesPerPage);
        return () => window.removeEventListener("resize", updateImagesPerPage);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000);
        return () => clearInterval(interval);
    }, [currentIndex, imagesPerPage]);

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

                <motion.div
                    className="guest-images"
                    key={currentIndex}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        duration: 0.6,
                    }}
                    style={{ display: "flex", justifyContent: "center", gap: "20px" }}
                >
                    {Array.from({ length: imagesPerPage }).map((_, i) => {
                        const index = (currentIndex + i) % img.length;
                        return (
                            <img key={index} src={img[index]} alt={`Guest ${index + 1}`} className="guest-image" />
                        );
                    })}
                </motion.div>

                <button className="next-btn" onClick={nextSlide}>{">"}</button>
            </div>
        </div>
    );
};

export default Guests;
