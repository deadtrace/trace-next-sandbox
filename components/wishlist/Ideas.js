import { Fragment } from "react";
import Image from "next/image";
import css from "../../pages/wishlist/Wishlist.module.css";

function Ideas() {
  return (
    <Fragment>
      <h1>
        Мысль о возможном подарке можно развивать в следующих направлениях:
      </h1>
      <ul>
        <li>
          <div className={css["li-title"]}>Компьютерные игры</div>
          <p>
            Я большой любитель игр. У меня нет PlayStation или же Xbox, да и
            большим фанатом консолей я никогда и не был. Практически вся моя
            коллекция находится на моём{" "}
            <a
              target="_blank"
              href="https://steamcommunity.com/id/deadtrace/"
              rel="noopener noreferrer"
            >
              Steam аккаунте
            </a>
            . Все желаемые игры, которых у меня нет, всегда перечислены в{" "}
            <a
              target="_blank"
              href="https://store.steampowered.com/wishlist/id/deadtrace/#sort=order"
              rel="noopener noreferrer"
            >
              моём вишлисте
            </a>{" "}
            на данной платформе.
          </p>
          <div className={css["image-container"]}>
            <Image
              className={css["image"]}
              src="/wishlist/steam-profile.jpg"
              alt="Steam-аккаунт"
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
            />
          </div>
        </li>
        <li>
          <div className={css["li-title"]}>Баскетбол</div>
          <p>
            У меня две любимые команды. В Европе - петербуржский баскетбольный
            &quot;Зенит&quot;, в NBA - Boston Celtics. Любимый игрок - Гордон
            Хэйворд (Gordon Hayward). Люблю посещать баскетбольные матчи
            (&quot;Зенита&quot; прежде всего), не против был бы когда-нибудь
            сгонять на выезд. Баскетбольной атрибутики почти никакой нет, к
            сожалению. Не отказался бы от какого-нибудь джерси либо Хэйворда,
            либо бостонского игрока (#7 Jaylen Brown, e.g.). Либо же хорошие
            баскетбольные кроссовки. У Гордона Хэйворда есть именная линейка
            кроссовок вместе с Anta, у меня есть Anta GH1, нет Anta GH2. Ещё
            очень крутые Nike Lebron XVIII, Nike Air Zoom BB NXT. Мой размер -
            US 10,5-11, длина стопы - 28,5.
          </p>
          <div className={css["image-container"]}>
            <Image
              className={css["image"]}
              src="/wishlist/yubi.jpg"
              alt="Дворец спорта Юбилейный"
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
            />
          </div>
        </li>

        <li>
          <div className={css["li-title"]}>Архитектура</div>
          <p>
            Не сказать, что я большой знаток архитектуры, но от хорошей книги по
            ней я бы никогда не отказался, ибо обычно они очень достойные. Я
            больше не про учебники какие-то сухие, а сборники каких-либо зданий
            или тематические книги по определенному направлению. Я, например,
            обожаю модернизм со всей его вложенностью. Или что-то вроде LEGO с
            каким-нибудь зданием.
          </p>
          <div className={css["image-container"]}>
            <Image
              className={css["image"]}
              src="/wishlist/brutal.jpg"
              alt="Здание в стиле брутализм"
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
            />
          </div>
        </li>

        <li>
          <div className={css["li-title"]}>Спорт</div>
          <p>
            Обрадуюсь любому спортивному питанию (любые протеины, bcaa,
            креатины, изотоники). Только в гейнерах необходимости нет, как и в
            чём-то более извращенном. По жизни терпеть не могу любое сочетание с
            ананасом из вкусов. И никогда не нравилась продукция Maxler.
            ON(Optimum Nutrition), QNT из зарубежных пробовал и одобряю. Из
            наших уважаю Prime Kraft и Bombbar.
          </p>
          <div className={css["image-container"]}>
            <Image
              className={css["image"]}
              src="/wishlist/gym.jpg"
              alt="Здание в стиле брутализм"
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
            />
          </div>
        </li>
      </ul>
    </Fragment>
  );
}

export default Ideas;
