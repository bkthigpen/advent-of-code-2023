export default function Part1({ input }: { input: string }) {
  const splitOnSpace = input.split('\n');
  const timeData = splitOnSpace[0].split(':')[1].split(' ').filter(space => space !== '');
  const distanceData = splitOnSpace[1].split(":")[1].split(" ").filter((space) => space !== "");

  const generatePossibleAnswers = timeData.map((answer, i) => {
    const time = parseInt(answer);
    const distance = parseInt(distanceData[i]);

    const totalOptions: number = [...Array(time)].reduce((acc, _, i) => {
      const timeHeld = i + 1;
      const timeLeft = time - timeHeld;
      const distanceTraveled = timeHeld * timeLeft;

      if (distanceTraveled > distance) {
        acc = acc += 1;
        return acc;
      }

      return acc;
    }, 0);

    return totalOptions;
  });

  const multiplyAnswers = generatePossibleAnswers.reduce((acc, curr) => acc * curr);

  return <div>{multiplyAnswers}</div>;
}
