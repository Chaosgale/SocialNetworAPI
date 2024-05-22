const { Schema, model} = require('mongoose');
// const { Thought } = require('.');

const reactionSchema = require('../Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => new Date(timestamp).toLocaleString(),
        },
        username: {
            type: String,
            required: true,
        },
        reaction: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtaul('reactionCount').get(function() {
    return this.reactions.length
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;