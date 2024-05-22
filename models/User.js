const { Schema, model} = require('mongoose');
// const { Thought } = require('.');

const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

const userSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [emailRegex, 'Enter a valid email address'],
        },
        thoughts:[
            {
              type: Schema.Types.ObjectId,
              ref: 'thought',
            },
          ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtauls: true,
        },
        id: false,
    }
);

userSchema.virtaul('friendCount').get(function() {
    return this.friends.length
})

const User = model('User', userSchema);

model.exports = User;