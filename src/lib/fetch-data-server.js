"use server";
import { fetchResume } from "@/actions";
import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  retryStrategy: () => 3000,
});

redis.on("error", (error) => {
  console.error("Redis connection error:", error);
});

export const fetchDataWithCache = async (key) => {
  let cachedData = null;

  try {
    cachedData = await redis.get(key);
  } catch (getError) {
    console.error("Redis GET error:", getError);
  }

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const freshData = await fetchResume(key);

  try {
    await redis.set(key, JSON.stringify(freshData), "EX", 60 * 5);
  } catch (setError) {
    console.error("Redis SET error:", setError);
  }

  return freshData;
};
