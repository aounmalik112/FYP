const express = require('express');
const cors = require('cors');
const { connectDB, Wallet, ContactMessage } = require('./db.js'); // Import models and database connection
const Test = require('./model/Item.js'); // Import the Test model from item.js

const app = express();
const walletmodel = require('./model/Item.js');

app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Connect to the database
connectDB();

// Endpoint to create a wallet in the Test schema
app.post('/wallet', (req, res) => {
  walletmodel
    .create(req.body)
    .then((wallet) => res.json(wallet))
    .catch((err) => res.status(500).json({ message: 'Error creating wallet', error: err.message }));
});

// Login endpoint
app.post('/login', (req, res) => {
  const { userType, walletAddress } = req.body;
  walletmodel
    .findOne({ userType: userType, walletAddress: walletAddress })
    .then((user) => {
      if (user.walletaddress===walletAddress) {
        res.json({ status: 'Success', user });
      } else {
        res.status(404).json({ status: 'No record found' });
      }
    })
    .catch((err) => res.status(500).json({ message: 'Error during login', error: err.message }));
});

// Endpoint to store a wallet address using the Wallet schema
app.post('/store-wallet-wallet', async (req, res) => {
  const { walletaddress } = req.body;

  try {
    // Check if the wallet address already exists
    const existingWallet = await Wallet.findOne({ walletaddress });

    if (existingWallet) {
      return res.status(400).json({ message: 'Wallet address already registered in Wallet schema' });
    }

    // Save the wallet address to the Wallet schema
    const newWallet = new Wallet({ walletaddress, userType: 'User' }); // Defaulting userType to 'User'
    await newWallet.save();

    res.json({ message: 'Wallet address saved successfully in Wallet schema' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving wallet address', error: error.message });
  }
});

// Endpoint to store contact messages
app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Save the contact message to the database
    const newMessage = new ContactMessage({
      name,
      email,
      subject,
      message,
    });

    await newMessage.save();

    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message', error: error.message });
  }
});

// Endpoint to fetch all contact messages
app.get('/contact-messages', async (req, res) => {
  try {
    const messages = await ContactMessage.find();

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact messages', error: error.message });
  }
});

// Endpoint to fetch all wallet addresses from Test schema
app.get('/wallets-test', async (req, res) => {
  try {
    const wallets = await Test.find();
    res.json(wallets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching wallet addresses from Test schema', error: error.message });
  }
});

// Endpoint to fetch all wallet addresses from Wallet schema
app.get('/wallets-wallet', async (req, res) => {
  try {
    const wallets = await Wallet.find();
    res.json(wallets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching wallet addresses from Wallet schema', error: error.message });
  }
});

// General error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
