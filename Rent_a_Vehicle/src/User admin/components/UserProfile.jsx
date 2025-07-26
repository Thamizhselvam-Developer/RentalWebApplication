import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Userprofile } from "../../Db/UserProfile";
import UserNavbar from "./UserNavbar";
import { User, Mail, Phone, MapPin, Pencil, X } from "lucide-react";
import Info from "../../assets/Profile/Interface.png";

function ProfileInfo() {
  const [show, setShow] = useState(false);
  const [getData, setGetData] = useState({});
  const id = Cookies.get("id");
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi;

  useEffect(() => {
    if (!id) return;
    userData(id);
  }, [id]);

  const userData = async (id) => {
    try {
      const response = await axios.get(`${app}userGet/` + encodeURIComponent(id));
      if (response.data && response.data[0]) {
        setGetData(response.data[0]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <>
      <UserNavbar />

      <div className="w-full min-h-screen p-6 font-Outfit bg-gray-50">
        <h2 className="text-3xl font-extrabold text-center mb-8 tracking-wide">Profile</h2>

        <div className="bg-white rounded-2xl shadow-md max-w-4xl mx-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                <User className="w-10 h-10 text-gray-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{getData.name}</h4>
              </div>
            </div>
            <button
              onClick={() => setShow(true)}
              className="flex items-center gap-2 border border-gray-300 text-sm px-4 py-2 rounded-full hover:bg-gray-100"
            >
              <Pencil className="w-4 h-4 text-gray-600" /> Edit
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-bold text-gray-500 flex items-center gap-1"><Mail size={14} /> Email</label>
              <p className="text-gray-800 mt-1">{getData.email}</p>
            </div>
            <div>
              <label className="text-sm font-bold text-gray-500 flex items-center gap-1"><Phone size={14} /> Phone</label>
              <p className="text-gray-800 mt-1">{getData.phoneNo}</p>
            </div>
            <div>
              <label className="text-sm font-bold text-gray-500 flex items-center gap-1"><MapPin size={14} /> Address</label>
              <p className="text-gray-800 mt-1">{getData.Address}</p>
            </div>
            <div>
              <label className="text-sm font-bold text-gray-500">City / State</label>
              <p className="text-gray-800 mt-1">{getData.city}, {getData.state}</p>
            </div>
            <div>
              <label className="text-sm font-bold text-gray-500">Postal Code</label>
              <p className="text-gray-800 mt-1">{getData.pincode}</p>
            </div>
          </div>
        </div>

        {show && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 w-full max-w-xl shadow-lg relative">
              <button
                onClick={() => setShow(false)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center"
              >
                <X className="text-gray-500" />
              </button>
              <h3 className="text-xl font-bold mb-4 text-center">Edit Profile</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold">First Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold">Last Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold">Phone</label>
                  <input
                    type="text"
                    className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-red-500"
                  />
                </div>
              </form>
              <div className="flex justify-end mt-6">
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileInfo;
