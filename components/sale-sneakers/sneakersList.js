import css from "./sneakersList.module.css";
import SneakerItem from "./sneakerItem";
import { Fragment } from "react";

function SneakersList(props) {
  const { shop, sneakers } = props;

  return (
    <Fragment>
      <h1 className={css["shop-name"]}>{shop}</h1>
      <div className={css["shop-sneakers-list"]}>
        {sneakers.map((sneaker) => (
          <SneakerItem
            className={css["shop-sneaker"]}
            info={sneaker}
            key={sneaker.id}
          ></SneakerItem>
        ))}
      </div>
    </Fragment>
  );
}

export default SneakersList;
