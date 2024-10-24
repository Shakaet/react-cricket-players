import React from 'react';
import PropTypes from 'prop-types';
import picture from "../assets/logo-footer.png"
const Footer = props => {
    return (
        <div>


<div className="relative">
      {/* Newsletter Section */}
      <section className=" max-w-5xl mt-20 mx-auto rounded-lg relative -mb-30 z-20 bg-gradient-to-r from-blue-100 to-yellow-100 py-12 -mb-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
          <p className="text-[#131313B3] font-bold mt-4">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="mt-6">
            <form className="flex justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-6 py-2 rounded-r-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 bg-gray-900 text-white pt-24 pb-12">

        <img className='mx-auto mb-10' src={picture}></img>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Us Section */}
          <div className='ms-5'>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section (Repeated in Footer) */}
          <div className='mr-5'>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-6 py-2 rounded-r-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 mt-12">
          <p>&copy;2024 Your Company All Rights Reserved.</p>
        </div>
      </footer>
    </div>




            
        </div>
    );
};

Footer.propTypes = {
    
};

export default Footer;