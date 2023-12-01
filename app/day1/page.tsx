// import testSample from "./testSample";
import puzzleInput from "./puzzleInput";

import PartOne from "./PartOne";

export default function Day1 () {
  return (
    <div>
      <h1 className="text-5xl">Day 1 Answers</h1>
      <div className="pt-4">
        <h3 className="text-3xl">Part One</h3>
        <PartOne input={puzzleInput} />
      </div>
    </div>
  );
}
