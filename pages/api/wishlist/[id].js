import { ObjectId } from "bson";
import { getDbConnection } from "../../../helpers/db";

async function handler(req, res) {
  const { id } = req.query;
  try {
    const client = await getDbConnection();
    const db = client.db();

    if (req.method === "DELETE") {
      await db.collection("items").deleteOne({ _id: ObjectId(id) });
    }

    client.close();

    res.status(200).json({ message: "Успешно" });
  } catch {
    res.status(400).json({ message: "Произошла ошибка" });
  }
}

export default handler;
