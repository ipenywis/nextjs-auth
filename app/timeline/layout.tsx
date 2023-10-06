import Tweet from "@/components/tweet";
import TwitterNavbar from "@/components/twitterNavbar";
import prisma from "@/lib/prisma";

export default async function Layout({ children }: { children: any }) {
  return (
    <main className="flex w-full justify-center items-center">
      <TwitterNavbar />
      <div className="flex flex-col w-full justify-center items-center">
        {children}
      </div>
    </main>
  );
}
