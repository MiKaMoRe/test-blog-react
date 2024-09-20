"use client"

import { useEffect, useState } from "react";
import { getPost } from "@/server/posts";
import { Post } from "@/types";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page({ params }: { params: { posts_slug: string } }) {
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<Post | null>();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPost(params.posts_slug);
        setPost(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown Error");
      }
    };
    fetchPost();
  }, [params.posts_slug]);

  if (post){
    return (
      <Card>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>Создан {post.created_at}</CardDescription>
        </CardHeader>
        <CardContent>{post.content}</CardContent>
        <CardFooter className="flex justify-end">
        </CardFooter>
      </Card>
    );
  }
}
