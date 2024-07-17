// src/Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-8 px-4 text-gray-700">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/4 mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <img
            src="./icons/bacrlogo.webp"
            alt="Bacardi Logo"
            className="mb-1"
          />
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <p className="uppercase font-semibold">About Us</p>
          <ul className="mt-2 space-y-1">
            <li>About Bacardi</li>
            <li>Contact Us</li>
            <li>Media</li>
            <li>Career</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <p className="uppercase font-semibold">Links</p>
          <ul className="mt-2 space-y-1">
            <li>Home</li>
            <li>Flavour</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div
          className="w-full md:w-1/4 mb-4 md:mb-0  flex flex-col items-center md:items-start"
          id="contact"
        >
          <p className="uppercase font-semibold">Stay in the Know</p>
          <input
            type="email"
            placeholder="Enter email address"
            className="mt-2 p-2 border border-gray-400 rounded"
          />

          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
            <p className="uppercase font-semibold mb-4 mt-2">Follow Us</p>
            <div className="flex space-x-4">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p>Copyright © uixreesu.com All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
