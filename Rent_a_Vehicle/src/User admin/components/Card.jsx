
import { useEffect, useState } from "react";
// import { Cardsdb } from "../../Db/Card";
import Seat from "../../assets/Cards/Vector.png";
import Auto from "../../assets/Cards/Gear.png";
// import Fuel from "../../assets/Cards/Fuel.png";
import Heart from "../../@UI/Heart";
import { Armchair, Settings2, ChevronRight, Fuel } from 'lucide-react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';

function Cards() {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi

  const [cardData, setcardData] = useState([]);
  // const [BookId,setBookId]= useState(null)
  const [liked, setLiked] = useState(false);
  const [show, setShow] = useState(true)
  const handleClick = () => {
    setLiked(!liked);
  };
   const token = Cookies.get('__as_secure')
   console.log(token)
  const navigate = useNavigate()
  const CardUserData = async () => {
    await axios.get(`${app}CardData`,{
     
    })

      .then(response => {
        console.log(response)
        const Data = response.data
        if (Data.length > 0) {
          setShow(false)
        }
        setcardData(Data)
      }
      )
  }
  useEffect(() => {
    CardUserData();
  }, [])


  const Book = (id) => {
    if (id != "") {
      navigate(`/Booking/${id}`);
    }


  }


  return (
    <>
      {
        show && (
          <div className='grid grid-cols-3'>
            <div role='status' className='max-w-sm border border-gray-300 rounded-lg p-4 container'>
              <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
                <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
                </svg>
              </div>
              <div className=' w-full flex justify-between items-start animate-pulse'>
                <div className="block">
                  <h3 className='h-3 bg-gray-300 rounded-full  w-48 mb-4'></h3>
                  <p className='h-2 bg-gray-300 rounded-full w-32 mb-2.5'></p>
                </div>
                <span className="h-2 bg-gray-300 rounded-full w-16 "></span>
              </div>
            </div>
            <div role='status' className='max-w-sm border border-gray-300 rounded-lg p-4 container'>
              <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
                <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
                </svg>
              </div>
              <div className=' w-full flex justify-between items-start animate-pulse'>
                <div className="block">
                  <h3 className='h-3 bg-gray-300 rounded-full  w-48 mb-4'></h3>
                  <p className='h-2 bg-gray-300 rounded-full w-32 mb-2.5'></p>
                </div>
                <span className="h-2 bg-gray-300 rounded-full w-16 "></span>
              </div>
            </div>
            <div role='status' className='max-w-sm border border-gray-300 rounded-lg p-4 container'>
              <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
                <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
                </svg>
              </div>
              <div className=' w-full flex justify-between items-start animate-pulse'>
                <div className="block">
                  <h3 className='h-3 bg-gray-300 rounded-full  w-48 mb-4'></h3>
                  <p className='h-2 bg-gray-300 rounded-full w-32 mb-2.5'></p>
                </div>
                <span className="h-2 bg-gray-300 rounded-full w-16 "></span>
              </div>
            </div>
            <div role='status' className='max-w-sm border border-gray-300 rounded-lg p-4 container'>
              <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
                <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
                </svg>
              </div>
              <div className=' w-full flex justify-between items-start animate-pulse'>
                <div className="block">
                  <h3 className='h-3 bg-gray-300 rounded-full  w-48 mb-4'></h3>
                  <p className='h-2 bg-gray-300 rounded-full w-32 mb-2.5'></p>
                </div>
                <span className="h-2 bg-gray-300 rounded-full w-16 "></span>
              </div>
            </div>
            <div role='status' className='max-w-sm border border-gray-300 rounded-lg p-4 container'>
              <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
                <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
                </svg>
              </div>
              <div className=' w-full flex justify-between items-start animate-pulse'>
                <div className="block">
                  <h3 className='h-3 bg-gray-300 rounded-full  w-48 mb-4'></h3>
                  <p className='h-2 bg-gray-300 rounded-full w-32 mb-2.5'></p>
                </div>
                <span className="h-2 bg-gray-300 rounded-full w-16 "></span>
              </div>
            </div>
            <div role='status' className='max-w-sm border border-gray-300 rounded-lg p-4 container'>
              <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
                <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
                </svg>
              </div>
              <div className=' w-full flex justify-between items-start animate-pulse'>
                <div className="block">
                  <h3 className='h-3 bg-gray-300 rounded-full  w-48 mb-4'></h3>
                  <p className='h-2 bg-gray-300 rounded-full w-32 mb-2.5'></p>
                </div>
                <span className="h-2 bg-gray-300 rounded-full w-16 "></span>
              </div>
            </div>


          </div>

        )
      }
      <div className="">
        <div className="container flex justify-around md:justify-between  md:items-center  lg:grid lg:justify-center mb-9 md:mt-[20px]">
          <div className="hidden md:block font-sans font-semibold text-[48px]   tracking-[2px]  lg:mx-auto  ">
            <span className="text-primary ">Available</span>  <span>Vehicle</span>

          </div>
          <p className=" text-gray-600 text-[14px]">Available vehicles ready for booking—reserve yours now!</p>

          <div className="md:hidden lg:hidden text-nowrap font-main font-bold text-3xl tracking-[2px]  ml-16 mt-4">

            <span className="text-primary ">Available</span> Vehicle
          </div>


        </div>

        <div className="grid gap-8 justify-center items-center grid-cols-1  md:grid-cols-2 lg:grid-cols-3  font-sans mt-[-13px]  ">
          {cardData.slice(0, 6).map((items, id) => (
            <div key={id} className=" rounded-2xl shadow-[0px_4px_11px_8px_rgba(0,_0,_0,_0.1)] w-auto h-auto mx-4 ">
              <div className=" relative  ml-4 mr-4">
                <div className=" absolute top-[5px] right-[5px]  flex w-8 h-7 justify-center items-center rounded-md bg-white overflow-hidden ">

                  <Heart />
                </div>
                <div className="w-full h-full mt-4 md:w-[470px] md:h-[270px]  lg:h-[220px] max-w-full overflow-hidden  md:mt-3 lg:mt-3">

                  <img
                    className="rounded-xl w-full h-full object-cover "
                    loading="lazy"
                    src={`${app}uploads/${items.VehImg}`}

                  />
                </div>
              </div>

              <div>
                <div className="flex justify-center">
                  <div className=" border border-[#FF4545]  bg-[#FF4545] w-[170px] mt-2"></div>
                </div>

                <div className="grid grid-cols-2 items-center ml-6 mt-1">
                  <span className="text-[20px]  font-sans font-semibold text-black">
                    {items.vehicle_name}
                  </span>
                  <div className=" flex ml-[40px]">
                    <svg
                      className="w-4 h-4 text-[#FF0000] ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-[#FF0000] ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-[#FF0000] ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-[#FF0000] ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[88px_95px_95px] justify-center gap-2 mx-2 text-sm tracking-tighter font-sans  lg:gap-6  text-gray-700 dark:text-gray-400 ">
                <div className="grid grid-cols-[30px_30px]  justify-end   items-center">
                  <div className="mt-2 w-auto h-auto ">
                    <Armchair />
                  </div>
                  <div className="mt-2 grid justify-center items-center  ">
                    <span>07</span>
                  </div>
                </div>

                <div className=" grid grid-cols-[30px_1fr] gap-1 justify-center items-center">
                  <div className="mt-2  ">
                    <Settings2 />
                  </div>
                  <div className="mt-2 grid items-center ">
                    <span className="text-nowrap">{items.transmission}</span>
                  </div>
                </div>

                <div className="grid grid-cols-[30px_1fr] justify-center">
                  <div className="mt-2">
                    <Fuel />
                  </div>
                  <div className="mt-2">
                    <span>Petrol</span>
                  </div>
                </div>
              </div>

              <div className="px-4  relative">
                <hr className="h-px my-2 bg-[#F5EEDC] border-2 border-[#F5EEDC] dark:bg-gray-700 " />
              </div>

              <div className="flex justify-center  md:justify-center lg:justify-between item-center xl:justify-between  m-auto mx-5 mb-4 shadow-red-900">
                <div className=" flex gap-1 justify-start items-center  text-gray-700 dark:text-gray-400">
                  <div className=" text-[20px] flex items-center mt-1">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                  </div>
                  <span className="text-[20px] font-bold ">{items.dynamicPrice}</span>
                  <span className="text-[20px]  text-nowrap mt-1">
                    / Per Day
                  </span>
                </div>


                <div className="hidden lg:block text-end items-center  ">
                  <button
                    type="button"
                    onClick={() => Book(items.vehicle_id)}
                    className="text-white bg-primary  font-main rounded-full text-sm text-center   hover:bg-[#b23737] w-24 h-[35px] "
                  >
                    Book
                  </button>
                </div>


              </div>
              <div className=" md:block lg:hidden text-center   ">
                <button
                  type="button"
                  onClick={() => Book(items.vehicle_id)}
                  className="text-white bg-primary  font-main rounded-full text-sm text-center  mb-2 hover:bg-[#b23737] w-24 h-[35px] "
                >
                  Book
                </button>
              </div>
            </div>
          ))}
          <div>

          </div>

          <div className="pt-2 md:w-[100px] md:ml-[85px] lg:ml-[750px] flex justify-center   ">
            <div className="flex justify-center lg:hidden">
              <Link to="/CompleteCard">
                <button className="bg-white flex items-center gap-1 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                  View All Vehicles
                  <ChevronRight size={20} />

                </button>
              </Link>

            </div>
          </div>
        </div>
        <div className="hidden justify-center   lg:grid lg:justify-center ">
          <Link to="/CompleteCard">
            <button className="bg-white flex items-center   justify-center gap-1 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              View All Vehicles
              <ChevronRight />
            </button>

          </Link>

        </div>
      </div>
    </>
  );
}

export default Cards;