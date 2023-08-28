import "./Header.css";
import github from "../../assets/github.svg";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a className="header__link" href={`#home`}>
              Обо мне
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href={`#trick`}>
              Фишка
            </a>
          </li>
          <li className="header__item">
            <a
              className="homepage__link"
              href="https://github.com/kindapath/yp-my-intro"
              target="_blank"
              rel="noreferrer"
            >
              Github
              <img className="homepage__git" src={github} alt="github" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
