import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../utils/fetchDetails";
import { Hotel, Country, City } from "../types/models";

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
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      {type === "hotels" && details && (
        <div>
          <h1>{(details as Hotel).hotel_name}</h1>
        </div>
      )}
      {type === "countries" && details && (
        <div>
          <h1>{(details as Country).country}</h1>
        </div>
      )}
      {type === "cities" && details && (
        <div>
          <h1>{(details as City).name}</h1>
        </div>
      )}
    </div>
  );
};

export default ItemDetailPage;
