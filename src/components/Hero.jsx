import React, { useEffect, useState } from 'react';
import portrait from '../assets/portrait.jpg';

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const Hero = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Uppsala,se&units=metric&appid=1b2637f08cdd370553c743c1d93d7576`
        );
        const data = await response.json();
        console.log("🌤 Weather API-data:", data);
        setWeather({
          temp: Math.round(data.main.temp),
          icon: data.weather[0].icon,
          description: data.weather[0].description,
        });
      } catch (err) {
        console.error('Kunde inte hämta vädret:', err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen py-32 flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Live vädervisning */}
      {weather && (
        <div className="absolute top-20 right-6 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-md flex items-center gap-2 text-sm text-gray-800 dark:text-white shadow-md">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
            className="w-8 h-8"
          />
          <span>{weather.temp}°C – {capitalize(weather.description)}</span>
        </div>
      )}

      <img
        src={portrait}
        alt="Oscar Turell"
        className="w-40 h-40 rounded-full object-cover shadow-xl mb-6 border-4 border-white dark:border-gray-700"
      />
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
        Oscar Turell
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
        Fullstackutvecklare & problemlösare
      </p>
      <a
        href="/cv.pdf"
        download
        className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all shadow-md"
      >
        📄 Ladda ner mitt CV
      </a>
    </section>
  );
};

export default Hero;
