import Link from "next/link";
import { Post } from "@/types";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PostsProps {
  posts: Post[];
  isLoading: boolean;
}

export default function Posts({ posts, isLoading }: PostsProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <LoadingSpinner size={64} />
      </div>
    );
  }

  return (
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
  );
}
