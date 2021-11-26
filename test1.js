const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://test1:test1@cluster0.yerq8.mongodb.net/myFirstDatabase?retryWrites=true&w=mjority..a.";
const databaseName = "test1";

MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Connection failed for some reason");
  }
  console.log("Connection established - All well");
  const db = client.db(databaseName);
});