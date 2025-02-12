export const SelectTravelerList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A sole traveler in exploration',
        icon: '🤠',
        people: '1 Person',
    },
    {
        id: 2,
        title: 'Couple',
        desc: 'Two people in tandem',
        icon: '💑',
        people: '2 People',
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adventurers',
        icon: '🏡',
        people: '3 to 5 People',
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekers',
        icon: '🥂',
        people: '5 to 10 People',
    }
]

export const selectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stays conscious of cost',
        icon: '💴',
        budget: '$10,000 or less',
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '💰',
        budget: '$20,000 or less',
    },
    {
        id: 3,
        title: 'Luxury',
        desc: "Don't worry about cost",
        icon: '💸',
        budget: '$20,000 or more',
    },
]

export const AI_PROMPT = "Generate Travel Plan for Location: {location},  for {totalDays} day and {totalNight} night for {traveler} with a {budget} budget with Flight details, Flight Price, with Booking URL, {location} Image URL, Hotels options with Hotel Names, Hotel Address, Price, Hotel Image URL, geo coordinates, rating, descriptions and Places to visit nearby with place name, place details, place image URL, Geo coordinates, ticket prices, time to travel each of the location for {totalDays} days and {totalNight} nights with each day plan with best time to visit in JSON format."