const express = require('express');

const app = express();

app.listen(3000, function() {
    console.log('Server running on port 3000');
});

// For post request to work we need to 
app.use(express.json());  // It is basically a middleware, and when this is written req.body gets defined

let details = [
    {
        id: 1001,
        name: 'Amanda',
        kidneys: {
            first: 'Unhealthy',
            second: 'Healty',

        }
    },
    {
        id: 1002,
        name: 'Samuel',
        kidneys: {
            first: 'Unhealthy',
            second: 'Unhealthy',
        }
    },
    {
        id: 1003,
        name: 'Kathey',
        kidneys: {
            first: 'Healthy',
            second: 'Healthy',
        }
    }
]

app.get("/patients",function(req,res) {
    
    let simpleStrings = details.map(person => {
        return `ID: ${person.id}, Name: ${person.name}, Kidney 1: ${person.kidneys.first}, Kidney 2: ${person.kidneys.second}`;
    }).join('\n');

    res.send(simpleStrings);
});

app.get("/detail",function(req,res) {
    
    const id = parseInt(req.query.id, 10);
    const patient = details.find(detail => detail.id === id); 

    if (patient) 
    {
        const result = `ID: ${patient.id}, Name: ${patient.name}, Kidney 1: ${patient.kidneys.first}, Kidney 2: ${patient.kidneys.second}`;
        res.send(result); 
    } 
    else 
    {
        res.status(404).send('Person not found');
    }
});

// In the post request the data is sent in the body
app.post('/add-detail',function(req,res) {
    const id = parseInt(req.body.userId);
    const name = req.body.userName;
    const firstKidneyHealth = req.body.kidney1;
    const secondKidneyHealth = req.body.kidney2;

    const newPatient = {
        id: id,
        name: name,
        kidneys: {
            first: firstKidneyHealth,
            second: secondKidneyHealth,
        }
    }

    details.push(newPatient);
    
    res.status(200).send('Patient has been added successfully');
})

// In the put request as well the data is sent like post and is used to update the resource on server
app.put('/update-detail', function(req, res) {
    const id = parseInt(req.body.userId);
    const kidneyNumber = req.body.kidneyNumber;
    const kidneyHealth = req.body.kidneyHealth;

    let found = false;

    details = details.map(person => {
        if (person.id === id) 
        {
            found = true;
            return {
                ...person, 
                kidneys: {
                    ...person.kidneys,
                    [kidneyNumber]: kidneyHealth // Update only the specified kidney
                }
            };
        }
        return person;
    });

    console.log(details);

    if (found) 
    {
        res.send(`Kidney health updated for ID: ${id}`);
    } 
    else 
    {
        res.status(404).send('Person not found');
    }
});

// In the delete request we can send the id of the resource we want to delete
app.delete('/delete-detail', function(req, res) {
    const id = parseInt(req.body.userId, 10);

    const initialLength = details.length;
    details = details.filter(person => person.id !== id);

    console.log(details);

    if (details.length < initialLength) 
    {
        res.send(`Detail with ID: ${id} has been deleted.`);
    } 
    else 
    {
        res.status(404).send('Person not found.');
    }
});