import profile from "../../assets/images/profile.png";

const Header = () => {
    return (
        <div className="max-w-7xl w-11/12 mx-auto flex justify-between items-center py-4 my-4 border-b-2">
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;
