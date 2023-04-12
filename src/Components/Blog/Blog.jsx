import React from "react";

const Blog = () => {
  return (
    <div className="mx-10 my-3">
      <div className="border border-purple-400 rounded-lg p-3 mb-2 bg-purple-100">
        <p className="font-bold text-purple-400 text-2xl">
          When to use context API?
        </p>

        <p className="text-xl my-2">
          <span className="font-bold">ANS:</span> Context is primarily used when
          some data needs to be accessible by many components at different
          nesting levels. Apply it sparingly because it makes component reuse
          more difficult. If you only want to avoid passing some props through
          many levels, component composition is often a simpler solution than
          context{" "}
        </p>
      </div>

      <div className="border border-purple-400 rounded-lg p-3 mb-2 bg-purple-100">
        <p className="font-bold text-purple-400 text-2xl">
          What is Custom Hook?
        </p>

        <p className="text-xl my-2">
          <span className="font-bold">ANS:</span> A custom hook is a special
          JavaScript function whose name starts with 'use' and can be used to
          call other hooks. Let's take a look at some major differences between
          a custom React JS hook and React JS components: A custom hook does not
          require a specific signature.
        </p>
      </div>

      <div className="border border-purple-400 rounded-lg p-3 mb-2 bg-purple-100">
        <p className="font-bold text-purple-400 text-2xl"> What is useRef?</p>

        <p className="text-xl my-2">
          <span className="font-bold">ANS:</span> useRef(initialValue) is a
          built-in React hook that accepts one argument as the initial value and
          returns a reference (aka ref). A reference is an object having a
          special property current .
        </p>
      </div>

      <div className="border border-purple-400 rounded-lg p-3 mb-2 bg-purple-100">
        <p className="font-bold text-purple-400 text-2xl">What is useMemo?</p>
        <p className="text-xl my-2">
          <span className="font-bold">ANS:</span> useMemo() is a function that
          returns a memoized value of a passed in resource-intensive function.
          It is very useful in optimizing the performance of a React component
          by eliminating repeating heavy computations.
        </p>
      </div>
    </div>
    // abcd
  );
};

export default Blog;
