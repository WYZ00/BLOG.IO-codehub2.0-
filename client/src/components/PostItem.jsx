import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const { title, description, username, time, image } = post;
  return (
    <div className="mb-4">
      <Link to={`/post/${title}`}>
        <h2 className="text-3xl font-medium">{title.toUpperCase()}</h2>
        <p className="text-sm my-2 font-medium text-gray-500">
          {username} | <span>{time}</span>
        </p>
        <div className="w-full h-64">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <p className="truncate font-normal text-gray-600 my-3">{description}</p>
      </Link>
    </div>
  );
};

export default PostItem;
