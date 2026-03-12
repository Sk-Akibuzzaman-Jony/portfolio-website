import aiWebQaImg from "../assets/AI-Web-QA.png"
import StudyNotion from "../assets/StudyNotion.png"
import ProductRevewSummarizer from "../assets/ProductReviewSummarizer.png"  

function ProjectCard({ title, description, link, tags = [], image }) {
  return (
    <div
      className="
        group
        bg-neutral-800 rounded-xl overflow-hidden
        shadow-lg
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-yellow-500/20
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image || "/img/card-top.jpg"}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

        <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 flex items-center justify-between">
        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-neutral-700 text-yellow-400 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-sm text-yellow-400 font-medium
              hover:text-yellow-300 transition
            "
          >
            View →
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "AI Web QA System",
      description:
        "A Retrieval-Augmented Generation (RAG) based Web Question-Answering system that scrapes web content, stores it in a FAISS vector database, and uses an LLM via LangChain to generate accurate answers with sources.",
      image:
        aiWebQaImg,
      link: "https://github.com/Sk-Akibuzzaman-Jony/AI-Web-QA-System",
      tags: ["Python", "LLM", "RAG"],
    },
    {
      title: "StudyNotion",
      description:
        "a full-stack ed-tech platform featuring user-friendly design and seamless functionality, enhancing overall learning experience. ",
      image: StudyNotion,
      link: "https://study-notion-ochre-nine.vercel.app/",
      tags: [" React.js", "MongoDB", "Node.js"],
    },
    {
      title: "Product Review Analyzer",
      description:
        "An AI-powered bias-free review analyzer that scrapes product reviews, classifies them using DeBERTa, and generates concise insights with Llama 8B, built on a scalable architecture for e-commerce deployment.",
      image: ProductRevewSummarizer,
      link: "https://github.com/TheBinaryBuilders4/Product_Review_Summariser",
      tags: ["LLM", "NLP", "Python"],
    },
  ];

  return (
    <div>
      <span className="md:hidden lg:hidden flex w-full mb-2 font-semibold text-3xl">
        Projects
      </span>
      <span className="md:hidden lg:hidden block w-10 h-1 rounded-full bg-yellow-400 mb-9"></span>
      <div className="md:p-10 lg:p-10 p-1 text-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
