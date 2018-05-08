
// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/drink_locatorAPI');
mongoose.Promise = global.Promise;

var BarSchema = new mongoose.Schema({
 name: {type: String},
 location:
 [{
    city: {type: String},
    latitude: { type: Number},
    longitude: { type: Number},
  }],
 yes:
      [{
      ingred: {type: Array},
      price: {type: Number},
      }],
 created_at: {type: Date, default: new Date},
 updated_at: {type: Date, default: new Date},
 });

 var DrinkSchema = new mongoose.Schema({
     city: {type: String},
    ingred: {type: String},
    price: {type: Number},
  });




 mongoose.model('Drink', DrinkSchema);

 var Drink = mongoose.model('Drink');


mongoose.model('Bar', BarSchema);
 // We are setting this Schema in our Models as 'User'

var Bar = mongoose.model('Bar');


// Require body-parser (to receive post data from clients)
const bodyParser = require('body-parser');
// // Integrate body-parser with our App
 app.use(bodyParser.json());
 //app.use(bodyParser.urlencoded({extended: true}));
// Require path
var path = require('path');

//
// app.all("*", (req,res,next) => {
//   res.sendFile(path.resolve("./public/dist/index.html"))
// });

app.use(express.static( __dirname + '/client/dist' ));


app.get('/bars', function(req, res) {
    Bar.find({}, function (err, bars){
      if(err){
        console.log("Returned an error", err);

        res.json({message: "Error", error: err})
      }

      else {
        res.json({message: "Success", data: bars})
      }
    })
  });



app.get('/map', (req, res) => {
  console.log("does it come here?");


});

app.get('/new/:name/:city/:latitude/:longitude/:ingred/:price', (req, res) => {
    console.log("POST DATA", req.params);
    // new/HappiestHour/dallas/32.791933/-96.806706/St.%20Germain/Strawberry%20garnish/10

     //new/HappiestHour/dallas/32.791933/-96.806706/StGermain/10
   var bar = new Bar({name: req.params.name,
                    location: {
                      city: req.params.city,
                      latitude: req.params.latitude,
                      longitude: req.params.longitude
                    },
                    yes: {
                      ingred: req.params.ingred,
                      price: req.params.price
                    },
                    });
    //
    bar.save(function(err){
      if(err){
        return res.status(401).json(err);
        console.log('something is wrong');
      } else {
        console.log('Added a new bar yay!', bar);
        res.json({message: "Success", data: bar})
      }
    });

});

app.post('/find', (req, res) => {
    console.log("POST DATA", req.body.drink);
    var drink = new Drink({city: req.body.drink.city, price: req.body.drink.price, ingred: req.body.drink.ingred});
    console.log(drink, "does this print out the drink...?");
    drink.save(function(err){
      if(err){
        return res.status(401).json(err);
        console.log('something is wrong');
      } else {
        console.log('Added a new drink to find yay!', drink);
        res.json({message: "Success", data: drink})
      }
    });

});



app.put('/update/:id', (req, res) => {
  //   console.log("update this task", req.params);
  //   let id = req.params.id;
  //   console.log("this should be req.body.name", req.body.name)
  //   let new_name = req.body.name;
  // Author.update({_id:id}, {name: new_name}, function(err, status){
  //   if(err){
  //     console.log("There is an error lil lady here fix it!");
  //     return res.status(401).json(err);
  //   } else {
  //     console.log(status);
  //     res.json({message: "Updated authors shit"});
  //   }
  // });

});


app.get('/remove/:id', (req, res) => {
   //  console.log("Data passed into url", req.params);
   //  let id = req.params.id;
   //
   //  //console.log("whats this shit", req.body);
   //  console.log("this should be id", id);
   // Author.remove({_id: req.params.id}, function(err, status){
   //   if(err){
   //     console.log("There is an error GIRLFREN here fix it!");
   //    return res.status(401).json(err);
   //   } else {
   //     console.log(status);
   //     res.json({message: "Deleted shit"})
   //   }
   // });
});

app.get('/show/:id', (req,res) => {
  console.log("did we get to the server.js");
   console.log("this should be the name", req.params.id);
  // let id = req.params.id;
  //
  // Author.findOne({_id: req.params.id}, function(err, author){
  //   if(err){
  //     console.log("There is an error GIRLFREN here fix it!");
  //     return res.status(401).json(err);
  //   } else {
  //     console.log(author);
  //     res.json({message: "Success", author: author})
  //   }
  // });
});

app.get('/map', (req, res) => {



});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
