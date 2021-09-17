import SneakersList from "../components/sale-sneakers/sneakersList";
import Link from "next/link";
import chromium from "chrome-aws-lambda";
import {
  getFunkyDunkySneakers,
  getKickz4uSneakers,
} from "../helpers/sneaker-shops";
import React, { Fragment } from "react";

function Sales(props) {
  const { shops } = props;
  shops.map((shop) => {
    console.log(shop);
  });

  return (
    <Fragment>
      <Link href="/">
        <a className="go-back-whole-button">Назад</a>
      </Link>
      {shops.map((shop) => (
        <SneakersList
          key={shop.shopName}
          shop={shop.shopName}
          sneakers={shop.sneakers}
        ></SneakersList>
      ))}
    </Fragment>
  );
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
  const kickz4uSneakers = await getKickz4uSneakers(browser);

  browser.close();

  return {
    props: {
      shops: [funkyDunkySneakers, kickz4uSneakers],
    },
  };
}

export default Sales;
