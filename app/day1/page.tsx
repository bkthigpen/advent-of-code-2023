// import testSamplePart1 from "./testSamplePart1";
// import testSamplePart2 from "./testSamplePart2";
import puzzleInput from "./puzzleInput";

import PartOne from "./PartOne";
import PartTwo from "./PartTwo";

export default function Day1 () {
  return (
    <div>
      <h1 className="text-5xl">Day 1: Trebuchet?!</h1>
      <div className="pt-4">
        <h3 className="text-3xl">Part One</h3>
        <PartOne input={puzzleInput} />
      </div>
      <div className="pt-4">
        <h3 className="text-3xl">Part Two</h3>
        <PartTwo input={puzzleInput} />
      </div>   
    </div>
  );
}
