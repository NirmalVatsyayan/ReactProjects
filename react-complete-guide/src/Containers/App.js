import React, {Component} from 'react';
import './App.css';
import Radium from 'radium';
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component{

    constructor(props) {
        super(props);
        console.log("Appjs constructor")
        this.state = {
            persons: [
                {id:'1',name:"Nirmal", age:30},
                {id:'2',name:"Pooja", age:30},
                {id:'3',name:"Anika", age:3}
            ],
            showPerson:true
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("appjs getDerivedStateFromProps ", props);
        return state;
    }


    componentDidMount() {
        console.log("appjs component did mount");
    }

    switchNameHandler = (newName) => {
        console.log("was clicked !");
        this.setState({
            persons: [
                {name:newName, age:30},
                {name:"Pooja Anand", age:30},
                {name:"Anika Jha", age:3}
            ]
        });
    }

    nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.find(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    }

    togglePersonHandler = () => {
         const doesShow = this.state.showPerson;
         this.setState({showPerson:!doesShow});
    }

    deletePersonHandler = (index) => {

        const persons = [...this.state.persons]
        persons.splice(index, 1);
        this.setState({persons:persons});

    }

    render(){

        console.log("appjs render")


        let persons = null;
        if (this.state.showPerson) {

            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />
            );

        }



        return (
            <div className="App">
                <Cockpit
                    showPersons={this.state.showPerson}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}
                />
                {persons}
            </div>
        );
    };


}

export default Radium(App);
