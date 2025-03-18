import React from "react";

const ChampionStatBar = ({
  status,
  statusType,
  color,
}: {
  status: number;
  statusType: string;
  color: string;
}) => {
  return (
    <div className="rounded-lg bg-slate-800 p-3">
      <div className="text-sm text-gray-400">{statusType}</div>
      <div className={`text-${color}-400 mt-1 text-2xl font-bold`}>
        {status}
      </div>
      <div className="mt-1 h-2 w-full rounded-full bg-gray-700">
        <div
          className={`bg-${color}-500 h-2 rounded-full`}
          style={{
            width: `${(status / 10) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ChampionStatBar;
