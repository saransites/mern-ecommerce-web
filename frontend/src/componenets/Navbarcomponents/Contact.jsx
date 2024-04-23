import React from "react";
import Header from "../header";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="loginbg h-screen">
      <Header />
      <section id="contacts">
        <div className="contacts-container m-6 rounded p-2 text-white bg-[#2626265c] flex gap-2">
          <div className="contact-left text-center flex-grow tracking-wider self-center">
            <p className="text-[1.5rem] md:text-[2rem]">Contact Me</p>
              <p className="text-[0.8rem] md:text-[1rem]">
                name@domain.com
              </p>
              <p className="text-[0.8rem] mt-1 md:text-[1rem]">
                0123456789
              </p>
            <div className="flex justify-center mt-1">
              <div className="p-1 w-3/4 md:w-1/2 flex justify-around border rounded-full text-sm md:text-lg">
                <a href="#">
                  <FaWhatsapp className="hover:scale-110 transition-all duration-500 ease-in-out" />
                </a>
                <a href="#">
                  <FaInstagram className="hover:scale-110 transition-all duration-500 ease-in-out" />
                </a>
                <a href="#">
                  <FaTwitter className="hover:scale-110 transition-all duration-500 ease-in-out" />
                </a>
                <a href="#">
                  <FaYoutube className="hover:scale-110 transition-all duration-500 ease-in-out" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-right flex-grow py-1">
            <form className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="text"
                  className="peer/item p-1 text-[0.6rem] md:text-[1rem] px-3 w-full outline-none border border-white bg-transparent rounded"
                  required="required"
                ></input>
                <label className="rounded absolute top-2 md:top-2.5 left-3 peer-focus/item:left-2 peer-focus/item:-top-[6px] peer-valid/item:left-2 peer-valid/item:-top-[5px] peer-focus/item:px-2 text-[9px] transition-all duration-500 peer-focus/item:bg-black peer-valid/item:bg-black peer-valid/item:px-2">
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  required="required"
                  className=" p-1 px-3 w-full text-[0.6rem] md:text-[1rem] border border-white outline-none bg-transparent peer/item rounded"
                ></input>
                <label className="rounded absolute top-2 md:top-2.5 left-3 peer-focus/item:left-2 peer-focus/item:-top-[6px] peer-valid/item:left-2 peer-valid/item:-top-[6px] peer-focus/item:px-2 text-[9px] transition-all duration-500 peer-focus/item:bg-black peer-valid/item:bg-black peer-valid/item:px-2">
                  Mob-Number
                </label>
              </div>
              <div className="relative">
                <input
                id="email"
                  type="email"
                  required="required"
                  placeholder="Email Address"
                  className="email-label p-1 px-3 w-full text-[0.6rem] md:text-[1rem] outline-none border border-white bg-transparent peer/item2 rounded"
                ></input>
              </div>
              <textarea className="w-full h-24 text-[0.6rem] md:text-[1rem] resize-none border border-white bg-transparent rounded"></textarea>
              <div className="text-center my-2">
                <button className="bg-[#3e442b] p-2 rounded text-white hover:scale-105 transition-all duration-500">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
