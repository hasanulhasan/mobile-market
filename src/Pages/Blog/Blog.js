import React from 'react';

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">We</span>
            </span>{' '}
            are waiting for your Curiosity
          </h2>
          <p className="text-base text-white md:text-lg">
            Here are some question that you expect from us. If you have further question we can directly contact with us.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                What are the different ways to manage a state in a React application?
              </p>
              <p className="text-white">
                There are four main types of state you need to properly manage in your React apps:
                <li>Local state</li>
                <li>Global state</li>
                <li>Server state</li>
                <li>URL state</li>
                <br />
                Local (UI) state – Local state is data we manage in one or another component.

                Local state is most often managed in React using the useState hook.

                For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                <br />

                Global (UI) state – Global state is data we manage across multiple components.

                Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                <br />

                Server state – Data that comes from an external server that must be integrated with our UI state.

                Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                <br />

                URL state – Data that exists on our URLs, including the pathname and query parameters.

                URL state is often missing as a category of state, but it is an important one.
                In many cases, a lot of major parts of our application rely upon accessing URL state.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                How does prototypical inheritance work?
              </p>
              <p className="text-white">
                Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                <br />
                <br />

                All JavaScript objects inherit properties and methods from a prototype:

                Date objects inherit from Date.prototype.
                Array objects inherit from Array.prototype.
                Player objects inherit from Player.prototype.
                The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from Object.prototype.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                What is a unit test? Why should we write unit tests?
              </p>
              <p className="text-white">
                Unit testing involves the testing of each unit or an individual component of the software application. It is the first level of functional testing. The aim behind unit testing is to validate unit components with its performance.
                <br />

                A unit is a single testable part of a software system and tested during the development phase of the application software.
                <br />

                The purpose of unit testing is to test the correctness of isolated code. A unit component is an individual function or code of the application. White box testing approach used for unit testing and usually done by the developers.
                <br />
                <br />
                Unit tests act as documentation for your code.
                They enable you to catch bugs early in the development process.
                Automated unit tests help a great deal with regression testing.
                They detect code smells in your codebase. For example, if you’re having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
                They contribute to higher code quality.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                React vs. Angular vs. Vue?
              </p>
              <p className="text-white">
                Angularjs extensive features are:

                HTML vocabulary extension for web applications.
                Testable initial development stages
                Improved design structure
                Inbuilt dependency injection subsystem for quicker development and testing.
                automatic and easy data synchronization in its architecture
                <br />
                <br />
                ReactJs features:

                Highly reusable components
                React server-side rendering
                Separate option to create a pure JavaScript template
                Small API makes it easier for beginners
                SEO friendly
                <br />
                <br />
                Vue features:

                Vue.js is the youngest of the three. It was released in 2014 and developed by ex-Google employee Evan You. The last three years has seen a significant shift in Vue’s popularity. Without having proper backing by a large company, the framework’s current stable version is 2.6 that was released in 2019. Being a standalone project it has a dedicated team of core contributors that work on building the framework with incremental changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;