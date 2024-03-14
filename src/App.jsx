import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
    const [bookmark, setBookmark] = useState([]);

    const handleBookmark = (blog) => {
        const newBookmark = [...bookmark, blog];
        setBookmark(newBookmark);
    };

    return (
        <>
            <Header></Header>
            <div className="max-w-7xl w-11/12 mx-auto md:grid md:grid-cols-3 gap-4">
                <Blogs
                    handleBookmark={handleBookmark}
                    bookmark={bookmark}
                ></Blogs>
                <Bookmarks bookmark={bookmark}></Bookmarks>
            </div>
        </>
    );
}

export default App;
