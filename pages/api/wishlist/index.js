import { getDbConnection } from "../../../helpers/db";

async function handler(req, res) {
  try {
    const client = await getDbConnection();
    const db = client.db();

    if (req.method === "POST") {
      await db.collection("items").insertOne(req.body);
    }
    const items = await db
      .collection("items")
      .find({})
      .sort({ _id: -1 })
      .toArray();

    client.close();

    res.status(200).json({ message: "Успешно", items });
  } catch {
    res.status(400).json({ message: "Произошла ошибка" });
  }
}

export default handler;
