import axios from "axios";
import { cloudinaryCloudName, cloudinaryAPIKey } from "./../../config";

export let uploadImage = async file => {
  const endpoint = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`;

  let formData = new FormData();
  formData.append("file", file);
  formData.append("apiKey", cloudinaryAPIKey);
  formData.append("upload_preset", "sample-uploader");

  const response = await axios.post(endpoint, formData);

  return response.data;
};
