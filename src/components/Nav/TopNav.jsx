import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const TopNav = () => {
  return (
    <nav className="w-full border-b bg-background">
      <div className="container mx-auto flex h-14 items-center justify-between py-1.5">
        {/* Logo */}
        <div className="w-25 h-full">
          <img src={logo} className="w-full h-full object-cover" />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link
            to="/campaigners"
            className="text-sm font-medium hover:text-primary"
          >
            Campaigners
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
