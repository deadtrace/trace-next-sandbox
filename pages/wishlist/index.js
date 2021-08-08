import css from "./Wishlist.module.css";
import { useState } from "react";
import Beauty from "../../components/wishlist/Beauty";
import Books from "../../components/wishlist/Books";
import Clothes from "../../components/wishlist/Clothes";
import Health from "../../components/wishlist/Health";
import Ideas from "../../components/wishlist/Ideas";
import Tech from "../../components/wishlist/Tech";
import Head from "next/head";
import { Fragment } from "react";

function WishlistPage() {
  const [category, setCategory] = useState("tech");

  return (
    <Fragment>
      <Head>
        <title>wishlist | trace.dev</title>
      </Head>
      <main className={css.main}>
        <section className={css.container}>
          <div className={css.navigation}>
            <div
              onClick={() => setCategory("tech")}
              className={
                category === "tech"
                  ? `${css["navigation-link"]} ${css["navigation-link--active"]}`
                  : css["navigation-link"]
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#02aab0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5h6v14h-6z" />
                <path d="M12 9h10v7h-10z" />
                <path d="M14 19h6" />
                <path d="M17 16v3" />
                <path d="M6 13v.01" />
                <path d="M6 16v.01" />
              </svg>
              <span className={css["navigation-link-title"]}>Техника</span>
            </div>
            <div
              onClick={() => setCategory("books")}
              className={
                category === "books"
                  ? `${css["navigation-link"]} ${css["navigation-link--active"]}`
                  : css["navigation-link"]
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#02aab0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <line x1="3" y1="6" x2="3" y2="19" />
                <line x1="12" y1="6" x2="12" y2="19" />
                <line x1="21" y1="6" x2="21" y2="19" />
              </svg>
              <span className={css["navigation-link-title"]}>Книги</span>
            </div>
            <div
              onClick={() => setCategory("clothes")}
              className={
                category === "clothes"
                  ? `${css["navigation-link"]} ${css["navigation-link--active"]}`
                  : css["navigation-link"]
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#02aab0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 3v6l4.798 5.142a4 4 0 0 1 -5.441 5.86l-6.736 -6.41a2 2 0 0 1 -.621 -1.451v-9.141h8z" />
                <path d="M7.895 15.768c.708 -.721 1.105 -1.677 1.105 -2.768a4 4 0 0 0 -4 -4" />
              </svg>
              <span className={css["navigation-link-title"]}>Одежда</span>
            </div>
            <div
              onClick={() => setCategory("beauty")}
              className={
                category === "beauty"
                  ? `${css["navigation-link"]} ${css["navigation-link--active"]}`
                  : css["navigation-link"]
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#02aab0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="7" cy="17" r="3" />
                <circle cx="17" cy="17" r="3" />
                <line x1="9.15" y1="14.85" x2="18" y2="4" />
                <line x1="6" y1="4" x2="14.85" y2="14.85" />
              </svg>
              <span className={css["navigation-link-title"]}>Уход</span>
            </div>
            <div
              onClick={() => setCategory("health")}
              className={
                category === "health"
                  ? `${css["navigation-link"]} ${css["navigation-link--active"]}`
                  : css["navigation-link"]
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#02aab0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12h4l3 8l4 -16l3 8h4" />
              </svg>
              <span className={css["navigation-link-title"]}>Здоровье</span>
            </div>
            <div
              onClick={() => setCategory("ideas")}
              className={
                category === "ideas"
                  ? `${css["navigation-link"]} ${css["navigation-link--active"]}`
                  : css["navigation-link"]
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#02aab0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                <line x1="9.7" y1="17" x2="14.3" y2="17" />
              </svg>
              <span className={css["navigation-link-title"]}>Другие идеи</span>
            </div>
          </div>
          <div className={css.content}>
            {category === "beauty" && <Beauty />}
            {category === "books" && <Books />}
            {category === "clothes" && <Clothes />}
            {category === "health" && <Health />}
            {category === "ideas" && <Ideas />}
            {category === "tech" && <Tech />}
          </div>
        </section>
        <div className={`${css.circle} ${css.circle1}`}></div>
        <div className={`${css.circle} ${css.circle2}`}></div>
      </main>
    </Fragment>
  );
}

export default WishlistPage;
