export default function Part1({ input }: { input: string }) {
  // format the base card array (remove spaces, trim line breaks, etc)
  const cardsArray = input.split("Card ").filter((game) => game !== "").map((game) => game.trim());

  const buildCardAnswer = cardsArray.map(card => {
    const splitOnPipe = card.split(" | ");

    const formatWinningNumbers = splitOnPipe[0].split(": ")[1];
    const winningNumbersArray = formatWinningNumbers.split(" ").filter((number) => number !== '');

    const heldNubmersArray = splitOnPipe[1].split(" ").filter((number) => number !== '');
    const heldWinningNumbers = winningNumbersArray.filter(number => heldNubmersArray.includes(number));

    const doubleWinningNumbers = heldWinningNumbers.reduce((acc, curr) => {
      if (!curr) return acc;

      if (acc === 0) {
        acc = 1;
        return acc;
      }

      return acc * 2;
    }, 0);

    return doubleWinningNumbers;
  });

  const addAnswer = buildCardAnswer.reduce((acc, curr) => acc + curr, 0);

  return <div>{addAnswer}</div>;
}
