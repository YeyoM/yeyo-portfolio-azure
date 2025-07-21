import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <main className="bg-[#FBF6ED] min-h-screen">
      <Navbar />
      <div className="mx-auto flex flex-col items-center justify-center">
        {/* Hero */}
        <div className="flex flex-col w-[90%] max-w-[990px] mt-36">
          <h3 className="text-3xl font-normal text-black tracking-wide sm:text-4xl md:text-5xl">
            hey, this is Diego! <br />a{" "}
            <span className="font-semibold italic text-[#2292BF]">
              {" "}
              site reliability engineer{" "}
            </span>{" "}
            making systems more reliable through automation and observability.
          </h3>
        </div>
        <hr className="w-[90%] max-w-[990px] border-black border-opacity-50 mt-12" />
        {/* Status */}
        <div className="flex flex-col w-[90%] max-w-[990px] mt-6">
          <p className="text-md font-normal text-black tracking-wide">
            Currently.{" "}
            <span className="italic font-semibold">
              Site Reliability Enginer{" "}
              <a
                href="https://careers.petco.com/us/en"
                target="_blank"
                className="italic text-[#2292BF]"
              >
                @Petco{" "}
              </a>
              & Computer Science student{" "}
              <a
                href="https://www.uaa.mx/portal/"
                target="_blank"
                className="italic text-[#2292BF]"
              >
                @UAA{" "}
              </a>
            </span>
          </p>
          <p className="text-md font-light text-black tracking-wide">
            Previously.{" "}
            <span className="italic font-semibold">
              SRE Intern{" "}
              <a
                href="https://fellowship.mlh.io/"
                target="_blank"
                className="italic text-[#2292BF]"
              >
                @Petco{" "}
              </a>
            </span>
            <span className="italic font-semibold">
              & SRE Fellow{" "}
              <a
                href="https://fellowship.mlh.io/"
                target="_blank"
                className="italic text-[#2292BF]"
              >
                @MLH{" "}
              </a>
            </span>
          </p>
          {/**
          <p className="text-md font-normal text-black tracking-wide">
            Status.{" "}
            <span className="italic font-semibold">Not open to work </span>
          </p>
          */}
        </div>
        {/* Experience */}
        <div className="flex flex-col w-[90%] max-w-[990px] mt-24">
          <p className="text-2xl font-normal text-black tracking-wide italic">
            Experience
          </p>
          <hr className="w-full border-black border-opacity-50 mt-2" />
          <div className="flex sm:flex-row flex-col items-center justify-between mt-10">
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/petco.png"
                alt="petco-logo"
                width={100}
                height={100}
                className="w-[100px] h-[100px]"
              />
              <div className="flex flex-col ml-4">
                <p className="sm:text-[1rem] text-sm font-semibold text-black tracking-wide">
                  Petco
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  Site Reliability Engineer (Jul 25 - Present)
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  SRE Intern (Aug 24 - Jul 25)
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:ml-2 ml-0 sm:mt-0 mt-4">
              <Link
                className="sm:text-[1rem] text-sm font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center ml-2"
                href="/petco.html"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-between mt-10">
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/mlh.png"
                alt="mlh-logo"
                width={100}
                height={100}
                className="w-[100px] h-[100px]"
              />
              <div className="flex flex-col ml-4">
                <p className="sm:text-[1rem] text-sm font-semibold text-black tracking-wide">
                  Major League Hacking
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  SRE Fellow (Jun 23 - Sep 23)
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:ml-2 ml-0 sm:mt-0 mt-4">
              <Link
                className="sm:text-[1rem] text-sm font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center ml-2"
                href="/mlh-fellowship.html"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Education and Certifications */}
        <div className="flex flex-col w-[90%] max-w-[990px] mt-24">
          <p className="text-2xl font-normal text-black tracking-wide italic">
            Education and Certifications
          </p>
          <hr className="w-full border-black border-opacity-50 mt-2" />
          <div className="flex sm:flex-row flex-col items-center justify-between mt-10">
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/datadog.png"
                alt="datadog-logo"
                width={100}
                height={100}
                className="w-[100px] h-[100px]"
              />
              <div className="flex flex-col ml-4">
                <p className="sm:text-[1rem] text-sm font-semibold text-black tracking-wide">
                  Datadog
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  APM Fundamentals Certified
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  Logs Fundamentals Certified
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:ml-2 ml-0 sm:mt-0 mt-4">
              <Link
                className="sm:text-[1rem] text-sm font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center ml-2"
                href="https://www.credly.com/users/diego-moreno.b5eb23d6/badges#credly"
              >
                My Badges
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-between mt-10">
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/aws_cp.png"
                alt="aws-badge"
                width={100}
                height={100}
                className="w-[100px] h-[100px]"
              />
              <div className="flex flex-col ml-4">
                <p className="sm:text-[1rem] text-sm font-semibold text-black tracking-wide">
                  AWS Cloud Quest
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  Cloud Practitioner
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:ml-2 ml-0 sm:mt-0 mt-4">
              <Link
                className="sm:text-[1rem] text-sm font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center ml-2"
                href="https://www.credly.com/users/diego-moreno.b5eb23d6/badges#credly"
              >
                My Badges
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-between mt-10">
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/uaa.png"
                alt="uaa-logo"
                width={100}
                height={100}
                className="w-[100px] h-[100px]"
              />
              <div className="flex flex-col ml-4">
                <p className="sm:text-[1rem] text-sm font-semibold text-black tracking-wide">
                  Universidad Autónoma de Aguascalientes
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  Computer Science Student
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  &apos;26, GPA: 9.8/10
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:ml-2 ml-0 sm:mt-0 mt-4">
              <Link
                className="sm:text-[1rem] text-sm font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center ml-2"
                href="/uaa.html"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div className="flex flex-col w-[90%] max-w-[990px] mt-24 mb-24">
          <p className="text-2xl font-normal text-black tracking-wide italic">
            Side projects
          </p>
          <hr className="w-full border-black border-opacity-50 mt-2" />
          <div className="flex sm:flex-row flex-col items-center justify-between mt-10">
            <div className="flex flex-row w-full">
              <Image
                src="/better-commits.png"
                alt="better-commits"
                width={150}
                height={95}
                className="w-[150px] h-[95px]"
              />
              <div className="flex flex-col ml-4">
                <p className="sm:text-[1rem] text-sm font-semibold text-black tracking-wide">
                  Better Commits
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  CLI tool to improve your git commits
                </p>
                <p className="text-xs font-normal tracking-wide text-[#1256bd]">
                  Golang, bubbletea, lipgloss
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:ml-2 ml-0 sm:mt-0 mt-4">
              <Link
                className="sm:text-[1rem] text-sm font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center"
                href="/better-commits.html"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-between mt-10">
            <div className="flex flex-row w-full">
              <Image
                src="/portfolio.png"
                alt="portfolio"
                width={150}
                height={95}
                className="w-[150px] h-[95px]"
              />
              <div className="flex flex-col ml-4">
                <p className="sm:text-[1rem] text-sm font-semibold text-black tracking-wide">
                  Personal Portfolio (old version)
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  My personal portfolio
                </p>
                <p className="text-xs font-normal tracking-wide text-[#1256bd]">
                  Docker, Next.js, nginx, github actions and Digital Ocean
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:ml-2 ml-0 sm:mt-0 mt-4">
              <Link
                className="sm:text-[1rem] text-sm font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center"
                href="/portfolio.html"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-between mt-10">
            <div className="flex flex-row w-full">
              <Image
                src="/wellness.png"
                alt="wellness"
                width={150}
                height={95}
                className="w-[150px] h-[95px]"
              />
              <div className="flex flex-col ml-4">
                <p className="sm:text-[1rem] text-sm font-semibold text-black tracking-wide">
                  Wellness
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  Your perfect gym partner
                </p>
                <p className="text-xs font-normal tracking-wide text-[#1256bd]">
                  Javascript, React Native, Expo, Firebase
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:ml-2 ml-0 sm:mt-0 mt-4">
              <Link
                className="sm:text-[1rem] text-sm font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center"
                href="/wellness.html"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-between mt-10">
            <div className="flex flex-row w-full">
              <Image
                src="/lofi-terminal.png"
                alt="lofi-terminal"
                width={150}
                height={95}
                className="w-[150px] h-[95px]"
              />
              <div className="flex flex-col ml-4">
                <p className="sm:text-[1rem] text-sm font-semibold text-black tracking-wide">
                  Lo-Fi Terminal
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  A terminal-based music player
                </p>
                <p className="text-xs font-normal tracking-wide text-[#1256bd]">
                  Javascript, Next, React, react-terminal, Firebase
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:ml-2 ml-0 sm:mt-0 mt-4">
              <Link
                className="sm:text-[1rem] text-sm font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center"
                href="/lofi-terminal.html"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-between mt-10">
            <div className="flex flex-row w-full">
              <Image
                src="/cocktail-please.png"
                alt="cocktail-please"
                width={150}
                height={95}
                className="w-[150px] h-[95px]"
              />
              <div className="flex flex-col ml-4">
                <p className="sm:text-[1rem] text-sm font-semibold text-black tracking-wide">
                  Cocktail Please!
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  A cocktail recipe generator
                </p>
                <p className="text-xs font-normal tracking-wide text-[#1256bd]">
                  Javascript, React, Next, Tailwind, CocktailDB, Firebase Auth
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:ml-2 ml-0 sm:mt-0 mt-4">
              <Link
                className="sm:text-[1rem] text-sm font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center"
                href="/cocktail-please.html"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* School Projects */}
        <div className="flex flex-col w-[90%] max-w-[990px] mb-24">
          <p className="text-2xl font-normal text-black tracking-wide italic">
            Cool school projects
          </p>
          <hr className="w-full border-black border-opacity-50 mt-2" />
          <div className="flex sm:flex-row flex-col items-center justify-between mt-10">
            <div className="flex flex-row w-full">
              <Image
                src="/turing-machine.png"
                alt="turing-machine"
                width={150}
                height={95}
                className="w-[150px] h-[95px]"
              />
              <div className="flex flex-col ml-4">
                <p className="sm:text-[1rem] text-sm font-semibold text-black tracking-wide">
                  Universal Turing Machine
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  A universal turing machine simulator
                </p>
                <p className="text-xs font-normal tracking-wide text-[#1256bd]">
                  Golang
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:ml-2 ml-0 sm:mt-0 mt-4">
              <Link
                className="sm:text-[1rem] text-sm font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center"
                href="https://github.com/YeyoM/universal-turing-go"
                target="_blank"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-between mt-10">
            <div className="flex flex-row w-full">
              <Image
                src="/maze-solver.png"
                alt="maze-solver"
                width={150}
                height={95}
                className="w-[150px] h-[95px]"
              />
              <div className="flex flex-col ml-4">
                <p className="sm:text-[1rem] text-sm font-semibold text-black tracking-wide">
                  Maze Solver
                </p>
                <p className="sm:text-[1rem] text-sm font-normal text-black tracking-wide italic">
                  A python maze solver using DFS, BFS, and A*
                </p>
                <p className="text-xs font-normal tracking-wide text-[#1256bd]">
                  Python
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:ml-2 ml-0 sm:mt-0 mt-4">
              <Link
                className="sm:text-[1rem] text-sm font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center"
                href="https://github.com/YeyoM/mazeSolver"
                target="_blank"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
