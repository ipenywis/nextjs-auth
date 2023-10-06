// "use client";

import { useState } from "react";
import prisma from "@/lib/prisma";
import { Comment, Prisma, Tweet } from "@prisma/client";
import { revalidatePath } from "next/cache";

async function saveCommentToDB(data: Prisma.CommentCreateInput) {
  const newComment = await prisma.comment.create({ data });

  console.log("New Comment Added: ", newComment);
}

interface AddCommentProps {
  tweet: Tweet;
}

export const AddComment = ({ tweet }: AddCommentProps) => {
  // const [text, setText] = useState("");

  //This a server action - works like standard HTML Form actions
  async function addComment(data: FormData) {
    "use server";

    const { id: tweetId, authorId } = tweet;

    const newCommentData: Prisma.CommentCreateInput = {
      text: data.get("text") as string,
      author: {
        connect: { id: authorId },
      },
      tweet: {
        connect: { id: tweetId },
      },
    };

    await saveCommentToDB(newCommentData);

    revalidatePath(`/timeline/${tweetId}`);
  }

  return (
    <form className="mt-4 w-full" action={addComment}>
      <textarea
        // value={text}
        // onChange={(e) => setText(e.target.value)}
        className="w-full border text-xl border-gray-300 rounded p-2 mb-2 bg-transparent border-transparent outline-none focus:outline-none"
        placeholder="Add a comment..."
        name="text"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Submit
      </button>
    </form>
  );
};
