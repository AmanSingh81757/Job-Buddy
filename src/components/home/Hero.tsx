import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-[calc(50%)] left-[calc(0%)] w-40 lg:w-96 h-40 lg:h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob hidden lg:block lg:left-[calc(87%)]"></div>
          <div className="absolute top-[calc(-25%)] left-[calc(0%)] w-40 lg:w-96 h-40 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob hidden lg:block lg:left-[calc(-8%)]"></div>
          <div className="absolute top-[calc(10%)] left-[calc(38%)] w-40 h-40 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-black/80 to-black/30">
              Your Career, Elevated
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Job Buddy: Your career companion. Navigate your
              professional journey with confidence.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2 flex flex-col items-center justify-center">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-blue-400 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Get Started <span>{'>'}</span>
              </div>
            </button>
            <p className="text-gray-900">
              Manage your job applications with ease for <span className="font-bold underline"> FREE </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
