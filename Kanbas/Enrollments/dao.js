import Database from "../Database/index.js";

export function findAllEnrollments() {
  return Database.enrollments;
}

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
  Database.enrollments = enrollments;
}

export function unenrollUserInCourse(enrollmentId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment._id !== enrollmentId
  );
}
