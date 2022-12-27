/*
Desarrollar un servidor basado en node.js, express y ejs que disponga de un formulario en su ruta raíz
(creado con una plantilla de ejs) para ingresar los siguientes datos de una persona: nombre, país y goles. 
La información será enviada mediante el método post al endpoint '/personas
Representar por debajo del mismo formulario los datos históricos ingresados más el actual en forma de tabla.
En el caso de no encontrarse información mostrar el mensaje 'No se encontraron datos' en lugar de la tabla.

Se sugiere el uso de bootstrap para los estilos de las plantillas. 


*/
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

const players = [];

app.get('/', (req, res) => {
  res.render('form.ejs', { players: players.sort((a, b) => b.goals - a.goals) });
});

app.post('/jugadores', async (req, res) => {
  const { name, country, goals } = req.body;
  players.push({ name, country, goals });
  res.redirect('/');
});

app.listen(8080, (req, res) => console.log('Listening'));
