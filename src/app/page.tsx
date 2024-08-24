import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  MessageSquare,
  PenTool,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "John the Wordsmith - Storyteller and Ghost Writer",
  description:
    "I help clients reverse-engineer their career stories and craft narratives for maximum impact.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <header className="flex h-14 items-center border-b border-gray-200 px-4 dark:border-gray-800 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            JOHN THE WORDSMITH
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-gray-700 underline-offset-4 hover:text-gray-900 hover:underline dark:text-gray-300 dark:hover:text-gray-100"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 underline-offset-4 hover:text-gray-900 hover:underline dark:text-gray-300 dark:hover:text-gray-100"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 underline-offset-4 hover:text-gray-900 hover:underline dark:text-gray-300 dark:hover:text-gray-100"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 underline-offset-4 hover:text-gray-900 hover:underline dark:text-gray-300 dark:hover:text-gray-100"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 underline-offset-4 hover:text-gray-900 hover:underline dark:text-gray-300 dark:hover:text-gray-100"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-16 lg:py-24 xl:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-x-8 md:space-y-0">
              <div className="flex flex-col items-center space-y-4 text-center md:w-1/2 md:items-start md:text-left">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Unlock your story
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-700 dark:text-gray-200 md:text-xl">
                    I help clients reverse-engineer their career stories and
                    craft narratives for maximum impact.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-600 dark:hover:bg-green-700 dark:focus-visible:ring-green-500"
                    href="#contact"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#services"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center md:w-1/2">
                <Image
                  src="/avatar.png"
                  alt="John the Wordsmith - Storyteller and Ghost Writer"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                />
                <p className="mt-3 text-4xl font-bold">John Cook</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full bg-gray-100 py-12 dark:bg-gray-900 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-gray-100 sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="mt-4 max-w-[700px] text-gray-700 dark:text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&rsquo;m a writer and storyteller with over 20 years of
              experience in the hospital & health care industry. My background
              as a Senior Technical Writer specializing in medical devices has
              honed my skills in bridging the gap between technical experts and
              end-users.
            </p>
            <p className="mt-4 max-w-[700px] text-gray-700 dark:text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My ADHD superpower of hyper-focus gives me an extra gear, allowing
              me to dive deep into complex narratives and emerge with clear,
              impactful stories.
            </p>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-gray-800 dark:text-gray-100 sm:text-4xl md:text-5xl">
              Services
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <PenTool className="h-8 w-8 text-gray-700 dark:text-gray-300" />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      Career Story Crafting
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-200">
                    Reverse-engineer your career journey into a compelling
                    narrative that showcases your unique value.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <BookOpen className="h-8 w-8 text-gray-700 dark:text-gray-300" />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      Ghost Writing
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-200">
                    Bring your ideas to life with professional ghost writing
                    services for books, articles, and more.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <MessageSquare className="h-8 w-8 text-gray-700 dark:text-gray-300" />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      Narrative Consulting
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-200">
                    Get expert advice on shaping your personal or business
                    narrative for maximum impact and engagement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full bg-gray-100 py-12 dark:bg-gray-900 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-gray-800 dark:text-gray-100 sm:text-4xl md:text-5xl">
              Testimonials
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
                <CardContent className="pt-6">
                  <p className="italic text-gray-700 dark:text-gray-200">
                    &quot;Working with this storyteller transformed my resume
                    into a compelling narrative. I landed my dream job thanks to
                    their expertise!&quot;
                  </p>
                  <p className="mt-2 font-semibold text-gray-800 dark:text-gray-100">
                    - Sarah J., Marketing Executive
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
                <CardContent className="pt-6">
                  <p className="italic text-gray-700 dark:text-gray-200">
                    &quot;The ghost writing service was exceptional. My book
                    reads exactly how I imagined it, but better!&quot;
                  </p>
                  <p className="mt-2 font-semibold text-gray-800 dark:text-gray-100">
                    - Dr. Michael R., Neuroscientist
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full bg-gray-100 py-12 dark:bg-gray-900 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-gray-100 sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="text-gray-700 dark:text-gray-200">
                  Ready to unlock your story? Whether you need help crafting
                  your career narrative, are looking for a ghost writer, or
                  seeking narrative consulting, I&apos;m here to help.
                  Let&apos;s connect and bring your story to life.
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:john@thewordsmith.com"
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
                  >
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="border-gray-200 bg-white focus-visible:ring-green-500 focus-visible:ring-offset-0 dark:border-gray-800 dark:bg-gray-950"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="border-gray-200 bg-white focus-visible:ring-green-500 focus-visible:ring-offset-0 dark:border-gray-800 dark:bg-gray-950"
                  />
                  <Textarea
                    placeholder="Your Message"
                    className="border-gray-200 bg-white focus-visible:ring-green-500 focus-visible:ring-offset-0 dark:border-gray-800 dark:bg-gray-950"
                  />
                  <Button
                    className="w-full bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-gray-200 px-4 py-6 dark:border-gray-800 sm:flex-row md:px-6">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          © 2023 John Doe Storyteller. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            className="text-xs text-gray-700 underline-offset-4 hover:text-gray-900 hover:underline dark:text-gray-300 dark:hover:text-gray-100"
            href="#terms"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-gray-700 underline-offset-4 hover:text-gray-900 hover:underline dark:text-gray-300 dark:hover:text-gray-100"
            href="#privacy"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
