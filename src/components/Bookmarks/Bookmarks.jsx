import PropTypes from "prop-types";

const Bookmarks = ({ bookmark, readingTime }) => {
    return (
        <div className="md:col-span-1">
            <div className="p-4 bg-violet-200 border border-violet-500 rounded-lg">
                <h5 className="text-2xl text-violet-600 font-bold text-center">
                    Spent time on read: {readingTime}min
                </h5>
            </div>
            <div className="p-4 mt-4 bg-gray-200 rounded-lg">
                <h1 className="text-2xl font-bold">
                    Bookmarked: {bookmark.length}
                </h1>
                <div
                    style={{
                        display: bookmark.length ? "block" : "none",
                    }}
                    className="font-semibold"
                >
                    {bookmark.map((blog, idx) => (
                        <div key={idx} className="p-4 bg-white rounded-lg mt-2">
                            {blog.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;

Bookmarks.propTypes = {
    bookmark: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
};
