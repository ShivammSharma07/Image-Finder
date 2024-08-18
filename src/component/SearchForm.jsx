import React from "react";
import useGlobalContext from "../context";

export const SearchForm = () => {
  const { setSearchItem } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    if (!searchValue) {
      return;
    }
    setSearchItem(searchValue);
  };
  return (
    <section>
      <h1 className="title">Image Finder</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="search"
          name="search"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
