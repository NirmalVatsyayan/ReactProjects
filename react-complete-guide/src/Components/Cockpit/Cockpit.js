import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {

    useEffect(()=> {
        console.log('[cockpit.js] useEffect');

        setTimeout(() => {
            console.log("[cockpit.js] set timeout");
        }, 1000);
    }, []);

    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8 px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    }

    let assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push('red');
    }

    if (props.persons.length <= 1) {
        assignedClasses.push('bold');
    }

    if (props.showPerson) {
        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'lightred',
            color: 'black'
        }
    }

    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(' ')}>This is really working!!</p>
            <button
                style={style}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>


    );
};

export default Cockpit;
