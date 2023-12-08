import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl">Advent of Code 2023</h1>
      <ul className="pt-4">
        <li>
          <Link href="/day1">Day 1: Trebuchet?!</Link>
        </li>
        <li>
          <Link href="/day2">Day 2: Cube Conundrum</Link>
        </li>
        <li>
          <Link href="/day3">Day 3: Gear Ratios</Link>
        </li>
        <li>
          <Link href="/day4">Day 4: Scratchcards</Link>
        </li>
        <li>
          <Link href="/day6">Day 6: Wait For It</Link>
        </li>
      </ul>
    </div>
  );
}
