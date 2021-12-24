import Head from 'next/head'
import Header from '../components/Header/Header'
import SlickSwiper from '../components/Swiper/Swiper'
// css 
import styles from '../styles/Home/Home.module.css'
import HomeSection from '../components/HomeSection/HomeSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <SlickSwiper/>
      <HomeSection
        header={'Smartphone'}
        src1={'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a74-5g/middlebanner/A74-5G-middlebanner-silver-1340x1786-v2-pc.jpg.thumb.webp'}
        p1={'OPPO A74 5G'}
        p2={'Qualcomm® 5G SoC,'}
        p3={'5000mAh Mega Battery'}
        src2={'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-find-x3-series/middle-banner/find-x3-pro/Find%20X3-middlebanner-1600x1068-black-v2-pc.jpg'}
        p4={'OPPO Find X3 Pro'}
        p5={'1 Billion Colour Display,'}
        p6={'10-bit Full-path Colour Engine'}
      />
      <HomeSection
        style1={{backgroundColor: '#F5F5F5'}}
        style2={{flexDirection:'row-reverse'}}
        header={'IoT Products'}
        src1={'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/watch-free/middlebanner/Watch-free-middlebanner-1340x1786-pc-v2.jpg.thumb.webp'}
        p4={'OPPO Enco Free2'}
        p5={'42 dB Deep Personalized Active Noise Cancellation,'}
        p6={'Personalized Sound Boost'}
        src2={'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/enco-free2/middlebanner/Enco%20free2-middlebanner-white-1600x1068-v2-pc.jpg'}
        p1={'OPPO Watch Free'}
        p2={'OSleep All-Scenario Sleep Monitoring,'}
        p3={'1.64-inch AMOLED Display'}
      />
      <HomeSection
        header={'OPPO Technology'}
        src1={'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/technology/middlebanner/5g-middlebanner-1340x1786-v3-pc.jpg.thumb.webp'}
        p1={'OPPO 5G'}
        p2={'Connect to the world around you with 5G'}
        src2={'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/technology/middlebanner/imaging-middlebanner-1600x1068-v2-pc.jpg.thumb.webp'}
        p4={'Smart Imaging'}
        p5={'Experience every moment with OPPO imaging'}
      />

    </>

  )
}
