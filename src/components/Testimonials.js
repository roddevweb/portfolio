import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Alice Dupont',
    title: 'CEO chez TechCorp',
    text: 'Rodrigo est un développeur exceptionnel. Son travail sur notre projet a dépassé toutes nos attentes.',
    image: 'https://via.placeholder.com/100.png?text=AD'
  },
  {
    name: 'Jean Martin',
    title: 'Directeur Technique chez Innovatech',
    text: 'Travailler avec Rodrigo a été un véritable plaisir. Sa capacité à résoudre des problèmes complexes est impressionnante.',
    image: 'https://via.placeholder.com/100.png?text=JM'
  },
  {
    name: 'Sophie Bernard',
    title: 'Chef de Projet chez Créative Solutions',
    text: 'Rodrigo est non seulement talentueux, mais aussi très professionnel. Je le recommande vivement.',
    image: 'https://via.placeholder.com/100.png?text=SB'
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    cssEase: 'ease-in-out'
  };

  return (
    <section id="testimonials" className="text-white p-5">
      <div className="container">
        <h2 className="section-title">Témoignages</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="testimonial-content">
                <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-img" />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.title}</h4>
                <p>"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
