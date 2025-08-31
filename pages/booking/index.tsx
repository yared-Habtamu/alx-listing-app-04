// pages/booking/index.tsx

// Import the components that will be rendered on this page
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
// Import the CancellationPolicy component.
// We assume you have saved the provided CancellationPolicy code
// into a file named CancellationPolicy.tsx within the components/booking directory.
import CancellationPolicy from "@/components/booking/CancellationPolicy";

// Define the BookingPage component
export default function BookingPage() {
  // Static booking details object, as provided in the instructions.
  // In a real application, this data would likely be fetched dynamically
  // from an API or passed down from a previous page/route.
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,      // Base price for the stay
    bookingFee: 65,     // Additional fee
    totalNights: 3,
    startDate: "24 August 2024",
  };

  // The layout uses a grid system.
  // The first column (`grid-cols-1 md:grid-cols-2` means 1 column on small screens, 2 on medium+ screens)
  // will contain the Booking Form and the Cancellation Policy.
  // The second column will contain the Order Summary.

  return (
    // Main container for the page, provides overall layout and centering.
    // `container mx-auto` centers the content horizontally, `p-6` adds padding around the content.
    <div className="container mx-auto p-6">
      {/* Grid layout for responsiveness:
          - `grid`: enables CSS Grid layout.
          - `grid-cols-1`: by default, items stack in a single column.
          - `md:grid-cols-2`: on medium screens and larger (`md:` prefix), items arrange into two columns.
          - `gap-6`: adds spacing between the grid items (columns). */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left Column: Contains the booking form and policy/rules section.
            We use `flex flex-col gap-6` to stack the BookingForm and CancellationPolicy
            vertically with spacing between them. */}
        <div className="flex flex-col gap-6">
          {/* Render the BookingForm component */}
          <BookingForm />

          {/* Render the CancellationPolicy component */}
          <CancellationPolicy />
        </div>

        {/* Right Column: Contains the Order Summary.
            This column will display the summary details of the booking. */}
        <div className="flex flex-col gap-6"> {/* Using flex column for consistency, though it only contains one item here */}
          {/* Render the OrderSummary component, passing the static bookingDetails object */}
          <OrderSummary bookingDetails={bookingDetails} />
        </div>

      </div>
    </div>
  );
}