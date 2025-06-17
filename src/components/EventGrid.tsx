
import EventCard from "./EventCard";

interface EventGridProps {
  selectedFilters: string[];
}

const EventGrid = ({ selectedFilters }: EventGridProps) => {
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Tech Innovators Conference 2024",
      date: "Dec 28, 2024",
      time: "9:00 AM",
      location: "San Francisco, CA",
      price: "$99",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      attendees: 245,
      organizer: "TechCorp"
    },
    {
      id: 2,
      title: "Startup Networking Mixer",
      date: "Dec 30, 2024",
      time: "6:00 PM",
      location: "Austin, TX",
      price: "Free",
      category: "Networking",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=400&fit=crop",
      attendees: 89,
      organizer: "StartupHub"
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      date: "Jan 5, 2025",
      time: "2:00 PM",
      location: "Virtual Event",
      price: "$49",
      category: "Business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      attendees: 156,
      organizer: "MarketPro"
    },
    {
      id: 4,
      title: "Jazz Night Live Performance",
      date: "Jan 8, 2025",
      time: "8:00 PM",
      location: "New York, NY",
      price: "$35",
      category: "Music",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop",
      attendees: 67,
      organizer: "Blue Note Club"
    },
    {
      id: 5,
      title: "Yoga & Wellness Retreat",
      date: "Jan 12, 2025",
      time: "7:00 AM",
      location: "Los Angeles, CA",
      price: "$75",
      category: "Health & Wellness",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop",
      attendees: 23,
      organizer: "Zen Studio"
    },
    {
      id: 6,
      title: "Food Truck Festival",
      date: "Jan 15, 2025",
      time: "11:00 AM",
      location: "Chicago, IL",
      price: "Free",
      category: "Food & Drink",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
      attendees: 312,
      organizer: "City Events"
    }
  ];

  // Filter events based on selected filters
  const filteredEvents = events.filter(event => {
    if (selectedFilters.length === 0) return true;
    
    return selectedFilters.some(filter => 
      event.category === filter ||
      (filter === "Free" && event.price === "Free") ||
      (filter === "Under $25" && event.price !== "Free" && parseInt(event.price.replace("$", "")) < 25) ||
      (filter === "$25-$50" && parseInt(event.price.replace("$", "")) >= 25 && parseInt(event.price.replace("$", "")) <= 50) ||
      (filter === "$50-$100" && parseInt(event.price.replace("$", "")) > 50 && parseInt(event.price.replace("$", "")) <= 100) ||
      (filter === "Over $100" && parseInt(event.price.replace("$", "")) > 100) ||
      (filter === "Virtual" && event.location.includes("Virtual")) ||
      (filter === "In-person" && !event.location.includes("Virtual"))
    );
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {selectedFilters.length > 0 ? "Filtered Events" : "Upcoming Events"}
          </h2>
          <p className="text-gray-600 mt-2">
            {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>Sort by Date</option>
            <option>Sort by Price</option>
            <option>Sort by Popularity</option>
          </select>
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No events found</h3>
          <p className="text-gray-500">Try adjusting your filters to see more events.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventGrid;
