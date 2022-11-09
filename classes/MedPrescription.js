const mongoose = require("mongoose");

const MedPrescriptionSchema = new mongoose.Schema(
  {
    medicine: { type: Array, required: true },
    name: { type: String},
    dosage: { type: Number, required: true },
    max_days: { type: Number, required: true },

  },
  { timestamps: true }
);
export default mongoose.models.MedPrescription ||
  mongoose.model("Reminder", MedPrescriptionSchema);
