import style from './Navbar.module.css';
import title from '../../assets/title_sharp.svg';

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <picture className={style.title}>
        <img src={title} alt="logo" />
      </picture>
      <ul>
        <li><a href="experience">Projects</a></li>
        <li><a href="experience">About</a></li>
        <li><a href="experience">Contact</a></li>
      </ul>
    </nav>
  );
}
