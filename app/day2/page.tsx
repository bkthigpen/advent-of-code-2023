import testSamplePart1 from "./testSamplePart1";

import PartOne from "./PartOne";

export default function Day2 () {
  return (
    <div>
      <h1 className="text-5xl">Day 2: Cube Conundrum</h1>
      <div className="pt-4">
        <h3 className="text-3xl">Part One</h3>
        {/* <PartOne input={puzzleInput} /> */}
        <PartOne input={testSamplePart1} />
      </div>  
    </div>
  );
}