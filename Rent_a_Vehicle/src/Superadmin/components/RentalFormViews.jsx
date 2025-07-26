import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Loader from "../../@UI/loader";
import Ownerinfo from "./Ownerinfo";

const ShopApprovalForm = ({ Close, data, onStatusUpdate }) => {
  console.log(data);
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi;
  console.log(data);
  
  const [loadOwnerInfo, setLoadOwnerInfo] = useState(false);
  const [shopImage, setShopImages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const ShopId = Cookies.get("id");

  const ShopImage = async () => {
    const response = await axios.get(`${app}ShopImage/${data.shop_id}`);
    setShopImages(response.data);
  };

  useEffect(() => {
    ShopImage();
  }, []);

  const Status = async (num, data) => {
    setIsProcessing(true);
    const ShopID = data.shop_id;

    try {
    const response =  await axios.post(`${app}status/${num}/${ShopID}`)
       
          console.log(response);
          if (response.data == "Updated isApproved") {
           await onStatusUpdate();
          }
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const pdfViewer = (e) => {
    e.preventDefault();
    const fileURL = `${app}uploads/pdf/${data.license_pdf_name}`;
    window.open(fileURL, '_blank');
  };

  const StatusIcon = ({ type }) => {
    if (type === 'pending') {
      return (
        <div className="flex items-center space-x-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
          <span className="text-amber-700 text-sm font-medium">Pending Review</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center ml-[200px] justify-center p-4 z-50">
      <div className="max-w-6xl  w-full max-h-[95vh] overflow-auto bg-white rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 rounded-t-2xl z-50">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Shop Registration Review</h1>
                <p className="text-slate-300 text-sm">Application ID: RNT-2025-{data.shop_id}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <StatusIcon type="pending" />
              <button 
                onClick={Close} 
                className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Owner Details Section */}
          <div className="bg-slate-50 p-8 border-r border-slate-200">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-slate-800">Owner Information</h2>
            </div>

            <div className="space-y-6">
              {/* Owner Photo */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-lg -z-10">
                    <img 
                      src={`${app}uploads/${data.OwnerImage}`}
                      alt="Owner"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 24 24' fill='%23e2e8f0'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {[
                { icon: "👤", label: "Full Name", value: data.owner_name },
                { icon: "📱", label: "Contact Number", value: data.phoneNumber },
                { icon: "✉️", label: "Email Address", value: data.email },
                { icon: "🏠", label: "Residential Address", value: data.owner_address },
                { icon: "🆔", label: "Aadhaar Number", value: data.aadhaarNumber }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-500 mb-1">{item.label}</p>
                      <p className="text-slate-800 font-medium break-words">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shop Details Section */}
          <div className="p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-slate-800">Shop Information</h2>
            </div>

            <div className="space-y-6">
              {/* Shop Name */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Shop Name</p>
                    <p className="text-lg font-semibold text-slate-800">{data.shop_name}</p>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="font-semibold text-slate-800">Shop Address</h3>
                </div>
                
                <div className="space-y-3">
                  <p className="text-slate-700">{data.shop_address}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">City:</span>
                      <span className="ml-2 font-medium text-slate-700">{data.city}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">State:</span>
                      <span className="ml-2 font-medium text-slate-700">{data.state}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Pin Code:</span>
                      <span className="ml-2 font-medium text-slate-700">{data.pincode}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GST Number */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">GST Number</p>
                    <p className="font-mono text-slate-800 font-medium">{data.gst_no}</p>
                  </div>
                </div>
              </div>

              {/* Documents and Images */}
              <div className="grid grid-cols-2 gap-6">
                {/* License PDF */}
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    License Document
                  </h4>
                  <button 
                    onClick={pdfViewer}
                    className="w-full px-4 py-3 bg-red-50 border-2 border-dashed border-red-200 rounded-lg hover:bg-red-100 transition-colors group"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="text-red-700 font-medium">View PDF</span>
                    </div>
                  </button>
                </div>

                {/* Shop Images */}
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Shop Images ({shopImage.length})
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {shopImage.slice(0, 4).map((item, index) => (
                      <div key={index} className="aspect-square bg-slate-100 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-300 transition-colors group cursor-pointer">
                        <img
                          src={`${app}uploads/${item.image_name}`}
                          alt={`Shop ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          onError={(e) => {
                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='%23e2e8f0'%3E%3Cpath d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'/%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="sticky bottom-0 bg-white border-t border-slate-200 p-6 rounded-b-2xl">
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => Status(0, data)}
              disabled={isProcessing}
              className="px-8 py-3 rounded-xl font-semibold bg-red-50 text-red-700 border-2 border-red-200 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 min-w-[140px] justify-center"
            >
              {isProcessing ? (
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Reject</span>
                </>
              )}
            </button>
            
            <button 
              onClick={() => Status(1, data)}
              disabled={isProcessing}
              className="px-8 py-3 rounded-xl font-semibold bg-emerald-50 text-emerald-700 border-2 border-emerald-200 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 min-w-[140px] justify-center"
            >
              {isProcessing ? (
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Approve</span>
                </>
              )}
            </button>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-slate-500">
              Review all information carefully before making a decision
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopApprovalForm;