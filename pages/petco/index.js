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
            Petco: SRE and Pets 🐶
          </h1>
          <p className="text-md font-normal text-black text-justify">
          </p>
          <Image
            src="/petco1.jpeg"
            alt="Starter pack from Petco"
            width={680}
            height={400}
            className="rounded-lg mt-6 mb-2"
          />
          <p className="text-md font-normal text-black text-justify italic">
            Cool stuff I got from Petco
          </p>
          <p className="text-md font-normal text-black text-justify mt-4">
            My time at Petco has been an incredible opportunity to grow as an
            engineer and as a professional. The 11 months I spent being an intern 
            in the SRE team has equipped me with a really solid foundation in 
            many technologies and practices that are required in this field. I 
            got the opportunity to have a glance of how a large-scale enterprise 
            operates both cloud and on-premises infrastructure, and how to 
            maintain and improve it. Apert from the technical skills, I also 
            learned how teams work together to solve complex problems, how 
            communication is one of the biggest parts when it comes to  
            improving the reliability of a system, and how to adapt to 
            different situations and new challenges that arise in this industry. 
          </p>
          <p className="text-md font-normal text-black text-justify mt-4">
            And now that I have started my new position as a full-time SRE at Petco, 
            I am really excited to continue my journey in this field and to keep 
            learning, growing and contributing to the team. I am looking forward 
            to continue working in really cool projects and improving the life of 
            our customers and their pets through technology.
          </p>
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            Relevant Skills
          </h3>
          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Technical Skills:</span> Python, Bash, 
              Terraform, Ansible, AWS, GCP, SQL, Docker, Kubernetes, Linux Systems, Networking
              (TCP/IP, DNS, HTTPS, ...), Git, New Relic, Sumo Logic, Datadog.
          </p>
          <p className="text-md font-normal text-black text-justify mt-4">
            <span className="font-semibold">Non Technical Skills:</span> Problem-solving, 
              Effective communication across teams, Adaptability, Incident management,
              Continuous improvement, Resilience, Collaboration and Teamwork.
          </p>
          <Image
            src="/petco2.jpeg"
            alt="Me at a meeting at Petco"
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

