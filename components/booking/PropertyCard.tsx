import { PropertyProps } from "@/interfaces";
import Image from "next/image";

type PropertyCardProps = {
  property: PropertyProps;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
          unoptimized // ⚠️ remove this if real images are used
        />
        {property.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {property.discount}% OFF
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title + Rating */}
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

        {/* Location */}
        <p className="text-gray-600 text-sm mt-1">
          {property.address.city}, {property.address.country}
        </p>

        {/* Categories */}
        <div className="mt-2 flex flex-wrap gap-1">
          {property.category?.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Price */}
        <p className="mt-3 text-lg font-semibold">
          ${property.price}
          <span className="text-gray-500 text-sm font-normal"> / night</span>
        </p>
      </div>
    </div>
  );
}
