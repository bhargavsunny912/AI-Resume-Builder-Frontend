const WandIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8 19 13M17.8 6.2 19 5M3 21l9-9M12.2 6.2 11 5"/>
  </svg>
);
const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const LayersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>
);

const features = [
  {
    icon: <WandIcon />, iconBg: "bg-blue-100", iconColor: "text-blue-600",
    title: "AI Writing Assistant",
    desc: "Stuck on words? Our AI generates professional summaries and bullet points tailored to your specific job role and industry.",
  },
  {
    icon: <TargetIcon />, iconBg: "bg-green-100", iconColor: "text-green-600",
    title: "ATS Optimization",
    desc: "Beat the bots. We analyze keywords from job descriptions to ensure your resume passes Applicant Tracking Systems.",
  },
  {
    icon: <LayersIcon />, iconBg: "bg-purple-100", iconColor: "text-purple-600",
    title: "Smart Templates",
    desc: "Choose from dozens of recruiter-approved templates that automatically adjust formatting to fit your content perfectly.",
  },
];


const Features=()=>{
  return (
    <section id="Features" className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Features</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Choose ResumeAI?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our platform combines advanced AI technology with professional design principles to give you the competitive edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${f.iconBg} ${f.iconColor} flex items-center justify-center mb-5`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;