import "./Navbar.css";

const Navbar = ({ links }) => {
  const loadLinks = (links) =>
    links.map((link, index) => (
      <a
        href={`/${link}`}
        key={`${index}`}
        className="text-decoration-none navbar-link"
      >
        <strong>{link}</strong>
      </a>
    ));
  return (
    <div className="navbar-container container">
      <div className="text-center mt-3 mb-5">
        <h1 className="logo">Valheim Faqs</h1>
      </div>
      <div className="text-center d-flex justify-content-between fs-4">
        {loadLinks(links)}
      </div>
    </div>
  );
};

export default Navbar;
