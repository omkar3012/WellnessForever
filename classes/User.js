const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
    name: { type: String, required: true },
    contact_number: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
},
{timestamps: true});
export default mongoose.models.User || mongoose.model('Reminder', UserSchema);