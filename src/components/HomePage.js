import React, { useState } from 'react';
import InfoSections from './InfoSection';
import Modal from './Modal';
import Footer from './Footer';
import './HomePage.css'; 

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleContactClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <div className="section-1">
        <div className="section-1__main">
          <div className="section-1__left">
            <h1>
              Custom built <strong>Discord bots</strong>
              <br /> for your server.
            </h1>
            <p>
              Our team creates <strong>custom Discord bots</strong> to <strong>elevate your server experience</strong>. From <strong>automating tasks</strong> and <strong>moderating chats</strong> to enhancing <strong>community engagement</strong>, our bots are crafted to meet your server's unique needs.
            </p>
            <a href="https://discord.gg/FryzqPNX8a" target="_blank" rel="noopener noreferrer">
              <button className="join-server">Join our server</button>
            </a>
          </div>
          <div className="section-1__right">
            <img className="section-1__img" src="/images/main.png" alt="Discord bots" />
          </div>
        </div>

        {/* Modal Component */}
        <Modal showModal={showModal} onClose={closeModal} />

        <div className="section-1__secondary-container">
          <div className="section-1__secondary">
            <div className="section-1__secondary-text">
              <p>How they work</p>
              <h1>Bring together all the tools you need to enhance your Discord server</h1>
            </div>
            <InfoSections />
          </div>
        </div>
        <div className="slider">
          <div className="slider-slide">
            <p>EASY TO IMPLEMENT</p>
            <p>•</p>
            <p>CUSTOM BUILT</p>
            <p>•</p>
            <p>AUTOMATED</p>
            <p>•</p>
            <p>EASY TO IMPLEMENT</p>
            <p>•</p>
            <p>CUSTOM BUILT</p>
            <p>•</p>
            <p>AUTOMATED</p>
            <p>•</p>
          </div>
          <div className="slider-slide">
            <p>EASY TO IMPLEMENT</p>
            <p>•</p>
            <p>CUSTOM BUILT</p>
            <p>•</p>
            <p>AUTOMATED</p>
            <p>•</p>
            <p>EASY TO IMPLEMENT</p>
            <p>•</p>
            <p>CUSTOM BUILT</p>
            <p>•</p>
            <p>AUTOMATED</p>
            <p>•</p>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="section-2__container">
          <div className="section-2__header">
            <h1>OUR PRODUCTS</h1>
            <p>
              Our <strong>Discord bots</strong> can perform a variety of tasks, from <strong>moderating chats</strong> to <strong>engaging users</strong> with fun commands. With our <strong>APIs</strong>, you can <strong>listen for events</strong>, <strong>manage roles</strong>, and <strong>automate actions</strong> effortlessly.
            </p>
          </div>
          <div className="section-2__product-container">
            <div className="section-2__product-1">
              <div className="section-2__product-1__left">
                <img src="/images/server.png" alt="Product" />
              </div>
              <div className="section-2__product-1__right">
                <h1>Discord Server Solutions</h1>
                <p>
                  Our <strong>Discord Server Setup</strong> services offer everything you need to create a fully optimized, engaging community. Whether you're setting up a new server, upgrading an existing one, or adding a custom bot, we provide personalized solutions to make your server stand out.
                </p>
                <p>
                  <strong>Key Features:</strong>
                </p>
                <ul>
                  <li><strong>Custom Server Setup</strong> - Tailored server configurations to match your community's needs and goals.</li>
                  <li><strong>Server Upgrades</strong> - Enhance your server with advanced features, improved performance, and better user engagement tools.</li>
                  <li><strong>Custom Bots</strong> - We create unique bots that automate tasks, engage users, and improve server management.</li>
                  <li><strong>Bot Hosting</strong> - Reliable and secure hosting for your custom bots, ensuring they run smoothly 24/7.</li>
                  <li><strong>Personalized Visuals & Design</strong> - Customized server graphics, layouts, and themes that reflect your community’s identity and enhance user experience.</li>
                </ul>
              </div>
            </div>
            <div className="section-2__product-1">
              <div className="section-2__product-1__right">
                <h1>Shopper</h1>
                <p>
                  Our <strong>Discord Shopper Bot</strong> brings a seamless shopping experience directly to your Discord server! Designed to simplify <strong>online shopping</strong> and increase <strong>user engagement</strong>, this powerful bot helps your community <strong>browse</strong>, <strong>compare</strong>, and <strong>purchase</strong> products with ease.
                </p>
                <p>
                  <strong>Key Features:</strong>
                </p>
                <ul>
                  <li><strong>Easy Product Browsing</strong> - Users can explore a catalog of products in a streamlined format.</li>
                  <li><strong>Payment Integration</strong> - The bot integrates with popular payment platforms, allowing users to complete transactions right within Discord.</li>
                </ul>
              </div>
              <div className="section-2__product-1__left">
                <img src="/images/temp-img.png" alt="Product" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
