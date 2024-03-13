import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header></Header>
            <div className="max-w-7xl w-11/12 mx-auto md:grid md:grid-cols-3">
                <Blogs></Blogs>
                <Bookmarks></Bookmarks>
            </div>
        </>
    );
}

export default App;
