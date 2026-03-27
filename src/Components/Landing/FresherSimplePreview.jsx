const FresherSimplePreview = () => (
  <div className="w-full h-full bg-white p-5 flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-green-400"></div>
      <div className="space-y-1.5">
        <div className="h-2.5 w-24 bg-gray-700 rounded"></div>
        <div className="h-1.5 w-20 bg-green-300 rounded"></div>
      </div>
    </div>
    <div className="h-1 bg-green-400 w-full rounded"></div>
    <div className="space-y-1.5">
      <div className="h-2 w-20 bg-green-200 rounded"></div>
      <div className="h-1.5 w-full bg-gray-200 rounded"></div>
      <div className="h-1.5 w-5/6 bg-gray-200 rounded"></div>
    </div>
    <div className="space-y-1.5">
      <div className="h-2 w-24 bg-green-200 rounded"></div>
      <div className="h-1.5 w-full bg-gray-200 rounded"></div>
      <div className="h-1.5 w-4/5 bg-gray-200 rounded"></div>
    </div>
    <div className="flex gap-2 mt-auto">
      {[1,2,3].map(i => (
        <div key={i} className="h-4 w-14 bg-green-100 border border-green-300 rounded-full"></div>
      ))}
    </div>
  </div>
);

export default FresherSimplePreview;