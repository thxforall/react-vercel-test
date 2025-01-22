export default function App() {
  const fruits = ['apple', 'banana', 'cherry'];

  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
