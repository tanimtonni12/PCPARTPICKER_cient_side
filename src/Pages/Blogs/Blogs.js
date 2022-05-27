import React from 'react';

const Blogs = () => {
    return (
        <div class="flex flex-col w-full">
            <div className="grid h-100 card bg-base-300 rounded-box place-items-center">
                <h3> Q-1: How will you improve the performance of a React Application?</h3>
                <p >
                    To improve & optimize our React application, we must first find a performance problem in our application to fix. we have to use a constant Data Structure to make zero side effects. We should use the function component instead of the Class component. we have to optimize dependency. To avoid inline Function Definition in the Render Function. By avoiding Props in the Initial States. Spreading props on DOM elements. CSS Animations Instead of JS Animations.
                </p>

            </div>

            <div className="divider"></div>

            <div className="grid h-100 card bg-base-300 rounded-box place-items-center">
                <h3> Q-2: What are the different ways to manage a state in a React application?</h3>
                <p >
                    There are many types of states that we have to properly manage in our React application such as :
                    <li>Local state.</li>
                    <li>Global state.</li>
                    <li> Server state.</li>
                    <li> URL state.</li>
                </p>

            </div>

            <div className="divider"></div>

            <div className="grid h-100 card bg-base-300 rounded-box place-items-center">
                <h3> Q-3: How does prototypical inheritance work?</h3>
                <p >
                    The prototype is responsible for storing and giving access to a common set of methods and properties shared among all instances of the class or constructor to which the prototype is configured. In object, the prototype offers more flexibility than a class. It can be modified by adding new methods, as we saw early. Also, we can delete methods and even replace the prototype entirely with another object. So Prototypal inheritance is more than Class inheritance, by replacing the creation of objects, modification, and extension in an easy way using literal objects, with instances of classes, is like putting a constrained layer on top of the language’s flexibility.
                </p>

            </div>

            <div className="divider"></div>

            <div className="grid h-100 card bg-base-300 rounded-box place-items-center">
                <h3> Q-4: What is a unit test? Why should write unit tests?</h3>
                <p >
                    Unit testing is a software development process or test where developer can do the test parts of an application or the smallest piece of code.  A unit can be a single function. The goal is to validate that each unit performs as it should. A unit test tests a behavior in isolation from other tests. If Unit has been done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages for developers.
                </p>

            </div>

            <div className="divider"></div>

            <div className="grid h-100 card bg-base-300 rounded-box place-items-center">
                <h3> Q-5: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <p >
                    Answer:
                </p>

            </div>

            <div className="divider"></div>

            <div className="grid h-100 card bg-base-300 rounded-box place-items-center">
                <h3> Q-6: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts </h3>
                <p >
                    Answer:
                </p>

            </div>

            <div className="divider"></div>

        </div>
    );
};

export default Blogs;