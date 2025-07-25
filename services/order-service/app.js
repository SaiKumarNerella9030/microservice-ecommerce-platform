const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/orders/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const userResponse = await axios.get(`http://user-service:3000/api/users/${userId}`);
    res.json({
      orderId: 101,
      item: "Laptop",
      user: userResponse.data
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user details" });
  }
});

app.listen(3001, () => {
  console.log("Order Service running on port 3001");
});

