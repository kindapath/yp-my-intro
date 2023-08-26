import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <a className="sidebar__link" href={`/`}>
              Главная
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__link" href={`/task`}>
              Задание
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
