const CheckCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const LoaderIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
  </svg>
);
const ZapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);


const Working=()=>{

    const steps = [
    {
        num: 1, color: "bg-blue-500",
        title: "Select a Template",
        desc: "Browse our library of ATS-friendly designs tailored for your industry and seniority level.",
    },
    {
        num: 2, color: "bg-green-400",
        title: "Fill with AI Assistance",
        desc: "Enter your basic details and let our AI suggest powerful bullet points and summaries.",
    },
    {
        num: 3, color: "bg-purple-400",
        title: "Download & Apply",
        desc: "Export your polished resume instantly and start applying to your dream jobs with confidence.",
    },
    ];

  return (
    <section id="How it Works" className="w-full bg-linear-to-b from-blue-50 to-white py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* Left: animated card */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 w-80 text-center">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
              <ZapIcon />
            </div>
            <p className="font-bold text-gray-800 text-lg mb-5">Analyzing Profile...</p>
            <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
              <div className="bg-blue-500 h-2 rounded-full w-3/5"></div>
            </div>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3 text-sm text-green-600">
                <CheckCircleIcon /> Skills matched
              </div>
              <div className="flex items-center gap-3 text-sm text-green-600">
                <CheckCircleIcon /> Experience optimized
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-400">
                <LoaderIcon /> Generating summary...
              </div>
            </div>
          </div>
        </div>

        {/* Right: steps */}
        <div className="w-full md:w-1/2">
          <p className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-3 bg-blue-50 border border-blue-100 inline-block px-3 py-1 rounded-full">
            SEAMLESS WORKFLOW
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            From blank page to hired in three steps.
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Stop wrestling with formatting and writer's block. Our intelligent flow guides you through the process effortlessly.
          </p>
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-5">
                <div className={`w-9 h-9 rounded-full ${s.color} text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5`}>
                  {s.num}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Working;