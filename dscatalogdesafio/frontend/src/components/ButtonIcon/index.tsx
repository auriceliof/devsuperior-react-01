import { NavLink } from 'react-router-dom';
import './styles.css';

const ButtonIcon = () => {
  return (
    <button className="btn btn-icon">
      <NavLink to="/catalog" activeClassName="active">
        <h6>VER CATÁLOGO</h6>
      </NavLink>
    </button>
  );
};

export default ButtonIcon;
