import SneakerItem from "../components/sale-sneakers/sneakerItem";
import Link from "next/link";
import chromium from "chrome-aws-lambda";

function Sales(props) {
  const { funkyDunkySneakers } = props;
  return (
    <div>
      <Link href="/">Назад</Link>
      <h1>FunkyDunky</h1>
      {funkyDunkySneakers.map((sneaker) => (
        <SneakerItem info={sneaker} key={sneaker.id}></SneakerItem>
      ))}
    </div>
  );
}

async function getFunkyDunkySneakers(browser) {
  const page = await browser.newPage();
  await page.goto(
    "https://funkydunky.ru/catalog/discounts/?m_key=1&type_id[0]=66&size_id[0]=64&size_id[1]=65&price[min]=&price[max]=&productRefresh=1&action=filter"
  );

  const products = await page.$$(".product");
  const sneakersInfo = [];

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

    sneakersInfo.push({
      title,
      oldPrice,
      newPrice,
      imageUrl,
      link,
      id: sneakersInfo.length,
    });
  }

  return sneakersInfo;
}

export async function getServerSideProps() {
  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  });

  const funkyDunkySneakers = await getFunkyDunkySneakers(browser);

  browser.close();

  return {
    props: {
      funkyDunkySneakers,
    },
  };
}

export default Sales;
