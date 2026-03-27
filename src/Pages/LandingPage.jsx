import FresherSimplePreview from "../Components/Landing/FresherSimplePreview";
import MinimalistCleanPreview from "../Components/Landing/MinimalistCleanPreview";
import ModernProfessionalPreview from "../Components/Landing/ModernProfessionalPreview";
import TemplateCard from "../Components/Landing/Template";

const templates = [
  {
    id: 1,
    name: "Beginner",
    desc: "Best for Freshers",
    preview: <MinimalistCleanPreview />,
    badge: "Popular",
  },
  {
    id: 2,
    name: "Fresher",
    desc: "Perfect for first-time job seekers",
    preview: <FresherSimplePreview />,
    badge: "New",
  },
  {
    id: 3,
    name: "Experienced",
    desc: "For developers & engineers",
    preview: <ModernProfessionalPreview />,
    badge: "Trending",
  },
];


const Landing=()=>{

  return (
    <div className="w-full min-h-screen bg-white font-sans">

      <section className="max-w-7xl mx-auto px-6 py-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mb-5">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-10">
              Choose Your Resume Style
            </h1>
          </div>
        </div>

        {/* Template grid */}
        <div className="flex flex-wrap gap-10 items-center justify-center mx-auto">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>

      </section>
    </div>
  );
}

export default Landing;