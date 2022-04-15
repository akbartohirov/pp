import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "w7g9kkm7",
  dataset: "production",
  apiVersion: "2022-04-14",
  useCdn: true,
  token:
    "skAZ0YygKDmqtpKVJAPzBaHWn26EykN5k0sFSsYuOndoz3WbZok3JBO9tGfeZZIyahR8cCrSYxpyImSkIHMP2AuFY9u4BG1MCcRVJ6CCA503HnHlynuoJQhTFZeFG1sTQXQokDgFDsa8XCKlMTIvur5N09heZCkmEgEAm5PQmxlrycMEviWh",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
