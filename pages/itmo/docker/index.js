import css from "./index.module.css";

const ItmoDockerPage = () => {
  return (
    <div className={css["page-div"]}>
      <div className={css["container"]}>
        <div className={css["main-header"]}>
          <h1 className={css["header"]}>Работа с Docker</h1>
          <span className={css["subtext"]}>
            в рамках курса "Проектирование информационных систем"
          </span>
          <span className={css["subtext"]}>
            программа магистратуры "Веб-технологии"
          </span>
          <span className={css["subtext"]}>
            факультет программной инженерии и компьютерной техники (ФПИ и КТ)
          </span>
          <span className={css["subtext"]}>Университет ИТМО, 2021 год</span>
        </div>
        <div className={css["card"]}>
          <h2 className={css["card-header"]}>Описание задания</h2>
          <p className={css["card-paragraph"]}>
            &emsp;Задание состоит из нескольких итераций и направлено на
            получение навыков работы с Docker.
          </p>
        </div>
        <div className={css["card"]}>
          <h2 className={css["card-header"]}>Задание 1</h2>
          <p className={css["card-paragraph"]}>
            &emsp;Создать статический сайт, возвращающий "Hello world" страницу
            на запрос GET '/'. Возможно использовать любую удобную технологию.
            Необходимо создать Docker-образ и опубликовать его на Docker Hub.
          </p>
          <p className={css["card-paragraph"]}>
            &emsp;Был использован Next.js, создана статичная декоративная
            страница на '/'. Инструкции по запуску есть в описании репозиториев.
            Не использовался docker-compose.
          </p>
          <div className={css["links"]}>
            <a
              href="https://github.com/deadtrace/next-docker-hello"
              target="_blank"
              rel="noopener noreferrer"
              className={css["link"]}
            >
              GitHub
            </a>
            <a
              href="https://hub.docker.com/r/deadtrace/next-hello"
              target="_blank"
              rel="noopener noreferrer"
              className={css["link"]}
            >
              DockerHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItmoDockerPage;
