import Person from "./Person/Person";
import React, {useEffect} from "react";

const persons = (props) => (props.persons.map((person, index) => {

    console.log("person js rendering");



    return <Person
        name={person.name}
        age={person.age}
        click={()=>props.clicked(index)}
        changed={(event) => props.changed(event, person.id)}
        key={person.id}
    />
}));

export default persons;
