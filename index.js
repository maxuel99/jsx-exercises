//Write a function that receives two parameters, a and b and returns the sum of them within an h2 tag.

function sum(a, b) {
    return a + b
  }
  
  const result = <h2>{sum(1,9)}</h2>

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(result)