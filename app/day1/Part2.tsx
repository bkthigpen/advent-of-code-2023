type TypeNumbers = 'one' | 'two'| 'three' | 'four' | 'five' | 'six' | 'seven'| 'eight' | 'nine';
type TypeNumbersReversed = 'eno' | 'owt' | 'eerht' | 'ruof' | 'evif' | 'xis' | 'neves' | 'thgie' | 'enin';

const numbersObject: Record<TypeNumbers, string> = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

const numbersReversedObject: Record<TypeNumbersReversed, string> = {
  eno: '1',
  owt: '2',
  eerht: '3',
  ruof: '4',
  evif: '5',
  xis: '6',
  neves: '7',
  thgie: '8',
  enin: '9',
}

function findSpelledOutNumber<T extends string>(inputString: string, regex: RegExp): T | null {
  const match = inputString.match(regex);

  return match ? match[0] as T : null;
}

function splitStringAtNumbers(inputString: string): string[] {
  const regex = new RegExp(/([0-9])/g);
  const result = inputString.split(regex);

  const filteredResult = result.filter(str => str !== '');

  return filteredResult;
}

export default function Part2 ({ input}: { input: string}) {
  const regexStringNumbers = /^\d+$/;
  const regexForwardsNumbers =  /\W*(one|two|three|four|five|six|seven|eight|nine)\W*/i;;
  const regexBackwardsNumbers = /\W*(eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)\W*/i;

  const firstAndLastChars = input.split("\n").map((char) => {
    const charToArray = splitStringAtNumbers(char);

    const loopForwards = charToArray.map(answer => {

      if (regexStringNumbers.test(answer)) {;
        return answer;
      };

      const speltOutNumber = findSpelledOutNumber<TypeNumbers>(answer, regexForwardsNumbers);

      if (speltOutNumber) {
        return numbersObject[speltOutNumber];
      }

      return '';
    }).filter(char => char !== '');

    const loopBackwards = charToArray.reverse().map(answer => {
      const reversedAnswer = answer.split('').reverse().join('');
      if (regexStringNumbers.test(reversedAnswer)) {
        return reversedAnswer;
      };

      const speltOutNumber = findSpelledOutNumber<TypeNumbersReversed>(reversedAnswer, regexBackwardsNumbers);

      if (speltOutNumber) {
        return numbersReversedObject[speltOutNumber];
      }

      return '';
    }).filter(char => char !== '');

    return parseInt(`${loopForwards[0]}${loopBackwards[0]}`);
  });

  const addNumbers = firstAndLastChars.reduce((acc, curr) => acc + curr, 0);
 
  return <div>{addNumbers}</div>
}