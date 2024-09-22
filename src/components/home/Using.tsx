import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

function ExploreButton() {
  return (
    <button className="px-6 py-2 flex rounded-md bg-teal-500/80 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
      Explore <ArrowUpRight className="ml-2 h-6 w-6"/>
    </button>
  );
}

export default function Using() {
  return (
    <section
      id="using"
      className="w-full py-6 md:py-12 lg:py-20 bg-gradient-to-b from-blue-500/10 to-indigo-500/10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter md:text-5xl text-gray-800 mb-8 text-center">
          How to use Job Buddy
        </h2>
        <div className="space-y-12 md:space-y-24">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Stay Organized and On Track
              </h3>
              <p className="text-gray-600">
                Easily keep tabs on all your job applications in one place. Our
                intuitive dashboard lets you see at a glance where you stand
                with each potential employer, helping you stay organized and
                focused on your job hunt.
              </p>
              <ExploreButton />
            </div>
            <div className="flex-1">
              <Image
                src="/placeholder.svg"
                alt="Job Buddy Document Management"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
                layout="responsive"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Never Miss an Important Date
              </h3>
              <p className="text-gray-600">
                Set interview dates within the app, and we'll send you a
                reminder email one day before the scheduled interview. This way,
                you can prepare in advance and show up confident and ready to
                impress.
              </p>
              <ExploreButton />
            </div>
            <div className="flex-1">
              <Image
                src="/placeholder.svg"
                alt="Job Buddy Document Management"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
                layout="responsive"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Keep Your Important Documents Handy
              </h3>
              <p className="text-gray-600">
                No more digging through folders to find your CV or cover letter.
                Easily access and attach your documents when applying for jobs,
                ensuring you always send the right information to potential
                employers.
              </p>
              <ExploreButton />
            </div>
            <div className="flex-1">
              <Image
                src="/placeholder.svg"
                alt="Job Buddy Document Management"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
