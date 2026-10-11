require('node:dns').setServers(['8.8.8.8', '1.1.1.1']);
require('dotenv').config();
// ...rest of your file stays the same

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');

connectDB();

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));

app.get('/', (req, res) => res.send('API is running'));
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));