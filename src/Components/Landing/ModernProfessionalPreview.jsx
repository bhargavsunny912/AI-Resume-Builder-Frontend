const ModernProfessionalPreview = () => (
  <div className="w-full h-full bg-gray-50 p-5 flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gray-800"></div>
      <div className="space-y-1.5">
        <div className="h-2.5 w-24 bg-gray-800 rounded"></div>
        <div className="h-1.5 w-16 bg-gray-300 rounded"></div>
      </div>
    </div>
    <div className="h-px bg-gray-300 w-full"></div>
    <div className="space-y-1.5">
      <div className="h-2 w-full bg-gray-200 rounded"></div>
      <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
      <div className="h-2 w-4/6 bg-gray-200 rounded"></div>
    </div>
    <div className="h-px bg-gray-200 w-full"></div>
    <div className="space-y-1.5">
      <div className="h-2 w-3/4 bg-gray-300 rounded"></div>
      <div className="h-2 w-full bg-gray-200 rounded"></div>
      <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
    </div>
    <div className="mt-auto grid grid-cols-2 gap-2">
      <div className="h-6 bg-gray-200 rounded"></div>
      <div className="h-6 bg-gray-200 rounded"></div>
    </div>
  </div>
);

export default ModernProfessionalPreview;