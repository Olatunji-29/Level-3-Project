const express = require('express');
const app = express()
const cors = require('cors');
const institutionRoutes = require('./routes/institution.route');
require('dotenv').config()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 2419

app.use('/institutions', institutionRoutes);

app.listen(port, () => {
    console.log(`listen at port ${port}`);

})

// app.get('/school', getAllInstitutions)

require('./connection')