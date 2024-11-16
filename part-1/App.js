const App = () => (
    <div>
        <h1>Hello World</h1>
        <FirstComponent />
        <NamedComponent name="Luke Skywalker" />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))