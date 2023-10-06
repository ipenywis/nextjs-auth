"use client";

import React from "react";
import {
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaRegListAlt,
  FaUserAlt,
  FaEllipsisH,
} from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";

import { signOut } from "next-auth/react";

function TwitterNavbar() {
  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <div className="flex flex-col items-center">
        <VscTwitter className="text-gray-200 text-4xl mb-4" />
        <nav className="mb-4">
          <NavItem icon={<FaHome className="text-xl" />} label="Home" />
          <NavItem icon={<FaHashtag className="text-xl" />} label="Explore" />
          <NavItem
            icon={<FaRegBell className="text-xl" />}
            label="Notifications"
          />
          <NavItem
            icon={<FaRegEnvelope className="text-xl" />}
            label="Messages"
          />
          <NavItem
            icon={<FaRegBookmark className="text-xl" />}
            label="Bookmarks"
          />
          <NavItem icon={<FaRegListAlt className="text-xl" />} label="Lists" />
          <NavItem icon={<FaUserAlt className="text-xl" />} label="Profile" />
          <NavItem icon={<FaEllipsisH className="text-xl" />} label="More" />
        </nav>
        <button className="w-full bg-blue-500 text-white rounded-full py-3 font-bold">
          Tweet
        </button>
      </div>
      <button className="bg-white rounded-full border border-gray-200 text-gray-800 px-4 py-2 flex items-center space-x-2 hover:bg-gray-200">
        <img
          className="h-8 w-8 rounded-full"
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          alt="User profile"
        />
        <span onClick={() => signOut()}>Logout</span>
      </button>
    </div>
  );
}

const NavItem = ({ icon, label }) => (
  <div className="mb-2 hover:bg-gray-200 rounded-full py-2 px-4 flex items-center space-x-2">
    {icon}
    <span>{label}</span>
  </div>
);

export default TwitterNavbar;
