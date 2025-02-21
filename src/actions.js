"use server";
import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from "@aws-sdk/client-secrets-manager";

export const fetchResume = async (collection) => {
  const client = new SecretsManagerClient({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  const command = new GetSecretValueCommand({
    SecretId: process.env.SECRET_ID,
  });
  const response = await client.send(command);
  const updated_url = JSON.parse(response.SecretString).invoke_url;

  try {
    const response = await fetch(`${updated_url}/${collection}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
