import axios from "axios";
import React from "react";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import useGlobalContext from "../context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

export const Gallery = () => {
  const { searchItem } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchItem],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchItem}`);
      return result.data;
    },
  });
  if (response.isLoading)
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>Error fetching data</h4>
      </section>
    );
  }

  const result = response.data.results;

  if (result.length === 0) {
    return (
      <section className="image-container">
        <h4>No images found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {result.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            alt={item.alt_description}
            key={item.id}
            className="img"
          />
        );
      })}
    </section>
  );
};
