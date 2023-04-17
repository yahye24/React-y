import "./App.css";
import { IoIosPerson } from "react-icons/io";
import { HiInformationCircle, HiPhone } from "react-icons/hi";

const navs = [
  { name: "Home", icon: <IoIosPerson className="nav__icon" /> },
  { name: "About", icon: <HiInformationCircle className="nav__icon" /> },
  { name: "Contact", icon: <HiPhone className="nav__icon" /> },
];

export default function Assignment1() {
  return (
    <div className="App">
      <div className="app__sidebar">
        <div className="sidebar__content">
          <div className="sidebar__logo">
            <h1>Logo</h1>
          </div>
          <div className="sidebar__navs">
            {navs.map((nav) => (
              <div className="nav__item" key={nav.name}>
                <div>{nav.icon}</div>
                <div className="nav__name">{nav.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="app__content">
        <div className="content__header">
          <div className="header__title">Title</div>
          <div className="header__user">
            <div className="user__icon">
              <IoIosPerson className="nav__icon" />
            </div>
            <div className="user__name">User</div>
          </div>
        </div>
        <div className="content__body">
          <div className="body__title">Body Title</div>
          <div className="body__content">Body Content</div>
        </div>
      </div>
    </div>
  );
}
