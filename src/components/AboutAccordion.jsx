import { useState, useRef, useEffect } from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineLibraryBooks, MdOutlineWbCloudy  } from "react-icons/md";
import { TbCodeDots } from "react-icons/tb";
import { GrStorage } from "react-icons/gr";

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer w-full items-center justify-between py-3 font-semibold"
      >
        {title}
        <span
          className={`transition-transform duration-300 text-yellow-400 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <div
        style={{ height }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
      >
        <div ref={contentRef} className="pb-4 text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function AboutAccordion() {
  return (
    <div className="space-y-2">
      <AccordionItem
        title={
          <div className="flex items-center gap-2">
            <LuBrainCircuit className="text-yellow-400 text-xl" />
            <span>Data Science & AI</span>
          </div>
        }
      >
        <div className="flex gap-3 flex-col">
          <div className="flex gap-3 flex-col">
            <p className="text-neutral-50 font-semibold">
              GenAI <span className="text-neutral-300 font-light">75%</span>
            </p>

            <div className="w-full bg-neutral-600 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full w-[75%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500" />
            </div>
          </div>
          <div className="flex gap-3 flex-col">
            <p className="text-neutral-50 font-semibold">
              Natural Language Processing{" "}
              <span className="text-neutral-300 font-light">70%</span>
            </p>

            <div className="w-full bg-neutral-600 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full w-[70%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500" />
            </div>
          </div>
          <div className="flex gap-3 flex-col">
            <p className="text-neutral-50 font-semibold">
              Frameworks and Libraries{" "}
              <span className="text-neutral-300 font-light">66%</span>
            </p>

            <div className="w-full bg-neutral-600 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full w-[66%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500" />
            </div>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        title={
          <div className="flex items-center gap-2">
            <MdOutlineLibraryBooks className="text-yellow-400" />
            <span>Web Development</span>
          </div>
        }
      >
        <div className="flex flex-col gap-3">
          {/* React */}
          <div className="flex gap-3 flex-col">
            <p className="text-neutral-50 font-semibold">
              ReactJS <span className="text-neutral-300 font-light">80%</span>
            </p>

            <div className="w-full bg-neutral-600 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full w-[80%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500" />
            </div>
          </div>

          {/* Next */}
          <div className="flex gap-3 flex-col">
            <p className="text-neutral-50 font-semibold">
              NextJs <span className="text-neutral-300 font-light">65%</span>
            </p>

            <div className="w-full bg-neutral-600 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full w-[65%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500" />
            </div>
          </div>

          {/* JavaScript */}
          <div className="flex gap-3 flex-col">
            <p className="text-neutral-50 font-semibold">
              JavaScript <span className="text-neutral-300 font-light">70%</span>
            </p>

            <div className="w-full bg-neutral-600 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full w-[70%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500" />
            </div>
          </div>

          {/* TypeScript */}
         <div className="flex gap-3 flex-col">
            <p className="text-neutral-50 font-semibold">
              TypeScript <span className="text-neutral-300 font-light">68%</span>
            </p>

            <div className="w-full bg-neutral-600 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full w-[68%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500" />
            </div>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        title={
          <div className="flex items-center gap-2">
            <GrStorage className="text-yellow-400 text-xl" />
            <span>Database</span>
          </div>
        }
      >
        <div className="flex flex-col gap-4">
          {/* SQL */}
          <div className="flex gap-3 flex-col">
            <p className="text-neutral-50 font-semibold">
              SQL <span className="text-neutral-300 font-light">90%</span>
            </p>

            <div className="w-full bg-neutral-600 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full w-[90%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500" />
            </div>
          </div>

          {/* NoSQL */}
          <div className="flex gap-3 flex-col">
            <p className="text-neutral-50 font-semibold">
              NoSQL <span className="text-neutral-300 font-light">80%</span>
            </p>

            <div className="w-full bg-neutral-600 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full w-[80%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500" />
            </div>
          </div>

          {/* MongoDB */}
          <div className="flex gap-3 flex-col">
            <p className="text-neutral-50 font-semibold">
              MongoDB <span className="text-neutral-300 font-light">80%</span>
            </p>

            <div className="w-full bg-neutral-600 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full w-[80%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500" />
            </div>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        title={
          <div className="flex items-center gap-2">
            <TbCodeDots className="text-yellow-400 text-xl" />
            <span>Programming</span>
          </div>
        }
      >
        <div className="flex flex-col gap-4">
          {/* Python */}
          <div className="flex gap-3 flex-col">
            <p className="text-neutral-50 font-semibold">
              Python <span className="text-neutral-300 font-light">90%</span>
            </p>

            <div className="w-full bg-neutral-600 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full w-[90%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500" />
            </div>
          </div>

          {/* C++ */}
          <div className="flex gap-3 flex-col">
            <p className="text-neutral-50 font-semibold">
              C++ <span className="text-neutral-300 font-light">86%</span>
            </p>

            <div className="w-full bg-neutral-600 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full w-[86%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500" />
            </div>
          </div>

          {/* Java */}
          <div className="flex gap-3 flex-col">
            <p className="text-neutral-50 font-semibold">
              Java <span className="text-neutral-300 font-light">82%</span>
            </p>

            <div className="w-full bg-neutral-600 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full w-[82%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500" />
            </div>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        title={
          <div className="flex items-center gap-2">
            <MdOutlineWbCloudy className="text-yellow-400 text-xl" />
            <span>Cloud</span>
          </div>
        }
      >
        <div className="flex flex-col gap-4">
          {/* AWS */}
          <div className="flex gap-3 flex-col">
            <p className="text-neutral-50 font-semibold">
              Amazon Web Services <span className="text-neutral-300 font-light">56%</span>
            </p>

            <div className="w-full bg-neutral-600 rounded-full h-2 overflow-hidden">
              <div className="h-2 rounded-full w-[56%] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500" />
            </div>
          </div>
        </div>
      </AccordionItem>


    </div>
  );
}
