import Banner from '@/components/Home/Banner'
import Banner1 from '@/components/Home/Banner1'
import CardSection from '@/components/Home/CardSection'
import ProgressBanner from '@/components/Home/ProgressBanner'

const Home = () => {
  return (
    <div className='container mx-auto'>
     <Banner1 />
     <ProgressBanner />
     <Banner />
     <CardSection />
    </div>
  )
}

export default Home