import { Link } from "react-router-dom";

const WandIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8 19 13M17.8 6.2 19 5M3 21l9-9M12.2 6.2 11 5"/>
  </svg>
);

const Hero=()=>{
  return (
    <section className="w-full bg-linear-to-b from-blue-50 to-white pt-12 pb-0 text-center">
      <div className="max-w-5xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-md text-gray-800 mb-5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-teal-400 inline-block"></span>
          AI-Powered Resume Builder V2.0 is Live
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-20 mb-6">
          Craft Your Dream Career
          <br />
          with{" "}
          <span className="bg-linear-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            Intelligent Resumes
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-5 leading-relaxed">
          Transform your professional story into a compelling resume in minutes. Our AI analyzes job descriptions and tailors your experience to help you land more interviews effortlessly.
        </p>

        {/* CTA Button */}
        <Link to="/landing" className="inline-flex items-center gap-2 bg-linear-to-r from-teal-500 to-blue-500 hover:scale-110 text-white font-semibold px-8 py-4 rounded-full text-xl shadow-lg transition-transform duration-300 mb-16">
          <WandIcon />
          Create My Resume →
        </Link>
      </div>

      {/* Editor Preview */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-2xl mb-10 h-[80vh] border border-gray-100 overflow-hidden">
          {/* Browser chrome */}
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>
            <div className="flex-1 flex justify-center">
              <span className="bg-white border border-gray-200 text-gray-400 text-xs px-4 py-1 rounded-full">
                resumeai.com/editor
              </span>
            </div>
          </div>

          {/* Editor body */}
          <div className="flex min-h-64 p-6 gap-6">
            {/* Sidebar */}
            <div className="w-48 shrink-0 space-y-2">
              <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
              {["Personal Info", "Experience", "Education", "Skills"].map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium cursor-pointer ${
                    i === 0 ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-current opacity-40"></span>
                  {item}
                </div>
              ))}
            </div>

            {/* Preview */}
            <div className="flex-1 bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="h-6 w-48 bg-gray-800 rounded"></div>
                  <div className="h-3 w-36 bg-gray-300 rounded"></div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              </div>
              <div className="h-5 w-28 bg-gray-700 rounded"></div>
              <div className="space-y-2">
                <div className="h-2.5 w-full bg-gray-200 rounded"></div>
                <div className="h-2.5 w-full bg-gray-200 rounded"></div>
                <div className="h-2.5 w-2/3 bg-gray-200 rounded"></div>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="flex-1 bg-blue-100 rounded-lg p-3 space-y-2">
                  <div className="h-3 w-20 bg-blue-300 rounded"></div>
                  <div className="h-2 w-28 bg-blue-200 rounded"></div>
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg p-3 space-y-2">
                  <div className="h-3 w-20 bg-gray-300 rounded"></div>
                  <div className="h-2 w-28 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;