/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GIMINI_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
   export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: New York USA,  for 3 days and 2 nights for family with a luxury budget with Flight details, Flight Price, with Booking URL, New York USA Image URL, Hotels options with Hotel Names, Hotel Address, Price, Hotel Image URL, geo coordinates, rating, descriptions and Places to visit nearby with place name, place details, place image URL, Geo coordinates, ticket prices, time to travel each of the location for 3 days and 2 nights with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"travel_plan\": {\n    \"location\": \"New York City, USA\",\n    \"duration\": \"3 days and 2 nights\",\n    \"budget\": \"luxury\",\n    \"flight_details\": {\n      \"airline\": \"Delta Airlines\",\n      \"flight_number\": \"DL1234\",\n      \"departure_city\": \"Los Angeles\",\n      \"arrival_city\": \"New York City\",\n      \"departure_date\": \"2024-03-15\",\n      \"arrival_date\": \"2024-03-15\",\n      \"departure_time\": \"10:00 AM\",\n      \"arrival_time\": \"1:00 PM\",\n      \"price\": \"$500\",\n      \"booking_url\": \"https://www.delta.com/\"\n    },\n    \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/New_York_City_skyline_from_Brooklyn_Bridge_Park.jpg/1280px-New_York_City_skyline_from_Brooklyn_Bridge_Park.jpg\",\n    \"hotels\": [\n      {\n        \"name\": \"The Peninsula New York\",\n        \"address\": \"700 Fifth Avenue, New York, NY 10019\",\n        \"price\": \"$1,500 per night\",\n        \"image_url\": \"https://www.thepeninsula.com/en/new-york/images/gallery/hotel-exterior.jpg\",\n        \"geo_coordinates\": {\n          \"latitude\": 40.7580,\n          \"longitude\": -73.9855\n        },\n        \"rating\": 4.5,\n        \"description\": \"A luxurious hotel located in Midtown Manhattan, known for its elegant rooms and exceptional service.\"\n      },\n      {\n        \"name\": \"The Ritz-Carlton New York, Central Park\",\n        \"address\": \"50 Central Park South, New York, NY 10019\",\n        \"price\": \"$1,200 per night\",\n        \"image_url\": \"https://www.ritzcarlton.com/en/hotels/new-york/central-park/images/hotel-exterior.jpg\",\n        \"geo_coordinates\": {\n          \"latitude\": 40.7649,\n          \"longitude\": -73.9771\n        },\n        \"rating\": 4.7,\n        \"description\": \"A sophisticated hotel offering stunning views of Central Park and luxurious amenities.\"\n      }\n    ],\n    \"itinerary\": [\n      {\n        \"day\": 1,\n        \"date\": \"2024-03-15\",\n        \"title\": \"Arrival and Midtown Exploration\",\n        \"description\": \"After arriving at JFK Airport, take a luxurious car service to The Peninsula New York. Unwind in your luxurious room and enjoy the hotel's amenities. In the afternoon, stroll through the bustling streets of Midtown Manhattan. Visit Rockefeller Center and take the elevator to the Top of the Rock for panoramic city views. Enjoy dinner at a Michelin-starred restaurant in the area.\"\n        \"places\": [\n          {\n            \"name\": \"The Peninsula New York\",\n            \"details\": \"Luxurious hotel with stunning views and exceptional service.\",\n            \"image_url\": \"https://www.thepeninsula.com/en/new-york/images/gallery/hotel-exterior.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7580,\n              \"longitude\": -73.9855\n            },\n            \"ticket_price\": \"N/A\",\n            \"time_to_travel\": \"N/A\"\n          },\n          {\n            \"name\": \"Rockefeller Center\",\n            \"details\": \"Iconic skyscraper with the Top of the Rock observation deck for panoramic city views.\",\n            \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Rockefeller_Center_from_30_Rock.jpg/1280px-Rockefeller_Center_from_30_Rock.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7580,\n              \"longitude\": -73.9787\n            },\n            \"ticket_price\": \"$39\",\n            \"time_to_travel\": \"1 hour\"\n          }\n        ],\n        \"best_time_to_visit\": \"Afternoon\"\n      },\n      {\n        \"day\": 2,\n        \"date\": \"2024-03-16\",\n        \"title\": \"Central Park and Broadway\",\n        \"description\": \"Start your day with a leisurely stroll through Central Park. Rent a bike and explore its beautiful paths and gardens. Have a picnic lunch in the park. In the afternoon, experience the magic of Broadway. Catch a performance at a world-renowned theater like the Majestic Theatre or the Gershwin Theatre.\",\n        \"places\": [\n          {\n            \"name\": \"Central Park\",\n            \"details\": \"Vast green space in the heart of Manhattan, offering various activities like biking, picnicking, and exploring.\",\n            \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Central_Park_%281996%29.jpg/1280px-Central_Park_%281996%29.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7829,\n              \"longitude\": -73.9654\n            },\n            \"ticket_price\": \"N/A\",\n            \"time_to_travel\": \"2-3 hours\"\n          },\n          {\n            \"name\": \"Majestic Theatre\",\n            \"details\": \"Historic Broadway theatre known for its stunning architecture and popular shows.\",\n            \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Majestic_Theatre_NYC.jpg/1280px-Majestic_Theatre_NYC.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7578,\n              \"longitude\": -73.9847\n            },\n            \"ticket_price\": \"Varies depending on show\",\n            \"time_to_travel\": \"2-3 hours\"\n          }\n        ],\n        \"best_time_to_visit\": \"All day\"\n      },\n      {\n        \"day\": 3,\n        \"date\": \"2024-03-17\",\n        \"title\": \"Luxury Shopping and Fine Dining\",\n        \"description\": \"Indulge in world-class shopping along Fifth Avenue. Visit designer boutiques like Gucci, Chanel, and Tiffany & Co. After lunch at a renowned restaurant, visit the Museum of Modern Art (MoMA) to admire iconic works of art. Enjoy a farewell dinner at a sophisticated restaurant in the Upper East Side.\",\n        \"places\": [\n          {\n            \"name\": \"Fifth Avenue\",\n            \"details\": \"Famous shopping street in Midtown Manhattan, home to luxury stores and flagship locations.\",\n            \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/5th_Avenue_New_York_City.jpg/1280px-5th_Avenue_New_York_City.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7580,\n              \"longitude\": -73.9855\n            },\n            \"ticket_price\": \"N/A\",\n            \"time_to_travel\": \"2-3 hours\"\n          },\n          {\n            \"name\": \"Museum of Modern Art (MoMA)\",\n            \"details\": \"World-renowned museum showcasing modern and contemporary art.\",\n            \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MoMA_New_York_City_Exterior.jpg/1280px-MoMA_New_York_City_Exterior.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7614,\n              \"longitude\": -73.9772\n            },\n            \"ticket_price\": \"$25\",\n            \"time_to_travel\": \"2-3 hours\"\n          }\n        ],\n        \"best_time_to_visit\": \"Morning and afternoon\"\n      }\n    ]\n  }\n}\n```\n\n**Please note:** This is a sample itinerary and can be customized to your family's specific interests and preferences. The prices for flights, hotels, and activities may vary depending on the season, availability, and booking time. \n"},
          ],
        },
      ],
    });
  
    //const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
   // console.log(result.response.text());
 