import * as dao from "./dao.js";
import * as coursesDao from '../Courses/dao.js';

export default function EnrollmentRoutes(app) {
  const enrollUserInCourse = (req, res) => { 
    const { courseId } = req.params;
    const { userId } = req.body;
    const course = coursesDao.findEnrolledUserCourse(userId, courseId)
    if (course) {
        res.sendStatus(401);
        return;
    }
    dao.enrollUserInCourse(userId, courseId)
    res.sendStatus(200);
  };

  const unenrollUserInCourse = (req, res) => { 
    const { courseId, userId } = req.params;
    dao.unenrollUserInCourse(courseId, userId)
    res.sendStatus(200);
  };


  app.get("/api/enrollments", (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.send(enrollments);
  });

  app.post("/api/enrollments/enroll/:courseId/", enrollUserInCourse);
  app.post("/api/enrollments/unenroll/:courseId/:userId", unenrollUserInCourse);
}
