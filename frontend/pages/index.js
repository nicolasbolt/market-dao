import Header from '../components/Header'
import MarketDetails from '../components/MarketDetails'
import StakeForm from '../components/StakeForm'

export default function Home() {
  return (
    <>
      <div className='p-5 border border-b-2 flex flex-row text-sky-800'>
        <h1 className='py-4 px-4 font-bold text-3xl'>Market DAO</h1>
        <div className='ml-auto py-2 px-4'>
          <Header />
        </div> 
      </div>

      <MarketDetails />
      <StakeForm />
    </>
  )
}