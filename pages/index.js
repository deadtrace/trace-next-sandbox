import css from "../styles/Home.module.css";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";

function HomePage() {
  return (
    <Fragment>
      <header className={css.header}>
        <div className={css.logo}>
          <span>trace</span>
          <span className={css["logo-dot"]}>.</span>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/wishlist">/wishlist</Link>
            </li>
            <li>/find me</li>
            <li>/contact</li>
          </ul>
        </nav>
        <div className={css.auth}>
          <span>/auth</span>
        </div>
      </header>
      <main className={css.main}>
        <div className={css["content-part"]}></div>
        <div className={css["image-part"]}>
          <Image
            src="/trace-photo.png"
            alt="Фото разработчика Станислав"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </main>
    </Fragment>
  );
}

export default HomePage;
