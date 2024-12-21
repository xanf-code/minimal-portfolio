"use server";

export const fetchResume = async (collection) => {
  try {
    const response = await fetch(
      `https://minimal-portfolio-darshan.pockethost.io/api/collections/${collection}/records`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
