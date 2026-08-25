// // Child component
// function Student(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }
// // Parent component
// function App() {
//   return (
//     <div>
//       <Student name="Rahul" age={21} />
//       <Student name="Priya" age={20} />
//       <Student name="Amit" age={22} />
//     </div>
//   );
// }
// export default App;

// Destructure props inside the parentheses
function Student({ name, age }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
function App() {
  return <Student name="Rahul" age={21} />;
}
