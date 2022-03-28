
var variable;




const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()

const crypto = require('crypto')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: false});
const fetch = require('node-fetch');


app.set('view engine', 'pug');
app.use(express.json())             
app.use(cookieParser())

app.get('/', (req,res) =>{
   res.redirect('/user')
})


app.use('/user', express.static(__dirname + '/server'));
app.get('/user',(req,res)=>{
    res.status(200).sendFile(__dirname + "/server/auth.html")
})

app.post('/user', urlencodedParser, (req,res) =>{

    let hash = crypto.createHash('sha1')
    var token;

            const user = {
                login : req.body.name,
                password : hash.update(req.body.password).digest('hex'),
            };

      fetch('https://helloworldprojectt.herokuapp.com/v1/authorization', {
        	method: 'post',
	        body: JSON.stringify(user),
	        headers: {'Content-Type': 'application/json'}
        })
         .then(res => {
             console.log(res.headers); 
             console.log(res.status); 
             if(res.status === 200){
                token = res.headers.raw()['access_token'];
                final()}
                else if(res.status === 404){
                    stat404();
                }
                else{
                    stat403();
                }
            });

            function final(){
        res.cookie('access_token', Object.values(token)[0],{path: '/cars'})
        res.redirect('/cars');}
            
        function stat404(){
            res.status(404);
            res.render('404', {title: '404: File Not Found'});
        }

        function stat403(){
            res.redirect('/user');
        }
})

app.get('/cars', (req,res)=>{


    var carses;

    fetch('https://helloworldprojectt.herokuapp.com/v1/cars', {
        method: 'get',
        headers: {'access_token': req.cookies.access_token}
    }).then(res => res.json())
    .then(json => {carses = json; final()})
     

        function final(){
            res.render('cars', { taskList: carses }); 
            console.log(typeof(carses))
            console.log(carses)
        }
})

app.use((req, res, next) => {
    res.status(404);
   res.render('404', {title: '404: File Not Found'});
   });


app.listen(8080, () => {
    console.log("Server start...")
})


