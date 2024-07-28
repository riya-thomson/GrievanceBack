const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://riyathomson:riyathomson@cluster0.7jb1srn.mongodb.net/GrievanceApp?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected successfully...")
})
.catch((error) => {
    console.log(error)
})
