import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, img }) => {
  const navigate = useNavigate();
  const BlogPageHandler = (title) => {
    navigate(`/urologist-blog/${title}`);
  };
  return (
    <div
      className="w-[90%] sm:w-[45%]   border border-black p-4 cursor-pointer"
      onClick={() => BlogPageHandler(title)}
    >
      <img
        className="md:w-[90%]  h-[15rem] rounded-3xl self-center py-2 m-auto object-cover"
        src={img}
        alt=""
      />
      <h1 className="text-center text-[1.1rem] font-semibold">{title}</h1>
      <div className="flex justify-end py-2">
        <button
          onClick={() => BlogPageHandler(title)}
          className="text-center text-[1.1rem] font-semibold text-blue-600"
        >
          Read More...
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
