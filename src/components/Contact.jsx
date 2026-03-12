import { useEffect, useRef } from "react";
import L from "leaflet";
import { BsFillSendFill } from "react-icons/bs";

export default function Contact() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const customSvgIcon = `
      data:image/svg+xml,
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    `;

    const map = L.map(mapRef.current, {
      center: [12.9716, 77.5946],
      zoom: 13,
      maxBoundsViscosity: 1.0,
    });

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 19,
        minZoom: 2,
        attribution: "© CARTO",
      },
    ).addTo(map);

    const customIcon = L.icon({
      iconUrl: customSvgIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    L.marker([12.9716, 77.5946], { icon: customIcon })
      .bindPopup("This is Bengaluru, IN.")
      .addTo(map);

    // cleanup (VERY important in React)
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
      <span className="md:hidden lg:hidden flex w-full mb-2 font-semibold text-3xl">
        Contact Me
      </span>
      <span className="md:hidden lg:hidden block w-10 h-1 rounded-full bg-yellow-400 mb-9"></span>
      <div className="lg:p-10 md:p-10 text-gray-100">
        {/* MAP CONTAINER */}
        <div
          ref={mapRef}
          className="hs-leaflet z-10 rounded-xl"
          style={{ height: "400px", width: "100%" }}
        />

        <section className="text-gray-700 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-neutral-50 flex">
                {" "}
                Contact Form
              </h1>
            </div>
            <div className="w-full">
              <div className="flex flex-wrap -m-2 flex-col lg:flex-row">
                <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-neutral-200"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full placeholder-neutral-300 bg-neutral-800 rounded border border-neutral-500 focus:border-neutral-50 text-base outline-none text-neutral-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm  text-neutral-200"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-neutral-800 placeholder-neutral-300 rounded border border-neutral-500 focus:border-neutral-50 text-base outline-none text-neutral-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-neutral-200"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-neutral-800 placeholder-neutral-300 rounded border border-neutral-500 focus:border-neutral-50 h-32 text-base outline-none text-neutral-50 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full justify-end flex">
                  <button
                    className="group relative flex items-center gap-2 overflow-hidden rounded-lg 
  bg-yellow-400 text-neutral-900
  lg:bg-neutral-800 lg:text-white
  px-8 py-3 text-lg font-medium shadow-lg 
  transition-transform duration-200 ease-out
  hover:-translate-y-1 
  lg:hover:bg-yellow-400 lg:hover:text-neutral-900 
  hover:shadow-yellow-400/20 
  active:scale-95 w-full lg:w-auto justify-center m-2 md:m-0 lg:m-0"
                  >
                    <span className="absolute inset-0 z-0 h-full w-full bg-gradient-to-tr from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>

                    <BsFillSendFill className="transition-transform duration-300 group-hover:rotate-12" />

                    <span className="relative z-10">Send Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
