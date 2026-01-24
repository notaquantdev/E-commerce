import BestSeller from '../components/BestSeller.tsx'
import Hero from '../components/Hero.tsx'
import LatestCollection from '../components/LatestCollection.tsx'
import OurPolicy from '../components/OurPolicy.tsx'
import NewsLetterBox from '../components/NewsLetterBox.tsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller/>
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home
