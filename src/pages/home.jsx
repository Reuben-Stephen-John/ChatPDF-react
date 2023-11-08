
import indiaLawImage from "../assets/indiawlaw.jpg";
import React from "react"; 
import './home.css'; // Import the CSS file



function HomePage() {
  const containerStyle = {
    backgroundImage: `url(${indiaLawImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const overlayStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  };

  const cardsContainerStyle = {
    display: "flex",
    flexDirection: "row", // Display cards side by side
    justifyContent: "center", // Center-align the cards horizontally
    gap: "10rem", // Adjust the gap between the cards
    position: "absolute",
    bottom: "5rem", // Position the cards at the bottom with some margin
  };

  const cardStyle = {
    flex: "1",
    width: "20rem", // Set a fixed width for all cards
    height: "20rem", // Set a fixed height for all cards 
    opacity: 0.6,
  }; 

  const mediaQueryStyle = {
    "@media (max-width: 768px)": {
      width: "100%", // When screen width is 768px or less, set card width to 100%
    },
    "@media (min-width: 769px)": {
      width: "400px", // When screen width is 769px or more, set card width to 400px
    },
  };

  const headerStyle = {
    marginBottom: "20rem", 
    fontSize: "4rem", 
    fontFamily: "'Times New Roman', serif",  
    opacity: 0.8, 
  };
  
  const buttonStyle = {
    marginTop: "2rem", // Adjust the margin-top to push the button down
    padding: "1rem 2rem", // Increase button size by adding padding
    
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div className="h-screen flex items-center  flex-col justify-center relative">
        <div className="text-gray-100 text-4xl font-semibold text-center" style={headerStyle}>
          NIYAM SAHAYAK
          <div style={buttonStyle}>
          <a
  href="/search"
  class="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-5 mb-2"
> 
  Get Started!
</a>

  <blockquote style={{ 
    fontSize: '1.5rem',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'light-yellow',
    //paddingLeft: '1rem',
    maxWidth: '600px',
    marginBottom: '-1rem',  
    marginTop:'2rem'// Add margin only at the bottom,
}}>
    <p style={{ fontSize: '2rem' }}>
        "Your Legal Ally!, Expert Guidance, Just a Chat Away"
    </p>
</blockquote>

          </div>
        </div>
      

        <div style={cardsContainerStyle}>
          {/* Card 1 */}
          <div
            class="max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={cardStyle}
          >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                FACT-CHECK
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Identification of relevant articles based on facts
            </p>
            <a
              href="/search"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Try now
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>

          {/* Card 2 */}
          <div
            class="max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={cardStyle}
          >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                COMPLETION
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Fills in missing details with accurate legal terms
            </p>
            <a
              href="/search"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Try now
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>

          {/* Card 3 */}
          <div
            class="max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={cardStyle}
          >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                JUDGEMENT
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Predicting if claims/petitions will be accepted/rejected
            </p>
            <a
              href="/search"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Try now
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
