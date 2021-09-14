import { Fragment } from "react";
import css from "../../pages/wishlist/Wishlist.module.css";
import axios from "axios";
import { useState } from "react";
import { useSession } from "next-auth/client";

function ItemsList(props) {
  const [session, loading] = useSession();
  // TODO: no rerendering
  const [items, setItems] = useState(props.items);
  function deleteHandler(item) {
    axios
      .delete(`/api/wishlist/${item._id}`)
      .then(() => {
        let newItems = items;
        let index = newItems.indexOf(item);
        if (index > -1) {
          newItems.splice(index, 1);
        }
        setItems(newItems);
      })
      .catch(() => {});
  }

  return (
    <Fragment>
      {items.map((item) => (
        <div className={css["wish--container"]} key={item._id}>
          <a href={item.link} className={css["wish-link"]} target="_blank">
            <div className={css["wish"]}>
              <div className={css["wish--info"]}>
                <div className={css["wish--name"]}>{item.name}</div>
                <div className={css["wish--description"]}>
                  {item.description}
                </div>
              </div>
              <div className={css["wish--actions-section"]}>
                <div className={css["wish--image"]}>
                  <img src={item.image} alt={item.name}></img>
                </div>
              </div>
            </div>
          </a>
          {session && (
            <button
              className={css["wish--delete"]}
              onClick={() => deleteHandler(item)}
            >
              Удалить
            </button>
          )}
        </div>
      ))}
    </Fragment>
  );
}

export default ItemsList;
