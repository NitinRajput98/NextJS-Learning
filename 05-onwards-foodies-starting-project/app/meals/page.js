import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1>Meals Page</h1>

      <p>
        <Link href="/meals/someMeal">Meal 1</Link>
      </p>
      <p>
        <Link href="/meals/meal2">Meal 2</Link>
      </p>
      <p>
        <Link href="/meals/meal3">Meal 3</Link>
      </p>
      <p>
        <Link href="/meals/meal4">Meal 4</Link>
      </p>
    </main>
  );
}
