// libraries
import { Carousel } from 'react-bootstrap'
// Import css files
import styles from './Swiper.module.css'

const Swiper = () => {
  return (
    <div className={styles.container}>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/coloros12/warmup-page/top-banner/ColorOS12_PC_2880x1440-v2.png.thumb.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ColorOS 12</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6-pro-5g-oversea/topbanner/Homepage-top-banner-blue-pc-v3-en.png.thumb.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Reno6 Series</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/innoday-2021/topbanner/innoday-topbanner-pc-v1202.jpg.thumb.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>OPPO INNO DAY 2021</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Swiper