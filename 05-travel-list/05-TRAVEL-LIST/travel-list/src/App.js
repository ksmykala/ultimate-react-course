export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackageList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What to you need for you trip?</h3>
    </div>
  );
}
function PackageList() {
  return (
    <div className="list">
      <h3>What to you need for you trip?</h3>
    </div>
  );
}
function Stats() {
  return (
    <footer>
      <em>You have 3 items to pack for your trip. That X% of your list.</em>
    </footer>
  );
}
