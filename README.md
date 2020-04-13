# Reactjs

- It is js library for building user interface
- Just the UI/ User-interface
- V in MVC, view -> is not html in browser (View is DOM)[ browser will take html and converte to DOM]
  - React is used to work with DOM only.
  - Think like Jquery which was library to manipulate DOM. React is same like it only :)

---

# React usage

- React is much more popular compared to Angular and Vue
- We can build SPA development framework
- We can build Mobile hybird app -> React Native
- Server Side Rendering -> [Express/next.js etc]
- Static Site Generations -> Gatsby [Sites loads 1 to 100 times faster than CMS sites]

---

# Why React ?

- JS runs in single thread in browser, thus DOM Manuiplaton operations in broswer is costly and very slow (CSS Rules, Appending new html elements, call API, etc) -> We need some library which make all this DOM related activities faster.
- DOM Mutation is very slow in browsers.
- Append, Remove child elements in Real DOM cause performance issues.
- Calling setText, attribute, add/remove attributes/child elements cause slowness.
- **REACT has ANSWER for the ABOVE PROBLEMS**

- If we have a table were it has small/delta changes in one of the cell (Change data is coming every second) -> We should never re-rendered the complete table or row -> Rather we should only change that particular cell. [Need Virtual DOM]

---

# Why DOM Slow

- Techincally Browser Layout UI building is slow
- When DOM is touched (add/remove child, update text, update styles/classes) at any way, Browser Layout algo makes it slow rendering.
- CSS recalc algo, then layout, then repaint, then re-compositing, draw the UI

---

# How React Works ?

- Keep developers away from working with real DOM/native UI.
- Provide Virtual DOM, a higher level abstraction over DOM and DOM Mutation (Manipulation)
- Developers works on Virtual DOM(just the DOM hirearchy -> Tree Data structure which is similar to real DOM)[Developer manipulate -> Virtual DOM, React will compare actual DOM and Virtual DOM and then update the Real DOM which is done by React libr].
- React update Real DOM in conservative manner.
- React is Library (Tiny source code we can fit in any architecture), Angular is Framework (Defines the structure, code-definition, gives all the standard).

---

# Virtual DOM

- Pure JS Object, in-memory representation of the DOM.
- Abstraction over Real DOM.
- React Developers works with Virtual DOM, React Framework Sync and Manages Real DOM.
- React applies DOM changes on Virtual DOM first then React apply changes on real DOM.
- A reactElement is a light, stateless, immutable, virtual representation of a DOM Element.
- React.createElement() ==> Creates Virtual DOM
- immutable -> think like const which cannot be modifiy the original created ds (string is immutable)
- Real DOM is -> Mutable [createElement, updateElement, deleteElement, addClass, addAttribute, etc.]
- Virtual DOM is -> Immutable [no update, no delete, no settext] , we can only do createElement
- STATELESS: React is stateless (when data changes happen -> New virtual dom is created)
- React compares Virtual DOM
- Update Real DOM only if any difference found.
- React Compares -> Virtual DOM always compare with another Virtual DOM ==> This called snapshot (React never compares virtual DOM with Real DOM)
- All your html/ views should be created by -> React only
- DIFF -> is Pain

---

Reference : https://reactjs.org/docs/reconciliation.html

---

# Everything is a Component

- Component is a piece of reusable user interface
- Component consist of js code, View [Presentation ], styles

---

# Rule for Component Creation

- SRP
- Reusability
- Testability
- Performance

---

NOTE: BEST React js Developer is -> who create the Virtual DOM Efficient and making the sure Virtual DOM difference is less and Patching to Real DOM is minimal.

---

https://create-react-app.dev/

npx create-react-app react-product-app
