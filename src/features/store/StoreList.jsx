import StoreListItem from "../../ui/StoreListItem";
import { useStore } from "./useStore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function StoreList() {
  const { isLoading, stores, error } = useStore();
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop through items
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true, // Auto-slide enabled
    autoplaySpeed: 3000, // Slide every 3 seconds (3000ms)
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <ul className="space-y-3">
      <Slider {...settings}>
        {stores?.map((item) => (
          <StoreListItem
            store={item}
            key={item._id}
            isLoading={isLoading}
            error={error}
          />
        ))}
      </Slider>
    </ul>
  );
}

export default StoreList;
