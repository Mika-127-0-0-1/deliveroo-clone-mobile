import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: "ehn1kkun",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
});

const build = imageUrlBuilder(client);

export const urlFor = (source) => build.image(source);

export default client;
