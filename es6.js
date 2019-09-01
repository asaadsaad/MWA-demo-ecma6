
// destructuring Arrays
const [name, id, website] = ['Asaad', 123, 'mum.edu'];
console.log({ name, id, website })

// destructuring Objects
const { width = 100, height = 100, color = 'blue', fontSize = 25 } = { width: 300, color: 'black' };
console.log({ width, height })

// Spread Operator 
const technologies = ['Node', 'NoSQL', 'Angular']
const gainedKnowledge = ['MongoDB', 'TypeScript', ...technologies];

// Rest Operator
const [father, mother, ...children] = ['George', 'Angel', 'Mada', 'Asaad', 'Mike'];
console.log({ children })

// Template String
const code = 'CS572';
const markup = `
    <h1>Welcome to ${code} Course</h1>
`
console.log({ markup })

// for-in vs for-of
var things = ['a', 'b', 'c'];

for (let i in things) {
    console.log(i);
}

for (const i of things) {
    console.log(i);
} 
