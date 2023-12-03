
"use client";


export default function PartOne ({ input}: { input: string }) {

  const fomatInput = input.split('Game');

  // const test = fomatInput.reduce((acc, curr) => {
  //   return {
  //     ...acc,
  //     curr
  //   }

  // }, []);
  console.log(fomatInput);

  //
  return <div>{input}</div>
}
