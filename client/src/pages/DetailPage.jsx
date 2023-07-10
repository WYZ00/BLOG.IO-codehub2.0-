import React from "react";
import BackIcon from "../icons/BackIcon";
import { Link } from "react-router-dom";

const DetailPage = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Our first Post</h1>
          <p className="text-sm my-2 font-medium text-gray-500">
            THT | <span>2023-07-05</span>
          </p>
        </div>
        <Link to={"/"}>
          <BackIcon />
        </Link>
      </div>
      <img
        src="https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F09%2FUntitled-design-14.jpg&signature=3de86691d6ab8d950654a02334fd2774"
        alt="Our First Post"
        className="h-64 w-full object-cover"
      />
      <p className="font-medium text-gray-700 my-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s
      </p>
      <div className="flex items-center gap-2 justify-end mb-20">
        <Link
          to={"/post-edit/1"}
          className="px-3 py-1 text-lg border-2 border-black bg-black text-white">
          Edit
        </Link>
        <Link
          to={"/post-create"}
          className="px-3 py-1 text-lg border-2 border-black bg-black text-white">
          Delete
        </Link>
      </div>
    </section>
  );
};

export default DetailPage;
