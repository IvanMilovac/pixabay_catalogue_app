import React, { useState } from "react";

const ImageSearch = ({ setTerm }) => {
  const [formInput, setFormInput] = useState("");
  const handleChange = (e) => {
    setFormInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm(formInput);
  };
  return (
    <form
      className="h-12 w-full flex justify-center mt-3 mb-10 mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        autoFocus
        value={formInput}
        onChange={handleChange}
        className="w-full sm:w-1/4 h-full border-2 border-gray-200 rounded-lg px-4 focus:border-green-200 focus:border-2"
      />
    </form>
  );
};

export default ImageSearch;
