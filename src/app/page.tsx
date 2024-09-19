"use client";

import React, { useEffect, useState } from "react";
import { Post } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllPosts } from "@/server/posts";

import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function HomePage(): React.ReactNode {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllPosts({limit: 30, skip: 0});
        setPosts(response.data ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown Error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className="flex justify-center">
          <LoadingSpinner size={64} />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-10">
          {posts.map((post) => {
            return (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>Создан {post.created_at}</CardDescription>
                </CardHeader>
                <CardContent>{post.content.substring(0, 100)}</CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <Link href={`posts/${post.slug}`}>Открыть</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
      <Pagination className="py-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
