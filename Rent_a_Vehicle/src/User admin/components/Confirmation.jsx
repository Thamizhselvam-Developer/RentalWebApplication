import React from 'react'
import { useState } from "react";
import verified from "../../assets/Luxury/images.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enIN } from "date-fns/locale";
import carimg from "../../assets/card_details/image1.jpeg"

const Confirmation = () => {
      const [startDate, setStartDate] = useState(new Date());
      const [endDate, setEndDate] = useState(new Date());
  
  return (
    <>
     <div>
      <div className='border container h-[910px] max-w-7xl mt-10 '>
<div className=' flex border-b rounded-l-2xl rounded-r-2xl items-center justify-center gap-1 '>
    <h1 className='text-center text-[40px]  font-extrabold'>
       Booking Confirmation
    </h1>
    <img className='size-12' src={verified} alt="" />
</div>

  <div className='mt-3'>
    <div className='flex'>
    <h2 className=' capitalize text-start font-semibold text-[22px]'>
booking details
     </h2>
    
    </div>
    
     <div className=' mt-5'>
        <div className='flex justify-between '>
        <div className=' '>

        <div className=''>
        <label className="font-semibold sm:w-1/3 text-gray-600 ">Pick-Up</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      dateFormat="dd/MM/yyyy h:mm aa"
                      locale={enIN}
                      className="border border-gray-300 rounded-lg px-4 mx-5 py-1 w-[200px]"
                    />
        </div>
                  

     <div className='mt-5'>
                   <label className="font-semibold sm:w-1/3 text-gray-600">Drop-Off</label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        showTimeSelect
                        dateFormat="dd/MM/yyyy h:mm aa"
                        locale={enIN}
                        className="border border-gray-300 rounded-lg px-4 mx-3 py-1 w-[200px]"
                      />
     </div>
        <ul className='flex mt-4 gap-2'>
            <li className='font-bold text-gray-600'>Total Days\Hours:</li>
            <span className=''>2 Days <hr /></span>
            
        </ul>

        <div className=' mr-[30px] mt-3'>
        <h2 className='font-semibold text-[23px]  ' htmlFor="">Choosing vehicle</h2>
       <ul className=' '>
     <div className='flex gap-2'>
        <li className=' capitalize font-semibold text-gray-600 '>vehicle name:</li>
        <span>Mahindra Thar Xt</span>
     </div>
     <div className='flex gap-2'>
        <li className=' capitalize font-semibold text-gray-600'>model:</li>
        <span>2012</span>
     </div>
     <div className='flex gap-2'>
        <li className=' capitalize font-semibold text-gray-600'>seat:</li>
        <span>4</span>
     </div>
     <div className='flex gap-2'>
        <li className=' capitalize font-semibold text-gray-600'>Vehicle no:</li>
        <span>PY7653</span>
     </div>
    </ul>
   </div>
        </div>
       

<div className='  flex  w-[700px] '>
<div className=' w-[700px] '>
    <img className='h-[280px] w-[700px]   object-cover rounded-lg border hover:cursor-zoom-in hover:border-emerald-300' src={carimg} alt="" />
   </div>
   </div>
  
       
        


 </div>
     <div className='   flex justify-between   '>
   <div className=" mt-4">    
     <h1 className='font-semibold text-[22px] '>Booked By</h1>
    
    <ul className='mt-2'>
<div className='flex gap-2'>
    <li className='font-semibold text-gray-600'>Name:</li>
    <span>Mr.karthikeyan</span>
</div>
<div className='flex gap-2'>
    <li className='font-semibold text-gray-600'>Gmail:</li>
    <span>kamarajkarthick3@gmail.com</span>
</div>
<div className='flex gap-2'>
    <li className='font-semibold text-gray-600'>Phone no:</li>
    <span>97765454432</span>
</div>
  </ul>
       </div>
    
     <div className="mr-[80px]  pt-11   ">    
        <div className='flex items-center gap-2'>
    <h2 className='font-semibold text-gray-700 '>Booking no:</h2>
    <span>#876754455</span>
    </div>
    <div className='flex items-center '>
    <h2 className='font-semibold text-gray-700'>Booking Date:</h2>
    <span>12.03.2025</span>
    </div>
    <div className='flex items-center '>
    <h2 className='font-semibold text-gray-700'>Status:</h2>
    <span>Confirmed</span>
    </div>
    </div>
         </div>
 <div className=' flex justify-center mt-4'>
 <div className='border-2  w-[850px] h-[285px] rounded-lg'>
    <h1 className='font-bold text-[23px] text-white text-center rounded-md bg-slate-500'>Booking Summary</h1>
    <hr />
  <div className='px-2'>
    <h1 className=''> Extra Add-ons:</h1>
        <div className="flex items-center rounded-sm dark:border-gray-700  ">
             
                    <input
                      id="bordered-checkbox-1"
                      type="checkbox"
                      value=""
                      name="bordered-checkbox"
                      className="w-4 h-4  bg-gray-100 border-gray-300 rounded-sm   dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="bordered-checkbox-1"
                      className="w-full py-1 ms-2 tracking-widest text-[15px] text-gray-600  dark:text-gray-300"
                    >
                      Insurance Coverage
                      
                    </label>
                    <span className='text-gray-500'>$300</span>
                  </div>
                  <div className="flex items-center rounded-sm dark:border-gray-700  ">
                    <input
                      id="bordered-checkbox-2"
                      type="checkbox"
                      value=""
                      name="bordered-checkbox"
                      className="w-4 h-4  bg-gray-100 border-gray-300 rounded-sm   dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="bordered-checkbox-2"
                      className="w-full py-1 ms-2 tracking-widest text-[15px] text-gray-600  dark:text-gray-300"
                    >
                      Additional Driver
                      </label>
                      <span className='text-gray-500'>$70 </span>
                  </div>
                  <div className="flex items-center rounded-sm dark:border-gray-700 ">
                    <input
                      id="bordered-checkbox-3"
                      type="checkbox"
                      value=""
                      name="bordered-checkbox"
                      className="w-4 h-4  bg-gray-100 border-gray-300 rounded-sm   dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="bordered-checkbox-3"
                      className="w-full py-1 ms-2 tracking-widest text-[15px] text-gray-600 dark:text-gray-300"
                    >
                      Child Seat
                     
                    </label>
                    <span className='text-gray-500'>$10 </span>
                    </div>

                    <div className='flex justify-evenly '>
                    <label
                      htmlFor="coupon-input"
                      className="w-full py-1 ms-2 tracking-widest text-[15px] text-gray-600 dark:text-gray-300"
                    >
                      Add Coupon
                     
                    </label>
                    <input 
                    id="coupon-input"
                    className='border mx-2 px-1 text-md font-light rounded-md ' 
                    type="text"
                    placeholder='ex:PY76qks45' />

                    <button className='border mr-11 rounded-lg px-2 bg-slate-500 hover:bg-slate-600 text-white'>Add</button>

                    <span className=' flex justify-end'>$90</span>
                    </div>
                    <hr className='mt-2' />
<ul>
    <div className='flex  justify-between'>
        <li>Price:</li>
        <span>$200</span>
        </div>
    <div className='flex  justify-between'>
        <li>Extra Add-ons:</li>
        <span>$600</span>
     </div>
     
     <div className='flex  justify-between'>
        <li className='font-extrabold text-[20px]'>Total Amount:</li>
        <span className='text-[20px]'>$1000</span>
     </div>
   
</ul>

{/* Payment Notice */}
<div className='mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded-md'>
  <p className='text-sm text-yellow-800 font-medium text-center'>
    💡 Payment will be collected at the shop during vehicle pickup
  </p>
</div>
    
 </div>
       </div>  
         </div>
    </div>
</div>
  
<div className='flex justify-center gap-6 mt-6'>
    <button className='border rounded-lg py-1.5 px-3 bg-green-600 hover:bg-green-700 text-white '>Confirm Booking</button>
    <button className='border rounded-lg py-1.5 px-3 bg-red-500 hover:bg-red-600 text-white'> Cancel Booking</button>
</div>

</div>

</div>
      
    </>
   
  )
}

export default Confirmation