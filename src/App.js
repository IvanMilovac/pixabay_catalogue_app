/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import pblogo from "./assets/img/Pixabay-logo.png";
import ImageSearch from "./components/ImageSearch";
import Sidebar from "./components/Sidebar";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [search, setSearch] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(
      () =>
        fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
        )
          .then((res) => res.json())
          .then((data) => {
            let newData = data.hits.sort((a, b) => {
              return a.webformatHeight - b.webformatHeight;
            });
            setImages(newData);
            setIsLoading(false);
          })
          .catch((err) => console.log(err)),
      300
    );
  }, [term]);
  const handleClick = (text) => {
    if (text === "custom search") {
      setSearch(true);
      return;
    }
    setSearch(false);
    setTerm(text);
  };
  return (
    <>
      <div className="py-5 w-full bg-green-gradient flex justify-center -mb-4 sm:-mb-0 fixed">
        <a href="https://pixabay.com/" rel="noreferrer" target="_blank">
          <img src={pblogo} className="h-10" alt="" />
        </a>
      </div>
      <div className="block sm:flex sm:min-h-screen">
        <Sidebar handleClick={handleClick} search={search} />
        <div className="w-5/6 p-4 flex justify-center mx-auto mt-20">
          {isLoading ? (
            <h1 className="text-2xl text-center mx-auto mt-5">Loading...</h1>
          ) : (
            <div>
              {search && (
                <div className="flex flex-col items-center">
                  <span className="text-lg font-semibold mt-5">
                    Enter search term:
                  </span>
                  <ImageSearch setTerm={setTerm} />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start grid-flow-row">
                {images.map((image) => (
                  <ImageCard
                    key={image.id}
                    name={image.user}
                    imgUrl={image.webformatURL}
                    views={image.views}
                    downloads={image.downloads}
                    likes={image.likes}
                    tags={image.tags}
                    pixaUrl={image.pageURL}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
