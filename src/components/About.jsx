import AboutAccordion from "./AboutAccordion";

export default function About() {
  return (
    <div className="py-10 pt-0 text-gray-100">
      <span className="md:hidden lg:hidden flex w-full mb-2 font-semibold text-3xl">About</span>
      <span className="md:hidden lg:hidden block w-10 h-1 rounded-full bg-yellow-400 mb-6"></span>
      <p>
        I am a Full Stack Software Engineer with a solid background in Computer Science. I have practical experience in full stack development, machine learning, and AI, as well as experience with cloud technology. 
        </p>
        <p className="mt-4">
        I find it interesting to develop scalable end-to-end applications, from user-friendly interfaces to efficient back-end solutions. I am specifically interested in using data-driven and intelligent approaches to solve real-world problems and optimize system performance, reliability, and usability.
        </p>

        <div>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
        <AboutAccordion/>
        </div>
    </div>
  );
}