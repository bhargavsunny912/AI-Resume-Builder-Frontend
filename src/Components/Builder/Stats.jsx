import useFetchScore from "../../Hooks/useFetchScore";

const scoreConfig = [
  {
    limit: 30,
    status: "Poor",
    text: "#EF4444",
    progress: "#EF4444",
    bg: "#FEE2E2"
  },
  {
    limit: 50,
    status: "Needs Improvement",
    text: "#F97316",
    progress: "#F97316",
    bg: "#FFEDD5"
  },
  {
    limit: 70,
    status: "Good",
    text: "#EAB308",
    progress: "#EAB308",
    bg: "#FEF9C3"
  },
  {
    limit: 100,
    status: "Excellent",
    text: "#22C55E",
    progress: "#22C55E",
    bg: "#DCFCE7"
  }
];

const Stats = () => {

  const value = useFetchScore();

  const config = scoreConfig.find(c => value <= c.limit);

  return (
    <div className="border border-gray-300 rounded-xl p-5 w-[95%] mx-auto">

      <div className="flex font-semibold items-center justify-between">
        <label>Editor Score</label>
        <label>Status</label>
      </div>

      <div className="flex items-center font-semibold my-2 justify-between">
        <h1 style={{color: config.text}} className="text-4xl">
          {value}%
        </h1>

        <h1 style={{color: config.text}}>
          {config.status}
        </h1>
      </div>

      <div>
        <input
          readOnly
          value={value}
          min={0}
          max={100}
          type="range"
          className="w-full custom-range"
          style={{
            "--progress": `${value}%`,
            "--color": config.progress,
            "--bg": config.bg
          }}
        />
      </div>

    </div>
  );
};

export default Stats;
