let express = require("express");
let app = express();
// esta es la línea que le dice al servidor utilizar la carpeta "/estático" para el contenido estático
app.use(express.static(__dirname + "/static"));

// Esto establece la ubicación donde Express buscará por vistas EJS
app.set('views', __dirname + '/views'); 
// Ahora establezcamos el motor de vista para que Express sepa que estamos usando EJS al contrario de otro motor de plantilla como Jade
app.set('view engine', 'ejs');

// ruta raíz
app.get('/', function (req, res){
    res.render('index', {title: "my Express project"});
});

// solicita el body-parser
var bodyParser = require('body-parser');
// ¡úsalo!
app.use(bodyParser.urlencoded({extended: true}));

  // ruta para procesar los datos del nuevo formulario del usuario:
app.post('/result', function (req, res){
    console.log("POST DATA \n\n", req.body)
    
    let form = req.body;
        res.render('result',{campos:form});
})

app.listen(8000, function() {
    console.log ("listening in port 8000");
})