function SneakerItem(props) {
  const { title, oldPrice, newPrice, imageUrl, link } = props.info;

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <span style={{ textDecoration: "line-through" }}>{oldPrice}</span>
        <span>{newPrice}</span>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title}></img>
      </a>
    </div>
  );
}

export default SneakerItem;
