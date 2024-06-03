const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const users = [
    {
        username: 'Alice',
        email: 'alice@example.com',
    },
    {
        username: 'Bob',
        email: 'bob@example.com'
    },
    {
        username: 'Charlie',
        email: 'charlie@example.com'
    },
];

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected to MongoDB');
    
    // Remove existing data
    await Thought.deleteMany({});
    await User.deleteMany({});
  
    // Insert new users
    await User.collection.insertMany(users);

    console.info('Seeding complete! 🌱');
    process.exit(0);
});
