import LOGO_URL from "../utils/images/netflix_logo_.png";

const Header = ()=>{
    return (
        <div className="absolute w-100% h-100% z-10 px-4 py-2 mx-40 my-4">
            <img
                className="logo"
                src={LOGO_URL}
                alt="image"
            />
        </div>
    )
}

export default Header;