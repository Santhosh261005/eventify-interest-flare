
interface FilterSidebarProps {
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
}

const FilterSidebar = ({ selectedFilters, onFilterChange }: FilterSidebarProps) => {
  const categories = [
    "Technology", "Business", "Arts & Culture", "Sports & Fitness", 
    "Health & Wellness", "Food & Drink", "Music", "Networking",
    "Education", "Community", "Travel", "Gaming"
  ];

  const eventTypes = ["In-person", "Virtual", "Hybrid"];
  const priceRanges = ["Free", "Under $25", "$25-$50", "$50-$100", "Over $100"];

  const handleFilterToggle = (filter: string) => {
    const newFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter(f => f !== filter)
      : [...selectedFilters, filter];
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Filter Events</h3>
      
      {/* Categories */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-700 mb-4">Categories</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.includes(category)}
                onChange={() => handleFilterToggle(category)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Event Type */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-700 mb-4">Event Type</h4>
        <div className="space-y-2">
          {eventTypes.map((type) => (
            <label key={type} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.includes(type)}
                onChange={() => handleFilterToggle(type)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-700 mb-4">Price Range</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.includes(range)}
                onChange={() => handleFilterToggle(range)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-gray-700">{range}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {selectedFilters.length > 0 && (
        <button
          onClick={() => onFilterChange([])}
          className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
};

export default FilterSidebar;
