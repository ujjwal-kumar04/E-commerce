const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Connection = require('./database/db');
const Routes = require('./router/route');

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

Connection();
app.use('/', Routes);
const cartRoutes = require('./router/cart-routes');
app.use("/", cartRoutes);
const watchlistRoutes = require('./router/watchlist');
app.use(watchlistRoutes);
const orderRoutes = require('./router/order');
app.use("/", orderRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
