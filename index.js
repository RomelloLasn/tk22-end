const app = require('express') ();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(' server destination https://localhost:${PORT}')
)

app.get('/tshirt' , (req, res) => {
    res.status(200).send({
        tshirt:'👕',
        size:'small'

    })

});

app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({message: 'logo missing!'})
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`, 
    })
});