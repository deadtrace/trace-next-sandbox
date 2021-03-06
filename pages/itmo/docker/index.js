import css from "./index.module.css";

const ItmoDockerPage = () => {
  return (
    <div className={css["page-div"]}>
      <div className={css["container"]}>
        <div className={css["main-header"]}>
          <h1 className={css["header"]}>Работа с Docker</h1>
          <span className={css["subtext"]}>
            в рамках курса &quot;Проектирование информационных систем&quot;
          </span>
          <span className={css["subtext"]}>
            программа магистратуры &quot;Веб-технологии&quot;
          </span>
          <span className={css["subtext"]}>
            факультет программной инженерии и компьютерной техники (ФПИ и КТ)
          </span>
          <span className={css["subtext"]}>Университет ИТМО, 2021 год</span>
          <span className={css["subtext"]}>
            Выполнил Катюшин Станислав, P42071
          </span>
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
            &emsp;Создать статический сайт, возвращающий &quot;Hello world&quot;
            страницу на запрос GET &quot;/&quot;. Возможно использовать любую
            удобную технологию. Необходимо создать Docker-образ и опубликовать
            его на Docker Hub.
          </p>
          <p className={css["card-paragraph"]}>
            &emsp;Был использован Next.js, создана статичная декоративная
            страница на &quot;/&quot;. Инструкции по запуску есть в описании
            репозиториев. Не использовался docker-compose.
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
        <div className={css["card"]}>
          <h2 className={css["card-header"]}>Задание 2</h2>
          <p className={css["card-paragraph"]}>
            &emsp;Создать сайт-счётчик, возвращающий показатель счётчика на
            &quot;/&quot; странице. Каждое посещение &quot;/stat&quot;
            инкрементирует счетчик. На &quot;/about&quot; вывести пользовальское
            приветствие. Возможно использовать любую удобную технологию.
            Необходимо создать Docker-образ и опубликовать его на Docker Hub.
          </p>
          <p className={css["card-paragraph"]}>
            &emsp;Для создрания приложения был использован Next.js. В качестве
            хранилища для счётчика использовался LocalStorage браузера.
            Информация о счётчике сохраняется даже после перезапуска контейнера
            вплоть до того момента, пока LocalStorage не будет очищен.
            Инструкции по запуску есть в описании репозиториев. Не использовался
            docker-compose.
          </p>
          <div className={css["links"]}>
            <a
              href="https://github.com/deadtrace/next-increment"
              target="_blank"
              rel="noopener noreferrer"
              className={css["link"]}
            >
              GitHub
            </a>
            <a
              href="https://hub.docker.com/r/deadtrace/next-increment"
              target="_blank"
              rel="noopener noreferrer"
              className={css["link"]}
            >
              DockerHub
            </a>
          </div>
        </div>
        <div className={css["card"]}>
          <h2 className={css["card-header"]}>Задание 3</h2>
          <p className={css["card-paragraph"]}>
            &emsp;Создать сайт-счётчик, возвращающий показатель счётчика на
            &quot;/&quot; странице. Каждое посещение &quot;/stat&quot;
            инкрементирует счетчик. На &quot;/about&quot; вывести пользовальское
            приветствие. Возможно использовать любую удобную технологию. В
            данной вариации необходимо использовать стороннее хранилище данных,
            а также сохранять значение счётчика при остановке контейнера.
          </p>
          <p className={css["card-paragraph"]}>
            &emsp;Для создрания приложения был использован Express, а также
            Redis в качестве хранилища данных. Для сохранения состояния
            использовались Docker volumes. Для использования нескольких
            контейнеров одновременно (приложение на Express и Redis)
            использовался docker-compose.
          </p>
          <div className={css["links"]}>
            <a
              href="https://github.com/deadtrace/express-redis-docker-visit-counter"
              target="_blank"
              rel="noopener noreferrer"
              className={css["link"]}
            >
              GitHub
            </a>
            <a
              href="https://hub.docker.com/r/deadtrace/express-redis-visit-counter"
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
