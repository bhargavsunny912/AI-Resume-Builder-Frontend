const MinimalistCleanPreview = () => (
  <div className="w-full h-full bg-white p-5 flex flex-col gap-3">
    <div className="flex justify-center mb-1">
      <div className="w-10 h-10 rounded-full bg-blue-500"></div>
    </div>
    <div className="text-center space-y-1.5">
      <div className="h-2.5 w-32 bg-gray-800 rounded mx-auto"></div>
      <div className="h-1.5 w-20 bg-gray-300 rounded mx-auto"></div>
    </div>
    <div className="h-px bg-gray-200 w-full"></div>
    <div className="space-y-1.5">
      <div className="h-1.5 w-full bg-gray-200 rounded"></div>
      <div className="h-1.5 w-full bg-gray-200 rounded"></div>
      <div className="h-1.5 w-3/4 bg-gray-200 rounded"></div>
    </div>
    <div className="h-px bg-gray-200 w-full"></div>
    <div className="flex gap-2 flex-wrap">
      {[1,2,3,4].map(i => (
        <div key={i} className="h-4 w-12 bg-blue-100 rounded-full"></div>
      ))}
    </div>
  </div>
);

export default MinimalistCleanPreview;