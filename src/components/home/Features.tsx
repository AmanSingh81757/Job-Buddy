import { Rocket, Target, Users } from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-6 md:py-12 lg:py-16 bg-gradient-to-b from-teal-500/10 to-blue-500/10"
    >
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl text-gray-800 mb-2">
            Our Features
          </h2>
          <p className="text-xl text-gray-600">
            Providing groundbreaking solutions to your job searching process
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
          <div className="flex flex-col items-center space-y-2 p-6">
            <Rocket className="h-10 w-10 text-teal-600 mb-2" />
            <h3 className="text-xl font-bold text-gray-800 text-center">
            Organize and Track Your Job Applications
            </h3>
            <p className="text-gray-600 text-center">
            Easily manage all your job applications in one place. Track the status, set reminders, and stay on top of your job search to ensure you never miss an opportunity.
            </p>
          </div>
          {/* <div className="hidden md:block w-px bg-gray-200 mx-auto"></div> */}
          <div className="flex flex-col items-center space-y-2 p-6">
            <Target className="h-10 w-10 text-blue-600 mb-2" />
            <h3 className="text-xl font-bold text-gray-800 text-center">
              Keep Your Documents Within Reach
            </h3>
            <p className="text-gray-600 text-center">
              Say goodbye to searching through folders. Store and quickly
              retrieve your CV, cover letters, and other key documents, making
              sure you always submit the correct files when applying for jobs.
            </p>
          </div>
          {/* <div className="hidden md:block w-px bg-gray-200 mx-auto"></div> */}
          <div className="flex flex-col items-center space-y-2 p-6">
            <Users className="h-10 w-10 text-indigo-600 mb-2" />
            <h3 className="text-xl font-bold text-gray-800 text-center">
              Build Professional Resumes Effortlessly
            </h3>
            <p className="text-gray-600 text-center">
              Create tailored, polished resumes with ease. Customize templates,
              update information, and format your resume to make a lasting
              impression on potential employers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
