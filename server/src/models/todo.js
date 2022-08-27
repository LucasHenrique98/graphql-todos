const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  description: { type: String },
  done: { type: Boolean, default: false },
});

TodoSchema.statics.complete = function (id) {
  return this.findById(id).then((todo) => {
    todo.done = true;
    return Promise.all([todo.save()]).then(([todo]) => todo);
  });
};

module.exports = mongoose.model('todo', TodoSchema);
