//Write a function that receives a name argument and returns a h1 tag with the name variable appended to the "Hello, " string

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const element = <Welcome name="Massimo" />;
  root.render(element)