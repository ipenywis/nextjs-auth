import { Comment, Prisma } from "@prisma/client";
import Tweet from "./tweet";

// Component to render a list of comments
export function CommentsList({
  comments,
}: {
  comments: Prisma.CommentGetPayload<{ include: { author: true } }>[];
}) {
  return (
    <div className="space-y-4">
      {comments.map((comment, index) => (
        <div key={index} className="flex border-t border-gray-200 pt-4">
          <img
            className="h-14 w-14 rounded-full"
            src={`https://xsgames.co/randomusers/assets/avatars/male/${comment.author.id}.jpg`}
            alt="User profile"
          />
          <div className="ml-4">
            <h4 className="text-xl font-bold">{comment.author.name}</h4>
            <p className="text-xl">{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
