const NavigationMenu = (props) => {
  return (
    <li>
      <a href={`#${props.list}`}>{props.list}</a>
    </li>
  );
};

export default NavigationMenu;
