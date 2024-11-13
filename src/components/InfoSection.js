import React, { useEffect, useRef } from 'react'; // Import React and necessary hooks
import '../App.css'; // Import CSS file for styling

const InfoSections = () => {
  const sectionRefs = useRef([]); // Create an array of refs for each section, using useRef to store them

  useEffect(() => {
    // Use useEffect to run this code when the component mounts
    const observer = new IntersectionObserver(
      (entries) => { // Callback function runs whenever observed elements enter/leave the viewport
        entries.forEach((entry) => {
          if (entry.isIntersecting) { // Check if the element is intersecting (in view)
            entry.target.classList.add('in-view'); // Add the 'in-view' class to start the animation
          }
        });
      },
      { threshold: 0.1 } // Observer triggers when 10% of the element is visible
    );

    // Loop through each section reference and observe it with the IntersectionObserver
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section); // Observe the section if it exists
    });

    // Cleanup function to unobserve elements when the component unmounts
    return () => observer.disconnect(); // Disconnect the observer to prevent memory leaks
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div className="section-1__info-sections">
      {[
        {
          icon: '/images/cog.png',
          heading: 'Automate actions with custom bots',
          text: 'Our Discord bots can handle a wide range of tasks, from moderating chats to keeping users engaged with fun and interactive commands.',
        },
        {
          icon: '/images/discord.png',
          heading: 'Enhance your server experience',
          text: 'Custom UI components allow users to interact effortlessly with your bot, creating a seamless and engaging experience within Discord.',
        },
        {
          icon: '/images/brush.png',
          heading: 'Design a Unique Bot Experience',
          text: `We create custom Discord bots tailored to your server’s needs—automating tasks, boosting engagement, and bringing your community's vision to life`,
        },
        {
          icon: '/images/bot.png',
          heading: 'Enhance Your Server’s Functionality',
          text: 'Our bots integrate seamlessly, simplifying management and enhancing user interaction for a smooth server experience.',
        },
      ].map((section, index) => ( // Map over each section in the array to render the JSX
        <div
          key={index} // Assign a unique key for each section, required by React
          className="section-1__info-section" // Set the main class for styling
          ref={(el) => (sectionRefs.current[index] = el)} // Store each section's ref in the sectionRefs array
          style={{ transitionDelay: `${index * 0.2}s` }} // Set a staggered delay based on the index
        >
          <div className="info-icon">
            <img src={section.icon} alt="" /> {/* Display the icon image */}
          </div>
          <div className="info-heading">
            <h2>{section.heading}</h2> {/* Display the section heading */}
          </div>
          <div className="info-text">
            <p>{section.text}</p> {/* Display the section text */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoSections; // Export the component for use in other parts of the application
