// import testSamplePart1 from "./testSamplePart1";
import puzzleInput from "./puzzleInput";

import Part1 from "./Part1";
import Part2 from "./Part2";

export default function Day6() {
  return (
    <div>
      <h1 className="text-5xl">Day 6: Wait For It</h1>
      <div className="pt-4">
        <h3 className="text-3xl">Part 1</h3>
        <Part1 input={puzzleInput} />
      </div>
      <div className="pt-4">
        <h3 className="text-3xl">Part 2</h3>
        <Part2 input={puzzleInput} />
      </div>
    </div>
  );
}
