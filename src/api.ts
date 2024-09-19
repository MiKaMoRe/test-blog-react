import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { posts } from "./api_mockdata/posts"

export const api = axios.create({
  baseURL: process.env.BACKEND_URL ?? "http://localhost:8000",
});

const mock = new MockAdapter(api, { delayResponse: 1000 });

mock.onGet("/posts", { params: { limit: 30, skip: 0 } }).reply(200, posts);
mock.onGet("/posts", { params: { limit: 30, skip: 1 } }).reply(200, posts.slice(2));
