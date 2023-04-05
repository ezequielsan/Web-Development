export function Calculator() {
  let a = 9, b = 5;
  
  function sum(x, y) {
    return x + y;
  }

  const subtract = function(x, y) {
    return x - y;
  }

  const multiply = (x, y) => x * y;

  const divide = (x, y, multiplyFunction) => {
    return multiply(x, 1/y);
  }

  return (
    <div>
      <h1>A soma de {a} e {b} é {sum(a, b)}</h1>
      <h1>A subtração de {a} e {b} é {subtract(a, b)}</h1>
      <h1>A multiplicação de {a} e {b} é {multiply(a, b)}</h1>
      <h1>A divisão de {a} e {b} é {divide(a, b)}</h1>
    </div>
  )
}