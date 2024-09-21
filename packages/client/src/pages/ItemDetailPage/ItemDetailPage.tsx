import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchDetails } from "../../utils/fetchDetails";
import { Hotel, Country, City } from "../../types/models";
import SEO from "../../components/SEO/SEO";
import "./ItemDetailPage.css";

const ItemDetailPage: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [details, setDetails] = useState<Hotel | Country | City | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      if (!id) {
        setError("Item ID is missing.");
        setLoading(false);
        return;
      }

      try {
        const data = await fetchDetails(
          type as "hotels" | "countries" | "cities",
          id
        );
        setDetails(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (type) {
      getData();
    }
  }, [type, id]);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p className="error" role="alert">
        {error}
      </p>
    );

  // Only render the detail if details are available
  if (!details) return null;

  let title = "";
  let description = "";
  if (type === "hotels" && details) {
    title = (details as Hotel).hotel_name;
    description = `Find information about ${title}, including address and star rating.`;
  } else if (type === "countries" && details) {
    title = (details as Country).country;
    description = `Learn more about ${title}, including its ISO code.`;
  } else if (type === "cities" && details) {
    title = (details as City).name;
    description = `Explore the city of ${title}.`;
  }

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center height"
      role="main"
    >
      <SEO
        title={title}
        description={description}
        url={window.location.href}
        image="URL_TO_YOUR_IMAGE"
        type="website"
      />
      {type === "hotels" && details && (
        <>
          <h1 className="text-white mb-4">{(details as Hotel).hotel_name}</h1>
          <p className="text-white">Chain: {(details as Hotel).chain_name}</p>
          <p className="text-white">
            Address: {(details as Hotel).addressline1}{" "}
            {(details as Hotel).addressline2 &&
              `, ${(details as Hotel).addressline2}`}
          </p>
          <p className="text-white">Zip Code: {(details as Hotel).zipcode}</p>
          <p className="text-white">City: {(details as Hotel).city}</p>
          <p className="text-white">State: {(details as Hotel).state}</p>
          <p className="text-white">
            Country: {(details as Hotel).country} (ISO:{" "}
            {(details as Hotel).countryisocode})
          </p>
          <p className="text-white">
            Star Rating: {(details as Hotel).star_rating} stars
          </p>
        </>
      )}
      {type === "countries" && details && (
        <>
          <h1 className="text-white mb-4">{(details as Country).country}</h1>
          <p className="text-white">
            ISO Code: {(details as Country).countryisocode}
          </p>
        </>
      )}
      {type === "cities" && details && (
        <>
          <h1 className="text-white mb-4">{(details as City).name}</h1>
        </>
      )}
      <Link
        to="/"
        className="return-cta text-decoration-none"
        aria-label="Return to the search page"
      >
        Return to search
      </Link>
    </div>
  );
};

export default ItemDetailPage;
