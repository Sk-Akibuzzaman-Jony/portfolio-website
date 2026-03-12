import { IoBriefcaseOutline } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi";
export default function Experience() {
  return (
    <div>
      <span className="md:hidden lg:hidden flex w-full mb-2 font-semibold text-3xl">
        Experience
      </span>
      <span className="md:hidden lg:hidden block w-10 h-1 rounded-full bg-yellow-400 mb-9"></span>
      <div className="md:p-10 lg:p-10 p-3  text-gray-100">
        {/* Changed border-default to border-gray-700 */}
        <ol className="relative border-neutral-600 border-l">
          <li className="mb-10 ms-4">
            {/* Changed dot colors to gray-700 and border-gray-900 */}
            <div
              className="absolute h-8 w-8 mt-1.5 -start-4 -top-2 bg-neutral-700
                   shadow-2xl rounded-lg flex items-center justify-center"
            >
              <IoBriefcaseOutline className="h-4 w-4 text-yellow-500" />
            </div>

            <h3 className="text-2xl font-semibold text-white mx-2 relative -top-1">
              Work Experience
            </h3>
          </li>

          {/* Item 1 */}
          <li className="mb-10 ms-4">
            {/* Changed dot colors to gray-700 and border-gray-900 */}
            <div
              className="absolute w-3 h-3 bg-yellow-400 rounded-full
                shadow-[0_0_20px_8px_rgba(250,204,21,0.1)]
                mt-1.5 -start-1.5 border border-gray-900"
            ></div>

            <time className="text-sm font-normal leading-none text-gray-500">
              November 2025 - Present
            </time>

            <h3 className="text-lg font-semibold text-white my-2">
              Tata Consultacy Services - System Engineer
            </h3>

            <p className="mb-4 text-base font-normal text-gray-400"></p>
          </li>

          {/* Item 2 */}
          <li className="mb-10 ms-4">
            <div
              className="absolute w-3 h-3 bg-yellow-400 rounded-full
                shadow-[0_0_20px_8px_rgba(250,204,21,0.1)]
                mt-1.5 -start-1.5 border border-gray-900"
            ></div>
            <time className="text-sm font-normal leading-none text-gray-500">
              June 2024 - July 2024
            </time>
            <h3 className="text-lg font-semibold text-white my-2">AarogyaID</h3>
            <p className="text-base font-normal text-gray-400">
              Built and maintained full-stack systems for AarogyaID, improving
              reliability by 50% and reducing processing time by 30%. Integrated
              Razorpay payments and implemented weekly doctor slot scheduling.
            </p>
          </li>
        </ol>

        <ol className="relative border-neutral-600 border-l top-12">
          <li className="mb-10 ms-4">
            {/* Changed dot colors to gray-700 and border-gray-900 */}
            <div
              className="absolute h-8 w-8 mt-1.5 -start-4 -top-2 bg-neutral-700
                   shadow-2xl rounded-lg flex items-center justify-center"
            >
              <HiOutlineAcademicCap className="h-4 w-4 text-yellow-500" />
            </div>

            <h3 className="text-2xl font-semibold text-white mx-2 relative -top-1">
              Academic Experience
            </h3>
          </li>

          {/* Item 1 */}
          <li className="mb-10 ms-4">
            {/* Changed dot colors to gray-700 and border-gray-900 */}
            <div
              className="absolute w-3 h-3 bg-yellow-400 rounded-full
                shadow-[0_0_20px_8px_rgba(250,204,21,0.1)]
                mt-1.5 -start-1.5 border border-gray-900"
            ></div>

            <time className="text-sm font-normal leading-none text-gray-500">
              2021 - 2025
            </time>

            <h3 className="text-lg font-semibold text-white my-2">
              Institute of Engineering & Management, Kolkata, India
            </h3>

            <p className="mb-4 text-base font-normal text-gray-400">
              B.Tech in Computer Science Engineering (AI & ML) <br />
              CGPA : 9.22
            </p>
          </li>

          {/* Item 2 */}
          <li className="mb-10 ms-4">
            <div
              className="absolute w-3 h-3 bg-yellow-400 rounded-full
                shadow-[0_0_20px_8px_rgba(250,204,21,0.1)]
                mt-1.5 -start-1.5 border border-gray-900"
            ></div>
            <time className="text-sm font-normal leading-none text-gray-500">
              2009 - 2021
            </time>
            <h3 className="text-lg font-semibold text-white my-2">
              Aditya Academy Secondary, Barasat, India
            </h3>
            <p className="text-base font-normal text-gray-400">
              ● 12th Boards: 87.67% <br />● 10th Boards: 90.33%
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
