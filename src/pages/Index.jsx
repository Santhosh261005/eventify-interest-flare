
import Header from "../components/Header";
import Hero from "../components/Hero";
import EventGrid from "../components/EventGrid";
import FilterSidebar from "../components/FilterSidebar";
import { useState } from "react";

const Index = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Header />
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filter toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="bg-white shadow-md rounded-lg px-4 py-2 flex items-center gap-2 hover:shadow-lg transition-shadow"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
              </svg>
              Filter Events
            </button>
          </div>

          {/* Sidebar */}
          <div className={`lg:block ${isFilterOpen ? 'block' : 'hidden'} lg:w-80`}>
            <FilterSidebar 
              selectedFilters={selectedFilters}
              onFilterChange={setSelectedFilters}
            />
          </div>

          {/* Main content */}
          <div className="flex-1">
            <EventGrid selectedFilters={selectedFilters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
