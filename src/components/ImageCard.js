import React from "react";

const ImageCard = ({
  name,
  imgUrl,
  views,
  likes,
  downloads,
  tags,
  pixaUrl,
}) => {
  const tagsArray = tags.split(", ");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col overflow-hidden">
      <img src={imgUrl} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-blue-500 text-xl mb-2">
          <a href={pixaUrl} rel="noreferrer" target="_blank">
            Photo by {name}
          </a>
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tagsArray.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-2 text-small font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="h-full bg-red-400"></div>
    </div>
  );
};

export default ImageCard;
