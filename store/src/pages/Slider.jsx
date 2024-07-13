import styles from './Slider.module.css';
import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import picture1 from '../images/fashion01.jpg';
import picture2 from '../images/fashion02.jpg';
import picture3 from '../images/fashion04.jpg';
import 'swiper/css';
import 'swiper/css/effect-creative'
import { useNavigate } from 'react-router-dom';
import { EffectCreative } from 'swiper/modules'

const Slider = () => {
    const images = [picture1, picture2, picture3];
    const navigate = useNavigate();

  return (
    <section className={styles.wraper}>
      <Swiper
        modules={[ EffectCreative, A11y, Autoplay]} 
        effect={'creative'}
        grabCursor={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        autoplay
      >
        
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div onClick={() => navigate('products')}>
              <img
                src={img}
                alt={`slide-${index + 1}`}
                className={styles.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Slider;