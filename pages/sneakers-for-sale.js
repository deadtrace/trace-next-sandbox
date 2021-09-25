import SneakersList from "../components/sale-sneakers/sneakersList";
import Link from "next/link";
import chromium from "chrome-aws-lambda";
import {
  getFunkyDunkySneakers,
  getKickz4uSneakers,
} from "../helpers/sneaker-shops";
import React, { Fragment } from "react";
// TODO: NEED TO BE REWRITTEN WITH REQUESTS TO API

function Sales(props) {
  const { shops } = props;

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

export async function getStaticProps() {
  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  });

  const shops = await Promise.all([
    // getFunkyDunkySneakers(browser),
    getKickz4uSneakers(browser),
  ]);

  browser.close();

  return {
    props: {
      shops,
    },
    revalidate: 1800,
  };
}

export default Sales;
