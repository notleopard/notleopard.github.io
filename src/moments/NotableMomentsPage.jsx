import React, { useState, useEffect } from "react";
import NDU_Award from "../assets/NDU_Award.jpg";
import CNDL_Grad from "../assets/CNDL_Graduation.jpg";
import "./NotableMomentsPage.css";
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

const NotableMomentsPage = () => {
  const videos = [
    {
      title: "Fanshawe Interview - This is WINNING (English)",
      src: "https://www.youtube.com/embed/msbpOJ2nkGM?si=ZFsxA5nf3U1AvNXT",
      description:
        "An inspiring interview with Fanshawe discussing the triumphs and challenges on the journey to success.",
    },
    {
      title: "AUB Presentation - ABLE Summit 2019 (Arabic)",
      src: "https://www.youtube.com/embed/U4Z0S0t0mwg?si=sA4wfSPYnUguXOSE&clip=Ugkx7ykJoNDbtnmaU7d_mXHLPIpKuqPmWnpa&clipt=EIrdmwUYxaKfBQ",
      description:
        "A presentation at the AUB ABLE Summit 2019, showcasing milestones achieved and challenges overcame as a Deaf individual.",
    },
    {
      title: "LBCI Reportage - Story of Success (Arabic)",
      src: "https://www.youtube.com/embed/TUJYFD27m64?si=bPJQS5IKlGpTf2A6",
      description:
        "A motivating reportage on LBCI, discussing the journey of success and the milestones achieved. This video features myself and my family.",
    },
    {
      title: 'MTV Interview - "Baynetna" (Arabic)',
      src: "https://www.youtube.com/embed/DkIt6iHM2qk?si=W4F8Yq1XiB6oiRq0",
      description:
        "An engaging conversation on Lebanon's MTV's 'Baynetna', delving into personal stories and experiences as a family. This video features myself, my family and the MTV presenter, Katia Mendelek.",
    },
  ];

  const pictures = [
    {
      src: NDU_Award,
      alt: "Ralph Constantin receiving his recognition award",
      description:
        "Receiving an award of recognition for outstanding achievements and hard work from Father Pierre Najem, president of Notre Dame University.",
    },
    {
      src: CNDL_Grad,
      alt: "Ralph Constantin receiving high school graduation degree",
      description:
        "Receiving a high school diploma from Lebanese Deputy Neemat Frem, becoming the second Deaf graduate from a mainstream school after my brother, Marc.",
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
      if (width < 300) {
        setSlideDimensions({ width: 100, height: 120 });
        setSwiping(true);
      } else if (width < 400) {
        setSlideDimensions({ width: 100, height: 95 });
        setSwiping(true);
      } else if (width < 500) {
        setSlideDimensions({ width: 100, height: 85 });
        setSwiping(true);
      } else if (width < 610) {
        setSlideDimensions({ width: 100, height: 76 });
        setSwiping(true);
      } else if (width < 768) {
        setSlideDimensions({ width: 100, height: 70 });
        setSwiping(true);
      } else if (width < 900) {
        setSlideDimensions({ width: 100, height: 64 });
        setSwiping(true);
      } else if (width < 1080) {
        setSlideDimensions({ width: 100, height: 43 });
        setSwiping(false);
      } else if (width < 1235) {
        setSlideDimensions({ width: 100, height: 40 });
        setSwiping(false);
      } else if (width < 1530) {
        setSlideDimensions({ width: 100, height: 37 });
        setSwiping(false);
      } else {
        setSlideDimensions({ width: 100, height: 35 });
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

  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 3 } }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="moments-wrapper"
    >
      <h1 className="title-video">Videos</h1>
      <div className="notable-moments-container">
        {videos.map((video, index) => (
          <div key={index} className="video-container">
            <h2>{video.title}</h2>
            <iframe
              className="responsive-iframe"
              src={video.src}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
      <h1 className="title-picture">Photos</h1>
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
        totalSlides={pictures.length}
        infinite={true}
        dragEnabled={swiping}
      >
        <Slider>
          {pictures.map((picture, index) => (
            <Slide index={index} key={index}>
              <div className="slide-container">
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
              <div className="awards-description-container">
                <p className="awards-picture-description">
                  {picture.description}
                </p>
              </div>
            </Slide>
          ))}
        </Slider>
        <DotGroup className="dots" />
      </CarouselProvider>
    </motion.div>
  );
};

export default NotableMomentsPage;
