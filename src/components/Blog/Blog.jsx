import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";

const Blog = ({ blog, handleBookmark, handleReadingTime }) => {
    const {
        id,
        cover,
        title,
        author,
        author_img,
        posted_date,
        reading_time,
        hashtags,
    } = blog;

    return (
        <div>
            <img className="rounded-lg mb-4" src={cover} alt="" />
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-4 items-center">
                    <img
                        className="rounded-full w-[60px]"
                        src={author_img}
                        alt=""
                    />
                    <div>
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p className="font-semibold text-gray-400">
                            {posted_date}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 text-xl font-medium text-gray-400 items-center">
                    <p>{reading_time} min read</p>
                    <button
                        onClick={() => handleBookmark(blog)}
                        className="btn btn-ghost p-0"
                    >
                        <FaBookmark />
                    </button>
                </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            {hashtags.map((hash, idx) => (
                <p
                    key={idx}
                    className="text-xl font-medium text-gray-400 inline mr-4"
                >
                    <a href="">#{hash}</a>
                </p>
            ))}
            <a
                onClick={() => handleReadingTime(id, reading_time)}
                className="btn btn-link block font-semibold p-0 mt-2 text-left"
            >
                Mark As Read
            </a>
            <p className="border-b mb-4"></p>
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired,
};
