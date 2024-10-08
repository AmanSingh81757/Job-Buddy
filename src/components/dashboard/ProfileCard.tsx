import { auth } from "@/../auth";

export default async function ProfileCard() {
  const session = await auth();
  return (
    <div className="flex items-center cursor-pointer space-x-4 px-2 py-1">
      <div className="h-10 w-10 text-black text-2xl justify-center items-center">
        <img
          src={session?.user?.image as string}
          className="rounded-full"
        ></img>
      </div>
      <div className="items-center flex justify-center">
        <div className="h-8 w-[150px] text-center flex items-center justify-center text-sm pt-1">
          {session?.user?.name}
        </div>
      </div>
    </div>
  );
}
