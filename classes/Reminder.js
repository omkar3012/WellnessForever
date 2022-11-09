const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date, required: true },
    dosage: { type: Number, required: true },
    time_of_reminder: { type: String, required: true },
},
{timestamps: true});
export default mongoose.models.Reminder || mongoose.model('Reminder', ReminderSchema);