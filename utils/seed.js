const connection = require('../config/connection');
const { User, Thought } = require('../models');

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

const thoughts = [
    {
        thoughtText: 'This is a thought from Alice',
        username: 'Alice',
        reactions: [],
    },
    {
        thoughtText: 'This is a thought from Bob',
        username: 'Bob',
        reactions: [],
    },
    {
        thoughtText: 'This is a thought from Charlie',
        username: 'Charlie',
        reactions: [],
    },
];

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected to MongoDB');
    
    // Remove existing data
    await Thought.deleteMany({});
    await User.deleteMany({});
  
    // Insert new users
    const insertedUsers = await User.collection.insertMany(users);

    // Insert new thoughts
    const insertedThoughts = await Thought.collection.insertMany(thoughts);

    console.info('Seeding complete! 🌱');
    process.exit(0);
});
