import React, { useState } from "react";
import Date from "../../assets/Events/Date.png";
import Location from "../../assets/Events/location.png";
import { Event } from "../../Db/Event";
import axios from "axios";
import { useEffect } from "react";

function Events() {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi

  const [Events,setEvents] = useState(Event);
 


// const Events = async()=>{

//   await axios.get(`${app}Events`)
//   .then(response=>{
//       const events = response.data;
//       // console.log(events)
//       const title =events.title
//       const Dates =events.date
//       const Link = events.link
//       // const Image = events.images

// const Date = Dates.map((items)=>(items.when))
// const arr=[];
// for(let i=0;events.title.length>i;i++){
//     arr.push({title:title[i],link:Link[i],Date:Date [i],Images:Image[i]})

// }

// // console.log(arr,"d")\\\\\\\\\\\\\\\\\\\\
// setEvents(arr)
// localStorage.setItem("Event",arr)

// })
     
  
// }

// useEffect(()=>{
// Events()
// },[])
console.log(Event,"asdf")
  return (
    <section id ="/Events">
     
      <div className="container ">
        <div className="flex mt-3 font-main justify-between lg:justify-between">
          <h1 className="mt-4 mx-12 font-bold text-[30px]">TODAY EVENTS</h1>

          
        </div>

        <div className="ml-[0.5px]  flex gap-7 md:gap-20  lg:flex-nowrap  font-main tracking-widest overflow-x-scroll scroll-smooth h-[540px] white scrollbar-hidden overflow-auto">
          {Events.map((items, id) => (
            <div key={id} className="flex-nowrap">
              <div className="bg-white rounded-lg shadow-[0px_4px_11px_8px_rgba(0,_0,_0,_0.1)] p-4 w-[350px] h-[380px] md:w-[350px] md:h-[400px] lg:w-[500px] lg:h-[450px] mt-14">
                <div className="relative">
                  <div className="w-full h-[180px] md:w-[470px] md:h-[210px] lg:w-[470px] lg:h-[270px] max-w-full overflow-hidden">
                    <img
                      className="rounded-xl w-full h-full object-cover"
                      src={items.img}
                      loading="lazy"
                    />
                  </div>

                  <div className="text-lg font-bold mt-2 tracking-widest">
                    {items.Title}
                  </div>
                
                </div>

                <div className="flex text-gray-950 mt-2 text-base">
                  <img className="w-5" src={Date} alt="date icon" />
                  <div className="ms-2 font-bold">
                    {items.Date}
                  </div>
                </div>

                <div className="flex mt-2 justify-between h-[40px]">
                  <div className="flex">
                    <div className="font-s text-gray-700">
                      <img className="w-5" src={Location} alt="location icon" />
                    </div>
                    <div className="font-bold ms-2 text-base text-gray-950">
                      {items.Location}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-[100px] h-8 bg-[#FF0000] text-white font-semibold rounded-full hover:bg-red-600 mb-20 text-sm"
                    >
                      Free
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
