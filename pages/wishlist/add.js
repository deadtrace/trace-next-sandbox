import Head from "next/head";
import { Fragment } from "react";
import { useRef } from "react";
import axios from "axios";
import Link from "next/link";
import { getSession } from "next-auth/client";

function AddWishItem() {
  const categoryInputRef = useRef("");
  const nameInputRef = useRef("");
  const descriptionInputRef = useRef("");
  const linkInputRef = useRef("");
  const imageLinkInputRef = useRef("");
  const notificationRef = useRef();
  const submitButtonRef = useRef();

  function updateInputs() {
    categoryInputRef.current.value = "";
    nameInputRef.current.value = "";
    descriptionInputRef.current.value = "";
    linkInputRef.current.value = "";
    imageLinkInputRef.current.value = "";
  }

  function showNotification(type, message, timeout) {
    if (type === "success") {
      notificationRef.current.classList.remove("bg-red-700");
      notificationRef.current.classList.add("bg-green-700");
      updateInputs();
    } else {
      notificationRef.current.classList.remove("bg-green-700");
      notificationRef.current.classList.add("bg-red-700");
    }

    notificationRef.current.innerText = message;
    notificationRef.current.classList.remove("invisible");

    setTimeout(() => {
      if (notificationRef.current) {
        notificationRef.current.classList.add("invisible");
        submitButtonRef.current.disabled = false;
      }
    }, timeout);
  }

  function submitHandler(e) {
    e.preventDefault();

    submitButtonRef.current.disabled = true;

    axios
      .post("/api/wishlist", {
        category: categoryInputRef.current.value,
        name: nameInputRef.current.value,
        description: descriptionInputRef.current.value,
        link: linkInputRef.current.value,
        image: imageLinkInputRef.current.value,
      })
      .then((res) => {
        showNotification("success", res.data.message, 3000);
      })
      .catch((err) => {
        showNotification("error", err.response.data.message, 3000);
      });
  }

  return (
    <Fragment>
      <Head>
        <title>add a wish | trace.dev</title>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <div
        id="notification"
        ref={notificationRef}
        className="bg-red-700 py-4 text-white text-center absolute w-screen invisible"
      >
        Ошибка
      </div>
      <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 h-screen flex items-center justify-center font-mono text-base">
        <form
          className="border bg-white bg-opacity-90 px-20 py-12 shadow-lg space-y-4 w-96"
          onSubmit={submitHandler}
        >
          <div className="flex justify-center">
            <Link href="/wishlist">
              <button className="bg-black text-white py-2 px-4 mb-2">
                К списку
              </button>
            </Link>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="category">Категория*</label>
            <select
              required
              id="category"
              className="border focus:border-black p-1"
              ref={categoryInputRef}
            >
              <option value="tech">Техника</option>
              <option value="books">Книга</option>
              <option value="clothes">Одежда</option>
              <option value="beauty">Уход</option>
              <option value="health">Здоровье</option>
              <option value="others">Другие</option>
            </select>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="name">Название*</label>
            <input
              required
              id="name"
              className="border focus:border-black p-1"
              ref={nameInputRef}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="description">Описание</label>
            <input
              id="description"
              className="border focus:border-black p-1"
              ref={descriptionInputRef}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="link">Ссылка на товар*</label>
            <input
              required
              id="link"
              className="border focus:border-black p-1"
              ref={linkInputRef}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="image">Ссылка на изображение*</label>
            <input
              required
              id="image"
              className="border focus:border-black p-1"
              ref={imageLinkInputRef}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-black text-white py-2 px-4 mt-2"
              type="submit"
              ref={submitButtonRef}
            >
              Добавить
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default AddWishItem;
