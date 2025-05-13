import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grid h-screen">
        <section className="py-8 md:py-0 h-min md:h-1/2 grid bg-gradient-to-b from-red-50 place-items-center">
          <div className="flex flex-col md:flex-row gap-8 my-auto px-8">
            <div className="my-auto flex flex-col gap-2 order-2 md:order-1">
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
            <div className="flex order-1 md:order-2">
              <div className="w-content h-content overflow-hidden bg-white rounded-md p-4 border border-gray-200 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Griffith ICT Club"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
