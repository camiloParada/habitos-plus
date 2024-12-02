var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configurar middleware para manejar JSON
app.use(bodyParser.json());

app.post('/api/habits', function (req, res) {
    var name = req.body.name;
    var description = req.body.description;
    var category = req.body.category;

    if (!name || !category) {
        return res.status(400).send('Faltan campos obligatorios');
    }

    var newHabit = { id: Date.now(), name: name, description: description, category: category };
    res.status(201).send({ message: 'Hábito guardado', habit: newHabit });
});

var PORT = 3000;
app.listen(PORT, function () {
    console.log('Servidor corriendo en http://localhost:' + PORT);
});
