


require('dotenv').config()
const express = require('express');
const app = express()
const cors = require('cors');
const institutionRoutes = require('./routes/institution.route');
const adminRoutes = require("./routes/admin.route");
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 2419


app.use('/institutions', institutionRoutes);
app.use('/admin', adminRoutes )

app.listen(port, () => {
    console.log(`listen at port ${port}`);

})

// app.get('/school', getAllInstitutions)

require('./connection')