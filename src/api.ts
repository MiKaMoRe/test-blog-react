import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const api = axios.create({
  baseURL: process.env.BACKEND_URL ?? "http://localhost:8000",
});

const mock = new MockAdapter(api, { delayResponse: 1000 });

mock.onGet("/posts").reply(200, [
  {
    id: 1,
    title: "Best post in the world",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget rhoncus nisi. Donec lacinia turpis massa, nec suscipit nibh mollis et. Aenean nec sem commodo, dignissim nulla vel, tincidunt tortor. In tempus eget ante at bibendum. Nullam convallis, arcu sed hendrerit viverra, lacus ex lacinia leo, sit amet varius dui ex a metus. Curabitur egestas quam quis nulla commodo ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus in libero quis eros commodo elementum. Maecenas et leo hendrerit, tempus purus non, vehicula erat.",
    slug: "post1",
    created_at: "202212012004",
    updated_at: "202212012004",
  },
  {
    id: 2,
    title: "Best post in the world",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget rhoncus nisi. Donec lacinia turpis massa, nec suscipit nibh mollis et. Aenean nec sem commodo, dignissim nulla vel, tincidunt tortor. In tempus eget ante at bibendum. Nullam convallis, arcu sed hendrerit viverra, lacus ex lacinia leo, sit amet varius dui ex a metus. Curabitur egestas quam quis nulla commodo ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus in libero quis eros commodo elementum. Maecenas et leo hendrerit, tempus purus non, vehicula erat.",
    slug: "post2",
    created_at: "202212012004",
    updated_at: "202212012004",
  },
  {
    id: 3,
    title: "Best post in the world",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget rhoncus nisi. Donec lacinia turpis massa, nec suscipit nibh mollis et. Aenean nec sem commodo, dignissim nulla vel, tincidunt tortor. In tempus eget ante at bibendum. Nullam convallis, arcu sed hendrerit viverra, lacus ex lacinia leo, sit amet varius dui ex a metus. Curabitur egestas quam quis nulla commodo ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus in libero quis eros commodo elementum. Maecenas et leo hendrerit, tempus purus non, vehicula erat.",
    slug: "post3",
    created_at: "202212012004",
    updated_at: "202212012004",
  },
  {
    id: 4,
    title: "Best post in the world",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget rhoncus nisi. Donec lacinia turpis massa, nec suscipit nibh mollis et. Aenean nec sem commodo, dignissim nulla vel, tincidunt tortor. In tempus eget ante at bibendum. Nullam convallis, arcu sed hendrerit viverra, lacus ex lacinia leo, sit amet varius dui ex a metus. Curabitur egestas quam quis nulla commodo ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus in libero quis eros commodo elementum. Maecenas et leo hendrerit, tempus purus non, vehicula erat.",
    slug: "post4",
    created_at: "202212012004",
    updated_at: "202212012004",
  },
  {
    id: 5,
    title: "Best post in the world",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget rhoncus nisi. Donec lacinia turpis massa, nec suscipit nibh mollis et. Aenean nec sem commodo, dignissim nulla vel, tincidunt tortor. In tempus eget ante at bibendum. Nullam convallis, arcu sed hendrerit viverra, lacus ex lacinia leo, sit amet varius dui ex a metus. Curabitur egestas quam quis nulla commodo ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus in libero quis eros commodo elementum. Maecenas et leo hendrerit, tempus purus non, vehicula erat.",
    slug: "post5",
    created_at: "202212012004",
    updated_at: "202212012004",
  },
]);
