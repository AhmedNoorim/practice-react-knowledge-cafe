import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmark, bookmark }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="md:col-span-2">
            {blogs.map((blog) => (
                <Blog
                    key={blog.id}
                    blog={blog}
                    handleBookmark={handleBookmark}
                ></Blog>
            ))}
        </div>
    );
};

export default Blogs;

Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
    bookmark: PropTypes.array.isRequired,
};
