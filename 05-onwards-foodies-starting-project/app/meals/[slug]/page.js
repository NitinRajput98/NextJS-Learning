export default function SpecificMealsPage({ params }) {
  return (
    <main>
      <h1>Specific Meals Page</h1>
      <p>{params.slug}</p>
    </main>
  );
}
