import { DynamoDB } from "aws-sdk";

const documentClient = new DynamoDB.DocumentClient();
const tableName = "my-table";

exports.handler = async (event) => {
  const item = {
    id: "123",
    name: "John Smith",
    age: 30,
  };

  const params = {
    TableName: tableName,
    Item: item,
  };

  try {
    await documentClient.putItem(params).promise();
    console.log(`Successfully added item to table ${tableName}`);
  } catch (err) {
    console.error(`Error adding item to table ${tableName}: ${err}`);
  }
};
