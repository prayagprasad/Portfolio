mongoose = require('mongoose');
// app = express();
const MONGO_URI = 'mongodb://localhost:27017/Week8';
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function (err) {
  console.log("Error occurred during connection" + err);
});

db.once('connected', function () {
  console.log(`Connected to ${MONGO_URI}`);
});

// creating the schema
const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  Gender: { type: String },
  Salary: { type: Number }
});

// creating model named as modelname with collection named as personCollection
const person_doc = mongoose.model('modelname', PersonSchema, 'personCollection');

// creating a single document
const doc1 = new person_doc({ 
  name:'Ares',
  age:19,
  Gender:"Male",
  Salary:6969
 });


// adding one document in the collection
doc1.save()
  .then((doc1) => {
    console.log("New Article Has been Added Into Your DataBase.", doc1);
  })
  .catch((err) => {
    console.error(err);
  });

  manypersons=[{ name: 'Simon',age:42,Gender:"Male",Salary:3456 }
    ,{ name: 'Neesha',age:23,Gender:"Female",Salary:1000 }
    ,{ name: 'Mary',age:27,Gender:"Female",Salary:5402 },
    { name: 'Mike',age:40,Gender:"Male",Salary:4519 }
    ]
   
    person_doc.insertMany(manypersons).then(function(){
    console.log("Data inserted") // Success
    }).catch(function(error){
    console.log(error) // Failure
    }); 

    person_doc.find({})

// finding all the documents in the collection
// find all users

.sort({ Salary: 1 }) // Sort by Salary in ascending order
.select("name Salary age") // Select name, Salary, and age only
.limit(10) // Limit to 10 items
.exec()
.then(docs => {
  console.log("Showing multiple documents");
  docs.forEach(function (doc) {
    console.log(doc.age, doc.name);
  });
})
.catch(err => {
  console.error(err);
});
