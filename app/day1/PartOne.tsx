export default function PartOne ({ input}: { input: string}) {
  // part one answers
  const firstAndLastChars = input.split("\n").map((char) => {
    const numbersAsString = char.match(/[0-9]+/g)?.join("") ?? "0";
    return parseInt(
      `${numbersAsString[0]}${numbersAsString[numbersAsString.length - 1]}`
    );
  });

  const addNumbers = firstAndLastChars.reduce((acc, curr) => acc + curr, 0);

  return <div>{addNumbers}</div>
}
