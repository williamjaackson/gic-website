import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="grid h-screen">
        <section className="grid bg-gradient-to-b from-red-50 h-1/2 place-items-center">
          <div className="flex gap-8 my-auto">
            <div className="overflow-hidden bg-white rounded-full p-4 border border-gray-200 shadow-sm">
              <Image
                src="/logo.png"
                alt="Griffith ICT Club"
                width={150}
                height={150}
              />
            </div>
            <div className="my-auto flex flex-col gap-2">
              <h1 className="text-5xl font-bold tracking-tighter">
                Griffith ICT Club
              </h1>
              <p className="text-lg max-w-xl text-gray-500">
                Lorem Ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <div className="flex gap-2">
                <Button size="lg">
                  Become a Member
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
