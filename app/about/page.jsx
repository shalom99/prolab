import {HiUserGroup} from 'react-icons/hi'

export default function page() {
  return (
    <div>
  
    <h1 className='bg-primary text-center text-white py-10 text-2xl font-bold'>About Us</h1>
    <div className='p-10'>
    <p className='bg-primary mb-10'>About Us type writer effect</p>

    <p className='w-[800px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed reiciendis quos at omnis exercitationem commodi. Quam, sint veritatis. Praesentium quas explicabo qui molestiae quod fugiat odit iure laboriosam minima rem!</p>
    </div>
    {/* about-group */}
    <div className='flex gap-10 flex-col'>

      <div className='flex items-center gap-10 mx-auto w-[600px] outline'>
      <HiUserGroup size={100} className='text-primary' />
        <div>
        <h2 className='text-center font-bold text-5xl mb-5 text-primary'>Our Mission</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro itaque repellat distinctio rem deserunt. Illo ducimus quaerat sunt! Saepe, et!</p>
        </div>
      </div>

      <div className='flex items-center gap-10 mx-auto w-[600px] outline'>
      <HiUserGroup size={100} className='text-primary' />
        <div>
        <h2 className='text-center font-bold text-5xl mb-5 text-primary'>Vision</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro itaque repellat distinctio rem deserunt. Illo ducimus quaerat sunt! Saepe, et!</p>
        </div>
      </div>


      <div className='flex items-center gap-10 mx-auto w-[600px] outline'>
      <HiUserGroup size={100} className='text-primary' />
        <div>
        <h2 className='text-center font-bold text-5xl mb-5 text-primary'>Goal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro itaque repellat distinctio rem deserunt. Illo ducimus quaerat sunt! Saepe, et!</p>
        </div>
      </div>


    </div>
  

</div>
  )
}
