import { PROPERTYLISTINGSAMPLE, FILTERS } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "@/components/property/PropertyCard"; // Assume this component exists

// 🔹 Pill Component
const Pill = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ${
        active
          ? "bg-indigo-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// 🔹 PropertyCard Component
const LocalPropertyCard = ({ property }: { property: PropertyProps }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
          unoptimized // Remove this if using real images
        />
        {property.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {property.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{property.name}</h3>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm">{property.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-1">
          {property.address.city}, {property.address.country}
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {property.category.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {cat}
            </span>
          ))}
        </div>
        <p className="mt-3 text-lg font-semibold">
          ${property.price}
          <span className="text-gray-500 text-sm font-normal"> / night</span>
        </p>
      </div>
    </div>
  );
};

// 🔹 Home Component
export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // API data
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex space-x-2 overflow-x-auto pb-4">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() =>
                setActiveFilter(activeFilter === filter ? null : filter)
              }
            />
          ))}
        </div>
      </section>

      {/* Listings Section */}
      <section className="container mx-auto px-4 py-8">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* 🔹 Using API data if available, else fallback to sample */}
            {(properties.length > 0 ? properties : PROPERTYLISTINGSAMPLE).map(
              (property) => (
                <LocalPropertyCard key={property.name} property={property} />
              )
            )}
          </div>
        )}
      </section>
    </div>
  );
}
