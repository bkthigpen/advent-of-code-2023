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
      </ul>
    </div>
  );
}
