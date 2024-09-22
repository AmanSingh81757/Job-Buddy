import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-500/10 to-purple-500/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
              Want to give a feedback or contact?
            </h2>
            <p className="mx-auto text-gray-600 md:text-xl">
              I would really appreaciate a feedback or response. I will also make sure to reply to each and every mail
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="flex-1 bg-white/80 border-gray-300"
                placeholder="Enter your message"
                type="text"
              />
              <Button
                type="submit"
                className="bg-teal-600 text-white hover:bg-teal-700"
              >
                Send <Send className="ml-2 h-4 w-4"/>
              </Button>
            </form>
          </div>
        <button className="inline-flex h-12 shadow-lg animate-shimmer items-center justify-center rounded-md border-2 border-teal-800 bg-[linear-gradient(110deg,#2c2f33,45%,#4a525e,55%,#2c2f33)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Star on GitHub <Github className="ml-2"/>
        </button>

        </div>
      </div>
    </section>
  );
}
