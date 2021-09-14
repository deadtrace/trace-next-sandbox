import { MongoClient } from "mongodb";

export async function getDbConnection() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.4khsl.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );
  return client;
}
