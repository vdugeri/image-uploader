import { readAllImages } from "@/api/storeManager";

export let fetchPhotos = async ({ commit }) => {
  let images = await readAllImages();

  images = images.map(image => {
    return image.data();
  });

  commit({
    type: "images",
    images
  });
};
