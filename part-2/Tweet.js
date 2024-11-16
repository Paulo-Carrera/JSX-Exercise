const Tweet = ({ username, name, date, message }) => {
    const tweetStyle = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px 0",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif"
    };

    const usernameStyle = {
        margin: "0 0 8px",
        color: "#007acc"
    };

    const textStyle = {
        margin: "4px 0",
        color: "#333"
    };

    return (
        <div style={tweetStyle}>
            <h4 style={usernameStyle}>username: {username}</h4>
            <p style={textStyle}>name: {name}</p>
            <p style={textStyle}>date: {date}</p>
            <p style={textStyle}>message: {message}</p>
        </div>
    );
};
