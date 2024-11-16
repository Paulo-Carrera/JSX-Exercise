const Person = ({name, age, hobbies}) => {
    let message;
    if (age >= 18){
        message = 'Please go vote';
    } else{
        message = 'You must be 18';
    }

    name = name.length > 7 ? name.slice(0, 6).toUpperCase() : name;

    return (
        <div>
            <h1>{name}</h1>
            <p>{message}</p>
            <ul>
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    )
}