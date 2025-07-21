import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-[#FBF6ED] min-h-screen">
      <Navbar />
      <div className="mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col w-[90%] max-w-[680px] mt-40 mb-24">
          <h1 className="text-5xl font-normal text-black tracking-wide mb-14">
            Exploring my time at University 
          </h1>
          <p className="text-md font-normal text-black text-justify">
            Hey folks! I&apos;m here to share a bit about my journey at the
            Universidad Autónoma de Aguascalientes (UAA), where I&apos;m
            pursuing a degree in Computer Science with a focus on AI. It&apos;s been an
            incredible experience so far, and I&apos;m excited to give you a
            glimpse into my academic life.
          </p>
          <Image
            src="/uaa1.png"
            alt="Picture with my friends at Universidad Autónoma de Aguascalientes"
            width={680}
            height={400}
            className="rounded-lg mt-6 mb-2"
          />
          <p className="text-md font-normal text-black text-justify italic">
            Some cool folks
          </p>
          <p className="text-md font-normal text-black text-justify mt-4">
            I satarted my journey at UAA in 2021, in the middle of the pandemic, 
            I finished my first semester and a half online before returning to  
            in-person classes. The transition was a bit challenging, but it
            also made me appreciate the value of face-to-face interactions and
            collaborative learning. The professors and staff were incredibly
            supportive, helping us adapt to the new normal while ensuring we 
            received a quality education.
          </p>
          <p className="text-md font-normal text-black text-justify mt-4">
            One of my highights and the first picture you can see in this page, 
            was the opportunity to teach a workshop on Javasciript and React 
            to 50 of my classmates and from other degrees. It was a really  cool 
            experience that allowed me to share my knowledge and passion for 
            programming and web development that I had in that time.
          </p>
          <p className="text-md font-normal text-black text-justify mt-4">
            These types of experiences have been invaluable in shaping my 
            understanding of computer science and its practical applications.
            I am really grateful for the chance to share with others and 
            contribute to the learning community at my university.
          </p>
          <p className="text-md font-normal text-black text-justify mt-4">
            Learn more about my University {" "}
            <a
              className="text-[#2292BF] hover:underline"
              href="https://www.uaa.mx/portal/"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            Relevant Courses and Skills
          </h3>
          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Languages:</span> Python, C, C++, 
            Java, JavaScript, SQL, Bash
          </p>
          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Courses:</span> Networking, Algorithms, 
            Operating Systems, Computer Architecture, Software Engineering,
            Database Management, Web Development, Mobile App Development
          </p>
          <Image
            src="/uaa2.png"
            alt="Picture with my friends at Universidad Autónoma de Aguascalientes"
            width={680}
            height={400}
            className="rounded-lg mt-6 mb-2"
          />
        </div>
        <Footer />
      </div>
    </main>
  );
}

