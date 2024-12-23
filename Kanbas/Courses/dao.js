import model from "./model.js";
import enrollmentModel from '../Enrollments/model.js'

export function findAllCourses() {
  return model.find();
}

export function findCoursesForEnrolledUser(userId) {
    const { courses, enrollments } = Database;
    const enrolledCourses = courses.filter((course) =>
      enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
    return enrolledCourses;
  }

export function createCourse(course) {
  delete course._id;
  return model.create(course);
};

export async function deleteCourse(courseId) {
  await enrollmentModel.deleteMany({ course: courseId });
  return model.deleteOne({ _id: courseId });
 } 

export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}

export function findEnrolledUserCourse(userId, courseId) {
  const { courses, enrollments } = Database;
  const enrolledCourse = courses.find((course) =>
    course._id === courseId &&
    enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id)
  );
  return enrolledCourse;
}

  