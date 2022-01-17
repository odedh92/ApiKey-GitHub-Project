require('dotenv').config({ path: '.env' });

const
    express = require('express'),
    app = express(),
    PORT = 3000;

app.use(express.json());
app.use(require('cors')());

require('./router')(app);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
