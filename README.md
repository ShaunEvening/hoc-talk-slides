# What are Higher Order Components

### Getting Started

```bash
# Clone Repository
git clone https://github.com/ShaunLloyd/hoc-talk-slides.git

# Move to repository directory
cd hoc-talk-slides

# Install dependencies
yarn install

# Launch application
yarn start
```

### Navigating Slides

- **Right Arrow**: Navigate to next slide
- **Left Arrow**: Navigate to previous slide
- **Down Arrow**: Navigate to the next portion of a code slide
- **Up Arrow**: Navigate to the previous portion of a code slide

---

# Written Notes

In this talk we're going to talk about taking functional programming patterns and using them
inside of your react projects. You may already being using these patterns and not even realize it.

## Higher Order Functions

A **higher order function** is a function that does at least one of the following:
  - Take one or more function as arguments
  - Return a Function

Let's consider the following function:

```js
const multiplyBy = (multiplier) =>
  (number) => number * multiplier;
```

Here we see `multiplyBy()` which takes a multiplier then returns a function that
takes `number`. The returned function returns `number` multiplied by the `multiplier` given to
`multiplyBy()`.

Let's make a function that applies the Harmonized Sales Tax (HST) of 13%. To calculate the total
after HST, we need to multiple the given value by 1.13.

```js
const applyHST = multiplyBy(1.13); // returns: (number) => number * 1.13

applyHST(20.99); // Returns: 23.718699999999995
```

[**Run the example here**](https://repl.it/@ShaunLloyd1/Higher-Order-Functions)

## Function Composition

Function composition is the mathematical concept of taking two or more Functions
and combining them to create a new function. Let's consider the following function:

```js
const combineFunctions = (funcOne, funcTwo) => x => funcOne(funcTwo(x));
```

`combineFunctions()` is a function that takes two functions and returns a new function
(I spy another Higher Order Function!). This new function takes in `x` and returns the
result of `f` given the result of `g` given `x`.

Now let's use that to combine two functions:
  - applyHST: takes a number and multiplies it by 1.13
  - dollarsAsString: takes a number and formats it as a currency string

```js
const totalAfterTaxesAsString = combineFunctions(
  dollarsAsString,
  applyHST,
); // returns: (x) => dollarsAsString(applyHST(x));

totalAfterTaxesAsString(20.99); // Returns "$ 23.72"
```

[**Run the example here**](https://repl.it/@ShaunLloyd1/Function-Composition)

## Higher Order Components

So how can we use this with react? A common way to apply these concepts is to use
**Higher Order Components**. A **Higher Order Component** is a function that taking in a component
and returns a new component.

```js
const HigherOrderComponent = (Component) => (props) => (
  <Component
    higherOrderProp={someProp}
    {...props}
  />
);
```

This sounds fairly vague so let's look at an example that in commonly used when working with
react + redux. `react-redux`'s connect function.

`connect()` is a **Higher Order Function** that takes two functions, `mapStateToProps` and `mapDispatchToProps`. This then returns a **Higher Order Component** that maps the desired
state values and dispatch actions as props to the given component.

```js
const mapStateToProps = (state) => ({ counter: state.counter });

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => dispatch({ type: INCREMENT }),
  decrementCounter: () => dispatch({ type: DECREMENT }),
});

const connect = (mapStateToProps, mapDispatchToProps) => (
  const stateProps = mapStateToProps(state);
  const dispatchProps = mapDispatchToProps(store.dispatch);

  return (Component) => (props) => (
    <Components
      {...stateProps}
      {...dispatchProps}
      {...props}
    />
  )
);
```

`connect` has now returned a function that takes in a component and will return a new version of that component that now has access to `counter` from state and the two dispatch actions `incrementCounter` and `decrementCounter`

## Composing Higher Order Components

Perhaps you want to compose a bunch of **Higher Order Components** together to create
one big one. Well, `recompose` is a small react library that offers a bunch of **Higher Order Functions** to create **Higher Order Components** to use on your own components.
It also comes with it's own `compose()` function to combine as many of it's **Higher Order Functions** as you give it.

```js
const compose = (...functions) =>
  functions.reduce((composed, fn) => (...args) => composed(fn(...args)));
```

### `compose()`


`compose` is a function from the [`recompose` package](https://github.com/acdlite/recompose/blob/master/docs/API.md#compose) that takes any given number of functions and then uses reduce to compose
them all together. So:

```js
const someComposedFunc = compose(a, b, c, d, e);

someComposedFunc(1, 2, 4); // is equal to a(b(c(d(e(1, 2, 4)))));
```

### `withHandlers()`


`withHandlers` is a function from the [`recompose` package](https://github.com/acdlite/recompose/blob/master/docs/API.md#withhandlers) that takes a handlers object where the keys are the
name of the handler function added to the props of your component and the values are
**Higher Order Functions** that takes the component's props and returns a function that
now has access to all the props available to the component.

Let's consider the following:

```js
export const CounterApp = ({ counter, incrementCounter, decrementCounter }) => (
  <div>
    <h1>{counter}</h1>
    <button onClick={incrementCounter}>Increment</button>
    <button onClick={decrementCounter}>Decrement</button>
  </div>
);

const mapStateTopProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
  setCounter: (number) => dispatch({ type: 'SET_COUNTER', payload: number }),
});

// Let's use `compose` to compose the connect and withHandlers HOCs together
export const CounterAppContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    incrementCounter: (props) =>
      () => props.setCounter(props.counter + 1), // The component will have access to this function.
                                                 // Not the one above that takes in props
    decrementCounter : (props) =>
      () => props.setCounter(props.counter - 1),
  }),
)(CounterApp);
```

Above we see that using `connect` we are giving `CounterAppContainer` access to
`counter` from the store and giving it a dispatch action, `setCounter` to
update `counter`.

After that we are creating `incrementCounter` and `decrementCounter` handler functions using `withHandlers`.

In the end `CounterAppContainer` comes the `CounterApp` component with access to the redux and the handler functions created with `withHandlers`.
