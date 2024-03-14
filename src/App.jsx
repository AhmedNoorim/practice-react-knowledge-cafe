import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
    const [bookmark, setBookmark] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleBookmark = (blog) => {
        const newBookmark = [...bookmark, blog];
        setBookmark(newBookmark);
    };

    const handleReadingTime = (id, minutes) => {
        setReadingTime(readingTime + minutes);

        // remove the read blog from bookmark
        const remainingBookmark = bookmark.filter((booked) => booked.id !== id);
        setBookmark(remainingBookmark);
    };

    return (
        <>
            <Header></Header>
            <div className="max-w-7xl w-11/12 mx-auto md:grid md:grid-cols-3 gap-4">
                <Blogs
                    handleBookmark={handleBookmark}
                    handleReadingTime={handleReadingTime}
                ></Blogs>
                <Bookmarks
                    bookmark={bookmark}
                    readingTime={readingTime}
                ></Bookmarks>
            </div>
        </>
    );
}

export default App;
