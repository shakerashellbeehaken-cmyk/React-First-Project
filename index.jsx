import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

root.render(
    <main>
        <img width="40px" src="react-logo.png" alt="React Logo" />
        <h1>Why Learning React?</h1>
        <p>React is a powerful JavaScript library for building user interfaces.</p>
        <ul>
            <li>React is a JavaScript library for building user interfaces.</li>
            <li>React is component-based.</li>
            <li>React is declarative.</li>
            <li>React is fast and efficient.</li>
            <li>React is used by millions of developers worldwide.</li>
            <li>React is maintained by Facebook (now Meta).</li>
        </ul>
        <h2>Fun Facts of React</h2>
        <ul>
            <li>was first release in 2013</li>
            <li>was originally developed by Jordan Walke</li>
            <li>has well over 200k stars on Github</li>
            <li>is used by companies like Meta, Netflix, and Airbnb</li>
            <li>has a large and active community</li>
            <li>is constantly evolving with new features and improvements</li>
        </ul>
    </main>
)
