let express = require('express');
let app = express();
let mongoose = require('mongoose');
// Main entry point for the back-end server
// Sets up Express and imports HR and Employee routes
let hrRoutes = require('./routes/hr_routes');
let empRoutes = require('./routes/emp_routes');
// indicating server incoming json format data1
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Hrmanagement") 
    .then(() => {
        console.log("DB connect success");
    })
    .catch((err) => {
        console.log(err);
    });

// Routes
app.use('/api/hr', hrRoutes);

app.use('/api/emp', empRoutes);

// Run the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});