import { Prisma } from "@prisma/client";
import { timeAgo } from "@/lib/time-ago";
import { TweetActions } from "./tweetActions";
import Link from "next/link";
import { CommentsList } from "./commentsList";
import { AddComment } from "./addComment";

type TweetWithAuthorAndComments = Prisma.TweetGetPayload<{
  include: { author: true; comments: { include: { author: true } } };
}>;

interface TweetProps {
  tweet: TweetWithAuthorAndComments;
  isTweetPage?: boolean;
}

const WrapperLink = ({ children, isTweetPage, href }) =>
  isTweetPage ? children : <Link href={href}>{children}</Link>;

export default function Tweet({ tweet, isTweetPage }: TweetProps) {
  return (
    <WrapperLink href={`/timeline/${tweet.id}`} isTweetPage={isTweetPage}>
      <div className="flex flex-col border-b border-gray-600 p-4 max-w-2xl">
        <div className="flex space-x-3">
          <img
            className="h-14 w-14 rounded-full"
            src={`https://xsgames.co/randomusers/assets/avatars/male/${tweet.id}.jpg`}
            alt="User profile"
          />
          <div className="flex-1">
            <div className="flex items-center text-lg">
              <h4 className="font-bold">{tweet?.author?.name}</h4>
              <p className="ml-2 text-gray-500">@{tweet.author.name}</p>
              <span className="mx-1 text-gray-500">·</span>
              <p className="text-gray-500">
                {timeAgo(new Date(tweet.createdAt))}
              </p>
            </div>
            <p className="mt-2 text-white font-base text-2xl">{tweet.text}</p>
            <div className="flex space-x-6 mt-3 text-gray-500">
              <TweetActions />
            </div>
          </div>
        </div>
      </div>
      {isTweetPage && (
        <div className="flex flex-col max-w-2xl w-full">
          <CommentsList comments={tweet.comments} />
          <AddComment tweet={tweet} />
        </div>
      )}
    </WrapperLink>
  );
}
