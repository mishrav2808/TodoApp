const mongoose = require('mongoose');

const TodoItemSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    is_Completed:{
        type: Boolean,
        default: false
    },
    is_Deleted:{
        type: Boolean,
        default: false
    }
})

const Todos = new mongoose.model('todos', TodoItemSchema);
module.exports = Todos;