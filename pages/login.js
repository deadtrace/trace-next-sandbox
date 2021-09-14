import css from "../styles/Login.module.css";
import { useRef } from "react";
import { signIn } from "next-auth/client";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import Link from "next/link";

function LoginPage() {
  const loginInputRef = useRef();
  const passwordInputRef = useRef();
  const router = useRouter();

  async function submitHandler(e) {
    e.preventDefault();
    const enteredUsername = loginInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const result = await signIn("credentials", {
      redirect: false,
      username: enteredUsername,
      password: enteredPassword,
    });
    if (!result.error) {
      router.push("/");
    } else {
      console.log("Error");
    }
  }

  function keyPressHandler(e) {
    if (e.charCode === 13) {
      submitHandler(e);
    }
  }

  return (
    <div className={css["login-container"]}>
      <video autoPlay muted loop className={css["background-video"]}>
        <source src="petersburg.mp4" type="video/mp4" />
      </video>
      <form onSubmit={submitHandler}>
        <div className={css["input-area"]}>
          <input placeholder="Логин" ref={loginInputRef} />
        </div>
        <div className={css["input-area"]}>
          <input
            type="password"
            placeholder="Пароль"
            ref={passwordInputRef}
            onKeyPress={keyPressHandler}
          />
        </div>
        <div className={css["actions-area"]}>
          <Link href="/">Назад</Link>
          <button type="submit" id={css["login-button"]}>
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default LoginPage;
