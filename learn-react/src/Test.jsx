const a = 1;
function b() {
  return "fuck";
}

function Test() {
  return <h1>Hello {a == 2 ? b() : "World"}</h1>;
}

export default Test;
