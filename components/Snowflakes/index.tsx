import Snowflake from "./Snowflake"

export default function Snowflakes() {
  return (
    <div className="absolute inset h-full w-full pointer-events-none z-10" aria-hidden="true">
      {[...Array(50)].map((_, i) => <Snowflake key={i} />)}
    </div>
  )
}