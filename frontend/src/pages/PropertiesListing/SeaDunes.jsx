import React from "react";
import PropertyGallery from "../../components/PropertyGallery";
import { MdFamilyRestroom, MdOutlineDoorBack } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
const mapSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6542.167370522866!2d-86.61702000000001!3d30.397547!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88913f2be92a8295%3A0x10c13fdf4734afaa!2sOkaloosa%20Island%20Beach%20Access%20Four%2C%20Jerry%20Melvin%20Beachwalk!5e1!3m2!1sen!2sin!4v1761776961400!5m2!1sen!2sin" ;


const SeaDunesBeachFront = () => {
  const images = [
    "https://www.coastaldreamrentals.com/img/property-img-1/img-7.jpg",
    "https://www.coastaldreamrentals.com/img/property-img-1/img-2.jpg",
    "https://www.coastaldreamrentals.com/img/property-img-1/img-3.jpg",
    "https://www.coastaldreamrentals.com/img/property-img-1/img-4.jpg",
  ];
  const Kitchen = [
    "Blender",
    "Can Opener",
    "Coffee Maker",
    "Counter",
    "Dishes",
    "Dishwasher",
    "Eat-in",
    "Garbage Disposal",
    "Microwave",
    "Pots",
    "Refrigerator",
    "Stove",
    "Toaster",
    "Utensils",
    "Eat at Bar 4 bar stools",
  ];
  const laundry = [
    "Ironing Board",
    "Linens",
    "Towels",
    "Washer/Dryer",

  ];
  const inside = [
    "Cable",
    "Ceiling Fans",
    "Central Air",
    "Heat",
    "Internet",
    "TV",
    "Vacuum",
    "Wireless",
  ];
  const outside = [
    "BBQ Grill",
    "Community Pool",
    "Garage",
    "Hot Tub",
    "Outside Showe",
    "wrap around balcony",

  ];
  const activity = [
    "Beach",
    "Canoe Rental",
    "Fishing",
    "Kayaking",
    "ParaSailing",
    "Restaurants",
    "Swimming",
  ];

  return (
    <>
      {/* ✅ GALLERY SECTION */}
      <div className="relative w-full">
        <PropertyGallery images={images} />

        {/* ✅ This adds a gradient overlay for better visual depth */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* ✅ MAIN CONTENT (Overlapping the gallery) */}
      <div className="relative z-20 -mt-20 max-w-7xl mx-auto mb-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8">
          {/* TITLE & INFO CARD (OVERLAP EFFECT) */}
          <div className="bg-white p-6 rounded-2xl shadow-xl relative z-30">
            <p className="text-gray-500 text-sm mb-2">
              Florida • Okaloosa Island • PropertyID 7418
            </p>
            <h1 className="text-4xl font-bold mb-4">Sea Dunes 404</h1>

            <div className="flex justify-between max-w-full text-center">
              <div>
                <div className="text-2xl "><MdFamilyRestroom className="ml-4" /></div>
                <p className="text-black font-semibold">Sleeps 8</p>
              </div>
              <div>
                <div className="text-2xl"><MdOutlineDoorBack className="ml-7" /></div>
                <p className="text-black font-semibold">Bedrooms 3</p>
              </div>
              <div>
                <div className="text-2xl"><LuBath className="ml-7" /></div>
                <p className="text-black font-semibold">Bathrooms 3</p>
              </div>
              <div>
                <div className="text-2xl"><FaRegBuilding className="ml-3" /></div>
                <p className="text-black font-semibold">Floors </p>
              </div>
            </div>
            <div className="sticky top-37 z-40 bg-white p-4 mt-10 rounded-2xl shadow-md">
              <div className="flex justify-between overflow-x-auto text-gray-600 font-medium">
                <button className="border-b-2 border-black pb-2 text-black">
                  Description
                </button>
                <button>Amenities</button>
                <button>Reviews</button>
                <button>Video</button>
                <button>Map</button>
              </div>
            </div>
            <div className="bg-white p-6 text-black">
              <h2 className="text-2xl font-semibold mb-2">Description</h2>

              <p className="text-black leading-relaxed">
                <b>Managed by Coastal Dream Rentals</b> <br />
                Welcome to your perfect beach getaway! Come and relax in this spacious
                1,450-square-foot condo with stunning panoramic views — the ideal
                place to unwind after a beautiful day on the world’s most breathtaking
                beaches. In the morning, step out onto the private patio just off the
                master suite and enjoy the peaceful sunrise with a cup of coffee in hand.
              </p>

              <p className="text-black leading-relaxed mt-3">
                This beautifully appointed 3-bedroom, 3-bathroom condo comfortably sleeps 8
                guests, making it an ideal spot for families or groups of friends. Located
                in Sea Dunes, the condo overlooks the pristine shoreline and includes
                complimentary beach service from March through October.
              </p>

              <p className="text-black leading-relaxed mt-3">
                Conveniently situated just 3/4 of a mile west of the main bridge, you’ll find
                excellent restaurants, fun attractions for the kids, and vibrant nightlife for
                adults. Drive just 10–15 minutes further east to reach the famous Destin Bridge,
                with Crab Island to the north and Emerald Grande and Destin Harbor to the south.
              </p>

              <p className="text-black leading-relaxed mt-3">
                Enjoy the heated community pool during the cooler months and relax in the hot tub any time of year.
              </p>

              <p className="text-black leading-relaxed mt-3">
                Inside, the master suite features a cozy queen bed, private en-suite bathroom
                with a Jacuzzi tub, stand-up shower, and double vanity.
              </p>

              <p className="text-black leading-relaxed mt-3">
                Bedroom 2 offers another queen bed and its own full bathroom with a tub/shower combo.
              </p>

              <p className="text-black leading-relaxed mt-3">
                Bedroom 3 has two double beds and a full bath accessible from both the hallway
                and the bedroom — great for guests of all ages.
              </p>

              <p className="text-black leading-relaxed mt-3">
                The living area is designed for comfort, with newly updated furniture and
                breathtaking Gulf views. Step out onto the furnished patio to catch unforgettable
                sunsets while enjoying your favorite drink.
              </p>

              <p className="text-black leading-relaxed mt-3">
                You’ll also love the fully stocked kitchen, complete with everything you need
                to prepare and serve breakfast, lunch, or dinner with ease.
              </p>

              <p className="text-black leading-relaxed mt-3">
                While Coastal Dream Rentals (CDR) provides an initial supply of essentials —
                toilet paper, paper towels, coffee filters, hand soap, and trash bags — to get
                you through the first 24 hours, we recommend bringing a few extras for a
                comfortable stay:
              </p>

              {/* --- Bullet List --- */}
              <ul className="list-disc pl-6 text-black mt-3 space-y-1">
                <li>Extra paper towels and toilet paper</li>
                <li>Toiletries and personal care items</li>
                <li>Condiments, spices, and cooking oil</li>
                <li>Dishwashing pods and laundry detergent</li>
                <li>Coffee and filters</li>
                <li>Beach towels, toys, and sunscreen</li>
                <li>Any other items you love for a perfect beach vacation</li>
              </ul>

              <p className="text-black leading-relaxed mt-3">
                So go ahead — pack your bags and make memories at Sea Dunes 404, right here
                on the world’s most beautiful beaches. We can’t wait to host you!
              </p>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Property Details</h2>
            <h2 className="bg-[#185089] text-white p-3 rounded-2xl text-lg ml-3 mt-4">KITCHEN FEATURES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-gray-700 pt-6 ml-10">
              {Kitchen.map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <FaCheck className="w-5 h-5 text-gray-900" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <h2 className="bg-[#185089] text-white p-3 rounded-2xl text-lg ml-3 mt-4">LAUNDRY FEATURES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-gray-700 pt-6 ml-10">
              {laundry.map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <FaCheck className="w-5 h-5 text-gray-900" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <h2 className="bg-[#185089] text-white p-3 rounded-2xl text-lg ml-3 mt-4">INSIDE FEATURES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-gray-700 pt-6 ml-10">
              {inside.map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <FaCheck className="w-5 h-5 text-gray-900" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <h2 className="bg-[#185089] text-white p-3 rounded-2xl text-lg ml-3 mt-4">OUTSIDE FEATURES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-gray-700 pt-6 ml-10">
              {outside.map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <FaCheck className="w-5 h-5 text-gray-900" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <h2 className="bg-[#185089] text-white p-3 rounded-2xl text-lg ml-3 mt-4">ACTIVITY FEATURES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-gray-700 pt-6 ml-10">
              {activity.map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <FaCheck className="w-5 h-5 text-gray-900" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <iframe width="700" height="480" src="https://www.youtube.com/embed/LDH0qO8mfzE" 
            title="Sea Dunes 404, Fort Walton Beach, FL" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className="map-container pt-10">
                 <iframe
                   src={mapSrc}
                   width="100%"
                   height="100%"
                   style={{ border: 0 }}
                   allowFullScreen={true}
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Google Maps Location"
                 ></iframe>
               </div>
          </div>

        </div>

        {/* ✅ RIGHT STICKY BOX */}
        <div className="relative">
          <div className="sticky top-38 bg-white shadow-lg rounded-2xl p-6">
            {/* Profile header */}
            <div className="text-center mb-4">
              <div className="bg-sky-400 h-16 w-full rounded-t-xl relative">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="manager"
                  className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 top-6"
                />
              </div>
            </div>

            {/* Booking form */}
            <div className="mt-12 space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Check in"
                  className="border p-2 rounded w-1/2"
                />
                <input
                  type="text"
                  placeholder="Check out"
                  className="border p-2 rounded w-1/2"
                />
              </div>

              <button className="bg-lime-500 text-white font-semibold w-full py-3 rounded-lg">
                Send Inquiry
              </button>

              <button className="bg-blue-500 text-white font-semibold w-full py-3 rounded-lg">
                Book Now
              </button>
            </div>

            <div className="text-center mt-6 border-t pt-4">
              <p className="font-semibold">Coastal Dream Rentals</p>
              <p className="text-pink-600 font-bold">📞 850-974-4757</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeaDunesBeachFront;
