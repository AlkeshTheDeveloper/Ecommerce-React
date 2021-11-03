import styles from "./Navigation.module.css";
import NavigationMenu from "./NavigationMenu";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      <a href="#tfgdfgd">
        {" "}
        <img
          src="https://image.freepik.com/free-psd/logo-mockup-grey-wall_35913-2179.jpg?"
          width="80"
          height="50"
          alt="logo"
        />
      </a>
      <ul>
        <NavigationMenu list="Home" />
        <NavigationMenu list="About-us" />
        <NavigationMenu list="Career" /> <NavigationMenu list="Contact-us" />
      </ul>

      <img
        src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"  className="bg-light position-relative"
        width="50"
        height="50"
      />
      <span className=" position-absolute top-0"></span>
    </nav>
  );
};

export default Navigation;
