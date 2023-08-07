import Slider from "react-slick";

const BrandSlider = () => {
    const brandItems = [
        { id: 1, img: '', alt: '' },
        { id: 2, img: '', alt: '' },
        { id: 3, img: '', alt: '' },
        { id: 4, img: '', alt: '' }
    ]
    const settings = {
        dots: false,
        infinite: true,
        variableWidth: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
      };
    return (
        <Slider {...settings}>
            
        </Slider>
    );
};

export default BrandSlider;