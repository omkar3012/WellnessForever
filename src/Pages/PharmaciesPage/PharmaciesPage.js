
import React from "react";
import axios from "axios";


export async function getServerSideProps(context) {
  var config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=19.119589364223636%2C72.89400549769186&radius=4500&type=pharmacy&key=AIzaSyC69VEBLArHFjdhyiTsMnD0O_iCkAoIUkI`,
    headers: {},
  };
  // url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordinates.latitude}%2C${coordinates.longitude}&radius=4500&type=pharmacy&key=AIzaSyC69VEBLArHFjdhyiTsMnD0O_iCkAoIUkI`,
  let getAns = await axios(config).then(function (response) {
    // console.log(JSON.stringify(response.data.results));
    return {
      data: response.data.results.map((item) => {
        return {
          name: item.name,
          address: item.vicinity,
          rating: item.rating,
        };
      }),
    };
  });
  console.log(getAns);
  return {
    props: {
      response: JSON.parse(JSON.stringify(getAns.data)),
    },
  };
}

const PharmaciesPage = ( response ) => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -m-4">
            {response.map((item) => {
              return (
                <div class="p-4 lg:w-1/3 md:w-full">
                  <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-8 h-8"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        {item.name}
                      </h2>
                      <p class="leading-relaxed text-base">
                        Address: {item.address}
                      </p>
                      <span class="text-blue-600">
                        Rating: {item.rating}
                      </span>
                      
                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PharmaciesPage;
