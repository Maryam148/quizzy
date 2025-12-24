export interface QuizQuestion {
    id: number
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    resourceLink: string
    resourceTitle: string
}

export interface QuizDataStructure {
    [topic: string]: {
        [difficulty: string]: QuizQuestion[]
    }
}

export const QUIZ_DATA: QuizDataStructure = {
    react: {
        basics: [
            {
                id: 1,
                question: "What is React?",
                options: [
                    "A JavaScript library for building user interfaces",
                    "A programming language",
                    "A database management system",
                    "A CSS framework"
                ],
                correctAnswer: 0,
                explanation: "React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components.",
                resourceLink: "https://react.dev/learn",
                resourceTitle: "Getting Started with React"
            },
            {
                id: 2,
                question: "What is JSX?",
                options: [
                    "JavaScript XML - a syntax extension for JavaScript",
                    "A new programming language",
                    "A database query language",
                    "A CSS preprocessor"
                ],
                correctAnswer: 0,
                explanation: "JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside JavaScript files. It makes it easier to create React elements.",
                resourceLink: "https://react.dev/learn/writing-markup-with-jsx",
                resourceTitle: "Writing Markup with JSX"
            },
            {
                id: 3,
                question: "How do you create a functional component in React?",
                options: [
                    "React.createComponent('ComponentName')",
                    "class ComponentName extends Component",
                    "const component = new React.Component()",
                    "function ComponentName() { return <div>Hello</div> }"
                ],
                correctAnswer: 3,
                explanation: "Functional components are JavaScript functions that return JSX. They're the modern way to write React components.",
                resourceLink: "https://react.dev/learn/your-first-component",
                resourceTitle: "Your First Component"
            },
            {
                id: 4,
                question: "What hook is used to add state to a functional component?",
                options: [
                    "useState",
                    "useEffect",
                    "useContext",
                    "useReducer"
                ],
                correctAnswer: 0,
                explanation: "useState is a React Hook that lets you add a state variable to your component.",
                resourceLink: "https://react.dev/reference/react/useState",
                resourceTitle: "useState Hook"
            },
            {
                id: 5,
                question: "How do you pass data from a parent component to a child component?",
                options: [
                    "Through context",
                    "Through state",
                    "Through props",
                    "Through events"
                ],
                correctAnswer: 2,
                explanation: "Props (short for properties) are how information flows down from parent to child components in React.",
                resourceLink: "https://react.dev/learn/passing-props-to-a-component",
                resourceTitle: "Passing Props to a Component"
            },
            {
                id: 6,
                question: "What is the virtual DOM?",
                options: [
                    "A routing system",
                    "The real browser DOM",
                    "A database",
                    "A lightweight copy of the actual DOM"
                ],
                correctAnswer: 3,
                explanation: "The virtual DOM is a programming concept where a representation of the UI is kept in memory and synced with the real DOM by React.",
                resourceLink: "https://react.dev/learn/preserving-and-resetting-state",
                resourceTitle: "Understanding React's Rendering"
            },
            {
                id: 7,
                question: "Which method is used to update state in a class component?",
                options: [
                    "updateState()",
                    "this.state =",
                    "this.setState()",
                    "changeState()"
                ],
                correctAnswer: 2,
                explanation: "In class components, this.setState() is the proper method to update state. Direct mutation of this.state doesn't trigger re-renders.",
                resourceLink: "https://react.dev/reference/react/Component#setstate",
                resourceTitle: "Component setState"
            },
            {
                id: 8,
                question: "What is the purpose of the key prop in lists?",
                options: [
                    "To sort the list",
                    "To style list items",
                    "To add event listeners",
                    "To help React identify which items have changed"
                ],
                correctAnswer: 3,
                explanation: "Keys help React identify which items have changed, been added, or removed. This helps optimize rendering performance.",
                resourceLink: "https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key",
                resourceTitle: "Rendering Lists with Keys"
            },
            {
                id: 9,
                question: "How do you handle events in React?",
                options: [
                    "Events are not supported",
                    "Using lowercase like onclick",
                    "Using addEventListener",
                    "Using camelCase event handlers like onClick"
                ],
                correctAnswer: 3,
                explanation: "React events are named using camelCase (onClick, onChange) rather than lowercase, and you pass a function as the event handler.",
                resourceLink: "https://react.dev/learn/responding-to-events",
                resourceTitle: "Responding to Events"
            },
            {
                id: 10,
                question: "What is React.Fragment used for?",
                options: [
                    "To break components into pieces",
                    "To group multiple elements without adding extra DOM nodes",
                    "To create animations",
                    "To style components"
                ],
                correctAnswer: 1,
                explanation: "Fragments let you group a list of children without adding extra nodes to the DOM. You can use <></> as shorthand syntax.",
                resourceLink: "https://react.dev/reference/react/Fragment",
                resourceTitle: "Fragment Reference"
            },
            {
                id: 11,
                question: "Which hook runs after every render?",
                options: [
                    "useEffect",
                    "useState",
                    "useContext",
                    "useMemo"
                ],
                correctAnswer: 0,
                explanation: "useEffect runs after rendering and can be configured to run on every render, specific state changes, or only once.",
                resourceLink: "https://react.dev/reference/react/useEffect",
                resourceTitle: "useEffect Hook"
            },
            {
                id: 12,
                question: "What does 'props' stand for?",
                options: [
                    "Properties",
                    "Proposals",
                    "Protocols",
                    "Programs"
                ],
                correctAnswer: 0,
                explanation: "Props is short for 'properties' and refers to data passed from parent to child components in React.",
                resourceLink: "https://react.dev/learn/passing-props-to-a-component",
                resourceTitle: "Understanding Props"
            },
            {
                id: 13,
                question: "Can you modify props inside a component?",
                options: [
                    "No, props are read-only",
                    "Yes, always",
                    "Only in class components",
                    "Only with setState"
                ],
                correctAnswer: 0,
                explanation: "Props are read-only. A component must never modify its own props - this is a fundamental rule in React.",
                resourceLink: "https://react.dev/learn/passing-props-to-a-component#recap",
                resourceTitle: "Props are Immutable"
            },
            {
                id: 14,
                question: "What is the default port for React development server?",
                options: [
                    "8080",
                    "3000",
                    "5000",
                    "4200"
                ],
                correctAnswer: 1,
                explanation: "React development servers created with Create React App or Vite typically run on port 3000 by default.",
                resourceLink: "https://react.dev/learn/start-a-new-react-project",
                resourceTitle: "Start a New React Project"
            },
            {
                id: 15,
                question: "Which command creates a new React app?",
                options: [
                    "npx create-react-app my-app",
                    "npm install react",
                    "react new my-app",
                    "npm create my-app"
                ],
                correctAnswer: 0,
                explanation: "Create React App is a comfortable environment for learning React and creating new single-page applications. Use npx to run it without installing globally.",
                resourceLink: "https://react.dev/learn/start-a-new-react-project",
                resourceTitle: "Creating a React App"
            },
            {
                id: 16,
                question: "What is the purpose of render() method?",
                options: [
                    "To return JSX that will be displayed",
                    "To update state",
                    "To handle events",
                    "To fetch data"
                ],
                correctAnswer: 0,
                explanation: "The render() method in class components returns the JSX that describes what should appear on the screen.",
                resourceLink: "https://react.dev/reference/react/Component#render",
                resourceTitle: "Component render Method"
            },
            {
                id: 17,
                question: "What are controlled components?",
                options: [
                    "Components with authentication",
                    "Components with strict typing",
                    "Components that cannot change",
                    "Components where form data is controlled by React state"
                ],
                correctAnswer: 3,
                explanation: "In controlled components, form data is handled by React state. The React component that renders the form also controls what happens in that form on user input.",
                resourceLink: "https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable",
                resourceTitle: "Controlled Components"
            },
            {
                id: 18,
                question: "What is the children prop?",
                options: [
                    "State of child components",
                    "Child components only",
                    "Props of child components",
                    "Content passed between opening and closing tags"
                ],
                correctAnswer: 3,
                explanation: "The children prop contains the content between the opening and closing tags of a component, allowing you to nest content.",
                resourceLink: "https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children",
                resourceTitle: "Passing JSX as Children"
            },
            {
                id: 19,
                question: "How do you conditionally render in React?",
                options: [
                    "Using JavaScript conditional operators like && or ternary",
                    "Using if-else in JSX",
                    "Using switch statements in JSX",
                    "Conditional rendering is not possible"
                ],
                correctAnswer: 0,
                explanation: "You can use JavaScript conditional operators like && and ? : (ternary) to conditionally include JSX in your render output.",
                resourceLink: "https://react.dev/learn/conditional-rendering",
                resourceTitle: "Conditional Rendering"
            },
            {
                id: 20,
                question: "What is the purpose of React.StrictMode?",
                options: [
                    "To enforce strict typing",
                    "To highlight potential problems in an application",
                    "To improve performance",
                    "To add security features"
                ],
                correctAnswer: 1,
                explanation: "StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants.",
                resourceLink: "https://react.dev/reference/react/StrictMode",
                resourceTitle: "StrictMode Reference"
            }
        ],
        intermediate: [
            {
                id: 1,
                question: "What is prop drilling?",
                options: [
                    "Passing props through multiple levels of components",
                    "Creating new props dynamically",
                    "Deleting props from components",
                    "Validating props at runtime"
                ],
                correctAnswer: 0,
                explanation: "Prop drilling is the process of passing data from a parent component down through multiple layers of nested components to reach a deeply nested child component that needs the data.",
                resourceLink: "https://react.dev/learn/passing-data-deeply-with-context",
                resourceTitle: "Avoiding Prop Drilling with Context"
            },
            {
                id: 2,
                question: "What is the purpose of useCallback?",
                options: [
                    "To handle HTTP requests",
                    "To call functions asynchronously",
                    "To create new callbacks",
                    "To memoize callback functions to prevent unnecessary re-creations"
                ],
                correctAnswer: 3,
                explanation: "useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed, preventing unnecessary re-renders of child components.",
                resourceLink: "https://react.dev/reference/react/useCallback",
                resourceTitle: "useCallback Hook"
            },
            {
                id: 3,
                question: "What does useMemo do?",
                options: [
                    "Creates new components",
                    "Stores data permanently in memory",
                    "Memoizes expensive calculations to avoid recalculating on every render",
                    "Handles form submissions"
                ],
                correctAnswer: 2,
                explanation: "useMemo returns a memoized value that is only recalculated when one of its dependencies changes, optimizing performance for expensive computations.",
                resourceLink: "https://react.dev/reference/react/useMemo",
                resourceTitle: "useMemo Hook"
            },
            {
                id: 4,
                question: "What is React.lazy() used for?",
                options: [
                    "Code splitting and lazy loading components on demand",
                    "Making components load slowly",
                    "Delaying state updates",
                    "Creating loading spinners"
                ],
                correctAnswer: 0,
                explanation: "React.lazy enables code splitting by allowing you to render a dynamic import as a regular component, loading it only when it's first rendered.",
                resourceLink: "https://react.dev/reference/react/lazy",
                resourceTitle: "lazy Function"
            },
            {
                id: 5,
                question: "What is the Context API used for?",
                options: [
                    "Sharing state across multiple components without prop drilling",
                    "Creating context in documentation",
                    "Making API calls",
                    "Handling routing"
                ],
                correctAnswer: 0,
                explanation: "The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.",
                resourceLink: "https://react.dev/learn/passing-data-deeply-with-context",
                resourceTitle: "Passing Data with Context"
            },
            {
                id: 6,
                question: "What is the difference between useEffect and useLayoutEffect?",
                options: [
                    "useEffect is deprecated",
                    "They are exactly the same",
                    "useLayoutEffect runs synchronously after DOM mutations before browser paint",
                    "useLayoutEffect is for styling only"
                ],
                correctAnswer: 2,
                explanation: "useLayoutEffect fires synchronously after all DOM mutations but before the browser has painted, allowing you to read layout and synchronously re-render.",
                resourceLink: "https://react.dev/reference/react/useLayoutEffect",
                resourceTitle: "useLayoutEffect Hook"
            },
            {
                id: 7,
                question: "What is React.memo() used for?",
                options: [
                    "To handle form inputs",
                    "To store data in memory",
                    "To create memoization hooks",
                    "To prevent unnecessary re-renders of functional components"
                ],
                correctAnswer: 3,
                explanation: "React.memo is a higher order component that memoizes the result of a component render, only re-rendering when props change.",
                resourceLink: "https://react.dev/reference/react/memo",
                resourceTitle: "memo Function"
            },
            {
                id: 8,
                question: "How do you create a custom hook?",
                options: [
                    "Extend the Hook class",
                    "Create a function that starts with 'use' and can call other hooks",
                    "Use React.createHook()",
                    "Custom hooks are not possible"
                ],
                correctAnswer: 1,
                explanation: "Custom hooks are JavaScript functions whose names start with 'use' and that may call other hooks, allowing you to extract component logic into reusable functions.",
                resourceLink: "https://react.dev/learn/reusing-logic-with-custom-hooks",
                resourceTitle: "Reusing Logic with Custom Hooks"
            },
            {
                id: 9,
                question: "What is the useReducer hook used for?",
                options: [
                    "Reducing file size",
                    "Managing complex state logic with a reducer function",
                    "Removing components",
                    "Compressing data"
                ],
                correctAnswer: 1,
                explanation: "useReducer is an alternative to useState for managing state logic, especially useful when you have complex state logic that involves multiple sub-values.",
                resourceLink: "https://react.dev/reference/react/useReducer",
                resourceTitle: "useReducer Hook"
            },
            {
                id: 10,
                question: "What is reconciliation in React?",
                options: [
                    "The process of comparing the virtual DOM with the real DOM to determine what changed",
                    "Resolving conflicts in state",
                    "Merging components",
                    "Debugging process"
                ],
                correctAnswer: 0,
                explanation: "Reconciliation is React's algorithm for diffing one tree with another to determine which parts need to be changed, optimizing re-renders.",
                resourceLink: "https://react.dev/learn/preserving-and-resetting-state",
                resourceTitle: "Understanding State & Reconciliation"
            },
            {
                id: 11,
                question: "What are Higher-Order Components (HOCs)?",
                options: [
                    "Advanced class components",
                    "Components at the top of the tree",
                    "Components with high priority",
                    "Functions that take a component and return a new enhanced component"
                ],
                correctAnswer: 3,
                explanation: "A Higher-Order Component is a function that takes a component and returns a new component with additional props or behavior.",
                resourceLink: "https://react.dev/learn/reusing-logic-with-custom-hooks#higher-order-components",
                resourceTitle: "Reusing Logic Patterns"
            },
            {
                id: 12,
                question: "What is the purpose of useRef?",
                options: [
                    "To create DOM refs exclusively",
                    "To reference other components only",
                    "To create a mutable reference that persists across renders without causing re-renders",
                    "To improve performance automatically"
                ],
                correctAnswer: 2,
                explanation: "useRef returns a mutable ref object whose .current property persists for the lifetime of the component and doesn't cause re-renders when changed.",
                resourceLink: "https://react.dev/reference/react/useRef",
                resourceTitle: "useRef Hook"
            },
            {
                id: 13,
                question: "What is the render props pattern?",
                options: [
                    "Rendering prop values directly",
                    "A technique for sharing code using a prop whose value is a function that returns JSX",
                    "A deprecated pattern",
                    "Props for the render method only"
                ],
                correctAnswer: 1,
                explanation: "Render props is a technique for sharing code between React components using a prop whose value is a function that renders JSX.",
                resourceLink: "https://react.dev/learn/reusing-logic-with-custom-hooks#render-props",
                resourceTitle: "Sharing Logic Patterns"
            },
            {
                id: 14,
                question: "What is Suspense in React?",
                options: [
                    "An error boundary",
                    "A way to pause code execution",
                    "A component for handling loading states during code splitting or data fetching",
                    "A testing utility"
                ],
                correctAnswer: 2,
                explanation: "Suspense lets you display a fallback until its children have finished loading, commonly used with lazy for code splitting.",
                resourceLink: "https://react.dev/reference/react/Suspense",
                resourceTitle: "Suspense Component"
            },
            {
                id: 15,
                question: "How do you handle errors in React?",
                options: [
                    "Using console.error",
                    "Using try-catch in render methods",
                    "Using Error Boundaries to catch JavaScript errors in components",
                    "React handles all errors automatically"
                ],
                correctAnswer: 2,
                explanation: "Error Boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI.",
                resourceLink: "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary",
                resourceTitle: "Error Boundaries"
            },
            {
                id: 16,
                question: "What is useImperativeHandle used for?",
                options: [
                    "To improve performance",
                    "To handle imperative code",
                    "To create DOM handles",
                    "To customize the instance value exposed to parent components when using ref"
                ],
                correctAnswer: 3,
                explanation: "useImperativeHandle customizes the handle exposed when using ref on a parent component, allowing you to control which properties are exposed.",
                resourceLink: "https://react.dev/reference/react/useImperativeHandle",
                resourceTitle: "useImperativeHandle Hook"
            },
            {
                id: 17,
                question: "What is batching in React?",
                options: [
                    "A build optimization technique",
                    "Grouping components together",
                    "Processing data in batches",
                    "Combining multiple state updates into a single re-render for performance"
                ],
                correctAnswer: 3,
                explanation: "Batching is when React groups multiple state updates into a single re-render for better performance, now automatic in React 18 for all updates.",
                resourceLink: "https://react.dev/learn/queueing-a-series-of-state-updates",
                resourceTitle: "Queueing State Updates"
            },
            {
                id: 18,
                question: "What is a synthetic event in React?",
                options: [
                    "A testing utility event",
                    "An artificial test event",
                    "A cross-browser wrapper around the browser's native event system",
                    "A deprecated feature"
                ],
                correctAnswer: 2,
                explanation: "SyntheticEvent is React's cross-browser wrapper around the browser's native event, providing consistent behavior across all browsers.",
                resourceLink: "https://react.dev/learn/responding-to-events",
                resourceTitle: "Responding to Events"
            },
            {
                id: 19,
                question: "What is shallow comparison?",
                options: [
                    "Comparing object references rather than deep values for equality",
                    "A superficial code review",
                    "Comparing only primitive values",
                    "A deprecated comparison method"
                ],
                correctAnswer: 0,
                explanation: "Shallow comparison checks if object references are equal rather than deeply comparing all properties, used by React.memo and PureComponent.",
                resourceLink: "https://react.dev/reference/react/memo",
                resourceTitle: "Understanding memo Comparison"
            },
            {
                id: 20,
                question: "Why is the key prop important in lists?",
                options: [
                    "To improve CSS styling",
                    "To encrypt list data",
                    "To create unique identifiers",
                    "To help React identify which items changed, added, or removed for efficient updates"
                ],
                correctAnswer: 3,
                explanation: "Keys help React identify which items in a list have changed, are added, or removed, enabling efficient re-rendering of list items.",
                resourceLink: "https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key",
                resourceTitle: "Why Keys Matter"
            }
        ],
        advanced: [
            {
                id: 1,
                question: "What is Fiber in React?",
                options: [
                    "React's reconciliation algorithm that enables incremental rendering",
                    "A CSS framework for React",
                    "A data structure for state",
                    "A testing library"
                ],
                correctAnswer: 0,
                explanation: "Fiber is React's reconciliation engine that allows React to split rendering work into chunks and spread it out over multiple frames, enabling better performance.",
                resourceLink: "https://react.dev/blog/2022/03/29/react-v18#what-is-concurrent-react",
                resourceTitle: "Understanding Concurrent React & Fiber"
            },
            {
                id: 2,
                question: "What are Server Components in React?",
                options: [
                    "Components for backend APIs only",
                    "Components that run only on the server and stream HTML to the client",
                    "Deprecated components",
                    "Components for Node.js exclusively"
                ],
                correctAnswer: 1,
                explanation: "Server Components are a new type of component that runs only on the server, reducing client bundle size and enabling direct database access.",
                resourceLink: "https://react.dev/reference/rsc/server-components",
                resourceTitle: "React Server Components"
            },
            {
                id: 3,
                question: "What is concurrent rendering?",
                options: [
                    "Multi-threaded rendering",
                    "Rendering multiple components simultaneously",
                    "React's ability to prepare UI in the background and interrupt rendering for urgent updates",
                    "Parallel component creation"
                ],
                correctAnswer: 2,
                explanation: "Concurrent rendering allows React to interrupt rendering to handle high-priority updates, keeping the application responsive.",
                resourceLink: "https://react.dev/blog/2022/03/29/react-v18#what-is-concurrent-react",
                resourceTitle: "Concurrent React"
            },
            {
                id: 4,
                question: "What is useTransition used for?",
                options: [
                    "To handle route changes",
                    "To create CSS animations",
                    "To transition between pages",
                    "To mark state updates as non-urgent transitions that can be interrupted"
                ],
                correctAnswer: 3,
                explanation: "useTransition lets you mark certain state updates as transitions, allowing React to keep the interface responsive during updates.",
                resourceLink: "https://react.dev/reference/react/useTransition",
                resourceTitle: "useTransition Hook"
            },
            {
                id: 5,
                question: "What is useDeferredValue?",
                options: [
                    "To delay all renders",
                    "A hook to defer updating non-critical parts of the UI",
                    "To schedule future updates",
                    "To cache computed values"
                ],
                correctAnswer: 1,
                explanation: "useDeferredValue lets you defer updating a part of the UI, keeping the interface responsive while expensive renders complete in the background.",
                resourceLink: "https://react.dev/reference/react/useDeferredValue",
                resourceTitle: "useDeferredValue Hook"
            },
            {
                id: 6,
                question: "What is startTransition?",
                options: [
                    "To initialize component state",
                    "To begin CSS animations",
                    "To start route transitions",
                    "A function to mark updates as transitions that can be interrupted by urgent updates"
                ],
                correctAnswer: 3,
                explanation: "startTransition allows you to mark updates as transitions without using hooks, useful for updating state from non-React code.",
                resourceLink: "https://react.dev/reference/react/startTransition",
                resourceTitle: "startTransition API"
            },
            {
                id: 7,
                question: "What are portals in React?",
                options: [
                    "A way to render children into a DOM node outside the parent component hierarchy",
                    "Entry points to the application",
                    "A routing mechanism",
                    "A data fetching pattern"
                ],
                correctAnswer: 0,
                explanation: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.",
                resourceLink: "https://react.dev/reference/react-dom/createPortal",
                resourceTitle: "createPortal Function"
            },
            {
                id: 8,
                question: "What is the React DevTools Profiler used for?",
                options: [
                    "User authentication",
                    "Creating user profiles",
                    "Measuring rendering performance and identifying performance bottlenecks",
                    "State management"
                ],
                correctAnswer: 2,
                explanation: "The Profiler measures how often a React application renders and what the 'cost' of rendering is, helping identify performance issues.",
                resourceLink: "https://react.dev/reference/react/Profiler",
                resourceTitle: "Profiler Component"
            },
            {
                id: 9,
                question: "What is hydration in React?",
                options: [
                    "Attaching event listeners to server-rendered HTML to make it interactive",
                    "Adding data to components",
                    "Loading initial data",
                    "Initializing component state"
                ],
                correctAnswer: 0,
                explanation: "Hydration is when React attaches to server-rendered HTML and makes it interactive by attaching event handlers.",
                resourceLink: "https://react.dev/reference/react-dom/client/hydrateRoot",
                resourceTitle: "hydrateRoot Function"
            },
            {
                id: 10,
                question: "What is the difference between controlled and uncontrolled components?",
                options: [
                    "Uncontrolled components are always better",
                    "Controlled components have form data handled by React state, uncontrolled use refs",
                    "They are the same thing",
                    "Controlled components always use refs"
                ],
                correctAnswer: 1,
                explanation: "Controlled components keep form data in React state, while uncontrolled components store form data in the DOM and are accessed via refs.",
                resourceLink: "https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components",
                resourceTitle: "Controlled vs Uncontrolled"
            },
            {
                id: 11,
                question: "What is code splitting?",
                options: [
                    "Dividing your bundle into smaller chunks that are loaded on demand",
                    "Splitting component files",
                    "Dividing state logic",
                    "Separating CSS from JavaScript"
                ],
                correctAnswer: 0,
                explanation: "Code splitting is the technique of splitting your bundle into smaller chunks which can then be loaded on demand or in parallel.",
                resourceLink: "https://react.dev/reference/react/lazy",
                resourceTitle: "Code Splitting with lazy"
            },
            {
                id: 12,
                question: "What is the purpose of the useId hook?",
                options: [
                    "To identify components",
                    "To create random IDs",
                    "To generate unique IDs for accessibility attributes that are stable across server and client",
                    "To create unique keys for lists"
                ],
                correctAnswer: 2,
                explanation: "useId generates unique IDs that are guaranteed to be the same on both server and client, useful for accessibility attributes.",
                resourceLink: "https://react.dev/reference/react/useId",
                resourceTitle: "useId Hook"
            },
            {
                id: 13,
                question: "What is selective hydration?",
                options: [
                    "Choosing which components to render",
                    "Hydrating different parts of the page independently as they become ready",
                    "Partial page rendering",
                    "Lazy loading only"
                ],
                correctAnswer: 1,
                explanation: "Selective hydration allows React to hydrate parts of the application independently, improving perceived performance.",
                resourceLink: "https://react.dev/reference/react-dom/client/hydrateRoot",
                resourceTitle: "Understanding Hydration"
            },
            {
                id: 14,
                question: "What are Transitions in React 18?",
                options: [
                    "CSS animation transitions",
                    "A way to mark certain UI updates as non-urgent to keep the app responsive",
                    "Page navigation transitions",
                    "State migration utilities"
                ],
                correctAnswer: 1,
                explanation: "Transitions in React 18 distinguish between urgent and non-urgent updates, allowing React to keep the UI responsive during expensive renders.",
                resourceLink: "https://react.dev/reference/react/useTransition",
                resourceTitle: "Transitions"
            },
            {
                id: 15,
                question: "What is automatic batching in React 18?",
                options: [
                    "Build optimization",
                    "Manual batching of updates",
                    "Batch data processing",
                    "Automatic grouping of state updates in any async code, not just React events"
                ],
                correctAnswer: 3,
                explanation: "React 18 automatically batches state updates in promises, setTimeout, native event handlers, and any other event, not just React events.",
                resourceLink: "https://react.dev/blog/2022/03/29/react-v18#new-feature-automatic-batching",
                resourceTitle: "Automatic Batching"
            },
            {
                id: 16,
                question: "What is streaming SSR?",
                options: [
                    "Real-time live updates",
                    "Video streaming in React",
                    "Data streaming APIs",
                    "Sending HTML to the client in chunks as components become ready"
                ],
                correctAnswer: 3,
                explanation: "Streaming SSR allows the server to send HTML in chunks as it's generated, improving time to first byte and user experience.",
                resourceLink: "https://react.dev/reference/react-dom/server/renderToReadableStream",
                resourceTitle: "Streaming Server Rendering"
            },
            {
                id: 17,
                question: "What is the cache function in React?",
                options: [
                    "State caching only",
                    "Browser caching API",
                    "A function to cache the result of data fetches or computations",
                    "Route caching"
                ],
                correctAnswer: 2,
                explanation: "The cache function allows you to cache the result of a data fetch or computation, useful in Server Components.",
                resourceLink: "https://react.dev/reference/react/cache",
                resourceTitle: "cache Function"
            },
            {
                id: 18,
                question: "What is the use hook in React?",
                options: [
                    "A custom hook template",
                    "A generic utility hook",
                    "A deprecated hook",
                    "A hook for reading resources like Promises and Context"
                ],
                correctAnswer: 3,
                explanation: "The use hook can read the value of a resource like a Promise or Context, suspending the component until the resource is ready.",
                resourceLink: "https://react.dev/reference/react/use",
                resourceTitle: "use Hook"
            },
            {
                id: 19,
                question: "What is resumable hydration?",
                options: [
                    "Hydration that can pause and resume based on user interaction priority",
                    "Restarting hydration completely",
                    "Full page hydration only",
                    "Partial hydration"
                ],
                correctAnswer: 0,
                explanation: "Resumable hydration is an advanced technique where React can pause hydration to handle user interactions, then resume where it left off.",
                resourceLink: "https://react.dev/reference/react-dom/client/hydrateRoot",
                resourceTitle: "Advanced Hydration"
            },
            {
                id: 20,
                question: "What is the React Compiler (React Forget)?",
                options: [
                    "An experimental compiler that automatically memoizes components and hooks",
                    "A code minifier",
                    "A JavaScript transpiler",
                    "A build tool"
                ],
                correctAnswer: 0,
                explanation: "React Forget is an experimental compiler that automatically optimizes React code by memoizing components, eliminating the need for manual optimization.",
                resourceLink: "https://react.dev/learn/react-compiler",
                resourceTitle: "React Compiler"
            }
        ]
    },
    javascript: {
        basics: [
            {
                id: 1,
                question: "What is JavaScript?",
                options: [
                    "A high-level, interpreted programming language for web development",
                    "A Java framework",
                    "A database query language",
                    "A CSS preprocessor"
                ],
                correctAnswer: 0,
                explanation: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification, primarily used to create interactive web pages.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript",
                resourceTitle: "About JavaScript"
            },
            {
                id: 2,
                question: "What are the primitive data types in JavaScript?",
                options: [
                    "String, Number, Boolean, Object, Array",
                    "String, Number, Boolean, Undefined, Null, Symbol, BigInt",
                    "Integer, Float, String, Boolean",
                    "String, Number, Object"
                ],
                correctAnswer: 1,
                explanation: "JavaScript has 7 primitive data types: String, Number, Boolean, Undefined, Null, Symbol (ES6), and BigInt (ES2020).",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
                resourceTitle: "JavaScript Data Types"
            },
            {
                id: 3,
                question: "What is the difference between let, const, and var?",
                options: [
                    "They are all the same",
                    "let and const are block-scoped, var is function-scoped; const cannot be reassigned",
                    "var is newer than let and const",
                    "const is for constants only, var for variables"
                ],
                correctAnswer: 1,
                explanation: "let and const have block scope and temporal dead zone, while var is function-scoped and hoisted. const cannot be reassigned after initialization.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let",
                resourceTitle: "let vs const vs var"
            },
            {
                id: 4,
                question: "What is hoisting in JavaScript?",
                options: [
                    "Moving declarations to the top of their scope during compilation",
                    "Lifting heavy objects",
                    "Promoting variables",
                    "Optimizing code execution"
                ],
                correctAnswer: 0,
                explanation: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting",
                resourceTitle: "Hoisting"
            },
            {
                id: 5,
                question: "What is the difference between == and ===?",
                options: [
                    "=== is deprecated",
                    "They are the same",
                    "== performs type coercion, === checks both value and type",
                    "== is stricter than ==="
                ],
                correctAnswer: 2,
                explanation: "== (loose equality) performs type conversion before comparison, while === (strict equality) compares both value and type without conversion.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness",
                resourceTitle: "Equality Comparisons"
            },
            {
                id: 6,
                question: "What is a closure?",
                options: [
                    "A closed function",
                    "A function that has access to its outer function's variables",
                    "A function that cannot be accessed",
                    "A private function"
                ],
                correctAnswer: 1,
                explanation: "A closure is a function that retains access to variables from its outer (enclosing) lexical scope even after the outer function has returned.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
                resourceTitle: "Closures"
            },
            {
                id: 7,
                question: "What is the 'this' keyword?",
                options: [
                    "A reference to the global object always",
                    "A reference to the current file",
                    "A reference to the object that is executing the current function",
                    "A reference to the parent function"
                ],
                correctAnswer: 2,
                explanation: "The 'this' keyword refers to the context in which a function is called, which can be different depending on how and where the function is invoked.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",
                resourceTitle: "this Keyword"
            },
            {
                id: 8,
                question: "What is an arrow function?",
                options: [
                    "A function that points somewhere",
                    "A shorter syntax for functions that doesn't bind its own 'this'",
                    "A faster function",
                    "A deprecated function syntax"
                ],
                correctAnswer: 1,
                explanation: "Arrow functions provide a concise syntax and lexically bind 'this', meaning they inherit 'this' from the surrounding scope.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
                resourceTitle: "Arrow Functions"
            },
            {
                id: 9,
                question: "What is the difference between null and undefined?",
                options: [
                    "They are exactly the same",
                    "undefined means not assigned, null is an intentional absence of value",
                    "null is a bug",
                    "undefined is deprecated"
                ],
                correctAnswer: 1,
                explanation: "undefined means a variable has been declared but not assigned a value, while null is an assignment value representing intentional absence of any object value.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",
                resourceTitle: "null vs undefined"
            },
            {
                id: 10,
                question: "What is destructuring?",
                options: [
                    "Breaking code into pieces",
                    "A syntax to extract values from arrays or objects into variables",
                    "Deleting properties",
                    "Destroying objects"
                ],
                correctAnswer: 1,
                explanation: "Destructuring is a JavaScript expression that allows extracting data from arrays, objects, or maps into distinct variables using a concise syntax.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
                resourceTitle: "Destructuring Assignment"
            },
            {
                id: 11,
                question: "What is the spread operator (...)?",
                options: [
                    "Spreads butter",
                    "Expands an iterable into individual elements",
                    "Deletes array elements",
                    "Concatenates strings"
                ],
                correctAnswer: 1,
                explanation: "The spread operator (...) expands an iterable (like an array) into individual elements, useful for copying arrays, merging objects, or passing arguments.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
                resourceTitle: "Spread Syntax"
            },
            {
                id: 12,
                question: "What is template literal?",
                options: [
                    "String literals allowing embedded expressions using backticks",
                    "A string template",
                    "A literal string value",
                    "A deprecated string syntax"
                ],
                correctAnswer: 0,
                explanation: "Template literals use backticks (`) and allow embedded expressions with ${}, multi-line strings, and string interpolation.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",
                resourceTitle: "Template Literals"
            },
            {
                id: 13,
                question: "What is the purpose of Array.map()?",
                options: [
                    "Sorts an array",
                    "Maps values to keys",
                    "Finds elements in array",
                    "Creates a new array by applying a function to each element"
                ],
                correctAnswer: 3,
                explanation: "map() creates a new array populated with the results of calling a provided function on every element in the calling array.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
                resourceTitle: "Array.map()"
            },
            {
                id: 14,
                question: "What does Array.filter() do?",
                options: [
                    "Removes all elements",
                    "Filters water",
                    "Creates a new array with elements that pass a test",
                    "Sorts filtered elements"
                ],
                correctAnswer: 2,
                explanation: "filter() creates a new array with all elements that pass the test implemented by the provided function.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
                resourceTitle: "Array.filter()"
            },
            {
                id: 15,
                question: "What is the purpose of Array.reduce()?",
                options: [
                    "Makes array smaller",
                    "Reduces array size",
                    "Reduces array to a single value by applying a function",
                    "Removes duplicates"
                ],
                correctAnswer: 2,
                explanation: "reduce() executes a reducer function on each element, resulting in a single output value like a sum, product, or accumulated object.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
                resourceTitle: "Array.reduce()"
            },
            {
                id: 16,
                question: "What is JSON?",
                options: [
                    "JavaScript Object Notation - a lightweight data interchange format",
                    "Java Standard Object Notation",
                    "JavaScript Object Network",
                    "A JavaScript function"
                ],
                correctAnswer: 0,
                explanation: "JSON is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON",
                resourceTitle: "JSON"
            },
            {
                id: 17,
                question: "What does typeof operator return for an array?",
                options: [
                    "array",
                    "object",
                    "list",
                    "collection"
                ],
                correctAnswer: 1,
                explanation: "typeof returns 'object' for arrays because arrays are technically objects in JavaScript. Use Array.isArray() to check for arrays.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof",
                resourceTitle: "typeof Operator"
            },
            {
                id: 18,
                question: "What is the DOM?",
                options: [
                    "Document Object Model - a programming interface for HTML documents",
                    "Data Object Model",
                    "Document Oriented Markup",
                    "Dynamic Object Management"
                ],
                correctAnswer: 0,
                explanation: "The DOM is a programming interface that represents HTML/XML documents as a tree structure, allowing programs to change document structure, style, and content.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
                resourceTitle: "DOM Introduction"
            },
            {
                id: 19,
                question: "What is an event listener?",
                options: [
                    "A function that creates events",
                    "A function that waits for and responds to events",
                    "A function that stops events",
                    "A logging function"
                ],
                correctAnswer: 1,
                explanation: "Event listeners are functions that wait for specified events to occur on DOM elements and execute callback functions when those events happen.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
                resourceTitle: "addEventListener"
            },
            {
                id: 20,
                question: "What is strict mode?",
                options: [
                    "A debugging mode",
                    "A way to opt into a restricted variant of JavaScript",
                    "A performance mode",
                    "A deprecated feature"
                ],
                correctAnswer: 1,
                explanation: "Strict mode ('use strict') enables stricter parsing and error handling, catching common coding errors and preventing certain actions.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode",
                resourceTitle: "Strict Mode"
            }
        ],
        intermediate: [
            {
                id: 1,
                question: "What is the prototype chain?",
                options: [
                    "A mechanism for objects to inherit properties from other objects",
                    "A chain of functions",
                    "A linked list",
                    "A design pattern"
                ],
                correctAnswer: 0,
                explanation: "The prototype chain is JavaScript's inheritance mechanism where objects can inherit properties and methods from other objects through their prototype.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
                resourceTitle: "Prototype Chain"
            },
            {
                id: 2,
                question: "What is the event loop?",
                options: [
                    "A mechanism that handles asynchronous operations in JavaScript",
                    "A loop for handling events",
                    "An infinite loop",
                    "A debugging tool"
                ],
                correctAnswer: 0,
                explanation: "The event loop is responsible for executing code, collecting and processing events, and executing queued sub-tasks, enabling non-blocking asynchronous behavior.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
                resourceTitle: "Event Loop"
            },
            {
                id: 3,
                question: "What is the call stack?",
                options: [
                    "A debugging stack",
                    "A function call list",
                    "A data structure that tracks function execution",
                    "A memory stack"
                ],
                correctAnswer: 2,
                explanation: "The call stack is a LIFO (Last In, First Out) data structure that tracks function calls, storing information about the active subroutines of execution.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Glossary/Call_stack",
                resourceTitle: "Call Stack"
            },
            {
                id: 4,
                question: "What are Promises?",
                options: [
                    "Guaranteed results",
                    "Objects representing eventual completion or failure of async operations",
                    "Function guarantees",
                    "Synchronous operations"
                ],
                correctAnswer: 1,
                explanation: "Promises are objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
                resourceTitle: "Promises"
            },
            {
                id: 5,
                question: "What is async/await?",
                options: [
                    "Syntactic sugar for working with Promises synchronously",
                    "Asynchronous functions",
                    "Waiting functions",
                    "Promise creators"
                ],
                correctAnswer: 0,
                explanation: "async/await provides a more readable way to work with Promises, making asynchronous code appear synchronous while maintaining non-blocking behavior.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
                resourceTitle: "async/await"
            },
            {
                id: 6,
                question: "What is debouncing?",
                options: [
                    "Delaying function execution until after a wait period",
                    "Removing bounce effects",
                    "Debugging technique",
                    "Performance optimization"
                ],
                correctAnswer: 0,
                explanation: "Debouncing delays executing a function until after a specified time has elapsed since the last call, useful for reducing API calls on user input.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/Events/Debounce",
                resourceTitle: "Debouncing"
            },
            {
                id: 7,
                question: "What is throttling?",
                options: [
                    "Network throttling",
                    "Slowing down code",
                    "Performance degradation",
                    "Limiting function execution to once per time period"
                ],
                correctAnswer: 3,
                explanation: "Throttling ensures a function is called at most once in a specified time period, useful for rate-limiting event handlers.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Glossary/Throttle",
                resourceTitle: "Throttling"
            },
            {
                id: 8,
                question: "What is memoization?",
                options: [
                    "Memorizing code",
                    "Caching function results based on inputs",
                    "Memory optimization",
                    "Data storage"
                ],
                correctAnswer: 1,
                explanation: "Memoization is an optimization technique that stores the results of expensive function calls and returns cached results for same inputs.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Glossary/Memoization",
                resourceTitle: "Memoization"
            },
            {
                id: 9,
                question: "What is the difference between call(), apply(), and bind()?",
                options: [
                    "bind is deprecated",
                    "They are the same",
                    "Only syntax differences",
                    "All change 'this' context; call/apply invoke immediately, bind returns new function"
                ],
                correctAnswer: 3,
                explanation: "call() and apply() invoke functions immediately with specified 'this' (apply takes array of args), while bind() returns a new function with bound 'this'.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call",
                resourceTitle: "call, apply, bind"
            },
            {
                id: 10,
                question: "What is currying?",
                options: [
                    "Function optimization",
                    "A cooking technique",
                    "Current function execution",
                    "Transforming a function with multiple arguments into a sequence of functions"
                ],
                correctAnswer: 3,
                explanation: "Currying transforms a function that takes multiple arguments into a sequence of functions each taking a single argument.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Glossary/Currying",
                resourceTitle: "Currying"
            },
            {
                id: 11,
                question: "What is the module pattern?",
                options: [
                    "A coding style",
                    "A way to import modules",
                    "A design pattern for encapsulating private and public members",
                    "A framework pattern"
                ],
                correctAnswer: 2,
                explanation: "The module pattern uses closures to create private and public encapsulation, similar to classes in other languages.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
                resourceTitle: "JavaScript Modules"
            },
            {
                id: 12,
                question: "What is Object.create()?",
                options: [
                    "Creates a new object with specified prototype",
                    "Creates empty objects",
                    "Copies objects",
                    "Validates objects"
                ],
                correctAnswer: 0,
                explanation: "Object.create() creates a new object using an existing object as the prototype of the newly created object.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create",
                resourceTitle: "Object.create()"
            },
            {
                id: 13,
                question: "What is the difference between shallow and deep copy?",
                options: [
                    "Shallow copies references, deep copies nested objects recursively",
                    "Shallow is faster",
                    "Deep is deprecated",
                    "They are the same"
                ],
                correctAnswer: 0,
                explanation: "Shallow copy copies only the first level, keeping references to nested objects. Deep copy recursively copies all nested objects.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy",
                resourceTitle: "Shallow vs Deep Copy"
            },
            {
                id: 14,
                question: "What is the Set data structure?",
                options: [
                    "An array type",
                    "A setter function",
                    "A configuration set",
                    "A collection of unique values"
                ],
                correctAnswer: 3,
                explanation: "Set is a collection that stores unique values of any type, automatically removing duplicates.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",
                resourceTitle: "Set"
            },
            {
                id: 15,
                question: "What is the Map data structure?",
                options: [
                    "An object type",
                    "A mapping function",
                    "A geographic map",
                    "A collection of key-value pairs with any type of keys"
                ],
                correctAnswer: 3,
                explanation: "Map is a collection of key-value pairs where keys can be any type (unlike objects which only allow strings/symbols).",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",
                resourceTitle: "Map"
            },
            {
                id: 16,
                question: "What is the WeakMap?",
                options: [
                    "A deprecated Map",
                    "A weak reference map",
                    "A small map",
                    "A Map with weakly held keys allowing garbage collection"
                ],
                correctAnswer: 3,
                explanation: "WeakMap holds weak references to keys (must be objects), allowing keys to be garbage collected when no other references exist.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap",
                resourceTitle: "WeakMap"
            },
            {
                id: 17,
                question: "What is a generator function?",
                options: [
                    "A function that can pause and resume execution",
                    "A function that generates code",
                    "A random generator",
                    "A factory function"
                ],
                correctAnswer: 0,
                explanation: "Generator functions use function* syntax and yield keyword to pause execution and return multiple values over time.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*",
                resourceTitle: "Generator Functions"
            },
            {
                id: 18,
                question: "What is the Symbol primitive?",
                options: [
                    "A unique and immutable primitive value used as object property keys",
                    "A symbolic character",
                    "A special string",
                    "A deprecated type"
                ],
                correctAnswer: 0,
                explanation: "Symbol is a unique, immutable primitive value that can be used as object property keys, guaranteeing uniqueness.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",
                resourceTitle: "Symbol"
            },
            {
                id: 19,
                question: "What is the Proxy object?",
                options: [
                    "A wrapper object",
                    "A network proxy",
                    "An object that intercepts and customizes operations on another object",
                    "A helper object"
                ],
                correctAnswer: 2,
                explanation: "Proxy allows you to create an object that wraps another object and intercepts operations like property access, assignment, enumeration, etc.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy",
                resourceTitle: "Proxy"
            },
            {
                id: 20,
                question: "What is the Reflect API?",
                options: [
                    "A mirroring system",
                    "A reflection library",
                    "A debugging API",
                    "Built-in methods for interceptable JavaScript operations"
                ],
                correctAnswer: 3,
                explanation: "Reflect provides methods for interceptable JavaScript operations, serving as a companion to Proxy with a more intuitive API.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect",
                resourceTitle: "Reflect"
            }
        ],
        advanced: [
            {
                id: 1,
                question: "What is the microtask queue?",
                options: [
                    "A small task queue",
                    "A queue for Promise callbacks and mutation observers, processed before macrotasks",
                    "A priority queue",
                    "A deprecated queue"
                ],
                correctAnswer: 1,
                explanation: "The microtask queue handles Promises and mutation observers, executing all microtasks before the next macrotask (setTimeout, setInterval).",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide",
                resourceTitle: "Microtask Queue"
            },
            {
                id: 2,
                question: "What is the difference between macrotasks and microtasks?",
                options: [
                    "Microtasks (Promises) execute before macrotasks (setTimeout) in event loop",
                    "Size difference",
                    "Speed difference",
                    "They are the same"
                ],
                correctAnswer: 0,
                explanation: "Microtasks (Promise callbacks) have higher priority and execute after current task but before next macrotask (setTimeout, I/O).",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth",
                resourceTitle: "Microtasks vs Macrotasks"
            },
            {
                id: 3,
                question: "What is tail call optimization?",
                options: [
                    "Removing tail code",
                    "Optimizing function ends",
                    "Optimizing recursive functions to prevent stack overflow",
                    "A deprecated feature"
                ],
                correctAnswer: 2,
                explanation: "Tail call optimization allows recursive functions to reuse stack frames when the recursive call is the last operation, preventing stack overflow.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#tail_call_optimization",
                resourceTitle: "Tail Call Optimization"
            },
            {
                id: 4,
                question: "What is the Temporal Dead Zone?",
                options: [
                    "A deprecated feature",
                    "A time zone library",
                    "A debugging zone",
                    "The period between entering scope and variable initialization"
                ],
                correctAnswer: 3,
                explanation: "The Temporal Dead Zone is the time between entering a scope and where let/const variables are initialized, during which they cannot be accessed.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz",
                resourceTitle: "Temporal Dead Zone"
            },
            {
                id: 5,
                question: "What is tree shaking?",
                options: [
                    "Optimizing data structures",
                    "Shaking DOM trees",
                    "Eliminating dead code from JavaScript bundles",
                    "A testing technique"
                ],
                correctAnswer: 2,
                explanation: "Tree shaking is a dead code elimination technique that removes unused exports from JavaScript bundles, reducing bundle size.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking",
                resourceTitle: "Tree Shaking"
            },
            {
                id: 6,
                question: "What is the Single Threaded Nature of JavaScript?",
                options: [
                    "JavaScript executes one task at a time in a single call stack",
                    "JavaScript uses one thread only",
                    "JavaScript is slow",
                    "JavaScript cannot multitask"
                ],
                correctAnswer: 0,
                explanation: "JavaScript has a single-threaded execution model with one call stack, but uses asynchronous callbacks and event loop for concurrency.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
                resourceTitle: "Single-Threaded JavaScript"
            },
            {
                id: 7,
                question: "What is the WeakSet?",
                options: [
                    "A weak collection",
                    "A Set of weakly held objects allowing garbage collection",
                    "A small set",
                    "A deprecated Set"
                ],
                correctAnswer: 1,
                explanation: "WeakSet holds weak references to objects (not primitives), allowing objects to be garbage collected when no other references exist.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet",
                resourceTitle: "WeakSet"
            },
            {
                id: 8,
                question: "What is the BigInt type?",
                options: [
                    "A deprecated type",
                    "A big integer library",
                    "A large number",
                    "A numeric type for representing integers larger than Number.MAX_SAFE_INTEGER"
                ],
                correctAnswer: 3,
                explanation: "BigInt is a built-in object providing arbitrary-precision integers, allowing representation of integers beyond the safe integer limit.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",
                resourceTitle: "BigInt"
            },
            {
                id: 9,
                question: "What is the Iterator protocol?",
                options: [
                    "A deprecated feature",
                    "An iteration method",
                    "A loop protocol",
                    "A protocol defining how to produce a sequence of values"
                ],
                correctAnswer: 3,
                explanation: "The iterator protocol defines a standard way to produce a sequence of values using an object with a next() method.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols",
                resourceTitle: "Iterator Protocol"
            },
            {
                id: 10,
                question: "What is the Iterable protocol?",
                options: [
                    "A protocol allowing objects to define iteration behavior",
                    "An iteration specification",
                    "A loop standard",
                    "A deprecated feature"
                ],
                correctAnswer: 0,
                explanation: "The iterable protocol allows objects to define their iteration behavior, making them usable in for...of loops via Symbol.iterator.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol",
                resourceTitle: "Iterable Protocol"
            },
            {
                id: 11,
                question: "What is coercion in JavaScript?",
                options: [
                    "Automatic type conversion between different data types",
                    "Forcing values",
                    "Type checking",
                    "Value validation"
                ],
                correctAnswer: 0,
                explanation: "Type coercion is the automatic or implicit conversion of values from one data type to another, like string to number.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion",
                resourceTitle: "Type Coercion"
            },
            {
                id: 12,
                question: "What is the Optional Chaining operator (?.)? ",
                options: [
                    "Safely accesses nested properties without errors if reference is null/undefined",
                    "A question mark operator",
                    "An optional parameter",
                    "A deprecated operator"
                ],
                correctAnswer: 0,
                explanation: "Optional chaining (?.) allows reading deeply nested property values without checking if each reference is valid, returning undefined if any reference is nullish.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",
                resourceTitle: "Optional Chaining"
            },
            {
                id: 13,
                question: "What is the Nullish Coalescing operator (??)?",
                options: [
                    "Returns right operand when left is null or undefined, not for other falsy values",
                    "A null check operator",
                    "An OR operator",
                    "A deprecated operator"
                ],
                correctAnswer: 0,
                explanation: "Nullish coalescing (??) returns the right operand only when the left is null or undefined, unlike || which triggers on all falsy values.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing",
                resourceTitle: "Nullish Coalescing"
            },
            {
                id: 14,
                question: "What is the Purpose of Object.freeze()?",
                options: [
                    "Freezes JavaScript execution",
                    "Makes an object immutable, preventing additions, deletions, and modifications",
                    "Cools down objects",
                    "Saves object state"
                ],
                correctAnswer: 1,
                explanation: "Object.freeze() makes an object immutable by preventing new properties, removing existing properties, and changing existing values (shallow freeze).",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze",
                resourceTitle: "Object.freeze()"
            },
            {
                id: 15,
                question: "What is Object.seal()?",
                options: [
                    "Saves objects",
                    "Seals objects completely",
                    "Locks objects",
                    "Prevents adding/removing properties but allows modifying existing ones"
                ],
                correctAnswer: 3,
                explanation: "Object.seal() prevents adding or removing properties from an object but allows modification of existing property values.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal",
                resourceTitle: "Object.seal()"
            },
            {
                id: 16,
                question: "What are JavaScript decorators?",
                options: [
                    "Deprecated features",
                    "Design patterns",
                    "Styling functions",
                    "Functions that modify classes and class members (experimental feature)"
                ],
                correctAnswer: 3,
                explanation: "Decorators are a stage 3 proposal for JavaScript that allow annotating and modifying classes and properties at design time.",
                resourceLink: "https://github.com/tc39/proposal-decorators",
                resourceTitle: "Decorators Proposal"
            },
            {
                id: 17,
                question: "What is the difference between Function Declaration and Function Expression?",
                options: [
                    "Declarations are hoisted, expressions are not; declarations require names",
                    "They are the same",
                    "Expressions are faster",
                    "Declarations are deprecated"
                ],
                correctAnswer: 0,
                explanation: "Function declarations are hoisted and must have a name, while function expressions are not hoisted and can be anonymous.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function",
                resourceTitle: "Function Expression vs Declaration"
            },
            {
                id: 18,
                question: "What is the Module Federation?",
                options: [
                    "A Webpack feature for sharing code between separate builds",
                    "A module import system",
                    "A federation protocol",
                    "A deprecated feature"
                ],
                correctAnswer: 0,
                explanation: "Module Federation allows loading code dynamically from other builds at runtime, enabling micro-frontend architectures.",
                resourceLink: "https://webpack.js.org/concepts/module-federation/",
                resourceTitle: "Module Federation"
            },
            {
                id: 19,
                question: "What is the Atomics object?",
                options: [
                    "Small operations",
                    "Atomic data structures",
                    "Provides atomic operations for SharedArrayBuffer",
                    "A deprecated object"
                ],
                correctAnswer: 2,
                explanation: "Atomics provides atomic operations (load, store, add, etc.) on SharedArrayBuffer for safe concurrent access in multi-threaded environments.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics",
                resourceTitle: "Atomics"
            },
            {
                id: 20,
                question: "What is the FinalizationRegistry?",
                options: [
                    "Executes callbacks when objects are garbage collected",
                    "A finalization system",
                    "A registry for finals",
                    "A deprecated feature"
                ],
                correctAnswer: 0,
                explanation: "FinalizationRegistry allows registering callbacks to be invoked after objects are garbage collected, useful for cleanup operations.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry",
                resourceTitle: "FinalizationRegistry"
            }
        ]
    },
    typescript: {
        basics: [
            {
                id: 1,
                question: "What does enabling 'strict: true' in tsconfig.json do?",
                options: [
                    "Makes compilation slower",
                    "Only enables strict null checks",
                    "Enables all strict type checking options",
                    "Disables type inference"
                ],
                correctAnswer: 2,
                explanation: "The 'strict' flag enables a family of strict type checking options including strictNullChecks, strictFunctionTypes, strictBindCallApply, and more, providing maximum type safety.",
                resourceLink: "https://www.typescriptlang.org/tsconfig#strict",
                resourceTitle: "TypeScript Strict Mode"
            },
            {
                id: 2,
                question: "What is the main difference between an Interface and a Type Alias?",
                options: [
                    "Interfaces cannot describe primitives",
                    "Type Aliases are faster than Interfaces",
                    "Interfaces can be extended and merged, Type Aliases cannot be merged",
                    "They are exactly the same"
                ],
                correctAnswer: 2,
                explanation: "Interfaces support declaration merging and can be extended, while Type Aliases are more flexible for unions and intersections but cannot be re-declared.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces",
                resourceTitle: "Interfaces vs Type Aliases"
            },
            {
                id: 3,
                question: "What is a Union Type in TypeScript?",
                options: [
                    "A type that can be one of several types",
                    "A type that combines multiple types",
                    "A type for mathematical unions",
                    "A type for database unions"
                ],
                correctAnswer: 0,
                explanation: "Union types allow a value to be one of several types, denoted with the | operator. For example, string | number means a value can be either a string or a number.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types",
                resourceTitle: "Union Types"
            },
            {
                id: 4,
                question: "What is an Intersection Type?",
                options: [
                    "A type for database joins",
                    "A type that can be one of several types",
                    "A type for set intersections",
                    "A type that combines multiple types into one"
                ],
                correctAnswer: 3,
                explanation: "Intersection types combine multiple types into one using the & operator, meaning the resulting type has all properties of all combined types.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types",
                resourceTitle: "Intersection Types"
            },
            {
                id: 5,
                question: "What are Literal Types?",
                options: [
                    "Types for literal objects",
                    "Types for string literals only",
                    "Types that represent exact values, not just general types",
                    "Types that are always strings"
                ],
                correctAnswer: 2,
                explanation: "Literal types allow you to specify exact values a variable can have, such as 'success' | 'error' or 1 | 2 | 3, providing more precise type constraints.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types",
                resourceTitle: "Literal Types"
            },
            {
                id: 6,
                question: "What does the 'typeof' type guard check?",
                options: [
                    "The TypeScript type",
                    "The class type of an object",
                    "Whether a property exists",
                    "The primitive type of a value at runtime"
                ],
                correctAnswer: 3,
                explanation: "The typeof operator checks primitive types at runtime, returning strings like 'string', 'number', 'boolean', 'undefined', etc.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards",
                resourceTitle: "typeof Type Guards"
            },
            {
                id: 7,
                question: "What does the 'in' operator check in TypeScript?",
                options: [
                    "Whether a value is in an array",
                    "Whether a property exists in an object",
                    "Whether a type is included",
                    "Whether a variable is defined"
                ],
                correctAnswer: 1,
                explanation: "The 'in' operator checks if a property name exists in an object at runtime, commonly used for type narrowing with discriminated unions.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing",
                resourceTitle: "in Operator Narrowing"
            },
            {
                id: 8,
                question: "What does the 'instanceof' operator check?",
                options: [
                    "Whether a property exists",
                    "Whether a value is of a primitive type",
                    "Whether an object is an instance of a specific class",
                    "Whether a type is defined"
                ],
                correctAnswer: 2,
                explanation: "The instanceof operator checks if an object is an instance of a particular class or constructor function, useful for narrowing class types.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing",
                resourceTitle: "instanceof Narrowing"
            },
            {
                id: 9,
                question: "According to Type Safety First philosophy, where should explicit types be required?",
                options: [
                    "Only in simple variables",
                    "All public contracts: API responses, function signatures, DTOs",
                    "Nowhere, always use inference",
                    "Only in complex types"
                ],
                correctAnswer: 1,
                explanation: "Explicit types are mandatory for public contracts (API responses, function signatures, DTOs) to enforce contract stability and readability, while inference can be used for local variables.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables",
                resourceTitle: "Type Annotations"
            },
            {
                id: 10,
                question: "Why should the 'any' type be eliminated?",
                options: [
                    "It's deprecated in newer versions",
                    "It makes code slower",
                    "It causes compilation errors",
                    "It bypasses type checking and defeats the purpose of TypeScript"
                ],
                correctAnswer: 3,
                explanation: "The 'any' type disables type checking, allowing any operations on the value, which defeats TypeScript's type safety guarantees and should be strictly avoided.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any",
                resourceTitle: "Avoiding any"
            },
            {
                id: 11,
                question: "What is type inference in TypeScript?",
                options: [
                    "A manual type declaration",
                    "TypeScript's ability to automatically determine types based on values",
                    "A runtime type check",
                    "A type guard"
                ],
                correctAnswer: 1,
                explanation: "Type inference allows TypeScript to automatically determine the type of a variable based on its initial value, reducing verbosity while maintaining type safety.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/type-inference.html",
                resourceTitle: "Type Inference"
            },
            {
                id: 12,
                question: "When should type inference be used?",
                options: [
                    "For localized internal variables where the type is obvious",
                    "For all variables always",
                    "For API responses",
                    "For function parameters"
                ],
                correctAnswer: 0,
                explanation: "Type inference should be used judiciously for internal variables where the type is clear from context, while public contracts require explicit types.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/type-inference.html",
                resourceTitle: "When to Use Inference"
            },
            {
                id: 13,
                question: "What is a Type Predicate in TypeScript?",
                options: [
                    "A type validation library",
                    "A boolean function",
                    "A function return type that narrows the type of a parameter",
                    "A runtime check"
                ],
                correctAnswer: 2,
                explanation: "Type predicates are special return types using 'parameterName is Type' syntax that tell TypeScript how to narrow types based on a function's return value.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",
                resourceTitle: "Type Predicates"
            },
            {
                id: 14,
                question: "What does a custom type predicate function return?",
                options: [
                    "The narrowed type directly",
                    "A boolean value that narrows the type when true",
                    "A string describing the type",
                    "A type object"
                ],
                correctAnswer: 1,
                explanation: "Custom type predicate functions return a boolean, and when the return is true, TypeScript narrows the type of the checked parameter in subsequent code.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",
                resourceTitle: "Custom Type Predicates"
            },
            {
                id: 15,
                question: "What is TypeScript's tsconfig.json used for?",
                options: [
                    "Managing package dependencies",
                    "Defining runtime configurations",
                    "Configuring the TypeScript compiler options and project structure",
                    "Setting up testing frameworks"
                ],
                correctAnswer: 2,
                explanation: "The tsconfig.json file specifies compiler options and project settings that control how TypeScript compiles your code.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",
                resourceTitle: "tsconfig.json"
            },
            {
                id: 16,
                question: "What is the purpose of explicit type annotations for function parameters?",
                options: [
                    "To enable runtime validation",
                    "To make functions slower",
                    "To enforce type contracts and document expected input types",
                    "To allow dynamic typing"
                ],
                correctAnswer: 2,
                explanation: "Explicit type annotations on function parameters create clear contracts about what types are expected, improving code documentation and catching type errors at compile time.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions",
                resourceTitle: "Function Type Annotations"
            },
            {
                id: 17,
                question: "What is type narrowing?",
                options: [
                    "Removing optional properties",
                    "Making types smaller in size",
                    "The process of refining a general type to a more specific type",
                    "Converting to primitive types"
                ],
                correctAnswer: 2,
                explanation: "Type narrowing is when TypeScript refines a broader type to a more specific type based on runtime checks like type guards, making code safer and more precise.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html",
                resourceTitle: "Type Narrowing"
            },
            {
                id: 18,
                question: "What file extension should TypeScript files use?",
                options: [
                    "Only .ts for all files",
                    ".ts for regular files, .tsx for files with JSX",
                    "Only .tsx for all files",
                    ".typescript"
                ],
                correctAnswer: 1,
                explanation: "TypeScript files use .ts extension, while files containing JSX syntax use .tsx extension to enable proper parsing and compilation.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/react.html",
                resourceTitle: "TypeScript with React"
            },
            {
                id: 19,
                question: "What is the benefit of strict null checks?",
                options: [
                    "Prevents null and undefined from being assignable to other types",
                    "Makes all variables nullable",
                    "Disables null values",
                    "Converts nulls to undefined"
                ],
                correctAnswer: 0,
                explanation: "Strict null checks prevent null and undefined from being valid values for most types, forcing explicit handling of nullable cases and preventing common runtime errors.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined",
                resourceTitle: "Strict Null Checks"
            },
            {
                id: 20,
                question: "Why is defining types explicitly at public boundaries important?",
                options: [
                    "Enables dynamic typing",
                    "Makes code compile faster",
                    "Reduces file size",
                    "Ensures system integrity, clarity, and stable contracts"
                ],
                correctAnswer: 3,
                explanation: "Explicit types at public boundaries (APIs, function signatures) create stable contracts, improve code documentation, and catch integration errors early, essential for maintainable systems.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html",
                resourceTitle: "Type Declaration Best Practices"
            }
        ],
        intermediate: [
            {
                id: 1,
                question: "What are Generic constraints in TypeScript?",
                options: [
                    "Constraints on variable names",
                    "Limitations on what types can be passed to a generic parameter",
                    "Limits on function arguments",
                    "Restrictions on class inheritance"
                ],
                correctAnswer: 1,
                explanation: "Generic constraints use the 'extends' keyword to limit what types a generic parameter can accept, ensuring the generic type has certain properties or capabilities.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints",
                resourceTitle: "Generic Constraints"
            },
            {
                id: 2,
                question: "What does the 'keyof' operator do?",
                options: [
                    "Creates a union type of all property keys of a given type",
                    "Checks if a key exists in an object",
                    "Gets the value of a key",
                    "Defines a new key type"
                ],
                correctAnswer: 0,
                explanation: "The keyof operator takes an object type and produces a string or numeric literal union of its keys, useful for creating type-safe property access patterns.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/keyof-types.html",
                resourceTitle: "keyof Operator"
            },
            {
                id: 3,
                question: "What is the 'infer' keyword used for in conditional types?",
                options: [
                    "To enable type inference everywhere",
                    "To infer variable names",
                    "To infer and capture types within conditional type expressions",
                    "To check types at runtime"
                ],
                correctAnswer: 2,
                explanation: "The 'infer' keyword allows you to capture and use types from within conditional type expressions, enabling sophisticated type transformations and extractions.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types",
                resourceTitle: "infer in Conditional Types"
            },
            {
                id: 4,
                question: "What does the Partial<T> utility type do?",
                options: [
                    "Makes properties readonly",
                    "Makes some properties optional",
                    "Removes properties from type T",
                    "Makes all properties of type T optional"
                ],
                correctAnswer: 3,
                explanation: "Partial<T> creates a new type with all properties of T set to optional, useful for update operations where you might only provide some fields.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype",
                resourceTitle: "Partial Utility Type"
            },
            {
                id: 5,
                question: "What does Required<T> do?",
                options: [
                    "Makes some properties required",
                    "Makes all properties of type T required",
                    "Adds new required properties",
                    "Removes optional properties"
                ],
                correctAnswer: 1,
                explanation: "Required<T> creates a new type with all properties of T set to required, opposite of Partial<T>, useful when you need all fields to be present.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype",
                resourceTitle: "Required Utility Type"
            },
            {
                id: 6,
                question: "What does Readonly<T> do?",
                options: [
                    "Makes all properties of type T immutable",
                    "Creates read-only files",
                    "Prevents variable reassignment",
                    "Makes functions pure"
                ],
                correctAnswer: 0,
                explanation: "Readonly<T> creates a new type where all properties of T are readonly, preventing modification after creation, useful for immutable data structures.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype",
                resourceTitle: "Readonly Utility Type"
            },
            {
                id: 7,
                question: "What does Pick<T, K> do?",
                options: [
                    "Creates a type by picking specific properties K from type T",
                    "Picks random properties",
                    "Removes properties from T",
                    "Creates array from properties"
                ],
                correctAnswer: 0,
                explanation: "Pick<T, K> constructs a type by selecting a set of properties K (string literal or union of string literals) from type T, useful for creating subset types.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys",
                resourceTitle: "Pick Utility Type"
            },
            {
                id: 8,
                question: "What does Omit<T, K> do?",
                options: [
                    "Creates empty type",
                    "Omits type checking",
                    "Removes all properties",
                    "Creates a type by removing specific properties K from type T"
                ],
                correctAnswer: 3,
                explanation: "Omit<T, K> constructs a type by picking all properties from T and removing properties K, opposite of Pick, useful for excluding certain fields.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys",
                resourceTitle: "Omit Utility Type"
            },
            {
                id: 9,
                question: "What does Exclude<T, U> do?",
                options: [
                    "Excludes types from union T that are assignable to union U",
                    "Excludes properties from objects",
                    "Removes array elements",
                    "Filters objects"
                ],
                correctAnswer: 0,
                explanation: "Exclude<T, U> creates a type by excluding from T all types that are assignable to U, useful for filtering out specific types from a union.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers",
                resourceTitle: "Exclude Utility Type"
            },
            {
                id: 10,
                question: "What does Extract<T, U> do?",
                options: [
                    "Gets array elements",
                    "Extracts properties from objects",
                    "Extracts types from union T that are assignable to union U",
                    "Copies objects"
                ],
                correctAnswer: 2,
                explanation: "Extract<T, U> creates a type by extracting from T all types that are assignable to U, opposite of Exclude, useful for filtering specific types from a union.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union",
                resourceTitle: "Extract Utility Type"
            },
            {
                id: 11,
                question: "Why is runtime validation necessary in TypeScript APIs?",
                options: [
                    "TypeScript types are erased at runtime so validation ensures data correctness",
                    "To improve performance",
                    "To enable dynamic typing",
                    "TypeScript requires it"
                ],
                correctAnswer: 0,
                explanation: "TypeScript types exist only at compile time and are erased during compilation. Runtime validation ensures that data received from external sources matches expected types.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
                resourceTitle: "TypeScript Runtime Behavior"
            },
            {
                id: 12,
                question: "What is the dual role of a Zod schema?",
                options: [
                    "Compilation and execution",
                    "Types and documentation",
                    "Validation and testing",
                    "Defines compile-time types and provides runtime validation"
                ],
                correctAnswer: 3,
                explanation: "Zod schemas serve as both the source of TypeScript types (compile-time) and runtime validation logic, ensuring type parity across the entire data flow.",
                resourceLink: "https://zod.dev",
                resourceTitle: "Zod Documentation"
            },
            {
                id: 13,
                question: "What is a DTO (Data Transfer Object)?",
                options: [
                    "A type that defines the structure of data transferred between layers",
                    "A database table object",
                    "A component prop type",
                    "A test object"
                ],
                correctAnswer: 0,
                explanation: "DTOs define the exact structure of data being transferred between different parts of an application, ensuring type safety at API boundaries.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types",
                resourceTitle: "Object Types in TypeScript"
            },
            {
                id: 14,
                question: "What are Generics in TypeScript?",
                options: [
                    "Type parameters that make code reusable across different types",
                    "General-purpose functions",
                    "Generic variables",
                    "Default types"
                ],
                correctAnswer: 0,
                explanation: "Generics allow you to write reusable code that works with multiple types while maintaining type safety, using type parameters like <T>.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html",
                resourceTitle: "Generics"
            },
            {
                id: 15,
                question: "How do you use generics with constraints?",
                options: [
                    "Using the 'extends' keyword: <T extends SomeType>",
                    "Using the 'implements' keyword",
                    "Using the 'restricts' keyword",
                    "Generics cannot be constrained"
                ],
                correctAnswer: 0,
                explanation: "Generic constraints use 'extends' to ensure the generic type parameter has certain properties or capabilities, like <T extends { id: number }>.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints",
                resourceTitle: "Generic Constraints"
            },
            {
                id: 16,
                question: "What is type inference with generics?",
                options: [
                    "TypeScript automatically determines generic types from arguments",
                    "Manually specifying all generic types",
                    "Runtime type checking",
                    "Dynamic generic creation"
                ],
                correctAnswer: 0,
                explanation: "TypeScript can infer generic type parameters from the arguments passed to a function, reducing the need to explicitly specify them.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types",
                resourceTitle: "Generic Type Inference"
            },
            {
                id: 17,
                question: "What is conditional type syntax in TypeScript?",
                options: [
                    "if-else for types",
                    "T extends U ? X : Y - chooses types based on conditions",
                    "Switch statement for types",
                    "Ternary operators in values"
                ],
                correctAnswer: 1,
                explanation: "Conditional types use the ternary-like syntax 'T extends U ? X : Y' to select types based on type conditions, enabling advanced type transformations.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html",
                resourceTitle: "Conditional Types"
            },
            {
                id: 18,
                question: "What is mapped types in TypeScript?",
                options: [
                    "Types that transform properties of existing types",
                    "Types for map data structures",
                    "Types for array mapping",
                    "Geographic mapping types"
                ],
                correctAnswer: 0,
                explanation: "Mapped types create new types by transforming properties of existing types, using syntax like { [K in keyof T]: SomeType }, foundational to utility types.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html",
                resourceTitle: "Mapped Types"
            },
            {
                id: 19,
                question: "Why use utility types instead of manual type definitions?",
                options: [
                    "They are required by TypeScript",
                    "They are faster to compile",
                    "They enable complex transformations without duplication and maintain type relationships",
                    "They work at runtime"
                ],
                correctAnswer: 2,
                explanation: "Utility types provide reusable type transformations that maintain relationships with source types, avoiding manual duplication and reducing errors.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/utility-types.html",
                resourceTitle: "Utility Types"
            },
            {
                id: 20,
                question: "What is the purpose of discriminated unions?",
                options: [
                    "To create unique types",
                    "To separate union types",
                    "To discriminate against types",
                    "To enable type-safe handling of different variants using a common discriminant property"
                ],
                correctAnswer: 3,
                explanation: "Discriminated unions use a common property (discriminant) to distinguish between variants, enabling exhaustive type checking and safe narrowing.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions",
                resourceTitle: "Discriminated Unions"
            }
        ],
        advanced: [
            {
                id: 1,
                question: "What is the 'composite' compiler option used for?",
                options: [
                    "Enables incremental compilation for project references",
                    "Creates composite types",
                    "Combines multiple files",
                    "Optimizes bundle size"
                ],
                correctAnswer: 0,
                explanation: "The 'composite' option enables TypeScript Project References, allowing incremental compilation by building only changed modules and their dependencies.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/project-references.html",
                resourceTitle: "Project References"
            },
            {
                id: 2,
                question: "Why is 'declaration: true' required in monorepos?",
                options: [
                    "Generates .d.ts files needed for type information across module boundaries",
                    "Declares all variables explicitly",
                    "Creates documentation",
                    "Enables strict mode"
                ],
                correctAnswer: 0,
                explanation: "The 'declaration' option generates declaration files (.d.ts) that contain type information, essential for sharing types between packages in a monorepo.",
                resourceLink: "https://www.typescriptlang.org/tsconfig#declaration",
                resourceTitle: "declaration Option"
            },
            {
                id: 3,
                question: "What does 'declarationMap: true' enable?",
                options: [
                    "Enables declaration debugging",
                    "Creates source maps for declarations",
                    "Maps declarations to documentation",
                    "Allows code navigation between source files and declaration files"
                ],
                correctAnswer: 3,
                explanation: "declarationMap generates .d.ts.map files that allow IDEs to jump from declaration files back to original source files for better developer experience.",
                resourceLink: "https://www.typescriptlang.org/tsconfig#declarationMap",
                resourceTitle: "declarationMap Option"
            },
            {
                id: 4,
                question: "What is the purpose of 'incremental: true'?",
                options: [
                    "Caches compilation results to speed up subsequent builds",
                    "Increases compilation speed always",
                    "Compiles files one at a time",
                    "Enables progressive typing"
                ],
                correctAnswer: 0,
                explanation: "The 'incremental' option stores compilation information to disk, dramatically reducing build times by only recompiling changed files and their dependencies.",
                resourceLink: "https:// www.typescriptlang.org/tsconfig#incremental",
                resourceTitle: "incremental Option"
            },
            {
                id: 5,
                question: "What are TypeScript Project References?",
                options: [
                    "References to external projects",
                    "A way to structure TypeScript programs into smaller, composable pieces",
                    "Documentation references",
                    "Type references"
                ],
                correctAnswer: 1,
                explanation: "Project References allow you to structure your TypeScript codebase into smaller projects with clear dependencies, enabling better build performance and organization.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/project-references.html",
                resourceTitle: "Project References"
            },
            {
                id: 6,
                question: "What is the workspace:* pattern in monorepos?",
                options: [
                    "A glob pattern for files",
                    "A wildcard for all workspaces",
                    "A package manager convention for referencing local workspace packages",
                    "A TypeScript compiler pattern"
                ],
                correctAnswer: 2,
                explanation: "The workspace:* (or workspace:^) pattern is used by package managers like pnpm to reference packages within the same monorepo workspace, ensuring version consistency.",
                resourceLink: "https://pnpm.io/workspaces",
                resourceTitle: "PNPM Workspaces"
            },
            {
                id: 7,
                question: "Why establish a base tsconfig.json in monorepos?",
                options: [
                    "To enable debugging",
                    "To reduce file size",
                    "To ensure consistent compiler options across all packages",
                    "To create documentation"
                ],
                correctAnswer: 2,
                explanation: "A base tsconfig.json that all packages extend ensures consistent type checking rules and compilation settings across the entire monorepo, preventing configuration drift.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#configuration-inheritance-with-extends",
                resourceTitle: "tsconfig Inheritance"
            },
            {
                id: 8,
                question: "What is the benefit of shared type libraries (libs/) in monorepos?",
                options: [
                    "Provides single source of truth for types used across multiple packages",
                    "Reduces compilation time",
                    "Enables dynamic typing",
                    "Creates documentation"
                ],
                correctAnswer: 0,
                explanation: "Shared type libraries centralize common types (like DTOs, interfaces) used across frontend and backend, ensuring consistency and reducing duplication.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/project-references.html",
                resourceTitle: "Organizing Project References"
            },
            {
                id: 9,
                question: "How do TypeScript Project References improve build times?",
                options: [
                    "By using faster compilers",
                    "By enabling incremental compilation of only changed projects and dependencies",
                    "By reducing type checking",
                    "By caching all files"
                ],
                correctAnswer: 1,
                explanation: "Project References combined with composite and incremental options allow TypeScript to build only the projects that changed and their dependents, dramatically reducing build times in large codebases.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/project-references.html#build-mode-for-typescript",
                resourceTitle: "Build Mode Performance"
            },
            {
                id: 10,
                question: "What is the purpose of the tsc --build (or tsc -b) command?",
                options: [
                    "Builds TypeScript projects respecting project references for incremental compilation",
                    "Builds only changed files",
                    "Creates production builds",
                    "Builds and runs the project"
                ],
                correctAnswer: 0,
                explanation: "The --build flag tells tsc to use Project References mode, building projects in the correct order with incremental compilation support.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/project-references.html#build-mode-for-typescript",
                resourceTitle: "Build Mode"
            },
            {
                id: 11,
                question: "Why is runtime validation critical for API boundaries?",
                options: [
                    "It's required by TypeScript",
                    "It improves performance",
                    "External data can't be trusted and TypeScript types are erased at runtime",
                    "It enables dynamic typing"
                ],
                correctAnswer: 2,
                explanation: "Runtime validation ensures that external data (from users, APIs, databases) actually matches expected types, as TypeScript types don't exist at runtime and can't protect against malformed data.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
                resourceTitle: "Understanding Runtime Validation Need"
            },
            {
                id: 12,
                question: "What does end-to-end type parity mean?",
                options: [
                    "Compile-time and runtime types match, ensuring data correctness throughout the stack",
                    "Frontend and backend use same types",
                    "All types are exactly equal",
                    "Types work in all environments"
                ],
                correctAnswer: 0,
                explanation: "End-to-end type parity means the types defined at compile time match what's validated at runtime, creating a complete type safety chain from client to server to database.",
                resourceLink: "https://zod.dev",
                resourceTitle: "Runtime Type Safety with Zod"
            },
            {
                id: 13,
                question: "What is the relationship between Zod schemas and TypeScript types?",
                options: [
                    "They are completely separate",
                    "Zod schemas can be converted to TypeScript types using z.infer<>",
                    "Zod replaces TypeScript types",
                    "TypeScript types are converted to Zod"
                ],
                correctAnswer: 1,
                explanation: "Zod schemas define the validation logic, and TypeScript types can be extracted from schemas using z.infer<typeof schema>, ensuring compile-time and runtime types stay synchronized.",
                resourceLink: "https://zod.dev/?id=type-inference",
                resourceTitle: "Zod Type Inference"
            },
            {
                id: 14,
                question: "Why use pnpm for monorepos?",
                options: [
                    "It's the only option",
                    "Efficient disk space usage, fast installs, and built-in workspace support",
                    "It's faster than all alternatives",
                    "It's required by TypeScript"
                ],
                correctAnswer: 1,
                explanation: "pnpm uses a content-addressable store and hard links to save disk space, provides fast installations, and has excellent built-in workspace support for monorepos.",
                resourceLink: "https://pnpm.io/workspaces",
                resourceTitle: "PNPM Workspaces"
            },
            {
                id: 15,
                question: "What is the libs/ directory pattern in monorepos?",
                options: [
                    "A documentation folder",
                    "A directory for third-party libraries",
                    "A temporary build directory",
                    "A centralized location for shared types and utilities used across packages"
                ],
                correctAnswer: 3,
                explanation: "The libs/ directory typically contains shared packages (like common types, utilities) that are used by multiple other packages in the monorepo, promoting code reuse.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/project-references.html",
                resourceTitle: "Structuring Projects"
            },
            {
                id: 16,
                question: "How does TypeScript's type system prevent runtime errors?",
                options: [
                    "By adding runtime checks automatically",
                    "By catching type mismatches at compile time before code runs",
                    "By preventing all errors",
                    "By running tests automatically"
                ],
                correctAnswer: 1,
                explanation: "TypeScript's static type system analyzes code at compile time to find type errors before execution, though runtime validation is still needed for external data.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/2/basic-types.html",
                resourceTitle: "TypeScript Type System"
            },
            {
                id: 17,
                question: "What is the purpose of having separate dev and prod tsconfig files?",
                options: [
                    "To support different TypeScript versions",
                    "Different compiler options for development (looser) and production (stricter)",
                    "To enable different features",
                    "To separate test configurations"
                ],
                correctAnswer: 1,
                explanation: "Separate configs allow looser settings during development for faster iteration while enforcing strict settings for production to ensure code quality.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",
                resourceTitle: "Multiple tsconfig Files"
            },
            {
                id: 18,
                question: "Why is type synchronization important in full-stack applications?",
                options: [
                    "Ensures frontend and backend agree on data structures, preventing integration errors",
                    "Makes compilation faster",
                    "Reduces code size",
                    "Enables code sharing"
                ],
                correctAnswer: 0,
                explanation: "Type synchronization between frontend and backend ensures both sides have the same understanding of data structures, catching integration issues at compile time instead of runtime.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/project-references.html",
                resourceTitle: "Sharing Types Across Projects"
            },
            {
                id: 19,
                question: "What is the role of .tsbuildinfo files?",
                options: [
                    "Store type declarations",
                    "Configure TypeScript settings",
                    "Contain build outputs",
                    "Store incremental compilation state to speed up subsequent builds"
                ],
                correctAnswer: 3,
                explanation: ".tsbuildinfo files store information about the previous compilation, allowing TypeScript to perform incremental builds by only recompiling what changed.",
                resourceLink: "https://www.typescriptlang.org/tsconfig#incremental",
                resourceTitle: "Incremental Compilation"
            },
            {
                id: 20,
                question: "Why does combining composite and incremental options optimize Developer Experience?",
                options: [
                    "Reduces errors",
                    "Makes coding easier",
                    "Dramatically reduces compilation times as the codebase scales with multiple packages",
                    "Improves type inference"
                ],
                correctAnswer: 2,
                explanation: "Together, composite enables project references and incremental enables caching, resulting in massive build time improvements in large monorepos by only rebuilding changed dependencies.",
                resourceLink: "https://www.typescriptlang.org/docs/handbook/project-references.html#build-mode-for-typescript",
                resourceTitle: "Optimizing Builds"
            }
        ]
    },
    nextjs: {
        basics: [
            {
                id: 1,
                question: "What is Next.js?",
                options: [
                    "A CSS framework",
                    "A state management library",
                    "A React framework for building full-stack web applications",
                    "A database ORM"
                ],
                correctAnswer: 2,
                explanation: "Next.js is a React framework that provides building blocks to create web applications with features like routing, rendering, data fetching, and more.",
                resourceLink: "https://nextjs.org/docs",
                resourceTitle: "What is Next.js"
            },
            {
                id: 2,
                question: "What command creates a new Next.js application?",
                options: [
                    "next new app",
                    "npm create-next",
                    "npx create-next-app@latest",
                    "npx next init"
                ],
                correctAnswer: 2,
                explanation: "npx create-next-app@latest is the official command to bootstrap a new Next.js application with all necessary configuration.",
                resourceLink: "https://nextjs.org/docs/getting-started/installation",
                resourceTitle: "Creating a Next.js App"
            },
            {
                id: 3,
                question: "What is the app directory in Next.js 13+?",
                options: [
                    "A deprecated folder structure",
                    "An application configuration folder",
                    "The new App Router for building applications with React Server Components",
                    "The build output directory"
                ],
                correctAnswer: 2,
                explanation: "The app directory introduces the new App Router with support for Server Components, streaming, and nested layouts.",
                resourceLink: "https://nextjs.org/docs/app",
                resourceTitle: "App Router"
            },
            {
                id: 4,
                question: "How do you create a new page in the app directory?",
                options: [
                    "Use next-page generator",
                    "Create a component in pages/",
                    "Add a route config",
                    "Create a page.tsx file in a folder"
                ],
                correctAnswer: 3,
                explanation: "In the app directory, pages are created by adding a page.tsx file inside a folder, where the folder name becomes the route.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts",
                resourceTitle: " Pages and Layouts"
            },
            {
                id: 5,
                question: "What is layout.tsx used for?",
                options: [
                    "Layout components library",
                    "Page layouts only",
                    "Styling configuration",
                    "Shared UI that wraps multiple pages and persists across navigation"
                ],
                correctAnswer: 3,
                explanation: "layout.tsx creates shared layouts that wrap child pages/layouts, maintain state across navigation, and can be nested.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts",
                resourceTitle: "Layouts"
            },
            {
                id: 6,
                question: "What are Server Components in Next.js?",
                options: [
                    "Database components",
                    "Backend API components",
                    "Server-side scripts",
                    "Components that render on the server by default"
                ],
                correctAnswer: 3,
                explanation: "Server Components are React components that render on the server, allowing data fetching and secure operations without sending JavaScript to the client.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/rendering/server-components",
                resourceTitle: "Server Components"
            },
            {
                id: 7,
                question: "How do you make a component a Client Component?",
                options: [
                    "Import from 'next/client'",
                    "Add 'use client' directive at the top",
                    "Use client={true} prop",
                    "Place in client/ folder"
                ],
                correctAnswer: 1,
                explanation: "Adding 'use client' at the top of a file makes it and its dependencies Client Components, enabling hooks and browser APIs.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/rendering/client-components",
                resourceTitle: "Client Components"
            },
            {
                id: 8,
                question: "What is the Link component used for?",
                options: [
                    "Client-side navigation between pages",
                    "External links only",
                    "Linking CSS files",
                    "Creating hyperlinks"
                ],
                correctAnswer: 0,
                explanation: "The Link component enables client-side navigation with automatic prefetching, improving performance over standard <a> tags.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating",
                resourceTitle: "Link Component"
            },
            {
                id: 9,
                question: "What file defines route metadata like title and description?",
                options: [
                    "meta.config.js",
                    "metadata export in layout.tsx or page.tsx",
                    "head.tsx",
                    "seo.json"
                ],
                correctAnswer: 1,
                explanation: "You export a metadata object or generateMetadata function from layout/page files to define SEO metadata.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata",
                resourceTitle: "Metadata"
            },
            {
                id: 10,
                question: "What is the Image component used for?",
                options: [
                    "Automatic image optimization with lazy loading and responsive sizing",
                    "Image uploads",
                    "Image editing",
                    "SVG rendering"
                ],
                correctAnswer: 0,
                explanation: "The Image component automatically optimizes images, provides lazy loading, prevents layout shift, and serves responsive sizes.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/optimizing/images",
                resourceTitle: "Image Optimization"
            },
            {
                id: 11,
                question: "How do you create dynamic routes in app directory?",
                options: [
                    "Use square brackets in folder names: [id]",
                    "Use colon syntax: :id",
                    "Configure in routes.config",
                    "Use dynamic() function"
                ],
                correctAnswer: 0,
                explanation: "Dynamic route segments are created by wrapping folder names in square brackets, like app/blog/[slug]/page.tsx.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
                resourceTitle: "Dynamic Routes"
            },
            {
                id: 12,
                question: "What file creates a loading state?",
                options: [
                    "loading.config.ts",
                    "loader.tsx",
                    "spinner.tsx",
                    "loading.tsx"
                ],
                correctAnswer: 3,
                explanation: "loading.tsx creates instant loading states using React Suspense, shown while page content loads.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming",
                resourceTitle: "Loading UI"
            },
            {
                id: 13,
                question: "What file handles errors in a route segment?",
                options: [
                    "errorBoundary.tsx",
                    "catch.tsx",
                    "error.tsx",
                    "errors.config.ts"
                ],
                correctAnswer: 2,
                explanation: "error.tsx creates error boundaries for route segments, catching runtime errors and displaying fallback UI.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/routing/error-handling",
                resourceTitle: "Error Handling"
            },
            {
                id: 14,
                question: "What is route.tsx used for?",
                options: [
                    "Route middleware",
                    "Route configuration",
                    "Route validation",
                    "Creating API routes and custom request handlers"
                ],
                correctAnswer: 3,
                explanation: "route.tsx allows creating API endpoints with HTTP methods (GET, POST, etc.) in the app directory.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers",
                resourceTitle: "Route Handlers"
            },
            {
                id: 15,
                question: "How do you access URL parameters in Server Components?",
                options: [
                    "Using useParams() hook",
                    "Via params prop passed to page components",
                    "From window.location",
                    "Using getParams() function"
                ],
                correctAnswer: 1,
                explanation: "Server Components receive params as a prop containing dynamic route parameters.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/file-conventions/page",
                resourceTitle: "Page Props"
            },
            {
                id: 16,
                question: "What is the public directory for?",
                options: [
                    "Static assets served from the root URL",
                    "Public API routes",
                    "Published pages",
                    "User uploads"
                ],
                correctAnswer: 0,
                explanation: "The public directory stores static assets like images, fonts, and files served at the root URL (/).",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/optimizing/static-assets",
                resourceTitle: "Static Assets"
            },
            {
                id: 17,
                question: "What command runs Next.js in development mode?",
                options: [
                    "next dev",
                    "npm start",
                    "npm run dev",
                    "npm run start"
                ],
                correctAnswer: 2,
                explanation: "npm run dev starts the Next.js development server with fast refresh and hot reloading.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/next-cli#development",
                resourceTitle: "Development Mode"
            },
            {
                id: 18,
                question: "What is the purpose of next.config.js?",
                options: [
                    "Type configuration",
                    "Next version configuration",
                    "Route configuration",
                    "Configuration file for Next.js build and runtime options"
                ],
                correctAnswer: 3,
                explanation: "next.config.js allows customizing Next.js behavior including webpack, redirects, headers, and environment variables.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/next-config-js",
                resourceTitle: "next.config.js"
            },
            {
                id: 19,
                question: "What are Route Groups in Next.js?",
                options: [
                    "Folders wrapped in parentheses to organize routes without affecting URL",
                    "Grouped API routes",
                    "Route collections",
                    "Protected routes"
                ],
                correctAnswer: 0,
                explanation: "Route Groups using (folder) syntax organize routes logically without adding segments to the URL path.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/routing/route-groups",
                resourceTitle: "Route Groups"
            },
            {
                id: 20,
                question: "What is the not-found.tsx file for?",
                options: [
                    "Missing file handler",
                    "Not found errors handler",
                    "Custom 404 page for when routes don't exist",
                    "Search functionality"
                ],
                correctAnswer: 2,
                explanation: "not-found.tsx creates custom UI shown when a route segment doesn't exist or notFound() is called.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/file-conventions/not-found",
                resourceTitle: "not-found.tsx"
            }
        ],
        intermediate: [
            {
                id: 1,
                question: "What is getServerSideProps?",
                options: [
                    "A deprecated function",
                    "A Server Component function",
                    "An API route helper",
                    "A Pages Router function for server-side rendering on each request"
                ],
                correctAnswer: 3,
                explanation: "getServerSideProps (Pages Router) runs on every request to fetch data on the server before rendering the page.",
                resourceLink: "https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props",
                resourceTitle: "getServerSideProps"
            },
            {
                id: 2,
                question: "What is getStaticProps?",
                options: [
                    "Defines static routes",
                    "Gets static files",
                    "Fetches data at build time for static generation",
                    "Generates static types"
                ],
                correctAnswer: 2,
                explanation: "getStaticProps (Pages Router) fetches data at build time, generating static HTML that can be revalidated.",
                resourceLink: "https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props",
                resourceTitle: "getStaticProps"
            },
            {
                id: 3,
                question: "What is Incremental Static Regeneration (ISR)?",
                options: [
                    "Updating static pages after build time without rebuilding the entire site",
                    "Incremental builds",
                    "Static site rebuilding",
                    "Site regeneration"
                ],
                correctAnswer: 0,
                explanation: "ISR allows updating static pages after deployment using revalidate, combining benefits of static and dynamic rendering.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data",
                resourceTitle: "Incremental Static Regeneration"
            },
            {
                id: 4,
                question: "How do you revalidate data in App Router?",
                options: [
                    "Using ISR config",
                    "Using revalidate option in fetch or revalidatePath/revalidateTag",
                    "Calling invalidate()",
                    "Setting cache headers"
                ],
                correctAnswer: 1,
                explanation: "In App Router, use revalidate in fetch options, revalidatePath() for on-demand revalidation, or revalidateTag() for tagged cache.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating",
                resourceTitle: "Data Revalidation"
            },
            {
                id: 5,
                question: "What is Streaming in Next.js?",
                options: [
                    "Progressively rendering UI from server to client",
                    "Video streaming",
                    "Data streaming",
                    "File streaming"
                ],
                correctAnswer: 0,
                explanation: "Streaming allows progressively rendering parts of the UI without waiting for all data, improving perceived performance.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming",
                resourceTitle: "Streaming"
            },
            {
                id: 6,
                question: "What is the purpose of Suspense boundaries?",
                options: [
                    "Lazy loading components",
                    "Error handling",
                    "Wrapping async components to show fallback UI while loading",
                    "Code splitting"
                ],
                correctAnswer: 2,
                explanation: "Suspense boundaries wrap async components, displaying fallback UI while content loads, enabling streaming.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense",
                resourceTitle: "Streaming with Suspense"
            },
            {
                id: 7,
                question: "What is Partial Prerendering?",
                options: [
                    "Incomplete rendering",
                    "Partial page builds",
                    "A rendering model combining static and dynamic content in the same route",
                    "Preview rendering"
                ],
                correctAnswer: 2,
                explanation: "Partial Prerendering allows serving static shell immediately while streaming dynamic content, best of both worlds.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering",
                resourceTitle: "Partial Prerendering"
            },
            {
                id: 8,
                question: "How do you create parallel routes?",
                options: [
                    "With async routes",
                    "Creating parallel folders",
                    "Using parallel config",
                    "Using @folder slots in the same directory"
                ],
                correctAnswer: 3,
                explanation: "Parallel routes use @folder convention (slots) to render multiple pages simultaneously in the same layout.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/routing/parallel-routes",
                resourceTitle: "Parallel Routes"
            },
            {
                id: 9,
                question: "What are Intercepting Routes?",
                options: [
                    "Routes that capture navigation to show content in current context",
                    "Route guards",
                    "Protected routes",
                    "Redirect routes"
                ],
                correctAnswer: 0,
                explanation: "Intercepting routes (using (..) convention) capture route navigation to display content like modals while preserving URL.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes",
                resourceTitle: "Intercepting Routes"
            },
            {
                id: 10,
                question: "What is middleware.ts?",
                options: [
                    "Code that runs before requests are completed for auth, redirects, etc.",
                    "API middleware",
                    "Database middleware",
                    "State middleware"
                ],
                correctAnswer: 0,
                explanation: "Middleware runs before requests complete, useful for authentication, redirects, headers, and edge-based logic.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/routing/middleware",
                resourceTitle: "Middleware"
            },
            {
                id: 11,
                question: "What is the useRouter hook used for in App Router?",
                options: [
                    "Programmatic navigation and route information in Client Components",
                    "Server-side routing",
                    "Route configuration",
                    "Router setup"
                ],
                correctAnswer: 0,
                explanation: "useRouter from 'next/navigation' enables programmatic navigation and accessing router state in Client Components.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/functions/use-router",
                resourceTitle: "useRouter Hook"
            },
            {
                id: 12,
                question: "What is useSearchParams?",
                options: [
                    "A form search hook",
                    "A search API hook",
                    "A Client Component hook for reading URL search parameters",
                    "A database search hook"
                ],
                correctAnswer: 2,
                explanation: "useSearchParams allows Client Components to read the URL's query string in the app directory.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/functions/use-search-params",
                resourceTitle: "useSearchParams"
            },
            {
                id: 13,
                question: "What is generateStaticParams?",
                options: [
                    "Function to generate dynamic route segments at build time",
                    "Static parameter generator",
                    "Build configuration",
                    "Type generator"
                ],
                correctAnswer: 0,
                explanation: "generateStaticParams predefines dynamic route segments for static generation, replacing getStaticPaths from Pages Router.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/functions/generate-static-params",
                resourceTitle: "generateStaticParams"
            },
            {
                id: 14,
                question: "What is Server Actions?",
                options: [
                    "API actions",
                    "Server-side scripts",
                    "Asynchronous functions that run on the server, called from Client Components",
                    "Backend functions"
                ],
                correctAnswer: 2,
                explanation: "Server Actions are async functions marked with 'use server' that can be called from Client Components for mutations.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations",
                resourceTitle: "Server Actions"
            },
            {
                id: 15,
                question: "How do you handle form submissions with Server Actions?",
                options: [
                    "POST to API route",
                    "Use onSubmit handler",
                    "Pass Server Action to form action prop",
                    "Use FormData API"
                ],
                correctAnswer: 2,
                explanation: "Server Actions can be passed directly to form action prop, handling submission on the server without API routes.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#forms",
                resourceTitle: "Server Actions with Forms"
            },
            {
                id: 16,
                question: "What is the purpose of the redirect() function?",
                options: [
                    "Route redirection config",
                    "Client-side navigation",
                    "Server-side redirection to different URLs",
                    "URL rewriting"
                ],
                correctAnswer: 2,
                explanation: "redirect() performs server-side redirects in Server Components, Route Handlers, or Server Actions.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/functions/redirect",
                resourceTitle: "redirect Function"
            },
            {
                id: 17,
                question: "What is the notFound() function?",
                options: [
                    "Handles missing data",
                    "Checks if routes exist",
                    "Renders not-found.tsx and returns 404 status",
                    "Search functionality"
                ],
                correctAnswer: 2,
                explanation: "notFound() can be called in Server Components to render the not-found.tsx file and return 404 status.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/functions/not-found",
                resourceTitle: "notFound Function"
            },
            {
                id: 18,
                question: "What is the cookies() function?",
                options: [
                    "Cookie management library",
                    "Set cookies in browser",
                    "Read HTTP cookies in Server Components",
                    "Cookie configuration"
                ],
                correctAnswer: 2,
                explanation: "cookies() allows reading and setting cookies in Server Components and Route Handlers.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/functions/cookies",
                resourceTitle: "cookies Function"
            },
            {
                id: 19,
                question: "What is the headers() function?",
                options: [
                    "Header validation",
                    "Set response headers",
                    "Header configuration",
                    "Read HTTP request headers in Server Components"
                ],
                correctAnswer: 3,
                explanation: "headers() allows reading incoming request headers in Server Components and Route Handlers.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/functions/headers",
                resourceTitle: "headers Function"
            },
            {
                id: 20,
                question: "What is dynamic rendering?",
                options: [
                    "Dynamic imports",
                    "Rendering routes at request time instead of build time",
                    "Client-side rendering",
                    "Animated rendering"
                ],
                correctAnswer: 1,
                explanation: "Dynamic rendering generates pages on-demand at request time, opted into by using dynamic functions or uncached data.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering",
                resourceTitle: "Dynamic Rendering"
            }
        ],
        advanced: [
            {
                id: 1,
                question: "What is the Next.js App Router Cache?",
                options: [
                    "Browser cache",
                    "Server-side cache",
                    "CDN cache",
                    "An in-memory client-side cache for route segments"
                ],
                correctAnswer: 3,
                explanation: "The Router Cache stores React Server Component payload in browser, enabling instant navigation between cached routes.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/caching#router-cache",
                resourceTitle: "Router Cache"
            },
            {
                id: 2,
                question: "What is the Full Route Cache?",
                options: [
                    "Route configuration cache",
                    "Server-side cache of fully rendered routes from build time",
                    "Client cache",
                    "CDN cache"
                ],
                correctAnswer: 1,
                explanation: "Full Route Cache stores the rendered result of routes on the server, improving performance for statically rendered routes.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/caching#full-route-cache",
                resourceTitle: "Full Route Cache"
            },
            {
                id: 3,
                question: "What is the Data Cache in Next.js?",
                options: [
                    "Database cache",
                    "Client data storage",
                    "Persistent cache for fetch requests across server requests and deployments",
                    "Temporary cache"
                ],
                correctAnswer: 2,
                explanation: "Data Cache persists fetch results across server requests and deployments, extending native fetch API with caching.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/caching#data-cache",
                resourceTitle: "Data Cache"
            },
            {
                id: 4,
                question: "How do you opt out of Next.js caching for fetch?",
                options: [
                    "Use cache: 'no-store' or revalidate: 0 in fetch options",
                    "Disable caching globally",
                    "Use no-cache header",
                    "Set cache: false"
                ],
                correctAnswer: 0,
                explanation: "Pass { cache: 'no-store' } or { next: { revalidate: 0 } } to fetch to opt out of Data Cache.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/caching#opting-out",
                resourceTitle: "Opting Out of Caching"
            },
            {
                id: 5,
                question: "What is the purpose of generateMetadata?",
                options: [
                    "Generate meta tags",
                    "Dynamically generate metadata based on route params or data",
                    "Create SEO config",
                    "Generate types"
                ],
                correctAnswer: 1,
                explanation: "generateMetadata allows creating dynamic metadata based on route parameters or fetched data for better SEO.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/functions/generate-metadata",
                resourceTitle: "generateMetadata"
            },
            {
                id: 6,
                question: "What is OpenGraph metadata?",
                options: [
                    "Social media preview metadata for sharing links",
                    "Graph database metadata",
                    "Open source metadata",
                    "API metadata"
                ],
                correctAnswer: 0,
                explanation: "OpenGraph metadata controls how URLs appear when shared on social media platforms like Facebook and Twitter.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata#open-graph",
                resourceTitle: "Open Graph Metadata"
            },
            {
                id: 7,
                question: "What is the purpose of the Font Optimization?",
                options: [
                    "Font validation",
                    "Font compression",
                    "Font conversion",
                    "Automatically hosts and optimizes fonts to eliminate external network requests"
                ],
                correctAnswer: 3,
                explanation: "next/font automatically self-hosts fonts, eliminating external requests and improving performance and privacy.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/optimizing/fonts",
                resourceTitle: "Font Optimization"
            },
            {
                id: 8,
                question: "What is static export in Next.js?",
                options: [
                    "Static site generation",
                    "Exporting static files",
                    "Generating static HTML/CSS/JS that can be served without a Node.js server",
                    "Build export"
                ],
                correctAnswer: 2,
                explanation: "Static exports (output: 'export') generate a fully static site that can be deployed to any static hosting.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/deploying/static-exports",
                resourceTitle: "Static Exports"
            },
            {
                id: 9,
                question: "What are Edge Runtime vs Node.js Runtime?",
                options: [
                    "Client vs server",
                    "Different Node versions",
                    "Edge runs on CDN edges with limited APIs, Node.js has full Node APIs",
                    "Development vs production"
                ],
                correctAnswer: 2,
                explanation: "Edge runtime runs on CDN edges for low latency but has API limitations, while Node.js runtime has full capabilities.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes",
                resourceTitle: "Edge vs Node.js Runtime"
            },
            {
                id: 10,
                question: "How do you specify runtime for a route?",
                options: [
                    "Configure in package.json",
                    "Set in next.config.js",
                    "Use runtime prop",
                    "Export const runtime = 'edge' or 'nodejs'"
                ],
                correctAnswer: 3,
                explanation: "Export runtime segment config option to specify 'edge' or 'nodejs' runtime for routes.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#runtime",
                resourceTitle: "Runtime Configuration"
            },
            {
                id: 11,
                question: "What is the purpose of the revalidateTag function?",
                options: [
                    "On-demand revalidation of cached data by cache tags",
                    "Validating tags",
                    "Tag generation",
                    "Tag configuration"
                ],
                correctAnswer: 0,
                explanation: "revalidateTag allows on-demand purging of cached fetch requests associated with specific cache tags.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/functions/revalidateTag",
                resourceTitle: "revalidateTag"
            },
            {
                id: 12,
                question: "What is the unstable_cache API?",
                options: [
                    "Unstable caching behavior",
                    "Caching arbitrary data, not just fetch results",
                    "Testing cache",
                    "Temporary cache"
                ],
                correctAnswer: 1,
                explanation: "unstable_cache allows caching any data (database queries, computations) beyond just fetch requests.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/functions/unstable_cache",
                resourceTitle: "unstable_cache"
            },
            {
                id: 13,
                question: "What is the purpose of instrumentation.ts?",
                options: [
                    "Testing instrumentation",
                    "Initialize monitoring and logging when server starts",
                    "Build instrumentation",
                    "Performance measurement"
                ],
                correctAnswer: 1,
                explanation: "instrumentation.ts allows running code once when server starts, useful for initializing monitoring tools.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation",
                resourceTitle: "Instrumentation"
            },
            {
                id: 14,
                question: "What is the draft mode?",
                options: [
                    "Bypass static generation to preview draft content from CMS",
                    "Development mode",
                    "Testing mode",
                    "Preview builds"
                ],
                correctAnswer: 0,
                explanation: "Draft mode allows previewing draft content from headless CMS by bypassing static generation for specific requests.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/configuring/draft-mode",
                resourceTitle: "Draft Mode"
            },
            {
                id: 15,
                question: "What is Content Security Policy (CSP) in Next.js?",
                options: [
                    "Content validation",
                    "Security headers protecting against XSS, clickjacking, and other attacks",
                    "API security",
                    "Data encryption"
                ],
                correctAnswer: 1,
                explanation: "CSP headers define allowed sources for scripts, styles, and other resources, protecting against XSS attacks.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy",
                resourceTitle: "Content Security Policy"
            },
            {
                id: 16,
                question: "What is the purpose of the basePath config?",
                options: [
                    "Deploy Next.js app under a subpath of a domain",
                    "Set base URL",
                    "Configure API base",
                    "Set root path"
                ],
                correctAnswer: 0,
                explanation: "basePath allows deploying Next.js under a subpath (e.g., /docs) instead of domain root.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/next-config-js/basePath",
                resourceTitle: "basePath"
            },
            {
                id: 17,
                question: "What is Turbopack?",
                options: [
                    "Rust-based successor to Webpack for faster builds",
                    "A performance tool",
                    "A bundler plugin",
                    "A caching system"
                ],
                correctAnswer: 0,
                explanation: "Turbopack is the Rust-based successor to Webpack, providing significantly faster build times in development.",
                resourceLink: "https://nextjs.org/docs/app/api-reference/next-config-js/turbo",
                resourceTitle: "Turbopack"
            },
            {
                id: 18,
                question: "What are Route Handlers?",
                options: [
                    "Route guards",
                    "Custom request handlers for API routes in app directory",
                    "Route configuration",
                    "Navigation handlers"
                ],
                correctAnswer: 1,
                explanation: "Route Handlers (route.ts) create API endpoints with HTTP methods in the app directory, replacing pages/api.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers",
                resourceTitle: "Route Handlers"
            },
            {
                id: 19,
                question: "What is the purpose of React cache()?",
                options: [
                    "Memoize function results for the duration of a request",
                    "Browser caching",
                    "Component caching",
                    "State caching"
                ],
                correctAnswer: 0,
                explanation: "React's cache() memoizes async function results per request, useful for deduplicating data fetches in Server Components.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/caching#react-cache-function",
                resourceTitle: "React cache Function"
            },
            {
                id: 20,
                question: "What is the experimental PPR (Partial Prerendering)?",
                options: [
                    "Preview rendering",
                    "Partial page rendering",
                    "Progressive rendering",
                    "Combines static and dynamic rendering in a single route for optimal performance"
                ],
                correctAnswer: 3,
                explanation: "PPR allows serving a static shell instantly while streaming dynamic content, combining best aspects of static and dynamic rendering.",
                resourceLink: "https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering",
                resourceTitle: "Partial Prerendering"
            }
        ]
    },
    nodejs: {
        basics: [
            {
                id: 1,
                question: "What is Node.js?",
                options: [
                    "A JavaScript runtime built on Chrome's V8 engine",
                    "A JavaScript framework",
                    "A database system",
                    "A front-end library"
                ],
                correctAnswer: 0,
                explanation: "Node.js is a JavaScript runtime environment that executes JavaScript code outside a web browser, built on Chrome's V8 JavaScript engine.",
                resourceLink: "https://nodejs.org/en/about",
                resourceTitle: "About Node.js"
            },
            {
                id: 2,
                question: "What is the event loop in Node.js?",
                options: [
                    "A loop for iterating arrays",
                    "A mechanism that handles asynchronous operations",
                    "A function that runs events",
                    "A timer function"
                ],
                correctAnswer: 1,
                explanation: "The event loop is what allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded, by offloading operations to the system kernel.",
                resourceLink: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick",
                resourceTitle: "The Event Loop"
            },
            {
                id: 3,
                question: "What is npm?",
                options: [
                    "Node Programming Module",
                    "Node Package Manager - the default package manager for Node.js",
                    "New Project Manager",
                    "Node Performance Monitor"
                ],
                correctAnswer: 1,
                explanation: "npm is the world's largest software registry and the default package manager for Node.js, used for installing and managing dependencies.",
                resourceLink: "https://docs.npmjs.com/about-npm",
                resourceTitle: "About npm"
            },
            {
                id: 4,
                question: "What is package.json?",
                options: [
                    "A JavaScript package",
                    "A file that holds metadata about the project and its dependencies",
                    "A JSON database",
                    "A configuration for packages"
                ],
                correctAnswer: 1,
                explanation: "package.json is the manifest file that contains metadata about your Node.js project including dependencies, scripts, version, and other configuration.",
                resourceLink: "https://docs.npmjs.com/cli/v10/configuring-npm/package-json",
                resourceTitle: "package.json Documentation"
            },
            {
                id: 5,
                question: "How do you import a module in Node.js using CommonJS?",
                options: [
                    "Using require() function",
                    "Using import statement",
                    "Using include() function",
                    "Using load() function"
                ],
                correctAnswer: 0,
                explanation: "In CommonJS (the traditional Node.js module system), you use require() to import modules: const module = require('module-name').",
                resourceLink: "https://nodejs.org/api/modules.html",
                resourceTitle: "CommonJS Modules"
            },
            {
                id: 6,
                question: "What is module.exports used for?",
                options: [
                    "To import modules",
                    "To export functionality from a module to be used elsewhere",
                    "To delete modules",
                    "To configure exports"
                ],
                correctAnswer: 1,
                explanation: "module.exports is the object that's returned when you require a module, allowing you to expose functions, objects, or values from your module.",
                resourceLink: "https://nodejs.org/api/modules.html#moduleexports",
                resourceTitle: "module.exports"
            },
            {
                id: 7,
                question: "What is the difference between require() and import?",
                options: [
                    "require() is CommonJS (synchronous), import is ES modules (can be asynchronous)",
                    "They are exactly the same",
                    "import is deprecated",
                    "require() is faster"
                ],
                correctAnswer: 0,
                explanation: "require() is part of CommonJS and loads modules synchronously, while import is part of ES modules and supports static analysis and asynchronous loading.",
                resourceLink: "https://nodejs.org/api/esm.html",
                resourceTitle: "ECMAScript Modules"
            },
            {
                id: 8,
                question: "What is process in Node.js?",
                options: [
                    "A module for processing",
                    "A function to process data",
                    "A global object providing information about the current Node.js process",
                    "A CPU process"
                ],
                correctAnswer: 2,
                explanation: "The process object is a global that provides information about, and control over, the current Node.js process, including environment variables and command line arguments.",
                resourceLink: "https://nodejs.org/api/process.html",
                resourceTitle: "Process Object"
            },
            {
                id: 9,
                question: "What is process.env used for?",
                options: [
                    "Accessing environment variables",
                    "Setting the runtime environment",
                    "Processing environmental data",
                    "Checking Node version"
                ],
                correctAnswer: 0,
                explanation: "process.env is an object containing the user environment, commonly used to access configuration values and secrets without hardcoding them.",
                resourceLink: "https://nodejs.org/api/process.html#processenv",
                resourceTitle: "process.env"
            },
            {
                id: 10,
                question: "What is the fs module used for?",
                options: [
                    "File system operations like reading and writing files",
                    "Fast server operations",
                    "Full stack development",
                    "File streaming"
                ],
                correctAnswer: 0,
                explanation: "The fs (file system) module provides an API for interacting with the file system, including reading, writing, and manipulating files and directories.",
                resourceLink: "https://nodejs.org/api/fs.html",
                resourceTitle: "File System Module"
            },
            {
                id: 11,
                question: "What is the difference between fs.readFile() and fs.readFileSync()?",
                options: [
                    "readFile() only reads text files",
                    "They are the same",
                    "readFileSync() is faster",
                    "readFile() is asynchronous, readFileSync() blocks until complete"
                ],
                correctAnswer: 3,
                explanation: "fs.readFile() is non-blocking and takes a callback, while fs.readFileSync() blocks the event loop until the file is read completely.",
                resourceLink: "https://nodejs.org/api/fs.html#fsreadfilepath-options-callback",
                resourceTitle: "fs.readFile vs Sync"
            },
            {
                id: 12,
                question: "What is a callback in Node.js?",
                options: [
                    "A function that returns early",
                    "A function that calls back the server",
                    "A recursive function",
                    "A function passed as an argument to be executed after an async operation completes"
                ],
                correctAnswer: 3,
                explanation: "Callbacks are functions passed as arguments to asynchronous functions, to be executed once the async operation completes, following the error-first pattern.",
                resourceLink: "https://nodejs.org/en/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks",
                resourceTitle: "Callbacks in Node.js"
            },
            {
                id: 13,
                question: "What is the 'error-first' callback pattern?",
                options: [
                    "The first callback handles errors",
                    "Errors are handled first in code",
                    "Callbacks receive error as the first argument, data as second",
                    "Errors are thrown first"
                ],
                correctAnswer: 2,
                explanation: "The error-first callback pattern is a convention where the first argument of a callback is an error object (null if no error), followed by result data.",
                resourceLink: "https://nodejs.org/en/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks",
                resourceTitle: "Error-First Callbacks"
            },
            {
                id: 14,
                question: "What is __dirname in Node.js?",
                options: [
                    "The npm directory",
                    "The root directory",
                    "The user's home directory",
                    "A global variable containing the directory name of the current module"
                ],
                correctAnswer: 3,
                explanation: "__dirname is a global variable that contains the absolute path of the directory containing the currently executing file.",
                resourceLink: "https://nodejs.org/api/modules.html#__dirname",
                resourceTitle: "__dirname"
            },
            {
                id: 15,
                question: "What is __filename?",
                options: [
                    "The entry point file",
                    "The name of the current function",
                    "The package filename",
                    "A global variable containing the absolute path of the current file"
                ],
                correctAnswer: 3,
                explanation: "__filename contains the absolute path and filename of the code being executed, useful for file operations relative to the current file.",
                resourceLink: "https://nodejs.org/api/modules.html#__filename",
                resourceTitle: "__filename"
            },
            {
                id: 16,
                question: "What is the http module used for?",
                options: [
                    "HTTP caching",
                    "Handling HTTPS only",
                    "Creating HTTP servers and making HTTP requests",
                    "HTTP compression"
                ],
                correctAnswer: 2,
                explanation: "The http module provides utilities for creating HTTP servers and making HTTP client requests, fundamental for building web applications in Node.js.",
                resourceLink: "https://nodejs.org/api/http.html",
                resourceTitle: "HTTP Module"
            },
            {
                id: 17,
                question: "How do you create a simple HTTP server in Node.js?",
                options: [
                    "Using http.server() method",
                    "Using new Server() constructor",
                    "Using http.createServer() method",
                    "Using createHTTPServer() function"
                ],
                correctAnswer: 2,
                explanation: "You create an HTTP server using http.createServer(callback) which takes a request handler function and returns a server object.",
                resourceLink: "https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener",
                resourceTitle: "Creating HTTP Server"
            },
            {
                id: 18,
                question: "What is Buffer in Node.js?",
                options: [
                    "A network buffer",
                    "A memory buffer for caching",
                    "A string buffer",
                    "A class for handling binary data"
                ],
                correctAnswer: 3,
                explanation: "Buffer is a class used to handle binary data directly, essential for working with streams, files, and network protocols in Node.js.",
                resourceLink: "https://nodejs.org/api/buffer.html",
                resourceTitle: "Buffer Class"
            },
            {
                id: 19,
                question: "What is the purpose of the path module?",
                options: [
                    "Navigates directories",
                    "Defines API routes",
                    "Creates filesystem paths",
                    "Provides utilities for working with file and directory paths"
                ],
                correctAnswer: 3,
                explanation: "The path module provides utilities for working with file and directory paths in a cross-platform way, handling differences between Windows and Unix systems.",
                resourceLink: "https://nodejs.org/api/path.html",
                resourceTitle: "Path Module"
            },
            {
                id: 20,
                question: "What is the difference between setImmediate() and setTimeout()?",
                options: [
                    "setImmediate() is synchronous",
                    "They are exactly the same",
                    "setImmediate() executes after I/O events, setTimeout() after a minimum delay",
                    "setTimeout() is deprecated"
                ],
                correctAnswer: 2,
                explanation: "setImmediate() executes after the current poll phase completes, while setTimeout() schedules execution after a minimum threshold has elapsed.",
                resourceLink: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick#setimmediate-vs-settimeout",
                resourceTitle: "setImmediate vs setTimeout"
            }
        ],
        intermediate: [
            {
                id: 1,
                question: "What is a Stream in Node.js?",
                options: [
                    "A file format",
                    "A data type",
                    "A network protocol",
                    "An abstract interface for working with streaming data"
                ],
                correctAnswer: 3,
                explanation: "Streams are collections of data that might not be available all at once, allowing you to process data piece by piece without loading everything into memory.",
                resourceLink: "https://nodejs.org/api/stream.html",
                resourceTitle: "Streams"
            },
            {
                id: 2,
                question: "What are the four types of streams in Node.js?",
                options: [
                    "Read, Write, Copy, and Move",
                    "Input, Output, Both, and Convert",
                    "Readable, Writable, Duplex, and Transform",
                    "Source, Destination, Pipe, and Filter"
                ],
                correctAnswer: 2,
                explanation: "Node.js has four fundamental stream types: Readable (read data), Writable (write data), Duplex (both), and Transform (modify data while reading/writing).",
                resourceLink: "https://nodejs.org/api/stream.html#types-of-streams",
                resourceTitle: "Types of Streams"
            },
            {
                id: 3,
                question: "What is middleware in Express.js?",
                options: [
                    "Functions with access to request, response, and next() that process requests",
                    "Software between client and server",
                    "A type of database",
                    "A routing mechanism"
                ],
                correctAnswer: 0,
                explanation: "Middleware functions have access to the request and response objects and the next middleware function, used to execute code, modify req/res, or end requests.",
                resourceLink: "https://expressjs.com/en/guide/using-middleware.html",
                resourceTitle: "Express Middleware"
            },
            {
                id: 4,
                question: "What is the purpose of next() in Express middleware?",
                options: [
                    "Ends the request",
                    "Goes to the next route",
                    "Skips to the response",
                    "Passes control to the next middleware function"
                ],
                correctAnswer: 3,
                explanation: "Calling next() passes control to the next middleware function in the stack. If not called, the request will be left hanging.",
                resourceLink: "https://expressjs.com/en/guide/writing-middleware.html",
                resourceTitle: "Writing Middleware"
            },
            {
                id: 5,
                question: "What is Promise in Node.js?",
                options: [
                    "An object representing eventual completion or failure of an async operation",
                    "A guaranteed result",
                    "A function that promises to run",
                    "A sync operation"
                ],
                correctAnswer: 0,
                explanation: "A Promise is an object representing the eventual completion or failure of an asynchronous operation, providing a cleaner alternative to callbacks.",
                resourceLink: "https://nodejs.org/en/learn/asynchronous-work/understanding-javascript-promises",
                resourceTitle: "Understanding Promises"
            },
            {
                id: 6,
                question: "What does async/await do?",
                options: [
                    "Makes code asynchronous automatically",
                    "Provides syntactic sugar for working with Promises, making async code look synchronous",
                    "Waits for all operations",
                    "Creates async functions"
                ],
                correctAnswer: 1,
                explanation: "async/await is syntactic sugar built on Promises, allowing you to write asynchronous code that looks and behaves like synchronous code.",
                resourceLink: "https://nodejs.org/en/learn/asynchronous-work/modern-asynchronous-javascript-with-async-and-await",
                resourceTitle: "Async/Await"
            },
            {
                id: 7,
                question: "What is the EventEmitter class?",
                options: [
                    "A debugging tool",
                    "A class that emits particles",
                    "A class for handling events with an observer pattern",
                    "A logging system"
                ],
                correctAnswer: 2,
                explanation: "EventEmitter is a class that facilitates communication between objects in Node.js, implementing the observer pattern for event-driven programming.",
                resourceLink: "https://nodejs.org/api/events.html#class-eventemitter",
                resourceTitle: "EventEmitter"
            },
            {
                id: 8,
                question: "How do you handle errors in async/await?",
                options: [
                    "Using .catch() only",
                    "Using try/catch blocks",
                    "Errors are handled automatically",
                    "Using error callbacks"
                ],
                correctAnswer: 1,
                explanation: "With async/await, you handle errors using traditional try/catch blocks, making error handling look similar to synchronous code.",
                resourceLink: "https://nodejs.org/en/learn/asynchronous-work/modern-asynchronous-javascript-with-async-and-await",
                resourceTitle: "Error Handling with Async/Await"
            },
            {
                id: 9,
                question: "What is clustering in Node.js?",
                options: [
                    "Database clustering",
                    "Grouping related code",
                    "Spawning multiple Node.js processes to handle load across CPU cores",
                    "Server grouping"
                ],
                correctAnswer: 2,
                explanation: "The cluster module allows you to create child processes (workers) that share server ports, utilizing multi-core systems to handle more load.",
                resourceLink: "https://nodejs.org/api/cluster.html",
                resourceTitle: "Cluster Module"
            },
            {
                id: 10,
                question: "What is the purpose of process.nextTick()?",
                options: [
                    "Schedules for next second",
                    "Gets the next tick count",
                    "Advances time",
                    "Defers execution until the next iteration of the event loop"
                ],
                correctAnswer: 3,
                explanation: "process.nextTick() defers a function's execution until the next iteration of the event loop, executing before any I/O events or timers.",
                resourceLink: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick#processnexttick",
                resourceTitle: "process.nextTick()"
            },
            {
                id: 11,
                question: "What is the difference between dependencies and devDependencies?",
                options: [
                    "devDependencies are faster",
                    "They are the same",
                    "dependencies are for production, devDependencies for development only",
                    "dependencies are deprecated"
                ],
                correctAnswer: 2,
                explanation: "dependencies are packages required for production, while devDependencies are only needed for development (testing, building, etc.) and not installed in production.",
                resourceLink: "https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file",
                resourceTitle: "Dependencies vs DevDependencies"
            },
            {
                id: 12,
                question: "What is the child_process module used for?",
                options: [
                    "Process inheritance",
                    "Managing child elements",
                    "Spawning and managing child processes",
                    "Parent-child relationships"
                ],
                correctAnswer: 2,
                explanation: "The child_process module allows you to spawn child processes, enabling you to execute system commands and run scripts from Node.js.",
                resourceLink: "https://nodejs.org/api/child_process.html",
                resourceTitle: "Child Process"
            },
            {
                id: 13,
                question: "What is the difference between spawn() and exec()?",
                options: [
                    "exec() is faster",
                    "They are the same",
                    "spawn() streams output, exec() buffers it",
                    "spawn() is synchronous"
                ],
                correctAnswer: 2,
                explanation: "spawn() returns a stream and is better for large amounts of data, while exec() buffers output and is better for small data with a callback.",
                resourceLink: "https://nodejs.org/api/child_process.html#child_processspawncommand-args-options",
                resourceTitle: "spawn vs exec"
            },
            {
                id: 14,
                question: "What is middleware mounting in Express?",
                options: [
                    "Configuring middleware",
                    "Installing middleware",
                    "Loading middleware modules",
                    "Attaching middleware to specific routes or paths"
                ],
                correctAnswer: 3,
                explanation: "Middleware mounting means attaching middleware functions to specific paths or routes, allowing you to apply different middleware to different parts of your app.",
                resourceLink: "https://expressjs.com/en/guide/using-middleware.html#middleware.application",
                resourceTitle: "Application-level Middleware"
            },
            {
                id: 15,
                question: "What is CORS and why is it important?",
                options: [
                    "A database system",
                    "A Node.js module",
                    "A security protocol",
                    "Cross-Origin Resource Sharing - controls which domains can access your API"
                ],
                correctAnswer: 3,
                explanation: "CORS is a security mechanism that allows or restricts resources on a web page from being requested from another domain, important for API security.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
                resourceTitle: "CORS Documentation"
            },
            {
                id: 16,
                question: "What is the util.promisify() method?",
                options: [
                    "Creates new promises",
                    "Converts callback-based functions to return Promises",
                    "Validates promises",
                    "Resolves promises"
                ],
                correctAnswer: 1,
                explanation: "util.promisify() takes a callback-based function and returns a version that returns Promises, making it easier to use with async/await.",
                resourceLink: "https://nodejs.org/api/util.html#utilpromisifyoriginal",
                resourceTitle: "util.promisify"
            },
            {
                id: 17,
                question: "What is the purpose of the crypto module?",
                options: [
                    "Handles cryptocurrency",
                    "Provides cryptographic functionality including hashing and encryption",
                    "Encrypts files",
                    "Manages SSL certificates"
                ],
                correctAnswer: 1,
                explanation: "The crypto module provides cryptographic functionality including hashing, HMAC, cipher, decipher, sign, and verify operations.",
                resourceLink: "https://nodejs.org/api/crypto.html",
                resourceTitle: "Crypto Module"
            },
            {
                id: 18,
                question: "What is the difference between PUT and PATCH HTTP methods?",
                options: [
                    "PUT replaces entire resource, PATCH partially updates it",
                    "They are the same",
                    "PATCH is faster",
                    "PUT is for creation only"
                ],
                correctAnswer: 0,
                explanation: "PUT is used to replace an entire resource, while PATCH is used to apply partial modifications to a resource.",
                resourceLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",
                resourceTitle: "HTTP Methods"
            },
            {
                id: 19,
                question: "What is the os module used for?",
                options: [
                    "Provides operating system-related utility methods and properties",
                    "Operating system commands",
                    "OS installation",
                    "OS configuration"
                ],
                correctAnswer: 0,
                explanation: "The os module provides information about the operating system, including CPU architecture, platform, memory, and network interfaces.",
                resourceLink: "https://nodejs.org/api/os.html",
                resourceTitle: "OS Module"
            },
            {
                id: 20,
                question: "What is the purpose of the zlib module?",
                options: [
                    "Library management",
                    "Manages zip files",
                    "Provides compression and decompression functionality",
                    "Memory optimization"
                ],
                correctAnswer: 2,
                explanation: "The zlib module provides compression and decompression functionality using Gzip, Deflate, and Brotli, useful for reducing data transfer sizes.",
                resourceLink: "https://nodejs.org/api/zlib.html",
                resourceTitle: "Zlib Module"
            }
        ],
        advanced: [
            {
                id: 1,
                question: "What are Worker Threads in Node.js?",
                options: [
                    "Thread management system",
                    "A way to run JavaScript in parallel threads for CPU-intensive tasks",
                    "Threading library",
                    "Worker processes"
                ],
                correctAnswer: 1,
                explanation: "Worker threads enable parallel execution of JavaScript code, useful for CPU-intensive operations without blocking the main event loop.",
                resourceLink: "https://nodejs.org/api/worker_threads.html",
                resourceTitle: "Worker Threads"
            },
            {
                id: 2,
                question: "What is the difference between cluster and worker_threads?",
                options: [
                    "They are the same",
                    "Cluster creates processes, worker_threads creates threads within a process",
                    "Cluster is deprecated",
                    "worker_threads is faster"
                ],
                correctAnswer: 1,
                explanation: "Cluster spawns multiple Node.js processes sharing server ports, while worker_threads creates threads within a single process for parallel execution.",
                resourceLink: "https://nodejs.org/api/worker_threads.html#worker-threads",
                resourceTitle: "Cluster vs Worker Threads"
            },
            {
                id: 3,
                question: "What is backpressure in streams?",
                options: [
                    "Network pressure",
                    "Pressure on the backend",
                    "When a writable stream's buffer is full and can't accept more data",
                    "Memory pressure"
                ],
                correctAnswer: 2,
                explanation: "Backpressure occurs when data is being written faster than it can be consumed, requiring the producer to slow down or pause.",
                resourceLink: "https://nodejs.org/en/docs/guides/backpressuring-in-streams",
                resourceTitle: "Backpressuring in Streams"
            },
            {
                id: 4,
                question: "What is the purpose of NODE_ENV environment variable?",
                options: [
                    "Indicates the environment (development, production, test) for configuration",
                    "Sets Node.js version",
                    "Configures environment paths",
                    "Manages environment modules"
                ],
                correctAnswer: 0,
                explanation: "NODE_ENV is a convention to determine the current environment, allowing different configurations and optimizations for development vs production.",
                resourceLink: "https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production",
                resourceTitle: "Development vs Production"
            },
            {
                id: 5,
                question: "What is memory leak and how to detect it in Node.js?",
                options: [
                    "Memory running out",
                    "Unreleased memory that accumulates over time; use heap snapshots and profilers",
                    "Memory errors",
                    "Slow memory"
                ],
                correctAnswer: 1,
                explanation: "Memory leaks occur when memory is allocated but never freed, detected using tools like heap snapshots, Chrome DevTools, and memory profilers.",
                resourceLink: "https://nodejs.org/en/docs/guides/simple-profiling",
                resourceTitle: "Profiling Node.js"
            },
            {
                id: 6,
                question: "What is the difference between process.exit() and graceful shutdown?",
                options: [
                    "Graceful shutdown is automatic",
                    "They are the same",
                    "process.exit() is slower",
                    "process.exit() terminates immediately, graceful shutdown cleans up resources first"
                ],
                correctAnswer: 3,
                explanation: "Graceful shutdown closes connections, finishes pending requests, and releases resources before exiting, while process.exit() terminates immediately.",
                resourceLink: "https://nodejs.org/api/process.html#event-exit",
                resourceTitle: "Process Exit Events"
            },
            {
                id: 7,
                question: "What is the purpose of pm2 or similar process managers?",
                options: [
                    "Keeps Node.js apps running, provides monitoring, clustering, and auto-restart",
                    "Package management",
                    "Performance monitoring only",
                    "Module management"
                ],
                correctAnswer: 0,
                explanation: "Process managers like pm2 keep applications alive, restart on crashes, enable clustering, load balancing, and provide monitoring capabilities.",
                resourceLink: "https://pm2.keymetrics.io/docs/usage/quick-start/",
                resourceTitle: "PM2 Documentation"
            },
            {
                id: 8,
                question: "What is the V8 garbage collector?",
                options: [
                    "A performance optimizer",
                    "A code cleaner",
                    "A debugging tool",
                    "Automatic memory management system that frees unused objects"
                ],
                correctAnswer: 3,
                explanation: "V8's garbage collector automatically reclaims memory occupied by objects that are no longer in use, using generational collection strategies.",
                resourceLink: "https://nodejs.org/en/docs/guides/simple-profiling",
                resourceTitle: "V8 and Memory Management"
            },
            {
                id: 9,
                question: "What are security best practices for Node.js production apps?",
                options: [
                    "Security is automatic",
                    "Just use HTTPS",
                    "Use HTTPS, validate input, use helmet, keep dependencies updated, use environment variables",
                    "Only validate input"
                ],
                correctAnswer: 2,
                explanation: "Production security includes HTTPS, input validation, security headers (helmet), dependency updates, env variables for secrets, and rate limiting.",
                resourceLink: "https://nodejs.org/en/docs/guides/security",
                resourceTitle: "Security Best Practices"
            },
            {
                id: 10,
                question: "What is the purpose of the --inspect flag?",
                options: [
                    "Enables debugging and profiling with Chrome DevTools",
                    "Inspects code quality",
                    "Checks for errors",
                    "Validates syntax"
                ],
                correctAnswer: 0,
                explanation: "The --inspect flag starts the debugger, allowing you to connect Chrome DevTools for debugging, profiling, and performance analysis.",
                resourceLink: "https://nodejs.org/en/docs/guides/debugging-getting-started",
                resourceTitle: "Debugging Guide"
            },
            {
                id: 11,
                question: "What is circular dependency and how to avoid it?",
                options: [
                    "Dependencies in a circle",
                    "When modules depend on each other in a cycle; use dependency injection or restructure",
                    "Recursive dependencies",
                    "Repeated dependencies"
                ],
                correctAnswer: 1,
                explanation: "Circular dependencies occur when A requires B and B requires A, creating issues. Avoid by restructuring code or using dependency injection.",
                resourceLink: "https://nodejs.org/api/modules.html#cycles",
                resourceTitle: "Module Cycles"
            },
            {
                id: 12,
                question: "What is the difference between process.nextTick() and setImmediate()?",
                options: [
                    "setImmediate() is deprecated",
                    "They are the same",
                    "nextTick() is async, setImmediate() is sync",
                    "nextTick() executes before I/O, setImmediate() after I/O in the event loop"
                ],
                correctAnswer: 3,
                explanation: "process.nextTick() callbacks execute before any I/O events, while setImmediate() callbacks execute after I/O events in the event loop.",
                resourceLink: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick",
                resourceTitle: "Event Loop Timing"
            },
            {
                id: 13,
                question: "What is the purpose of the --max-old-space-size flag?",
                options: [
                    "Sets the maximum heap size for V8, preventing out-of-memory errors",
                    "Sets maximum disk space",
                    "Limits old code",
                    "Configures space allocation"
                ],
                correctAnswer: 0,
                explanation: "This flag configures V8's heap memory limit, useful for preventing memory issues in large applications by allocating more heap space.",
                resourceLink: "https://nodejs.org/api/cli.html#--max-old-space-sizesize-in-megabytes",
                resourceTitle: "V8 Options"
            },
            {
                id: 14,
                question: "What is the N-API and why is it important?",
                options: [
                    "The Node.js API",
                    "A stable API for building native addons independent of V8 versions",
                    "Native API calls",
                    "API versioning system"
                ],
                correctAnswer: 1,
                explanation: "N-API is an API for building native C/C++ addons that is independent from the JavaScript runtime, providing ABI stability across Node.js versions.",
                resourceLink: "https://nodejs.org/api/n-api.html",
                resourceTitle: "N-API"
            },
            {
                id: 15,
                question: "What is the purpose of libuv in Node.js?",
                options: [
                    "UV light processing",
                    "A JavaScript library",
                    "Provides the event loop and async I/O operations across platforms",
                    "Library utilities"
                ],
                correctAnswer: 2,
                explanation: "libuv is a multi-platform library that provides the event loop, asynchronous I/O, and other low-level functionality that Node.js is built on.",
                resourceLink: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick",
                resourceTitle: "Event Loop and libuv"
            },
            {
                id: 16,
                question: "What are the phases of the Node.js event loop?",
                options: [
                    "Timers, pending callbacks, idle, poll, check, close callbacks",
                    "Start, middle, end",
                    "Init, process, complete",
                    "Request, response, cleanup"
                ],
                correctAnswer: 0,
                explanation: "The event loop has six phases: timers, pending callbacks, idle/prepare, poll, check, and close callbacks, each handling different types of operations.",
                resourceLink: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick#event-loop-explained",
                resourceTitle: "Event Loop Phases"
            },
            {
                id: 17,
                question: "What is cache poisoning and how to prevent it?",
                options: [
                    "Old cached data",
                    "Corrupted cache files",
                    "Storing malicious data in cache; prevent with validation and cache keys",
                    "Cache overflow"
                ],
                correctAnswer: 2,
                explanation: "Cache poisoning occurs when attackers inject malicious content into cache. Prevent with proper validation, authentication, and safe cache key generation.",
                resourceLink: "https://nodejs.org/en/docs/guides/security",
                resourceTitle: "Security Considerations"
            },
            {
                id: 18,
                question: "What is the purpose of async hooks?",
                options: [
                    "Hook callbacks",
                    "Asynchronous functions",
                    "Track asynchronous resources and their lifecycle for debugging and monitoring",
                    "Event hooks"
                ],
                correctAnswer: 2,
                explanation: "Async hooks provide API to track asynchronous resources throughout their lifecycle, useful for debugging, monitoring, and async context tracking.",
                resourceLink: "https://nodejs.org/api/async_hooks.html",
                resourceTitle: "Async Hooks"
            },
            {
                id: 19,
                question: "What is the difference between horizontal and vertical scaling?",
                options: [
                    "Horizontal is for databases only",
                    "They are the same",
                    "Horizontal adds more machines, vertical increases machine resources",
                    "Vertical is deprecated"
                ],
                correctAnswer: 2,
                explanation: "Horizontal scaling adds more servers (scale out), while vertical scaling increases resources of existing servers (scale up). Node.js supports both via clustering and optimization.",
                resourceLink: "https://nodejs.org/api/cluster.html",
                resourceTitle: "Scaling with Cluster"
            },
            {
                id: 20,
                question: "What is the purpose of performance hooks?",
                options: [
                    "Provides API for collecting performance metrics",
                    "Hooks for performance testing",
                    "Speed optimization hooks",
                    "Performance monitoring tools"
                ],
                correctAnswer: 0,
                explanation: "Performance hooks (perf_hooks) provide an API to monitor performance metrics like timing, resource usage, and custom performance measurements.",
                resourceLink: "https://nodejs.org/api/perf_hooks.html",
                resourceTitle: "Performance Hooks"
            }
        ]
    },
    nestjs: {
        basics: [
            {
                id: 1,
                question: "What is NestJS?",
                options: [
                    "A database ORM",
                    "A frontend framework",
                    "A progressive Node.js framework for building efficient server-side applications",
                    "A testing library"
                ],
                correctAnswer: 2,
                explanation: "NestJS is a framework for building efficient, scalable Node.js server-side applications, heavily inspired by Angular.",
                resourceLink: "https://docs.nestjs.com/",
                resourceTitle: "Introduction to Nest"
            },
            {
                id: 2,
                question: "What command creates a new NestJS project?",
                options: [
                    "nestjs init",
                    "npm create nest-app",
                    "nest new project-name",
                    "nest create"
                ],
                correctAnswer: 2,
                explanation: "The Nest CLI provides `nest new` command to scaffold a new NestJS project with all necessary files and dependencies.",
                resourceLink: "https://docs.nestjs.com/first-steps",
                resourceTitle: "First Steps"
            },
            {
                id: 3,
                question: "What is a decorator in NestJS?",
                options: [
                    "A styling function",
                    "A design pattern",
                    "A special function that adds metadata to classes and members",
                    "A file decorator"
                ],
                correctAnswer: 2,
                explanation: "Decorators are functions prefixed with @ that attach metadata to classes, methods, properties, or parameters.",
                resourceLink: "https://docs.nestjs.com/custom-decorators",
                resourceTitle: "Custom Decorators"
            },
            {
                id: 4,
                question: "What is the @Module() decorator used for?",
                options: [
                    "Exports modules",
                    "Creates module files",
                    "Imports modules",
                    "Defines a module and its metadata like imports, controllers, and providers"
                ],
                correctAnswer: 3,
                explanation: "@Module() decorator organizes application structure by grouping related controllers, providers, and imports.",
                resourceLink: "https://docs.nestjs.com/modules",
                resourceTitle: "Modules"
            },
            {
                id: 5,
                question: "What is a controller in NestJS?",
                options: [
                    "Controls database",
                    "Handles incoming requests and returns responses",
                    "Manages state",
                    "Controls routes"
                ],
                correctAnswer: 1,
                explanation: "Controllers are responsible for handling incoming requests and returning responses to the client using route handlers.",
                resourceLink: "https://docs.nestjs.com/controllers",
                resourceTitle: "Controllers"
            },
            {
                id: 6,
                question: "What is the @Controller() decorator?",
                options: [
                    "Defines a class as a controller and sets route prefix",
                    "Controls application flow",
                    "Creates controllers",
                    "Configures routes"
                ],
                correctAnswer: 0,
                explanation: "@Controller('route') decorator marks a class as a controller and defines the base route for all its route handlers.",
                resourceLink: "https://docs.nestjs.com/controllers#routing",
                resourceTitle: "Controller Routing"
            },
            {
                id: 7,
                question: "What are providers in NestJS?",
                options: [
                    "API providers",
                    "Data providers",
                    "Classes that can be injected as dependencies like services",
                    "Service providers"
                ],
                correctAnswer: 2,
                explanation: "Providers are classes annotated with @Injectable() that can be injected as dependencies, enabling dependency injection.",
                resourceLink: "https://docs.nestjs.com/providers",
                resourceTitle: "Providers"
            },
            {
                id: 8,
                question: "What is dependency injection?",
                options: [
                    "A design pattern where dependencies are provided rather than created",
                    "Injecting code",
                    "Adding dependencies",
                    "Code injection"
                ],
                correctAnswer: 0,
                explanation: "Dependency injection is a pattern where Nest's IoC container manages and injects dependencies into classes.",
                resourceLink: "https://docs.nestjs.com/fundamentals/custom-providers",
                resourceTitle: "Dependency Injection"
            },
            {
                id: 9,
                question: "What is the @Injectable() decorator?",
                options: [
                    "Marks a class as a provider that can be injected",
                    "Injects dependencies",
                    "Creates instances",
                    "Makes classes injectable"
                ],
                correctAnswer: 0,
                explanation: "@Injectable() decorator marks a class as a provider managed by the Nest dependency injection container.",
                resourceLink: "https://docs.nestjs.com/providers#services",
                resourceTitle: "Services"
            },
            {
                id: 10,
                question: "What methods do the @Get(), @Post(), @Put(), @Delete() decorators define?",
                options: [
                    "Database operations",
                    "HTTP route handlers for respective HTTP methods",
                    "CRUD operations",
                    "API methods"
                ],
                correctAnswer: 1,
                explanation: "These decorators define route handlers that respond to HTTP requests with the specified method.",
                resourceLink: "https://docs.nestjs.com/controllers#request-object",
                resourceTitle: "Request Methods"
            },
            {
                id: 11,
                question: "What is the @Param() decorator?",
                options: [
                    "Extracts route parameters from the URL",
                    "Defines parameters",
                    "Validates parameters",
                    "Sets parameters"
                ],
                correctAnswer: 0,
                explanation: "@Param() decorator provides access to route parameters like /users/:id.",
                resourceLink: "https://docs.nestjs.com/controllers#route-parameters",
                resourceTitle: "Route Parameters"
            },
            {
                id: 12,
                question: "What is the @Body() decorator?",
                options: [
                    "Extracts the request body",
                    "Defines body schema",
                    "Validates body",
                    "Creates body"
                ],
                correctAnswer: 0,
                explanation: "@Body() decorator provides access to the parsed request body in route handlers.",
                resourceLink: "https://docs.nestjs.com/controllers#request-payloads",
                resourceTitle: "Request Payloads"
            },
            {
                id: 13,
                question: "What is the @Query() decorator?",
                options: [
                    "Extracts query string parameters",
                    "Database queries",
                    "Defines queries",
                    "Creates queries"
                ],
                correctAnswer: 0,
                explanation: "@Query() decorator provides access to URL query parameters like ?page=1&limit=10.",
                resourceLink: "https://docs.nestjs.com/controllers#request-object",
                resourceTitle: "Query Parameters"
            },
            {
                id: 14,
                question: "What is DTOs (Data Transfer Objects)?",
                options: [
                    "Data type objects",
                    "Database transfer objects",
                    "Classes defining the shape of data for requests/responses",
                    "Transfer protocols"
                ],
                correctAnswer: 2,
                explanation: "DTOs are TypeScript classes that define the structure and validation rules for data transferred between processes.",
                resourceLink: "https://docs.nestjs.com/controllers#request-payloads",
                resourceTitle: "DTOs"
            },
            {
                id: 15,
                question: "What is class-validator?",
                options: [
                    "A class checker",
                    "A class testing tool",
                    "A type validator",
                    "A library for decorator-based validation in NestJS"
                ],
                correctAnswer: 3,
                explanation: "class-validator provides decorators like @IsString(), @IsEmail() for validating DTO properties.",
                resourceLink: "https://docs.nestjs.com/techniques/validation",
                resourceTitle: "Validation"
            },
            {
                id: 16,
                question: "What is main.ts?",
                options: [
                    "Main controller",
                    "Main module file",
                    "The entry file that creates and starts the NestJS application",
                    "Configuration file"
                ],
                correctAnswer: 2,
                explanation: "main.ts is the entry point that uses NestFactory to create the app instance and starts listening for requests.",
                resourceLink: "https://docs.nestjs.com/first-steps#platform",
                resourceTitle: "Platform"
            },
            {
                id: 17,
                question: "What is NestFactory?",
                options: [
                    "A factory class for creating Nest application instances",
                    "A module factory",
                    "A service factory",
                    "A test factory"
                ],
                correctAnswer: 0,
                explanation: "NestFactory provides methods like create() to instantiate a Nest application.",
                resourceLink: "https://docs.nestjs.com/first-steps#setup",
                resourceTitle: "Application Setup"
            },
            {
                id: 18,
                question: "What is the AppModule?",
                options: [
                    "Application configuration",
                    "The root module of the application",
                    "Main controller",
                    "App service"
                ],
                correctAnswer: 1,
                explanation: "AppModule is the root module that Nest uses to build the application graph and wire dependencies.",
                resourceLink: "https://docs.nestjs.com/modules#feature-modules",
                resourceTitle: "Modules"
            },
            {
                id: 19,
                question: "How do you import one module into another?",
                options: [
                    "Use import statement",
                    "Add it to the imports array of @Module()",
                    "Call addModule()",
                    "Use @Import() decorator"
                ],
                correctAnswer: 1,
                explanation: "Modules are imported by adding them to the imports array in the @Module() decorator.",
                resourceLink: "https://docs.nestjs.com/modules#shared-modules",
                resourceTitle: "Module Imports"
            },
            {
                id: 20,
                question: "What is the providers array in @Module()?",
                options: [
                    "API providers list",
                    "Lists service providers",
                    "Lists providers that will be instantiated by the injector",
                    "Data providers"
                ],
                correctAnswer: 2,
                explanation: "The providers array specifies which providers should be instantiated and can be injected within this module.",
                resourceLink: "https://docs.nestjs.com/providers#provider-registration",
                resourceTitle: "Provider Registration"
            }
        ],
        intermediate: [
            {
                id: 1,
                question: "What are middleware in NestJS?",
                options: [
                    "Data middleware",
                    "Functions that execute before route handlers to process requests",
                    "API middleware",
                    "Service middleware"
                ],
                correctAnswer: 1,
                explanation: "Middleware functions have access to request/response objects and can modify them or end the request-response cycle.",
                resourceLink: "https://docs.nestjs.com/middleware",
                resourceTitle: "Middleware"
            },
            {
                id: 2,
                question: "What are guards in NestJS?",
                options: [
                    "Data guards",
                    "Security guards",
                    "Classes that determine if a request should be handled based on conditions",
                    "Route guards"
                ],
                correctAnswer: 2,
                explanation: "Guards implement CanActivate interface and return boolean/Promise to allow or deny access, often used for authentication.",
                resourceLink: "https://docs.nestjs.com/guards",
                resourceTitle: "Guards"
            },
            {
                id: 3,
                question: "What are interceptors?",
                options: [
                    "Data interceptors",
                    "Request interceptors",
                    "API interceptors",
                    "Classes that transform or extend request/response handling"
                ],
                correctAnswer: 3,
                explanation: "Interceptors can bind extra logic before/after method execution, transform results, extend behavior, or override functions.",
                resourceLink: "https://docs.nestjs.com/interceptors",
                resourceTitle: "Interceptors"
            },
            {
                id: 4,
                question: "What are pipes in NestJS?",
                options: [
                    "Classes for data transformation and validation",
                    "Data pipelines",
                    "Stream pipes",
                    "API pipes"
                ],
                correctAnswer: 0,
                explanation: "Pipes transform input data or validate it, throwing exceptions if validation fails.",
                resourceLink: "https://docs.nestjs.com/pipes",
                resourceTitle: "Pipes"
            },
            {
                id: 5,
                question: "What is the ValidationPipe?",
                options: [
                    "Validation library",
                    "Built-in pipe that validates request data using class-validator",
                    "Data validator",
                    "Schema validator"
                ],
                correctAnswer: 1,
                explanation: "ValidationPipe automatically validates request payloads against DTO classes with validation decorators.",
                resourceLink: "https://docs.nestjs.com/techniques/validation#using-the-built-in-validationpipe",
                resourceTitle: "ValidationPipe"
            },
            {
                id: 6,
                question: "What are exception filters?",
                options: [
                    "Error catchers",
                    "Error filters",
                    "Exception handlers",
                    "Classes that handle exceptions and format error responses"
                ],
                correctAnswer: 3,
                explanation: "Exception filters catch exceptions thrown during request handling and format error responses.",
                resourceLink: "https://docs.nestjs.com/exception-filters",
                resourceTitle: "Exception Filters"
            },
            {
                id: 7,
                question: "What is the @UseGuards() decorator?",
                options: [
                    "Defines guards",
                    "Uses security guards",
                    "Creates guards",
                    "Applies guards to controllers or route handlers"
                ],
                correctAnswer: 3,
                explanation: "@UseGuards() decorator binds guards to controllers or specific routes for authorization logic.",
                resourceLink: "https://docs.nestjs.com/guards#binding-guards",
                resourceTitle: "Binding Guards"
            },
            {
                id: 8,
                question: "What is the @UseInterceptors() decorator?",
                options: [
                    "Defines interceptors",
                    "Uses API interceptors",
                    "Creates interceptors",
                    "Applies interceptors to controllers or methods"
                ],
                correctAnswer: 3,
                explanation: "@UseInterceptors() decorator binds interceptors at method, controller, or global scope.",
                resourceLink: "https://docs.nestjs.com/interceptors#binding-interceptors",
                resourceTitle: "Binding Interceptors"
            },
            {
                id: 9,
                question: "What is the @UsePipes() decorator?",
                options: [
                    "Creates pipes",
                    "Uses data pipes",
                    "Applies pipes to controllers or route handlers",
                    "Defines pipes"
                ],
                correctAnswer: 2,
                explanation: "@UsePipes() decorator binds pipes to validate or transform handler parameters.",
                resourceLink: "https://docs.nestjs.com/pipes#binding-pipes",
                resourceTitle: "Binding Pipes"
            },
            {
                id: 10,
                question: "What is the @Res() decorator?",
                options: [
                    "Injects the response object for direct manipulation",
                    "Defines responses",
                    "Creates responses",
                    "Returns responses"
                ],
                correctAnswer: 0,
                explanation: "@Res() provides access to the platform-specific response object (e.g., Express response).",
                resourceLink: "https://docs.nestjs.com/controllers#library-specific-approach",
                resourceTitle: "Response Object"
            },
            {
                id: 11,
                question: "What is the @Req() decorator?",
                options: [
                    "Handles requests",
                    "Defines requests",
                    "Creates requests",
                    "Injects the request object"
                ],
                correctAnswer: 3,
                explanation: "@Req() provides access to the platform-specific request object.",
                resourceLink: "https://docs.nestjs.com/controllers#request-object",
                resourceTitle: "Request Object"
            },
            {
                id: 12,
                question: "What is the ConfigModule?",
                options: [
                    "Config service",
                    "Configuration files",
                    "Built-in module for loading and accessing configuration",
                    "Settings module"
                ],
                correctAnswer: 2,
                explanation: "ConfigModule loads environment variables and provides ConfigService for accessing configuration.",
                resourceLink: "https://docs.nestjs.com/techniques/configuration",
                resourceTitle: "Configuration"
            },
            {
                id: 13,
                question: "What is TypeORM integration in NestJS?",
                options: [
                    "Database ORM with decorators for entities and repositories",
                    "Type checking",
                    "ORM library",
                    "Database driver"
                ],
                correctAnswer: 0,
                explanation: "NestJS integrates with TypeORM providing @InjectRepository() and database connection management.",
                resourceLink: "https://docs.nestjs.com/techniques/database",
                resourceTitle: "Database (TypeORM)"
            },
            {
                id: 14,
                question: "What is the @InjectRepository() decorator?",
                options: [
                    "Injects a TypeORM repository into a service",
                    "Creates repositories",
                    "Defines repositories",
                    "Repository decorator"
                ],
                correctAnswer: 0,
                explanation: "@InjectRepository() injects TypeORM repositories to perform database operations.",
                resourceLink: "https://docs.nestjs.com/techniques/database#repository-pattern",
                resourceTitle: "Repository Pattern"
            },
            {
                id: 15,
                question: "What is the @HttpCode() decorator?",
                options: [
                    "Handles HTTP errors",
                    "Sets the HTTP status code for a response",
                    "Defines HTTP methods",
                    "HTTP configuration"
                ],
                correctAnswer: 1,
                explanation: "@HttpCode() decorator overrides the default status code for a route handler.",
                resourceLink: "https://docs.nestjs.com/controllers#status-code",
                resourceTitle: "Status Code"
            },
            {
                id: 16,
                question: "What is the @Header() decorator?",
                options: [
                    "Defines header schema",
                    "Reads headers",
                    "Sets custom response headers",
                    "Header validation"
                ],
                correctAnswer: 2,
                explanation: "@Header() decorator sets custom HTTP response headers.",
                resourceLink: "https://docs.nestjs.com/controllers#headers",
                resourceTitle: "Headers"
            },
            {
                id: 17,
                question: "What is the @Redirect() decorator?",
                options: [
                    "Route redirector",
                    "Redirect middleware",
                    "Redirects requests to a specified URL",
                    "URL rewriter"
                ],
                correctAnswer: 2,
                explanation: "@Redirect() decorator redirects responses to a different URL with optional status code.",
                resourceLink: "https://docs.nestjs.com/controllers#redirection",
                resourceTitle: "Redirection"
            },
            {
                id: 18,
                question: "What is global scope for providers, guards, filters?",
                options: [
                    "Global variables",
                    "Applying them to all routes across the application",
                    "Global configuration",
                    "Application-wide settings"
                ],
                correctAnswer: 1,
                explanation: "Global scope bindings apply to every route handler across all controllers using app.useGlobalX() methods.",
                resourceLink: "https://docs.nestjs.com/guards#global-guards",
                resourceTitle: "Global Guards"
            },
            {
                id: 19,
                question: "What is the ExecutionContext?",
                options: [
                    "Provides details about the current request execution context",
                    "Execution environment",
                    "Runtime context",
                    "Request context"
                ],
                correctAnswer: 0,
                explanation: "ExecutionContext extends ArgumentsHost and provides additional details about current execution process.",
                resourceLink: "https://docs.nestjs.com/fundamentals/execution-context",
                resourceTitle: "Execution Context"
            },
            {
                id: 20,
                question: "What is the @Inject() decorator?",
                options: [
                    "Creates injections",
                    "Injects dependencies",
                    "Injects custom providers using tokens",
                    "Dependency injector"
                ],
                correctAnswer: 2,
                explanation: "@Inject() decorator injects providers using custom tokens, useful for non-class providers.",
                resourceLink: "https://docs.nestjs.com/fundamentals/custom-providers#non-class-based-provider-tokens",
                resourceTitle: "Custom Providers"
            }
        ],
        advanced: [
            {
                id: 1,
                question: "What are microservices in NestJS?",
                options: [
                    "Architecture pattern for building distributed systems with message patterns",
                    "Small services",
                    "API services",
                    "Mini applications"
                ],
                correctAnswer: 0,
                explanation: "NestJS microservices enable building distributed systems using transporters like TCP, Redis, MQTT, gRPC, and more.",
                resourceLink: "https://docs.nestjs.com/microservices/basics",
                resourceTitle: "Microservices"
            },
            {
                id: 2,
                question: "What is the @MessagePattern() decorator?",
                options: [
                    "Message validator",
                    "Message formatter",
                    "Pattern matcher",
                    "Defines handlers for incoming messages in microservices"
                ],
                correctAnswer: 3,
                explanation: "@MessagePattern() decorator binds handlers to message patterns in microservice architectures.",
                resourceLink: "https://docs.nestjs.com/microservices/basics#patterns",
                resourceTitle: "Message Patterns"
            },
            {
                id: 3,
                question: "What is the @EventPattern() decorator?",
                options: [
                    "Defines handlers for event-based messages (fire-and-forget)",
                    "Event emitter",
                    "Event listener",
                    "Event validator"
                ],
                correctAnswer: 0,
                explanation: "@EventPattern() handles asynchronous events where no response is expected, unlike message patterns.",
                resourceLink: "https://docs.nestjs.com/microservices/basics#event-based",
                resourceTitle: "Event Patterns"
            },
            {
                id: 4,
                question: "What is GraphQL integration?",
                options: [
                    "Code-first or schema-first approach to build GraphQL APIs",
                    "Graph database",
                    "API query language",
                    "Data graph"
                ],
                correctAnswer: 0,
                explanation: "NestJS provides @nestjs/graphql package with decorators for building GraphQL APIs using code-first or schema-first.",
                resourceLink: "https://docs.nestjs.com/graphql/quick-start",
                resourceTitle: "GraphQL"
            },
            {
                id: 5,
                question: "What is the @Resolver() decorator in GraphQL?",
                options: [
                    "Resolves data",
                    "Defines a GraphQL resolver class",
                    "Query resolver",
                    "Data fetcher"
                ],
                correctAnswer: 1,
                explanation: "@Resolver() marks a class as a GraphQL resolver that handles queries, mutations, and subscriptions.",
                resourceLink: "https://docs.nestjs.com/graphql/resolvers",
                resourceTitle: "GraphQL Resolvers"
            },
            {
                id: 6,
                question: "What is the @Query() decorator in GraphQL?",
                options: [
                    "Defines a GraphQL query resolver method",
                    "Database query",
                    "API query",
                    "Search query"
                ],
                correctAnswer: 0,
                explanation: "@Query() decorator marks a method as a GraphQL query handler.",
                resourceLink: "https://docs.nestjs.com/graphql/resolvers#query",
                resourceTitle: "GraphQL Queries"
            },
            {
                id: 7,
                question: "What is the @Mutation() decorator?",
                options: [
                    "Defines a GraphQL mutation for data modifications",
                    "Data mutation",
                    "Update operation",
                    "Change handler"
                ],
                correctAnswer: 0,
                explanation: "@Mutation() decorator marks a method as a GraphQL mutation handler for creating, updating, or deleting data.",
                resourceLink: "https://docs.nestjs.com/graphql/mutations",
                resourceTitle: "GraphQL Mutations"
            },
            {
                id: 8,
                question: "What is WebSocket support in NestJS?",
                options: [
                    "Web sockets",
                    "Real-time bidirectional communication using gateways",
                    "Socket connections",
                    "Real-time API"
                ],
                correctAnswer: 1,
                explanation: "NestJS provides @WebSocketGateway() for building real-time applications with Socket.io or ws.",
                resourceLink: "https://docs.nestjs.com/websockets/gateways",
                resourceTitle: "WebSocket Gateways"
            },
            {
                id: 9,
                question: "What is the @WebSocketGateway() decorator?",
                options: [
                    "Socket handler",
                    "Gateway configuration",
                    "Defines a WebSocket gateway class for real-time communication",
                    "WebSocket server"
                ],
                correctAnswer: 2,
                explanation: "@WebSocketGateway() decorator marks a class as a WebSocket gateway.",
                resourceLink: "https://docs.nestjs.com/websockets/gateways#gateways",
                resourceTitle: "Gateway Decorator"
            },
            {
                id: 10,
                question: "What is the @SubscribeMessage() decorator?",
                options: [
                    "Message listener",
                    "Message subscriber",
                    "Event subscriber",
                    "Handles incoming WebSocket messages for specific events"
                ],
                correctAnswer: 3,
                explanation: "@SubscribeMessage() binds methods to handle specific WebSocket message events.",
                resourceLink: "https://docs.nestjs.com/websockets/gateways#subscribe-to-messages",
                resourceTitle: "Subscribe to Messages"
            },
            {
                id: 11,
                question: "What is CQRS in NestJS?",
                options: [
                    "Query system",
                    "Command Query Responsibility Segregation pattern for separating reads and writes",
                    "Command system",
                    "Data pattern"
                ],
                correctAnswer: 1,
                explanation: "CQRS module provides infrastructure for separating command (write) and query (read) operations.",
                resourceLink: "https://docs.nestjs.com/recipes/cqrs",
                resourceTitle: "CQRS"
            },
            {
                id: 12,
                question: "What is Event Sourcing?",
                options: [
                    "Event storage",
                    "Event logging",
                    "Source tracking",
                    "Pattern of storing state changes as a sequence of events"
                ],
                correctAnswer: 3,
                explanation: "Event Sourcing stores all changes to application state as a sequence of events, often used with CQRS.",
                resourceLink: "https://docs.nestjs.com/recipes/cqrs#events",
                resourceTitle: "Event Sourcing"
            },
            {
                id: 13,
                question: "What is the Terminus health checks module?",
                options: [
                    "Terminal module",
                    "Module for implementing health check endpoints",
                    "End module",
                    "Health monitor"
                ],
                correctAnswer: 1,
                explanation: "Terminus provides health check indicators for HTTP, database, disk, memory, and more.",
                resourceLink: "https://docs.nestjs.com/recipes/terminus",
                resourceTitle: "Health Checks (Terminus)"
            },
            {
                id: 14,
                question: "What is the documentation with Swagger/OpenAPI?",
                options: [
                    "Swagger UI",
                    "API docs",
                    "Auto-generated API documentation from decorators and DTOs",
                    "Documentation tool"
                ],
                correctAnswer: 2,
                explanation: "NestJS integrates with Swagger to auto-generate OpenAPI documentation using decorators like @ApiProperty().",
                resourceLink: "https://docs.nestjs.com/openapi/introduction",
                resourceTitle: "OpenAPI (Swagger)"
            },
            {
                id: 15,
                question: "What is the Logger service?",
                options: [
                    "Console logger",
                    "Log writer",
                    "Built-in logging service for application logs",
                    "Debug logger"
                ],
                correctAnswer: 2,
                explanation: "Logger is a built-in service providing methods like log(), error(), warn(), debug(), verbose().",
                resourceLink: "https://docs.nestjs.com/techniques/logger",
                resourceTitle: "Logger"
            },
            {
                id: 16,
                question: "What is the Task Scheduling (Cron)?",
                options: [
                    "Job scheduler",
                    "Task runner",
                    "Module for scheduling tasks at specific intervals or times",
                    "Timer service"
                ],
                correctAnswer: 2,
                explanation: "NestJS provides @nestjs/schedule module with @Cron(), @Interval(), @Timeout() decorators for task scheduling.",
                resourceLink: "https://docs.nestjs.com/techniques/task-scheduling",
                resourceTitle: "Task Scheduling"
            },
            {
                id: 17,
                question: "What is the Queue module (Bull)?",
                options: [
                    "Task queue",
                    "Data queue",
                    "Message queue",
                    "Module for handling job queues and background processing"
                ],
                correctAnswer: 3,
                explanation: "NestJS integrates with Bull for Redis-based queue management and job processing.",
                resourceLink: "https://docs.nestjs.com/techniques/queues",
                resourceTitle: "Queues"
            },
            {
                id: 18,
                question: "What is the Compression middleware?",
                options: [
                    "Response optimizer",
                    "Data compression",
                    "File compression",
                    "Middleware that compresses response bodies for better performance"
                ],
                correctAnswer: 3,
                explanation: "Compression middleware uses gzip compression to reduce response payload sizes.",
                resourceLink: "https://docs.nestjs.com/techniques/compression",
                resourceTitle: "Compression"
            },
            {
                id: 19,
                question: "What is the Testing module in NestJS?",
                options: [
                    "Built-in tools for unit and e2e testing with Jest",
                    "Test runner",
                    "Testing library",
                    "Test framework"
                ],
                correctAnswer: 0,
                explanation: "NestJS provides Test module with createTestingModule() for testing services, controllers, and integrations.",
                resourceLink: "https://docs.nestjs.com/fundamentals/testing",
                resourceTitle: "Testing"
            },
            {
                id: 20,
                question: "What is the APP_GUARD, APP_INTERCEPTOR, APP_FILTER, APP_PIPE provider tokens?",
                options: [
                    "Tokens for registering global providers within a module",
                    "Application providers",
                    "Global tokens",
                    "Provider constants"
                ],
                correctAnswer: 0,
                explanation: "APP_* tokens allow registering global guards, interceptors, filters, and pipes within module providers array.",
                resourceLink: "https://docs.nestjs.com/guards#binding-guards",
                resourceTitle: "Global Providers"
            }
        ]
    },
    mongodb: {
        basics: [
            {
                id: 1,
                question: "What is MongoDB?",
                options: [
                    "A relational database",
                    "A NoSQL document database that stores data in JSON-like format",
                    "A caching system",
                    "A message queue"
                ],
                correctAnswer: 1,
                explanation: "MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like BSON (Binary JSON) documents.",
                resourceLink: "https://www.mongodb.com/what-is-mongodb",
                resourceTitle: "What is MongoDB"
            },
            {
                id: 2,
                question: "What is a collection in MongoDB?",
                options: [
                    "A database file",
                    "A group of MongoDB documents, similar to a table in relational databases",
                    "A query result",
                    "An index"
                ],
                correctAnswer: 1,
                explanation: "A collection is a grouping of MongoDB documents, analogous to a table in relational databases but without enforced schema.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/databases-and-collections/",
                resourceTitle: "Databases and Collections"
            },
            {
                id: 3,
                question: "What is a document in MongoDB?",
                options: [
                    "A record stored in JSON-like BSON format",
                    "A text file",
                    "A database schema",
                    "A configuration file"
                ],
                correctAnswer: 0,
                explanation: "A document is a record in MongoDB, stored as BSON (Binary JSON), containing field-value pairs similar to JSON objects.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/document/",
                resourceTitle: "Documents"
            },
            {
                id: 4,
                question: "What is BSON?",
                options: [
                    "Better JSON",
                    "Binary JSON - MongoDB's binary-encoded serialization of JSON documents",
                    "Big JSON",
                    "Basic JSON"
                ],
                correctAnswer: 1,
                explanation: "BSON (Binary JSON) is a binary representation of JSON documents with additional data types like Date and Binary.",
                resourceLink: "https://www.mongodb.com/json-and-bson",
                resourceTitle: "JSON and BSON"
            },
            {
                id: 5,
                question: "What command shows all databases?",
                options: [
                    "show dbs",
                    "list databases",
                    "get databases",
                    "dbs"
                ],
                correctAnswer: 0,
                explanation: "The 'show dbs' command in mongosh displays all databases available on the MongoDB server.",
                resourceLink: "https://www.mongodb.com/docs/mongodb-shell/run-commands/",
                resourceTitle: "Run Commands"
            },
            {
                id: 6,
                question: "How do you insert a document in MongoDB?",
                options: [
                    "db.collection.insert()",
                    "db.collection.add()",
                    "db.collection.create()",
                    "db.collection.insertOne() or db.collection.insertMany()"
                ],
                correctAnswer: 3,
                explanation: "insertOne() inserts a single document, while insertMany() inserts multiple documents into a collection.",
                resourceLink: "https://www.mongodb.com/docs/manual/tutorial/insert-documents/",
                resourceTitle: "Insert Documents"
            },
            {
                id: 7,
                question: "What is the _id field?",
                options: [
                    "A foreign key",
                    "A unique identifier automatically created for each document",
                    "A user ID",
                    "An index name"
                ],
                correctAnswer: 1,
                explanation: "_id is a unique identifier field automatically created for every document if not provided, using ObjectId type.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/document/#the-_id-field",
                resourceTitle: "The _id Field"
            },
            {
                id: 8,
                question: "How do you find all documents in a collection?",
                options: [
                    "db.collection.getAll()",
                    "db.collection.find()",
                    "db.collection.select()",
                    "db.collection.query()"
                ],
                correctAnswer: 1,
                explanation: "find() without arguments returns all documents in a collection. Use find(query) to filter results.",
                resourceLink: "https://www.mongodb.com/docs/manual/tutorial/query-documents/",
                resourceTitle: "Query Documents"
            },
            {
                id: 9,
                question: "What is the purpose of db.collection.findOne()?",
                options: [
                    "Finds one random document",
                    "Returns the first document matching the query",
                    "Finds exactly one document or errors",
                    "Finds documents with ID of 1"
                ],
                correctAnswer: 1,
                explanation: "findOne() returns the first document that matches the query criteria, or null if no match is found.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/",
                resourceTitle: "findOne()"
            },
            {
                id: 10,
                question: "How do you update a document?",
                options: [
                    "db.collection.updateOne() or db.collection.updateMany()",
                    "db.collection.modify()",
                    "db.collection.change()",
                    "db.collection.edit()"
                ],
                correctAnswer: 0,
                explanation: "updateOne() updates the first matching document, updateMany() updates all matching documents.",
                resourceLink: "https://www.mongodb.com/docs/manual/tutorial/update-documents/",
                resourceTitle: "Update Documents"
            },
            {
                id: 11,
                question: "What is the $set operator?",
                options: [
                    "Creates a set data structure",
                    "Sets or updates field values in a document",
                    "Sets permissions",
                    "Sets database configuration"
                ],
                correctAnswer: 1,
                explanation: "$set operator replaces the value of a field with the specified value, or adds the field if it doesn't exist.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/operator/update/set/",
                resourceTitle: "$set Operator"
            },
            {
                id: 12,
                question: "How do you delete documents?",
                options: [
                    "db.collection.remove()",
                    "db.collection.deleteOne() or db.collection.deleteMany()",
                    "db.collection.drop()",
                    "db.collection.erase()"
                ],
                correctAnswer: 1,
                explanation: "deleteOne() deletes the first matching document, deleteMany() deletes all matching documents.",
                resourceLink: "https://www.mongodb.com/docs/manual/tutorial/remove-documents/",
                resourceTitle: "Delete Documents"
            },
            {
                id: 13,
                question: "What is mongosh?",
                options: [
                    "The MongoDB Shell for interacting with MongoDB",
                    "A MongoDB configuration file",
                    "A database backup tool",
                    "A monitoring dashboard"
                ],
                correctAnswer: 0,
                explanation: "mongosh is the modern MongoDB Shell, a JavaScript and Node.js REPL environment for interacting with MongoDB.",
                resourceLink: "https://www.mongodb.com/docs/mongodb-shell/",
                resourceTitle: "MongoDB Shell"
            },
            {
                id: 14,
                question: "What is the use() command?",
                options: [
                    "Use a specific collection",
                    "Switch to a specific database",
                    "Use an index",
                    "Enable a feature"
                ],
                correctAnswer: 1,
                explanation: "use dbname switches to the specified database, creating it if it doesn't exist when data is first inserted.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/method/db.getSiblingDB/",
                resourceTitle: "Switch Databases"
            },
            {
                id: 15,
                question: "What is the pretty() method?",
                options: [
                    "Validates documents",
                    "Beautifies collections",
                    "Optimizes queries",
                    "Formats query results in a readable way"
                ],
                correctAnswer: 3,
                explanation: "pretty() formats the output of find() queries to be more readable (Note: mongosh formats by default).",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/method/cursor.pretty/",
                resourceTitle: "cursor.pretty()"
            },
            {
                id: 16,
                question: "What is the $gt operator?",
                options: [
                    "Group together operator",
                    "Get total operator",
                    "Greater than comparison operator",
                    "Global transaction operator"
                ],
                correctAnswer: 2,
                explanation: "$gt selects documents where the field value is greater than the specified value.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/operator/query/gt/",
                resourceTitle: "$gt Operator"
            },
            {
                id: 17,
                question: "What does the limit() method do?",
                options: [
                    "Limits field size",
                    "Limits query execution time",
                    "Limits the number of documents returned",
                    "Limits database connections"
                ],
                correctAnswer: 2,
                explanation: "limit(n) constrains the number of documents returned by a query to n documents.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/method/cursor.limit/",
                resourceTitle: "cursor.limit()"
            },
            {
                id: 18,
                question: "What is the sort() method?",
                options: [
                    "Sorts collections alphabetically",
                    "Orders query results by specified fields",
                    "Organizes database files",
                    "Arranges indexes"
                ],
                correctAnswer: 1,
                explanation: "sort() orders documents in the result set. Use 1 for ascending, -1 for descending order.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/method/cursor.sort/",
                resourceTitle: "cursor.sort()"
            },
            {
                id: 19,
                question: "What is the count() method?",
                options: [
                    "Counts indexes",
                    "Counts collections",
                    "Counts databases",
                    "Returns the number of documents matching a query"
                ],
                correctAnswer: 3,
                explanation: "count() (or countDocuments()) returns the number of documents that match the query criteria.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/method/db.collection.countDocuments/",
                resourceTitle: "countDocuments()"
            },
            {
                id: 20,
                question: "What is MongoDB Compass?",
                options: [
                    "A backup utility",
                    "A command-line tool",
                    "A GUI for MongoDB to visualize and interact with data",
                    "A migration tool"
                ],
                correctAnswer: 2,
                explanation: "MongoDB Compass is the official GUI for MongoDB, providing a graphical interface to explore data, run queries, and manage databases.",
                resourceLink: "https://www.mongodb.com/products/compass",
                resourceTitle: "MongoDB Compass"
            }
        ],
        intermediate: [
            {
                id: 1,
                question: "What is the aggregation framework?",
                options: [
                    "A pipeline-based framework for data processing and transformation",
                    "A data collection tool",
                    "A backup framework",
                    "A security framework"
                ],
                correctAnswer: 0,
                explanation: "The aggregation framework processes data through a pipeline of stages, performing operations like filtering, grouping, and transforming.",
                resourceLink: "https://www.mongodb.com/docs/manual/aggregation/",
                resourceTitle: "Aggregation"
            },
            {
                id: 2,
                question: "What is the $match stage in aggregation?",
                options: [
                    "Matches patterns",
                    "Filters documents similar to find() queries",
                    "Joins collections",
                    "Groups documents"
                ],
                correctAnswer: 1,
                explanation: "$match filters documents to pass only matching documents to the next pipeline stage, similar to where clause in SQL.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/operator/aggregation/match/",
                resourceTitle: "$match"
            },
            {
                id: 3,
                question: "What is the $group stage?",
                options: [
                    "Groups documents by specified fields and performs aggregations",
                    "Groups collections",
                    "Groups databases",
                    "Groups indexes"
                ],
                correctAnswer: 0,
                explanation: "$group groups documents by a specified identifier and can perform accumulator operations like sum, avg, min, max.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/operator/aggregation/group/",
                resourceTitle: "$group"
            },
            {
                id: 4,
                question: "What is an index in MongoDB?",
                options: [
                    "A data structure that improves query performance",
                    "A table of contents",
                    "A document ID",
                    "A collection reference"
                ],
                correctAnswer: 0,
                explanation: "Indexes are special data structures that store a small portion of data in an easy-to-traverse form, dramatically improving read performance.",
                resourceLink: "https://www.mongodb.com/docs/manual/indexes/",
                resourceTitle: "Indexes"
            },
            {
                id: 5,
                question: "How do you create an index?",
                options: [
                    "db.collection.newIndex()",
                    "db.collection.addIndex()",
                    "db.collection.createIndex()",
                    "db.collection.makeIndex()"
                ],
                correctAnswer: 2,
                explanation: "createIndex() creates an index on a collection. Indexes can be single-field, compound, multikey, text, or geospatial.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/method/db.collection.createIndex/",
                resourceTitle: "createIndex()"
            },
            {
                id: 6,
                question: "What is a compound index?",
                options: [
                    "A complex query",
                    "A combined database",
                    "An index on multiple fields",
                    "A merged collection"
                ],
                correctAnswer: 2,
                explanation: "A compound index includes multiple fields and can support queries on any prefix of the indexed fields.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/index-compound/",
                resourceTitle: "Compound Indexes"
            },
            {
                id: 7,
                question: "What is the $lookup stage?",
                options: [
                    "Looks up values",
                    "Performs left outer join with another collection",
                    "Searches documents",
                    "Finds indexes"
                ],
                correctAnswer: 1,
                explanation: "$lookup performs a left outer join to an unsharded collection, similar to SQL JOIN operations.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/",
                resourceTitle: "$lookup"
            },
            {
                id: 8,
                question: "What is the $unwind stage?",
                options: [
                    "Unfolds collections",
                    "Unwraps objects",
                    "Reverses operations",
                    "Deconstructs an array field into separate documents"
                ],
                correctAnswer: 3,
                explanation: "$unwind deconstructs an array field, creating a separate output document for each array element.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/operator/aggregation/unwind/",
                resourceTitle: "$unwind"
            },
            {
                id: 9,
                question: "What is the $project stage?",
                options: [
                    "Reshapes documents by including, excluding, or computing new fields",
                    "Creates projects",
                    "Projects data to screen",
                    "Plans queries"
                ],
                correctAnswer: 0,
                explanation: "$project passes documents with only specified fields, can compute new fields, and reshape documents.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/operator/aggregation/project/",
                resourceTitle: "$project"
            },
            {
                id: 10,
                question: "What is schema validation?",
                options: [
                    "Schema design tools",
                    "Rules to enforce document structure and data types",
                    "Validation libraries",
                    "Schema migration"
                ],
                correctAnswer: 1,
                explanation: "Schema validation allows enforcing document structure, required fields, and data types using JSON Schema or query expressions.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/schema-validation/",
                resourceTitle: "Schema Validation"
            },
            {
                id: 11,
                question: "What is a replica set?",
                options: [
                    "A collection duplicate",
                    "A copy of database",
                    "A backup set",
                    "A group of MongoDB servers maintaining the same data for redundancy"
                ],
                correctAnswer: 3,
                explanation: "A replica set is a group of mongod instances that maintain the same data, providing redundancy and high availability.",
                resourceLink: "https://www.mongodb.com/docs/manual/replication/",
                resourceTitle: "Replication"
            },
            {
                id: 12,
                question: "What is a primary node in a replica set?",
                options: [
                    "The first node created",
                    "The node that receives all write operations",
                    "The fastest node",
                    "The largest node"
                ],
                correctAnswer: 1,
                explanation: "The primary is the only member that receives write operations. All writes are recorded in the oplog for replication.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/replica-set-primary/",
                resourceTitle: "Replica Set Primary"
            },
            {
                id: 13,
                question: "What are secondary nodes?",
                options: [
                    "Optional nodes",
                    "Backup nodes only",
                    "Nodes that replicate primary's data and can serve reads",
                    "Temporary nodes"
                ],
                correctAnswer: 2,
                explanation: "Secondaries maintain copies of the primary's data by applying operations from the oplog and can serve read operations.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/replica-set-secondary/",
                resourceTitle: "Replica Set Secondaries"
            },
            {
                id: 14,
                question: "What is the $push operator?",
                options: [
                    "Sends notifications",
                    "Pushes documents to collection",
                    "Appends values to an array field",
                    "Publishes data"
                ],
                correctAnswer: 2,
                explanation: "$push appends a specified value to an array, or adds the array field with the value if the field doesn't exist.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/operator/update/push/",
                resourceTitle: "$push"
            },
            {
                id: 15,
                question: "What is the $pull operator?",
                options: [
                    "Extracts fields",
                    "Pulls documents from collection",
                    "Retrieves data",
                    "Removes values from an array matching a condition"
                ],
                correctAnswer: 3,
                explanation: "$pull removes from an existing array all instances of a value or values that match a specified condition.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/operator/update/pull/",
                resourceTitle: "$pull"
            },
            {
                id: 16,
                question: "What is upsert?",
                options: [
                    "Unique update",
                    "Update first",
                    "Universal insert",
                    "Update if exists, insert if not"
                ],
                correctAnswer: 3,
                explanation: "Upsert creates a new document when no document matches the query criteria, otherwise updates the existing document.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/method/db.collection.update/#upsert-option",
                resourceTitle: "Upsert"
            },
            {
                id: 17,
                question: "What is the explain() method?",
                options: [
                    "Provides query execution information and performance statistics",
                    "Explains documents",
                    "Documents queries",
                    "Describes collections"
                ],
                correctAnswer: 0,
                explanation: "explain() returns information on query plan, execution stats, index usage, and performance metrics.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/method/cursor.explain/",
                resourceTitle: "explain()"
            },
            {
                id: 18,
                question: "What is a text index?",
                options: [
                    "An index supporting text search queries on string content",
                    "An index for text files",
                    "A full-text database",
                    "A string validator"
                ],
                correctAnswer: 0,
                explanation: "Text indexes support text search queries on string content, enabling efficient searching of text in documents.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/index-text/",
                resourceTitle: "Text Indexes"
            },
            {
                id: 19,
                question: "What is the $regex operator?",
                options: [
                    "Regular expression validator",
                    "Provides regular expression pattern matching",
                    "Text replacement",
                    "Pattern generator"
                ],
                correctAnswer: 1,
                explanation: "$regex provides regular expression capabilities for pattern matching strings in queries.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/operator/query/regex/",
                resourceTitle: "$regex"
            },
            {
                id: 20,
                question: "What is the bulkWrite() method?",
                options: [
                    "Bulk data import",
                    "Writes large documents",
                    "Performs multiple write operations in batches",
                    "Mass updates"
                ],
                correctAnswer: 2,
                explanation: "bulkWrite() performs multiple write operations (insert, update, delete) in a single call with better performance.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/method/db.collection.bulkWrite/",
                resourceTitle: "bulkWrite()"
            }
        ],
        advanced: [
            {
                id: 1,
                question: "What is sharding?",
                options: [
                    "Data validation",
                    "Data encryption",
                    "Data compression",
                    "Horizontal partitioning of data across multiple servers"
                ],
                correctAnswer: 3,
                explanation: "Sharding distributes data across multiple machines, enabling horizontal scaling for large datasets and high throughput.",
                resourceLink: "https://www.mongodb.com/docs/manual/sharding/",
                resourceTitle: "Sharding"
            },
            {
                id: 2,
                question: "What is a shard key?",
                options: [
                    "A primary key",
                    "A security key",
                    "An encryption key",
                    "The indexed field that determines data distribution across shards"
                ],
                correctAnswer: 3,
                explanation: "The shard key determines how documents are distributed across shards and cannot be changed after sharding.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/sharding-shard-key/",
                resourceTitle: "Shard Keys"
            },
            {
                id: 3,
                question: "What is a chunk in MongoDB sharding?",
                options: [
                    "A memory segment",
                    "A data block",
                    "A backup unit",
                    "A contiguous range of shard key values"
                ],
                correctAnswer: 3,
                explanation: "A chunk is a contiguous range of shard key values within a particular shard. MongoDB migrates chunks between shards for balancing.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/sharding-data-partitioning/",
                resourceTitle: "Data Partitioning"
            },
            {
                id: 4,
                question: "What is the config server in sharding?",
                options: [
                    "Stores application config",
                    "Configures individual shards",
                    "Manages configurations",
                    "Stores metadata and configuration for the sharded cluster"
                ],
                correctAnswer: 3,
                explanation: "Config servers store cluster metadata including chunk information, shard locations, and cluster configuration.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/sharded-cluster-config-servers/",
                resourceTitle: "Config Servers"
            },
            {
                id: 5,
                question: "What is the mongos router?",
                options: [
                    "A data router",
                    "A network router",
                    "Routes queries to appropriate shards in a sharded cluster",
                    "A security router"
                ],
                correctAnswer: 2,
                explanation: "mongos acts as a query router, directing client requests to the appropriate shards and merging results.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/sharded-cluster-query-router/",
                resourceTitle: "mongos"
            },
            {
                id: 6,
                question: "What is the WiredTiger storage engine?",
                options: [
                    "A tiger mascot",
                    "A wire protocol",
                    "MongoDB's default storage engine supporting compression and encryption",
                    "A legacy engine"
                ],
                correctAnswer: 2,
                explanation: "WiredTiger is the default storage engine providing document-level concurrency, compression, and encryption at rest.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/wiredtiger/",
                resourceTitle: "WiredTiger Storage Engine"
            },
            {
                id: 7,
                question: "What is change streams?",
                options: [
                    "Backup streams",
                    "Stream processing",
                    "Data migration",
                    "Real-time notifications of data changes in collections"
                ],
                correctAnswer: 3,
                explanation: "Change streams allow applications to access real-time data changes without polling, ideal for reactive applications.",
                resourceLink: "https://www.mongodb.com/docs/manual/changeStreams/",
                resourceTitle: "Change Streams"
            },
            {
                id: 8,
                question: "What is a capped collection?",
                options: [
                    "A fixed-size collection with insert-order retention",
                    "A collection with maximum documents",
                    "A restricted collection",
                    "A temporary collection"
                ],
                correctAnswer: 0,
                explanation: "Capped collections have fixed size and maintain insertion order, automatically removing oldest documents when full.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/capped-collections/",
                resourceTitle: "Capped Collections"
            },
            {
                id: 9,
                question: "What is read concern?",
                options: [
                    "Read performance",
                    "Read permissions",
                    "Specifies which data to read based on durability guarantees",
                    "Read validation"
                ],
                correctAnswer: 2,
                explanation: "Read concern allows controlling the consistency and isolation of data read from replica sets and sharded clusters.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/read-concern/",
                resourceTitle: "Read Concern"
            },
            {
                id: 10,
                question: "What is write concern?",
                options: [
                    "Acknowledgment level requested from MongoDB for write operations",
                    "Write permissions",
                    "Write validation",
                    "Write performance"
                ],
                correctAnswer: 0,
                explanation: "Write concern describes the level of acknowledgment requested from MongoDB for write operations, balancing performance and durability.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/write-concern/",
                resourceTitle: "Write Concern"
            },
            {
                id: 11,
                question: "What are transactions in MongoDB?",
                options: [
                    "Database migrations",
                    "Payment transactions",
                    "Data transfers",
                    "ACID transactions spanning multiple documents and collections"
                ],
                correctAnswer: 3,
                explanation: "Multi-document ACID transactions allow atomic operations across multiple documents, collections, and databases.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/transactions/",
                resourceTitle: "Transactions"
            },
            {
                id: 12,
                question: "What is the TTL index?",
                options: [
                    "Timed transaction log",
                    "Time tracking index",
                    "Temporary index",
                    "Time-to-Live index that automatically deletes documents after a period"
                ],
                correctAnswer: 3,
                explanation: "TTL indexes automatically remove documents after a specified time period, useful for session data or logs.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/index-ttl/",
                resourceTitle: "TTL Indexes"
            },
            {
                id: 13,
                question: "What is the $facet stage?",
                options: [
                    "Processes multiple aggregation pipelines in a single stage",
                    "Faceted search",
                    "Multi-dimensional data",
                    "Parallel processing"
                ],
                correctAnswer: 0,
                explanation: "$facet allows running multiple aggregation pipelines independently and combining their results into a single document.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/operator/aggregation/facet/",
                resourceTitle: "$facet"
            },
            {
                id: 14,
                question: "What is the $merge stage?",
                options: [
                    "Writes aggregation results to a collection",
                    "Merges collections",
                    "Combines documents",
                    "Joins databases"
                ],
                correctAnswer: 0,
                explanation: "$merge writes the aggregation pipeline results to a specified collection, allowing upserts and custom merge logic.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/operator/aggregation/merge/",
                resourceTitle: "$merge"
            },
            {
                id: 15,
                question: "What is the $out stage?",
                options: [
                    "Outputs to console",
                    "Writes aggregation results to a new collection, replacing existing",
                    "Exports data",
                    "Creates output files"
                ],
                correctAnswer: 1,
                explanation: "$out writes the aggregation pipeline results to a specified collection, replacing the collection if it exists.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/operator/aggregation/out/",
                resourceTitle: "$out"
            },
            {
                id: 16,
                question: "What is the oplog?",
                options: [
                    "Output log",
                    "Operation logger",
                    "Optimization log",
                    "Operations log recording all write operations for replication"
                ],
                correctAnswer: 3,
                explanation: "The oplog is a special capped collection that records all write operations, used by secondaries to replicate data.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/replica-set-oplog/",
                resourceTitle: "Replica Set Oplog"
            },
            {
                id: 17,
                question: "What is Atlas?",
                options: [
                    "A migration utility",
                    "A mapping tool",
                    "A monitoring dashboard",
                    "MongoDB's fully managed cloud database service"
                ],
                correctAnswer: 3,
                explanation: "MongoDB Atlas is a fully managed cloud database service offering automated backups, monitoring, and scaling.",
                resourceLink: "https://www.mongodb.com/atlas",
                resourceTitle: "MongoDB Atlas"
            },
            {
                id: 18,
                question: "What is the $graphLookup stage?",
                options: [
                    "Creates graph visualizations",
                    "Looks up graphs",
                    "Performs recursive search on a collection for graph traversal",
                    "Searches graphics"
                ],
                correctAnswer: 2,
                explanation: "$graphLookup performs recursive search to traverse hierarchical or graph-structured data.",
                resourceLink: "https://www.mongodb.com/docs/manual/reference/operator/aggregation/graphLookup/",
                resourceTitle: "$graphLookup"
            },
            {
                id: 19,
                question: "What is zone sharding?",
                options: [
                    "Security zones",
                    "Geographic sharding",
                    "Time-based sharding",
                    "Associating shard key ranges with specific shards"
                ],
                correctAnswer: 3,
                explanation: "Zone sharding associates shard key value ranges with specific shards, enabling data locality and compliance requirements.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/zone-sharding/",
                resourceTitle: "Zone Sharding"
            },
            {
                id: 20,
                question: "What is the aggregation pipeline optimizer?",
                options: [
                    "Pipeline builder",
                    "Improves pipeline performance through transformations and reordering",
                    "Performance monitor",
                    "Query optimizer"
                ],
                correctAnswer: 1,
                explanation: "The optimizer improves aggregation performance by reordering stages, combining stages, and pushing operations to earlier stages.",
                resourceLink: "https://www.mongodb.com/docs/manual/core/aggregation-pipeline-optimization/",
                resourceTitle: "Pipeline Optimization"
            }
        ]
    }
}
