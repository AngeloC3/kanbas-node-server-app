import Database from "../Database/index.js";

export function findAllEnrollments() {
  return Database.enrollments;
}

export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = { _id: Date.now().toString(), user: userId, course: courseId }
  Database.enrollments = [...Database.enrollments, newEnrollment];

}

export function unenrollUserInCourse(courseId, userId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment.course !== courseId || enrollment.user !== userId
  );
}
