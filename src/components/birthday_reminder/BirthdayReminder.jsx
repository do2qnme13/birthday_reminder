import React, { useState } from "react";
import List from "../list/List";
import "./BirthdayReminder.css";

const initialPeople = [
    { id: 1, name: "Alice Johnson", age: 29 },
    { id: 2, name: "Bob Smith", age: 34 },
    { id: 3, name: "Charlie Brown", age: 26 },
];

export default function BirthdayReminder() {
    const [people, setPeople] = useState(initialPeople);

    const handleClearPeople = () => {
        setPeople([]);
    };

    return (
        <div className="container">
            <section className="birthday-container">
                <h3>
                    {people.length}{" "}
                    {people.length > 1 ? "Birthdays" : "Birthday"} Today
                </h3>
                <List people={people} />
                <button className="clear-btn" onClick={handleClearPeople}>
                    Clear All
                </button>
            </section>
        </div>
    );
}
