import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl">Advent of Code 2023</h1>
      <ul>
        <li>
          <Link href="/day1">Day 1</Link>
        </li>
      </ul>
    </div>
  );
}
