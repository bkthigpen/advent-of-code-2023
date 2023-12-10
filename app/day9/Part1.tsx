const sequenceOfDifferences = (sequence: number[]) => sequence.reduce((acc, curr, i) => {
  if (i === 0) return acc;

  const difference = curr - sequence[i - 1];

  return [...acc, difference];
}, [] as number[]);

const generateSequenceOfDifferences = (sequence: number[][]): number[][] => {
  const baseMatrix =  sequence;
  const lastValue = baseMatrix[baseMatrix.length - 1];
  const buildSequenceOfDifferences = sequenceOfDifferences(lastValue);
  const allEqual = buildSequenceOfDifferences.every(value => value === buildSequenceOfDifferences[0]);

  // push the sequence of difference to the base matrix
  baseMatrix.push(buildSequenceOfDifferences);

  if (allEqual) {
    const buildDifferences = [...Array(buildSequenceOfDifferences.length - 1)].map(() => 0);
    baseMatrix.push(buildDifferences);
    return baseMatrix;
  }

  return generateSequenceOfDifferences(baseMatrix);
};

export default function Part1({ input }: { input: string }) {
  const splitOnReturn = input.split('\n');
  const analyzeSandInstability = splitOnReturn.map((sand) => {
    const firstValue = sand.split(' ').map((value) => parseInt(value));
    const sequences = generateSequenceOfDifferences([firstValue]);

    const reverseMatrix = sequences.toReversed();
    const fillInPlaceholders = reverseMatrix.map((placeholder, i) => {
      if (i === 0) {
        placeholder.push(0);
        return placeholder;
      }

      const previousPlaceholder = reverseMatrix[i - 1];
      const currentPlaceholder = reverseMatrix[i];
      const previousLastValue = previousPlaceholder[previousPlaceholder.length - 1];
      const currentLastValue = currentPlaceholder[currentPlaceholder.length - 1];

      placeholder.push(previousLastValue + currentLastValue);
      return placeholder;
    });

    const lastValueSequence = fillInPlaceholders[fillInPlaceholders.length - 1];
    const lastValue = lastValueSequence[lastValueSequence.length - 1];

    return lastValue;
  });

  const addValues = analyzeSandInstability.reduce((acc, curr) => acc + curr, 0);

  return <div>{addValues}</div>;
}
