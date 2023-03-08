import "./App.css";

function App() {
  return (
    <main>
      <p>Hola desde React!</p>
      <div
        style={{
          backgroundimage: `url(${
            process.env.REACT_APP_PUBLIC_URL + "/foto.jpg"
          })`,
        }}
      ></div>
      {console.log(process.env.REACT_APP_PUBLIC_URL + "/foto.jpg")}
    </main>
  );
}

export default App;
