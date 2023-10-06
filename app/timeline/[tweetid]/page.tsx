import Tweet from "@/components/tweet";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

interface PageProps {
  params: any;
}

export default async function Page({ params }: PageProps) {
  const { tweetid } = params;
  const parsedTweetid: number = parseInt(tweetid);

  if (isNaN(parsedTweetid)) return notFound();

  const tweet = await prisma.tweet.findFirst({
    where: { id: parsedTweetid },
    include: { author: true, comments: { include: { author: true } } },
  });

  if (!tweet) return notFound();

  return <Tweet tweet={tweet} isTweetPage />;
}
