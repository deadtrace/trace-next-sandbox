import css from "./sneakerItem.module.css";

function SneakerItem(props) {
  const { title, oldPrice, newPrice, imageUrl, link, discount } = props.info;

  return (
    <div className={css["sneaker-card"]}>
      <div className={css["sneaker-info"]}>
        <span className={css["sneaker-title"]}>{title}</span>
        <div className={css["sneaker-price-info"]}>
          <span className={css["sneaker-old-price"]}>{oldPrice}</span>
          {oldPrice && <span className={css["sneaker-prices-spacer"]}></span>}
          <span className={css["sneaker-new-price"]}>{newPrice} ₽</span>
          {discount && <span className={css["sneaker-prices-spacer"]}></span>}
          {discount && (
            <span className={css["sneaker-discount"]}>{discount}</span>
          )}
        </div>
      </div>
      <a
        className={css["sneaker-link"]}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={css["sneaker-image"]} src={imageUrl} alt={title}></img>
      </a>
    </div>
  );
}

export default SneakerItem;
