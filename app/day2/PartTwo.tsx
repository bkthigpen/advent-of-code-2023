export default function PartTwo ({ input}: { input: string }) {
  const gamesArray = input.split('Game ').filter(game => game !== '');

  const result = gamesArray.map((game, i) => {
    const gameData = game.trim().split('\n');
    const gameNumber = gameData[0].split(':');
    const gameValue = gameNumber[1];

    // muliple rounds per game, so split on the semicolon
    const gameRoundRaw = gameValue.split('; ').map(round => round.trim());

    const createGameRounds = gameRoundRaw.map(round => {
      const roundObject: { blue?: number, red?: number, green?: number } = round.split(', ').reduce((acc, curr) => {
        const splitOnSpace = curr.split(' ');
        return { ...acc, [splitOnSpace[1]]: parseInt(splitOnSpace[0]) };
      }, {});

      // ensure every round is consistent
      const formatRoundObject = {
        blue: roundObject.blue || 0,
        red: roundObject.red || 0,
        green: roundObject.green || 0,
      };

      return formatRoundObject;
    });

    const fewestNumberOfCubes = createGameRounds.reduce((acc, curr) => {
      let accRed = acc.red;
      let accBlue = acc.blue;
      let accGreen = acc.green;
      
      if (accRed < curr.red) accRed = curr.red;
      if (accBlue < curr.blue) accBlue = curr.blue;
      if (accGreen < curr.green) accGreen = curr.green;

      return {
        red: accRed,
        blue: accBlue,
        green: accGreen,
      }
    }, { red: 0, blue: 0, green: 0 });

    return fewestNumberOfCubes.red * fewestNumberOfCubes.blue * fewestNumberOfCubes.green;
  });

  const addAnswer = result.reduce((acc, curr) => acc+ curr, 0);

  return <div>{addAnswer}</div>
}
