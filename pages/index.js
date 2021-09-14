import css from "../styles/Home.module.css";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";

function HomePage() {
  const [session, loading] = useSession();

  function logoutHandler() {
    signOut({
      redirect: false,
    });
  }

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
          {!session && !loading && <Link href="/login">/auth</Link>}
          {session && <button onClick={logoutHandler}>/logout</button>}
        </div>
      </header>
      <main className={css.main}>
        <div className={css["content-part"]}>
          <div className={css["news-ticker"]}>
            <div className={css["news-ticker-container"]}>
              <a
                className={css["news-ticker-item"]}
                target="_blank"
                href="https://t.me/deadtrace"
                rel="noopener noreferrer"
              >
                telegram/deadtrace
              </a>
              <a
                className={css["news-ticker-item"]}
                target="_blank"
                href="https://instagram.com/stanislav.trace"
                rel="noopener noreferrer"
              >
                instagram/stanislav.trace
              </a>
              <a
                className={css["news-ticker-item"]}
                target="_blank"
                href="https://vk.com/trace"
                rel="noopener noreferrer"
              >
                vk/trace
              </a>
              <a
                className={css["news-ticker-item"]}
                target="_blank"
                href="https://github.com/deadtrace"
                rel="noopener noreferrer"
              >
                github/deadtrace
              </a>
              <a
                className={css["news-ticker-item"]}
                target="_blank"
                href="https://t.me/deadtrace"
                rel="noopener noreferrer"
              >
                telegram/deadtrace
              </a>
              <a
                className={css["news-ticker-item"]}
                target="_blank"
                href="https://instagram.com/stanislav.trace"
                rel="noopener noreferrer"
              >
                instagram/stanislav.trace
              </a>
              <a
                className={css["news-ticker-item"]}
                target="_blank"
                href="https://vk.com/trace"
                rel="noopener noreferrer"
              >
                vk/trace
              </a>
              <a
                className={css["news-ticker-item"]}
                target="_blank"
                href="https://github.com/deadtrace"
                rel="noopener noreferrer"
              >
                github/deadtrace
              </a>
            </div>
          </div>
        </div>
        <div className={css["image-part"]}>
          <Image
            src="/trace-photo.png"
            alt="Фото разработчика Станислава"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </main>
    </Fragment>
  );
}

export default HomePage;
