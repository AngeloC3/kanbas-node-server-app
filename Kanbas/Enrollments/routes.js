import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  const enrollUserInCourse = async (req, res) => {
    const { uid } = req.body;
    let { cid } = req.params;
    if (uid === "current") {
      const currentUser = req.session["currentUser"];
      uid = currentUser._id;
    }
    await dao.enrollUserInCourse(uid, cid);
    res.sendStatus(200);
  };
 

  const unenrollUserInCourse = async(req, res) => { 
    let { uid, cid } = req.params;
    if (uid === "current") {
      const currentUser = req.session["currentUser"];
      uid = currentUser._id;
    }
    await dao.unenrollUserFromCourse(uid, cid);
    res.sendStatus(200);
  };


  app.get("/api/enrollments", (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.json(enrollments);
  });

  app.post("/api/enrollments/enroll/:cid/", enrollUserInCourse);
  app.post("/api/enrollments/unenroll/:cid/:uid", unenrollUserInCourse);
}
