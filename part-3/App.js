// App component
const App = () => (
    <div>
        <h1>Hello from app</h1>
        <Person name="Alexander" age={20} hobbies={['reading', 'coding', 'gaming']} />
        <Person name="John" age={15} hobbies={['reading', 'coding', 'gaming']} />
        <Person name="Sarah" age={25} hobbies={['reading', 'coding', 'gaming']} />
    </div>
)

// Add app component to root
ReactDOM.render(<App />, document.getElementById('root'))


