"use client";

import React, { useEffect, useState } from "react";
import PaginationComponent from "@/components/pagination";
import Posts from "@/components/post/posts";
import { Post } from "@/types";
import { getAllPosts } from "@/server/posts";

export default function HomePage(): React.ReactNode {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [pageTotalCount, setPageTotalCount] = useState(1);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllPosts({ limit: 30, skip: page });
        setPosts(response.data ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown Error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [page]);

  return (
    <main>
      <Posts posts={posts} isLoading={isLoading} />
      <PaginationComponent
        page={page}
        pageTotalCount={pageTotalCount}
        isLoading={isLoading}
        setPage={setPage}
      />
    </main>
  );
}
