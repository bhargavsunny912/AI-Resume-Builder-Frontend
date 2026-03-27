const Testimonials=()=>{

    const testimonials = [
  {
    stars: 5,
    text: "I was struggling to get interviews for months. After using ResumeAI, I rewrote my resume in 10 minutes and got 3 calls the next week!",
    name: "Sarah Jenkins", role: "Marketing Manager",
    avatar: "https://i.pravatar.cc/40?img=47",
  },
  {
    stars: 5,
    text: "The AI suggestions are surprisingly accurate. It highlighted skills I didn't even think to include. The templates are beautiful too.",
    name: "David Chen", role: "Software Engineer",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
  {
    stars: 5,
    text: "Simply the best resume builder I've used. The ATS checker gave me confidence that my resume wasn't just going into a black hole.",
    name: "Emily Rodriguez", role: "Project Lead",
    avatar: "https://i.pravatar.cc/40?img=32",
  },
];

  return (
    <section id="Testimonials" className="w-full bg-blue-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Loved by Job Seekers</h2>
          <p className="text-gray-500">Join thousands of users who landed their dream jobs with ResumeAI.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {Array(t.stars).fill(0).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;