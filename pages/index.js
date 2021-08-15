import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({exploreData,cardsData}) {
  return (
    <div className="">
      <Head>
        <title>AirBnB Clone</title>
        <link rel="icon" href="https://venturebeat.com/wp-content/uploads/2014/07/airbnb-logo-red.jpg?fit=800%2C450&strip=all" />
      </Head>
      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner/>
      {/* Main Section */}

      {/* Small Card */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* Pull some data from a server-API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map((item,index)=>(
            <SmallCard key={index} {...item}/>
          ))}
          </div>
        </section>

      {/* Medium Card */}
          <section>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
              {cardsData?.map((item,index)=>(
                <MediumCard key={index} {...item}/>
              ))}
            </div>
          </section>

        {/* Large Card     */}
          <section >
            <LargeCard 
              img='https://links.papareact.com/4cj'
              title='The Greatest Outdoors'  
              description='Wishlists curated by Airbnb'
              buttonText='Get Inspired'
            />
          </section>
      </main>

      {/* Footer */}
      <div className='bg-gray-100 w-full'>
        <Footer />
      </div>
      

    </div>
  )
}


export async function getStaticProps(){
    const exploreData = await fetch ('https://links.papareact.com/pyp').then(res=>res.json());

    const cardsData= await fetch('https://links.papareact.com/zp1').then(res=>res.json());


      return {
        props:{
          exploreData,
          cardsData,
        }
      
      }
}
