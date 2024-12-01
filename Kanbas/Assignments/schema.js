import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
 {
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel"},
    avail_at: Date,
    avail_until: Date,
    due_at: Date,
    points: Number,
    description: String,
 },
 { collection: "assignments" }
);
export default assignmentSchema;