import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('http://localhost:3000/user/cards');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCards(data.cards);
            } catch (error) {
                console.error('Failed to fetch cards:', error);
            }
        };

        fetchCards();
    }, []);

    const addCard = (newCard) => {
        setCards((prevCards) => [...prevCards, newCard]);
    };

    return (
        <div style={appStyle}>
            <CardCreator onCardCreated={addCard} />
            <div style={cardsContainerStyle}>
                {cards.map((card) => (
                    <Card key={card.name} {...card} />
                ))}
            </div>
        </div>
    );
}


function Card(props) {
    return (
        <div style={cardStyle}>
            <h1 style={titleStyle}>{props.name}</h1>
            <h3 style={descriptionStyle}>{props.description}</h3>
            <h4 style={interestsStyle}>
                {props.interests.map((interest, index) => (
                    <div key={index} style={interestItemStyle}>{interest}</div>
                ))}
            </h4>
            <div style={linkStyle}>
                <a href={props.linkedin} style={linkItemStyle}>LinkedIn</a>
                <a href={props.github} style={linkItemStyle}>GitHub</a>
            </div>
        </div>
    );
}


function CardCreator({ onCardCreated }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [interests, setInterests] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");

    const handleSubmit = async () => {
        const cardData = {
            name: name,
            description: description,
            interests: interests.split(',').map(interest => interest.trim()), // Convert to array
            linkedin: linkedin,
            github: github,
        };

        try {
            const response = await fetch("http://localhost:3000/user/create-card", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cardData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Card created successfully:', data);
            onCardCreated(cardData); // Pass the newly created card back to App
            resetForm();
        } catch (error) {
            console.error('Error creating card:', error);
        }
    };

    const resetForm = () => {
        setBusinessName('');
        setBusinessDescription('');
        setInterests('');
        setLinkedIn('');
        setGithub('');
    };

    return (
        <div style={formStyle}>
            <h2 style={{ marginBottom: '20px' }}>Create Your Business Card</h2>
            <input type="text" onChange={(e) => {
                setName(e.target.value);
                console.log(e.target.value);
            }} id='business_name' placeholder='Enter business name' style={inputStyle} />
            <input type="text" onChange={(e) => {
                setDescription(e.target.value);
                console.log(e.target.value);
            }} id='business_description' placeholder='Enter business description' style={inputStyle} />
            <input type="text" onChange={(e) => {
                setInterests(e.target.value);
                console.log(e.target.value);
            }} id='interests' placeholder='Enter comma separated interests' style={inputStyle} />
            <input type="text" onChange={(e) => {
                setLinkedin(e.target.value);
                console.log(e.target.value);
            }} id='linked_in' placeholder='Enter LinkedIn link' style={inputStyle} />
            <input type="text" onChange={(e) => {
                setGithub(e.target.value);
                console.log(e.target.value);
            }} id='github' placeholder='Enter GitHub link' style={inputStyle} />
            <button onClick={handleSubmit} style={buttonStyle}>Create Business Card</button>
        </div>
    );
}


const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
};

const cardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px',
};

const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '350px',
    margin: '10px',
    textAlign: 'center',
};

const titleStyle = {
    fontSize: '24px',
    margin: '10px 0',
};

const descriptionStyle = {
    fontSize: '18px',
    margin: '10px 0',
    color: '#666',
};

const interestsStyle = {
    margin: '10px 0',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
};

const interestItemStyle = {
    backgroundColor: '#e9ecef',
    borderRadius: '4px',
    padding: '5px 10px',
    margin: '5px',
    display: 'inline-block',
};

const linkStyle = {
    marginTop: '15px',
};

const linkItemStyle = {
    color: '#007bff',
    textDecoration: 'none',
    margin: '0 10px',
    transition: 'color 0.3s',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: 'auto',
};

const inputStyle = {
    padding: '10px',
    margin: '5px 0',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    width: '100%',
};

const buttonStyle = {
    padding: '10px',
    marginTop: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#28282b',
    color: '#fff',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.3s',
};

export default App;
