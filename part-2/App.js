const App = () => {
    return (
        <div>
            <h1>Hello from app</h1>
            <Tweet username="luke" name="Luke Skywalker" date="2020-01-01" message="I am a jedi" />
            <Tweet username="leia" name="Leia Organa" date="2020-01-01" message="I am a princess" />
            <Tweet username="han" name="Han Solo" date="2020-01-01" message="I am a bounty hunter" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));