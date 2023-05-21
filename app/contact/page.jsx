import React from 'react'

export default function page() {
  return (
    <div>
        <div className='h-[200px] bg-blue-500'>
        <h1 className=' text-white text-2xl font-bold'>Contact Us</h1>
        </div>
      
        <p className='bg-secondary'>Contact Us type writer effect</p>
        <div className='grid lg:grid-cols-2'>
            
            <div>
            <p>Use below form for Laboratory Services and Other related inquiries</p>
            <p>Please indicate the Laboratory needed in the subject.</p>

            <form action="" className='flex flex-col outline outline-primary m-2'>
                <label> Your Name</label>
                <input type="text" className='outline'/>
                <label htmlFor="">Email</label>
                <input type="email" className='outline' />
                <label htmlFor="">Subject</label>
                <input type="text" className='outline' />
                <label htmlFor="">Message</label>
                <textarea className='outline'  name="" id="" cols="30" rows="10"></textarea>

                <button>Submit</button>
            </form>

            </div>

           

            <div>
                <h2>Pro-lab Medical and Diagnostics Clinic Inc.</h2>
                <p>Phone: (0999) 999 9999</p>
                <p>Fax: (0999) 999 9999</p>
            </div>
        </div>

        <div className='bg-primary'>
            <h2>Find us in Google Maps</h2>
            <h2>Address:</h2>
            <p> 2nd Floor, MST Bldg., McArthur Highway, Paligui, Apalit, Pampanga,
            2016 2016 Apalit, Philippines</p>
            <h3>Google Maps BOX TO DO</h3>
        </div>

    </div>
  )
}
