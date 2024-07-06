export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Status />
    </div>
  );
}
function Logo() {
  return <h1> 🍀 Far Away🧳</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>what do you need for your 😍 trip?</h3>
      <select>
        <option value="actual value 1">1</option>
        <option value="actual value 1">2</option>
        <option value="actual value 2">3</option>
        <option value="actual value 1">4</option>
        <option value="actual value 3">5</option>
      </select>
      <input placeholder="item ..."></input>
      <button>ADD</button>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        <li>
          <input type="checkbox" id="demoCheckbox" name="checkbox" value="1" />
          <label for="demoCheckbox"> Check me!</label>
          <button>X</button>
        </li>
      </ul>
    </div>
  );
}
function Status() {
  return (
    <footer className="stats">
      <em> 🧳YOu have 3 itmes on your tist, and you already packed X</em>
    </footer>
  );
}
