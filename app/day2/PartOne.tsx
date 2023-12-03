"use client";

export default function PartOne ({ input}: { input: string }) {
  const RED_CUBES = 12;
  const BLUE_CUBES = 14;
  const GREEN_CUBES = 13;
  
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

    const isGamePossible = createGameRounds.reduce((acc, curr) => {
      if (curr.red > RED_CUBES || curr.blue > BLUE_CUBES || curr.green > GREEN_CUBES) {
        acc = false;
        return acc;
      }

      return acc;
    }, true);

    if (isGamePossible) {
      return i + 1;
    }

    return 0;
  });

  const addAnswer = result.reduce((acc, curr) => acc+ curr, 0);

  return <div>{addAnswer}</div>
}
