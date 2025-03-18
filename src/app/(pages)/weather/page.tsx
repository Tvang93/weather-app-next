import React from "react";

const WeatherPage = () => {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div>
          <img src="/" alt="" />
          <p>a</p>
        </div>
        <div>
          <h1>Stockton, CA</h1>
          <p>As of 10:24am</p>
          <div className="flex">
            <h1>65</h1>
            <button>F</button>
            <button>C</button>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <div>
              <button>
                <img src="/" alt="" />
              </button>
            </div>
            <div>
              <input type="text" placeholder="Search a City" />
            </div>
            <div>
              <button>
                <img src="/" alt="" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div className="flex flex-col items-center">
                <h1>
                  <u>High</u>
                </h1>
                <h2>65</h2>
              </div>
              <div>
                <img src="/" alt="" />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <h1>
                  <u>High</u>
                </h1>
                <h2>65</h2>
              </div>
              <div>
                <img src="/" alt="" />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <h1>
                  <u>High</u>
                </h1>
                <h2>65</h2>
              </div>
              <div>
                <img src="/" alt="" />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <h1>
                  <u>High</u>
                </h1>
                <h2>65</h2>
              </div>
              <div>
                <img src="/" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>5-Day Forecast</h1>
        <div className="grid grid-cols-5">
          <div>
            <div className="flex flex-col">
              <h1>Today</h1>
              <img src="/" alt="" />
              <p>H: 65 F</p>
              <p>L: 49 F</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <h1>Today</h1>
              <img src="/" alt="" />
              <p>H: 65 F</p>
              <p>L: 49 F</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <h1>Today</h1>
              <img src="/" alt="" />
              <p>H: 65 F</p>
              <p>L: 49 F</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <h1>Today</h1>
              <img src="/" alt="" />
              <p>H: 65 F</p>
              <p>L: 49 F</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <h1>Today</h1>
              <img src="/" alt="" />
              <p>H: 65 F</p>
              <p>L: 49 F</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
