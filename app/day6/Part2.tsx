export default function Part2({ input }: { input: string }) {
  const splitOnSpace = input.split("\n");
  const timeArray = splitOnSpace[0].split(":")[1].split(" ").filter((space) => space !== "");
  const distanceArray = splitOnSpace[1].split(":")[1].split(" ").filter((space) => space !== "");

  const time = parseInt(timeArray.reduce((acc, curr) => acc + curr));
  const distance = parseInt(distanceArray.reduce((acc, curr) => acc + curr));

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

  return <div>{totalOptions}</div>;
}
