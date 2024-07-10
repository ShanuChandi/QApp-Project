import { GoChevronRight } from "react-icons/go";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 dark:bg-gradient-to-t from-gray-900 to-black ">
      <div className="fixed shadow-lg  justify-between items-center p-3 w-full h-24 bg-orange-500 rounded-md flex flex-row ">
        <div>
          <p className="font-normal text-sm font-mono text-white">
            Hi,Nice to see you !
          </p>
          <p className="font-bold text-xl font-mono text-white">
            Shanuka Chandimal
          </p>
        </div>

        <div className="h-9 w-9 rounded-full bg-white"></div>
      </div>
      <div className="mt-32 w-screen   flex-row p-3 justify-center">
        <div className="bg-orange-500  w-full rounded-md h-28   "></div>
      </div>
      <div className=" w-screen flex-1 p-3 ">
        <div className="flex  bg-purple-500 hover:bg-purple-700 w-full rounded-md h-24 mb-2 justify-between p-6 items-center">
          <h2 className="text-4xl font-normal font-mono">PHYSICS</h2>
          <GoChevronRight size={32} />
        </div>
        <div className="flex bg-purple-500 hover:bg-purple-700 w-full rounded-md h-24 mb-2 justify-between p-6 items-center">
          <h2 className="text-4xl font-normal font-mono">CHEMISTRY</h2>
          <GoChevronRight size={32} />
        </div>
        <div className="flex bg-purple-500 hover:bg-purple-700 w-full rounded-md h-24 mb-2 justify-between p-6 items-center">
          <h2 className="text-4xl font-normal font-mono">BIOLOGY</h2>
          <GoChevronRight size={32} />
        </div>
      </div>
    </main>
  );
}
