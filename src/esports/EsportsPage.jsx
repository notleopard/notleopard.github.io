import React, { useState, useEffect } from "react";
import Leo3 from "../assets/Leo3.jpg";
import Leo4 from "../assets/Leo4.jpg";
import Leo5 from "../assets/Leo5.jpg";
import Leo6 from "../assets/Leo6.jpg";
import Team1 from "../assets/TeamPic1.jpg";
import Team2 from "../assets/TeamPic2.jpg";
import Team3 from "../assets/TeamPic3.jpg";
import POTY from "../assets/Leopard_RL_POTY.png";
import MVP from "../assets/MVP_OTM.png";
import T3 from "../assets/T3.jpg";
import AcademyRed from "../assets/Fanshawe Fuel Academy Red.png";
import Fuel from "../assets/fuel.png";
import "./EsportsPage.css";
import { motion } from "framer-motion";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const EsportsPage = () => {
  const LANpictures = [
    {
      src: Leo3,
      alt: "Leopard focused on his game",
    },
    {
      src: Team1,
      alt: "Leopard fist bumping his teammates: Nxzy on the left, Leopard in the middle, Wiseyslides on the right",
    },
    {
      src: Leo6,
      alt: "Leopard looking at his interpreter who is not shown in the picture.",
    },
    {
      src: Team2,
      alt: "Leopard and his teammates posing for a picture. From left to right: Nxzy, Wiseyslides, Leopard",
    },
    {
      src: Leo5,
      alt: 'Leopard from the back showing his name "Leopard". Mostly covered by his hair.',
    },
    {
      src: Leo4,
      alt: "Leopard focused on his game",
    },
    {
      src: Team3,
      alt: "Leopard and his teammates focused on the game. From left to right: Nxzy, Leopard, Wiseyslides.",
    },
  ];

  const awardPictures = [
    {
      src: POTY,
      alt: "A player of the year graphic announcing Leopard as the winner",
    },
    {
      src: MVP,
      alt: "A player of the month of February graphic announcing Leopard as the winner",
    },
  ];

  const teamPictures = [
    {
      src: T3,
      alt: "Fanshawe Falcons T3. From left to right: Nxzy, Leopard, Wiseyslides.",
      description: "Fanshawe Falcons T3 - Spring 2022",
    },
    {
      src: Fuel,
      alt: "Fanshawe Fuel. From left to right: VanryTwo, Leopard, Spayce.",
      description: "Fanshawe Fuel - Spring 2023",
    },
    {
      src: AcademyRed,
      alt: "Fanshawe Fuel Academy Red. From left to right: Leopard, Wiseyslides, Malik, Jacob.",
      description: "Fanshawe Fuel Academy Red - Fall 2022",
    },
  ];

  const [slideDimensions, setSlideDimensions] = useState({
    width: 100,
    height: 35,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [swiping, setSwiping] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setSlideDimensions({ width: 100, height: 47 });
        setSwiping(true);
      } else if (width < 610) {
        setSlideDimensions({ width: 100, height: 43 });
        setSwiping(true);
      } else if (width < 768) {
        setSlideDimensions({ width: 100, height: 42 });
        setSwiping(true);
      } else if (width < 900) {
        setSlideDimensions({ width: 100, height: 45 });
        setSwiping(false);
      } else if (width < 1000) {
        setSlideDimensions({ width: 100, height: 32 });
        setSwiping(false);
      } else {
        setSlideDimensions({ width: 100, height: 30 });
        setSwiping(false);
      }
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const close = {
    position: "absolute",
    top: 15,
    right: 35,
    color: "#f1f1f1",
    fontSize: 40,
    fontWeight: "bold",
    cursor: "pointer",
  };

  const [showFullTextFuel, setShowFullTextFuel] = useState(false);
  const [showFullTextAwards, setShowFullTextAwards] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 3 } }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="esports-wrapper"
    >
      <h1 className="title-fuel">Fanshawe Fuel</h1>
      <p className="subtitle-fuel">
        {showFullTextFuel
          ? `After gaming for several years in Lebanon without participating in
          esports events due to the lack of popularity in the region, I discovered
          my true potential when I learned that Fanshawe College supports esports
          teams for various games such as Rocket League, Valorant, Call of Duty,
          among others. This revelation was life changing for me, and I decided to
          join the Rocket League team as I had more experience playing this game
          than the rest. Since then, I have competed in five seasons and I also
          was the assistant manager for all the Rocket League teams starting Fall
          2022.`
          : ` After gaming for several years in Lebanon without participating in
          esports events due to the lack of popularity in the region, I discovered
          my true potential when I learned that Fanshawe College supports esports
          teams for various games such as Rocket League, Valorant, Call of Duty,
          among others. This revelation was life changing`}
        <span
          className="more-text"
          onClick={() => setShowFullTextFuel(!showFullTextFuel)}
        >
          {showFullTextFuel ? "" : "... Click for more"}
        </span>
      </p>
      <h1 className="team-title">Teams</h1>
      <div className="team-list">
        <ul>
          <li>Fall 2021: Player for Fanshawe Falcons T2</li>
          <li>Spring 2022: Captain for Fanshawe Falcons T3</li>
          <li>Fall 2022: Captain for Fanshawe Fuel Academy Red</li>
          <li>Spring 2023: Captain For Fanshawe Fuel</li>
          <li>
            Fall 2023: Captain for Fanshawe Fuel Academy & Sub for Fanshawe Fuel
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span style={close} onClick={closeModal}>
            &times;
          </span>
          <img
            src={currentImage}
            alt="Enlarged view"
            className="modal-content"
          />
        </div>
      )}
      <CarouselProvider
        naturalSlideWidth={slideDimensions.width}
        naturalSlideHeight={slideDimensions.height}
        totalSlides={teamPictures.length}
        infinite={true}
        dragEnabled={swiping}
      >
        <Slider>
          {teamPictures.map((picture, index) => (
            <Slide index={index} key={index}>
              <div className="slide-container">
                <ButtonBack className="carousel-button back-button">
                  &larr;
                </ButtonBack>
                <img
                  src={picture.src}
                  alt={picture.alt}
                  className="slide-image"
                  onClick={() => openModal(picture.src)}
                />
                <ButtonNext className="carousel-button next-button">
                  &rarr;
                </ButtonNext>
              </div>
              <div className="esports-description-container">
                <p className="esports-picture-description">
                  {picture.description}
                </p>
              </div>
            </Slide>
          ))}
        </Slider>
        <DotGroup className="dots" />
      </CarouselProvider>
      <h1 className="title-LAN">WaterLAN</h1>
      <p className="subtitle-lan">
        On December 2nd-3rd 2023, I got the chance to play at my first ever LAN
        in University of Waterloo before wrapping up my collegiate esports
        career with Fanshawe Fuel! Here are some pictures:
      </p>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span style={close} onClick={closeModal}>
            &times;
          </span>
          <img
            src={currentImage}
            alt="Enlarged view"
            className="modal-content"
          />
        </div>
      )}
      <CarouselProvider
        naturalSlideWidth={slideDimensions.width}
        naturalSlideHeight={slideDimensions.height}
        totalSlides={LANpictures.length}
        infinite={true}
        dragEnabled={swiping}
      >
        <Slider>
          {LANpictures.map((picture, index) => (
            <Slide index={index} key={index}>
              <div className="slide-container-esports">
                <img
                  src={picture.src}
                  alt={picture.alt}
                  className="slide-image"
                  onClick={() => openModal(picture.src)}
                />
                <ButtonBack className="carousel-button back-button">
                  &larr;
                </ButtonBack>
                <ButtonNext className="carousel-button next-button">
                  &rarr;
                </ButtonNext>
              </div>
            </Slide>
          ))}
        </Slider>
        <DotGroup className="dots" />
      </CarouselProvider>
      <h1 className="title-awards"> Awards</h1>
      <p className="subtitle-awards">
        {showFullTextAwards
          ? `Throughout my collegiate esport career at Fanshawe College, I have won
    two championships: Fall 2022 NACE Open Plus Divisional Championship &
    Fall 2023 NACE Varsity Plus Divisional Championship. Additionally, I
    have been nominated for 4 different awards such as: Rocket League Player
    of the Year, GG (Good Sportmanship Player) of the Year, Trash Talker of
    the Year, and Captain of the Year; I ended up winning the RL Player of
    the Year! I also was voted as the Fanshawe Falcons Player of the month
    for the month of February.`
          : ` Throughout my collegiate esport career at Fanshawe College, I have won
    two championships: Fall 2022 NACE Open Plus Divisional Championship &
    Fall 2023 NACE Varsity Plus Divisional Championship. Additionally, I
    have been nominated for 4 different awards such as: Rocket League Player
    of the Year`}
        <span
          className="more-text"
          onClick={() => setShowFullTextAwards(!showFullTextAwards)}
        >
          {showFullTextAwards ? "" : "... Click for more"}
        </span>
      </p>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span style={close} onClick={closeModal}>
            &times;
          </span>
          <img
            src={currentImage}
            alt="Enlarged view"
            className="modal-content"
          />
        </div>
      )}
      <CarouselProvider
        naturalSlideWidth={slideDimensions.width}
        naturalSlideHeight={slideDimensions.height}
        totalSlides={awardPictures.length}
        infinite={true}
        dragEnabled={swiping}
      >
        <Slider>
          {awardPictures.map((picture, index) => (
            <Slide index={index} key={index}>
              <div className="slide-container">
                <ButtonBack className="carousel-button back-button">
                  &larr;
                </ButtonBack>
                <img
                  src={picture.src}
                  alt={picture.alt}
                  className="slide-image"
                  onClick={() => openModal(picture.src)}
                />
                <ButtonNext className="carousel-button next-button">
                  &rarr;
                </ButtonNext>
              </div>
            </Slide>
          ))}
        </Slider>
        <DotGroup className="dots" />
      </CarouselProvider>
    </motion.div>
  );
};

export default EsportsPage;
