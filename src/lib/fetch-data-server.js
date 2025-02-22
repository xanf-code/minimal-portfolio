"use server";
import { fetchResume } from "@/actions";
import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});

export const fetchDataWithCache = async (key) => {
  const cachedData = await redis.get(key);

  if (cachedData) {
    return JSON.parse(cachedData);
  } else {
    const freshData = await fetchResume(key);
    await redis.set(key, JSON.stringify(freshData), "EX", 60 * 5);
    return freshData;
  }
};
