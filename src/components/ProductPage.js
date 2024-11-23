import React from 'react';
import './ProductPage.css';
import Footer from './Footer';
import StarRating from './StarRating';

function ProductsPage() {
  return (
    <>
      <div className="page-container">
        {/* Main Content */}
        <div className="product-section">
          <h2 className="product-header">Our Discord Services</h2>

          {/* Product List Section */}
          <section className="product-list">
            {/* Product 1: Graphics */}
            <div className="product-card">
              <div className="product-image">
                <img src="/images/graphics.png" alt="Graphics Design for Discord" />
              </div>
              <div className="product-details">
                <h3>Graphics Design</h3>
                <StarRating rating={5} /> {/* 5-star rating */}
                <p>
                  Stunning graphics for your Discord server, including banners, icons, and role images. 
                  Make your server visually stand out and attract more members.
                </p>
              </div>
              <button className="test">Test it out</button>
            </div>

            {/* Product 2: Custom Bot */}
            <div className="product-card">
              <div className="product-image">
                <img src="/images/custom-bot.png" alt="Custom Discord Bot Development" />
              </div>
              <div className="product-details">
                <h3>Custom Bot Development</h3>
                <StarRating rating={4} /> {/* 4.5-star rating */}
                <p>
                  Get a custom-built bot designed to handle moderation, fun commands, economy systems, and more, 
                  tailored to your Discord server's needs.
                </p>
              </div>
              <button className="test">Test it out</button>
            </div>

            {/* Product 3: Bot Hosting */}
            <div className="product-card">
              <div className="product-image">
                <img src="/images/bot-hosting.png" alt="Reliable Bot Hosting" />
              </div>
              <div className="product-details">
                <h3>Bot Hosting</h3>
                <StarRating rating={4} /> {/* 4-star rating */}
                <p>
                  Host your Discord bot with 24/7 uptime and seamless performance. 
                  We ensure your bot stays online and ready for your community at all times.
                </p>
              </div>
              <button className="test">Test it out</button>
            </div>

            {/* Product 4: Server Setup */}
            <div className="product-card">
              <div className="product-image">
                <img src="/images/server-setup.png" alt="Discord Server Setup" />
              </div>
              <div className="product-details">
                <h3>Server Setup</h3>
                <StarRating rating={5} /> {/* 5-star rating */}
                <p>
                  Professional Discord server setup, including roles, permissions, channels, 
                  and automations. Perfect for communities, gaming, or businesses.
                </p>
              </div>
              <button className="test">Test it out</button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;
