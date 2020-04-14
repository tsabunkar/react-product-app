---

# Why to choose React, bocz React is:

- Declarative: React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.
- Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs.
- Learn Once, Write Anywhere: you can develop new features in React without rewriting existing code.

NOTE:

- JSX is XML-like syntax.
- JSX is optional and not required to use React. ==> Use Babel REPL to see the raw JavaScript code produced by the JSX compilation

---

# Hello World in React

````ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);```

---

# JSX

- This funny tag syntax is neither a string nor HTML.
- const element = <h1>Hello, world!</h1>;
- React embraces the fact that rendering logic is inherently coupled with other UI logic.
- Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.
- React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code.

```const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
element,
document.getElementById('root')
);
````
