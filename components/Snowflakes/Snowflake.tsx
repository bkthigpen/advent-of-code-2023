export default function Snowflake() {
  return (
    <div
      style={{ left: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 3 + 2}s` }}
      className="absolute w-5 h-5 bg-white rounded-full opacity-80 animate-snowfall"
    />
  );
}