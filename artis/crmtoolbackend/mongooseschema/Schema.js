const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for the Customer
const customerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    // Other customer fields
});

// Schema for the Employee
const employeeSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    email:{type:String,required}
    // Other employee fields
});

// Schema for the Task
const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' }, // Reference to the Customer
    assignedTo: { type: Schema.Types.ObjectId, ref: 'Employee' }, // Reference to the Employee
    // Other task fields
});

const Customer = mongoose.model('Customer', customerSchema);
const Employee = mongoose.model('Employee', employeeSchema);
const Task = mongoose.model('Task', taskSchema);

module.exports = { Customer, Employee, Task };
