const operations = [
  ['addition', (a, b) => { return a + b }],
  ['substraction', (a, b) => { return a - b }],
  ['multiplication', (a, b) => { return a * b }],
  ['division', (a, b) => { return b != 0 ? a / b : "You can't divide by 0" }]
]

operations.forEach(op => {
  const element = document.getElementById(op[0]);
  element.addEventListener('click', () => {
    let num1 = parseFloat(document.getElementById('num1'));
    let num2 = parsFloat(document.getElementById('num2'));

    document.getElementById('result').value = op[1](num1, num2);
  })
});
