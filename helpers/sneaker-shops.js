export async function getFunkyDunkySneakers(browser) {
  const page = await browser.newPage();
  await page.goto(
    "https://funkydunky.ru/catalog/discounts/?size_id%5B0%5D=65&price%5Bmin%5D=&price%5Bmax%5D=&productRefresh=1&action=filter"
  );

  const products = await page.$$(".product");
  const sneakers = [];
  const shopName = "FunkyDunky";

  for (const product of products) {
    const titleEl = await product.$(".product-title");
    const titleTxt = await titleEl.getProperty("innerText");
    const title = await titleTxt.jsonValue();

    const oldPriceEl = await product.$(".price-old");
    const oldPriceTxt = await oldPriceEl.getProperty("innerText");
    const oldPrice = await oldPriceTxt.jsonValue();

    const newPriceEl = await product.$(".price-new");
    const newPriceTxt = await newPriceEl.getProperty("innerText");
    const newPrice = await newPriceTxt.jsonValue();

    const imageUrlEl = await product.$(".no_hovered_img");
    const imageUrlTxt = await imageUrlEl.getProperty("src");
    const imageUrl = await imageUrlTxt.jsonValue();

    const linkEl = await product.$(".product-new-link");
    const linkTxt = await linkEl.getProperty("href");
    const link = await linkTxt.jsonValue();

    const discEl = await product.$(".sale");
    const discTxt = await discEl.getProperty("innerText");
    const discount = await discTxt.jsonValue();

    sneakers.push({
      title,
      oldPrice,
      newPrice,
      imageUrl,
      link,
      id: `fd${sneakers.length}`,
      discount,
    });
  }

  await page.close();

  return { shopName, sneakers };
}

export async function getKickz4uSneakers(browser) {
  const page = await browser.newPage();
  await page.goto(
    "https://kickz4u.ru/productlist.aspx?type=discount&size=56,32&sort=DescByAddingDate&page=0"
  );

  const products = await page.$$(".product-item");
  const sneakers = [];
  const shopName = "Kickz4u";

  for (const product of products) {
    const titleEl = await product.$(".product-item-name");
    const titleTxt = await titleEl.getProperty("innerText");
    const title = await titleTxt.jsonValue();

    const newPriceEl = await product.$(".price-wrap");
    const newPriceTxt = await newPriceEl.getProperty("innerText");
    let newPrice = await newPriceTxt.jsonValue();
    newPrice = newPrice.replace(/[^\d\s]+/g, "");

    const imageUrlEl = await product.$(".scp-img");
    const imageUrlTxt = await imageUrlEl.getProperty("src");
    const imageUrl = await imageUrlTxt.jsonValue();

    const linkTxt = await product.getProperty("href");
    const link = await linkTxt.jsonValue();

    const discEl = await product.$(".disc");
    const discTxt = await discEl.getProperty("innerText");
    let discount = await discTxt.jsonValue();
    discount = discount.replace(/[^\d%]+/g, "");

    sneakers.push({
      title,
      oldPrice: "",
      newPrice,
      imageUrl,
      link,
      id: `k4${sneakers.length}`,
      discount,
    });
  }

  await page.close();

  return { shopName, sneakers };
}
