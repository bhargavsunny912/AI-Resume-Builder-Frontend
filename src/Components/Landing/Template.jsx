import { useState } from "react";
import { Link } from "react-router-dom";


function TemplateCard({ template }) {
  const [hovered, setHovered] = useState(false);

  const badgeColor = {
    Popular: "bg-blue-100 text-blue-600",
    New: "bg-green-100 text-green-600",
    Trending: "bg-orange-100 text-orange-500",
  };

  return (
    <Link to={`/builder/${template.name}`}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Preview area */}
      <div className="relative h-64 overflow-hidden bg-gray-50">
        {template.preview}

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="bg-white text-gray-900 font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            Use Template
          </button>
        </div>

        {/* Badge */}
        {template.badge && (
          <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColor[template.badge]}`}>
            {template.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="px-5 py-4">
        <h3 className="font-bold text-gray-900 text-base">{template.name}</h3>
        <p className="text-gray-700 text-sm mt-0.5">{template.desc}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;