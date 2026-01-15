

//importing Feed page and Suggestions page
import Feed from './Feed';
import Suggestions from './Suggestions';
import SideBar from './sideBar';


const Home = () => {

  
  return (
    <>
      <div className="2xl:container mx-auto w-screen min-h-screen flex flex-row">

       <div className='w-[20%] border-r-1 border-gray-300'>
        <SideBar/>
       </div>

        <div className='w-[60%]'>
          <Feed />
        </div>

        <div className='w-[30%] border-0'>
          <Suggestions/>
        </div>


      </div>

    </>

  )


}
export default Home;