export function constructMetadata({
  title = "Darshan Aswathappa",
  description = "I am a software engineer with a passion for building scalable and efficient web applications.",
  image = "/me.webp",
  icons = "/me.webp",
  noIndex = false,
} = {}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@darshanaswath__",
    },
    icons,
    metadataBase: new URL("https://www.darshanaswath.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
