"use client";

import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaRegShareSquare,
} from "react-icons/fa";

import { AiOutlineRetweet } from "react-icons/ai";

import { FiShare } from "react-icons/fi";

export function TweetActions() {
  return (
    <div className="flex space-x-6 mt-3 text-gray-500 justify-evenly text-xl w-10/12 transition-all duration-300">
      <div className="cursor-pointer flex items-center space-x-1 group hover:text-blue-500 transition-colors duration-200">
        <FaRegComment className="group-hover:text-blue-500" />
      </div>
      <div className="cursor-pointer flex items-center space-x-1 group hover:text-green-500 transition-colors duration-200">
        <AiOutlineRetweet className="group-hover:text-green-500" />
      </div>
      <div
        className="cursor-pointer flex items-center space-x-1 group hover:text-red-500 transition-colors duration-200"
        onClick={() => alert("Loved this tweet!")}
      >
        <FaRegHeart className="group-hover:text-red-500" />
      </div>
      <div className="cursor-pointer flex items-center space-x-1 group hover:text-blue-500 transition-colors duration-200">
        <FiShare className="group-hover:text-blue-500" />
      </div>
    </div>
  );
}
