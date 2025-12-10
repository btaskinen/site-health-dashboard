import './Header.css';
import SoilScoutLogo from '../assets/soil-scout-logo.png';

export const Header = () => {
  return (
    <div className="Header">
      <picture>
        <source
          media="(max-width: 480px)"
          srcSet="/public/soil-scout-logo-icon.png"
        />
        <img src={SoilScoutLogo} height={80} />
      </picture>
    </div>
  );
};