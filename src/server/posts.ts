import { TGetResponse, Post } from "@/types";
import { api } from "../api";

export const getAllPosts = async (
  params?: object
): Promise<TGetResponse<Post[]>> => {
  const response = await api.get("/posts", { params: params });

  if (response.status != 200) {
    return {
      data: null,
      status: response.status,
      message: "Error fetching posts",
    };
  }

  return {
    data: response.data,
    status: response.status,
  };
};
