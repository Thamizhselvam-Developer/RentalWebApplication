import React, { useState } from 'react';
import Input from '../../Uitilites/Input';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ImFilePicture } from 'react-icons/im';
import { useEffect } from 'react';
import { ShieldUser } from 'lucide-react';
import Loader from '../../@UI/loader';
import UserNavbar from '../../User admin/components/UserNavbar';
// import Form from "../../assets/Rental_Form/Form.png"
// import Tick from "../../assets/Rental_Form/Tick.png"
const Rentalform = () => {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi;

  const Navigate = useNavigate();
  const [image, setImage] = useState([]);
  const [loading, setloading] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const [Shopimage, setShopImage] = useState([]);
  const [ownerImage, setOwnerImage] = useState([]);
  const [sucess, setSuccess] = useState(false);
  const [data, setData] = useState({
    username: '',
    contactNumber: '',
    Email: '',
    address: '',
    aadhaarNumber: '',
    shopName: '',
    streetAddress: '',
    city: '',
    state: '',
    country: '',
    pinCode: '',
    gstNumber: '',
    Area: '',
  });

  const [Error, setError] = useState({});
  const tovalidate = () => {
    let NewError = {};
    if (data.username === '') {
      NewError.username = 'Enter Your name';
    }
    if (data.contactNumber === '') {
      NewError.contactNumber = 'Enter Your phone number';
    }
    if (data.Email === '') {
      NewError.Email = 'Enter Your email';
    }
    if (data.address === '') {
      NewError.address = 'Enter Your address';
    }

    if (data.aadhaarNumber === '') {
      NewError.aadhaarNumber = 'Check your  aadhaarNumber Number';
    }
    if (data.aadhaarNumber.length != 12) {
      NewError.aadhaarNumber = 'Aadhaar Number Must in 12 Digit';
    }
    if (data.shopName === '') {
      NewError.shopName = 'Enter Your shop name';
    }
    if (data.Area === '') {
      NewError.Area = 'Enter a Area of Shop';
    }
    if (data.streetAddress === '') {
      NewError.streetAddress = 'Enter shop street name';
    }
    if (data.city === '') {
      NewError.city = 'Enter shop city';
    }
    if (data.state === '') {
      NewError.state = 'Enter  shop state';
    }
    if (data.country === '') {
      NewError.country = 'Enter shop country ';
    }
    if (data.pinCode === '') {
      NewError.pinCode = 'Enter shop pin code';
    }
    if (data.gstNumber === '') {
      NewError.gstNumber = 'Enter Your shop gstNumber';
    }
    if (data.gstNumber.length != 15) {
      NewError.gstNumber = ' Gst  Number Must in 12 Digit';
    }
    if (data.Area === '') {
      NewError.Area = 'Enter Your Shop Area';
    }

    if (ownerImage.length == 0) {
      NewError.ownerImage = 'Attach a Pdf ';
    }
    if (image.length == 0) {
      NewError.LicenseImage = 'Attach a Pdf ';
    }
    if (Shopimage.length > 5) {
      NewError.Shopimage = 'Insert Only 5 Images';
    }
    if (Shopimage.length == 0) {
      NewError.Shopimage = 'Insert 5 Images';
    }
    setError(NewError);
    return Object.keys(NewError).length === 0;
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError({ ...Error, [e.target.name]: '' });
  };
  const handleImageChange = (e) => {
    const files = e.target.files[0];
    console.log(files, 'files');
    setImage(files);
  };

  const handleShopImageChanges = (e) => {
    const files = Array.from(e.target.files);
    if (files.length == 0) {
      setShopImage([]);
    } else {
      setShopImage(files);

      // for(let i=0;i<Shopimage;i++){
        
      // }
      
    }
  };
  // const handleOwnerImageChange=(e)=>{
  //    const files = Array.from(e.target.files[0]);
  //     console.log(files,"Owenr")

  //   if(files.length == 0){
  //     setOwnerImage([])
  //   }
  //   else{
  //     setOwnerImage(files)
  //   }
  // }

  const handleSubmit = async (e) => {
    console.log(tovalidate(), 'asdf');
    e.preventDefault();
    if (tovalidate() != true) {
      return;
    }
    setloading(true);

    const form = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      form.append(key, value);
    });

    form.append('image', image);
    form.append('OwnerImage', ownerImage[0]);

    Shopimage.forEach((file) => {
      form.append('ShopImage', file);
    });

    //    for (const [key, value] of form.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    try {
      const response = await axios({
        method: 'POST',
        url: `${app}rentalform`,
        data: form,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(response);
      if (response.data.data.msg === 'Form Submitted Succesfully') {

        setSuccess(true);
        setSubmitForm(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setloading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

 const pdfViewer=(e)=>{
  e.preventDefault()
   const fileURL = URL.createObjectURL(image);
   window.open(fileURL)
 }
  return (
    <>
      {sucess ? (
        <>
          <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
            <div className="bg-white p-10 w-[500px] sm:w-[600px] rounded-2xl shadow-2xl text-center relative">
              <div className="flex justify-center items-center mb-6">
                <div className="bg-primary p-4 rounded-full">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold font-main mb-3 ">Success</h2>
              <p className="text-gray-600 text-lg font-main ">
                Your Rental Patner Submited Successfully !
              </p>
              <p className="text-gray-600 text-md font-sans mb-1">
                You Receive An Email From Our Admin !
              </p>
              <p className=" text-gray-600 text-sm font-main mb-4">
                After <span className=" text-primary ">Verified ! </span>
              </p>
              <Link to={"/"} >
              <button  className="bg-primary text-white text-sm px-12 py-3 rounded-2xl hover:bg-gray-600 transition">
                Go Back Home
              </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <UserNavbar />
          <div className="max-w-5xl mx-auto   px-4 py-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="sm:flex md:flex md:max-w-5xl gap-0">
                <div className="md:col-span-4 bg-slate-50 p-6 border-r">
                  <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Owner Details
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        <i className="fa-solid fa-user mr-2"></i> Name
                      </label>
                      <Input
                        type="text"
                        name="username"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your Name"
                        onChange={handleChange}
                        value={data.username}
                      />
                      {Error.username && (
                        <p className="text-red-500 text-sm mt-1">
                          {Error.username}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="contactNumber"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        <i className="fa-solid fa-phone mr-2"></i> Contact
                        Number
                      </label>
                      <Input
                        type="number"
                        name="contactNumber"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your number"
                        onChange={handleChange}
                        value={data.contactNumber}
                      />
                      {Error.contactNumber && (
                        <p className="text-red-500 text-sm mt-1">
                          {Error.contactNumber}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        <i className="fa-solid fa-envelope mr-2"></i> Email
                      </label>
                      <Input
                        type="email"
                        name="Email"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        value={data.Email}
                      />
                      {Error.Email && (
                        <p className="text-red-500 text-sm mt-1">
                          {Error.Email}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="address"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        <i className="fa-solid fa-location-dot mr-2"></i>{' '}
                        Address
                      </label>
                      <Input
                        type={'text'}
                        name={'address'}
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your address"
                        onChange={handleChange}
                        value={data.address}
                      />
                      {Error.address && (
                        <p className="text-red-500 text-sm mt-1">
                          {Error.address}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="aadhaar"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        <i className="fa-solid fa-address-book mr-2"></i>{' '}
                        Aadhaar Card Number
                      </label>
                      <Input
                        type={'number'}
                        name={'aadhaarNumber'}
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your Aadhaar number"
                        onChange={handleChange}
                        value={data.aadhaarNumber}
                      />
                      {Error.aadhaarNumber && (
                        <p className="text-red-500 text-sm mt-1">
                          {Error.aadhaarNumber}
                        </p>
                      )}
                    </div>

                    <div className="mt-6">
                      <div>
                        <label
                          htmlFor="File"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Owner Image
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <ImFilePicture className="text-gray-500" />
                          </div>
                          <input
                            type="file"
                            id="File"
                            name="OwnerImage"
                            accept="image/*"
                            onChange={(e) => setOwnerImage(e.target.files)}
                            className={`w-[300px] md:w-[350px] lg:w-[350px] pl-8 pr-3 py-2 border 
                        rounded-md text-sm`}
                          />
                          {Error.ownerImage && (
                            <p className="text-red-500 text-sm mt-1">
                              {Error.ownerImage}
                            </p>
                          )}
                        </div>
                        {ownerImage && ownerImage.length > 0 && (
                          <div className=" mt-2 grid justify-center text-center">
                            <div>
                              <img
                                src={URL.createObjectURL(ownerImage[0])}
                                alt="Images"
                                className="w-[200px] h-auto mx-auto rounded-2xl"
                              />
                            </div>

                            <div>
                              <button onClick={()=> setOwnerImage([])}  className="bg-primary text-white rounded-md w-24 h-8 mt-5  ">
                               
                                Remove
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </div>

                <div className=" p-6 ">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 border-b pb-3">
                        Shop Details
                      </h2>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-6">
                      <div className="mb-4">
                        <label
                          htmlFor="shopName"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Shop Name
                        </label>
                        <Input
                          type="text"
                          name="shopName"
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full md:w-1/2 p-2.5 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your shop name"
                          onChange={handleChange}
                          value={data.shopName}
                        />
                        {Error.shopName && (
                          <p className="text-red-500 text-sm mt-1">
                            {Error.shopName}
                          </p>
                        )}
                      </div>

                      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-medium mb-4">
                          Shop Address
                        </h3>

                        <div className="mb-4">
                          <label
                            htmlFor="streetAddress"
                            className="block mb-2 text-sm font-medium text-gray-700"
                          >
                            Street Address
                          </label>
                          <Input
                            type="text"
                            name="streetAddress"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your street address"
                            onChange={handleChange}
                            value={data.streetAddress}
                          />
                          {Error.streetAddress && (
                            <p className="text-red-500 text-sm mt-1">
                              {Error.streetAddress}
                            </p>
                          )}
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="Area"
                            className="block mb-2 text-sm font-medium text-gray-700"
                          >
                            Area
                          </label>
                          <Input
                            type="text"
                            name="Area"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your Area"
                            onChange={handleChange}
                            value={data.Area}
                          />
                          {Error.Area && (
                            <p className="text-red-500 text-sm mt-1">
                              {Error.Area}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div>
                            <label
                              htmlFor="city"
                              className="block mb-2 text-sm font-medium text-gray-700"
                            >
                              City
                            </label>
                            <Input
                              type="text"
                              name="city"
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="City"
                              onChange={handleChange}
                              value={data.city}
                            />
                            {Error.city && (
                              <p className="text-red-500 text-sm mt-1">
                                {Error.city}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="state"
                              className="block mb-2 text-sm font-medium text-gray-700"
                            >
                              State
                            </label>
                            <Input
                              type="text"
                              name="state"
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="State"
                              onChange={handleChange}
                              value={data.state}
                            />
                            {Error.state && (
                              <p className="text-red-500 text-sm mt-1">
                                {Error.state}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="country"
                              className="block mb-2 text-sm font-medium text-gray-700"
                            >
                              Country
                            </label>
                            <Input
                              type={'text'}
                              name={'country'}
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Country"
                              onChange={handleChange}
                              value={data.country}
                            />
                            {Error.country && (
                              <p className="text-red-500 text-sm mt-1">
                                {Error.country}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="pinCode"
                              className="block mb-2 text-sm font-medium text-gray-700"
                            >
                              Pin Code
                            </label>
                            <Input
                              type="text"
                              name="pinCode"
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Pin code"
                              onChange={handleChange}
                              value={data.pinCode}
                            />
                            {Error.pinCode && (
                              <p className="text-red-500 text-sm mt-1">
                                {Error.pinCode}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="gstNumber"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Shop GST Number
                        </label>
                        <Input
                          type="text"
                          name="gstNumber"
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full md:w-1/2 p-2.5 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter GST Number"
                          onChange={handleChange}
                          value={data.gstNumber}
                        />
                        {Error.gstNumber && (
                          <p className="text-red-500 text-sm mt-1">
                            {Error.gstNumber}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div className="w-full">
                          <label
                            htmlFor="File"
                            className="block text-sm font-medium text-gray-700 mb-1 "
                          >
                            License Image
                          </label>
                          {Error.LicenseImage && (
                            <p className="text-red-500 text-sm mt-1 ">
                              {Error.LicenseImage}
                            </p>
                          )}
                          
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <ImFilePicture className="text-gray-500" />
                            </div>
                            <input
                              type="file"
                              id="File"
                              accept=".pdf"
                              name="LicenseImage"
                              onChange={handleImageChange}
                              className={`w-full pl-10 pr-3 py-2 border rounded-md text-sm`}
                            />
                          </div>
                          {image  && image.type &&(
                           
                          <div className=" mt-2 grid justify-center text-center">
                           
                            <div>
                              <button onClick={(e)=> pdfViewer(e)}  className="bg-primary text-white rounded-md w-24 h-8 mt-5  ">
                               
                                Show Pdf
                              </button>
                            </div>
                          </div>
                        )}
                        </div>
                        <div>
                          <label
                            htmlFor="File"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Shop Image
                          </label>
                          {Error.Shopimage && (
                            <p className="text-red-500 text-sm mt-1">
                              {Error.Shopimage}
                            </p>
                          )}
                          
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <ImFilePicture className="text-gray-500" />
                            </div>
                            <input
                              type="file"
                              name="ShopImages"
                              id="File"
                              accept="image/*"
                              multiple
                              onChange={handleShopImageChanges}
                              className={`w-full pl-10 pr-3 py-2 border rounded-md text-sm`}
                            />
                          </div>
                           <div className="grid grid-cols-2 gap-2">
                            {
                              Shopimage.length >=4 &&(
                                <>
                                 {Shopimage.map((item,i) => (
                          <div key={i} className="bg-white rounded-lg border-2 border-dashed border-gray-300 aspect-square flex items-center justify-center hover:border-blue-400 transition-colors cursor-pointer">
                            <div className="text-center text-gray-400 object-fill">
                              <img src={URL.createObjectURL(item)} className='object-fill'/>
                              
                            </div>
                          </div>
                        ))}
                                </>
                                
                              )
                            }
                        
                      </div>
                        </div>

                        <div className="md:col-span-2 mt-4">
                          <button
                            type="submit"
                            className="w-full bg-primary text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Rentalform;
