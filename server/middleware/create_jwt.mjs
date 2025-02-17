import bodyParse from "body-parser";
import Jwt from "jsonwebtoken";
export const createJwtForManagers = (req, res, next) => {
    let jwt_token = Jwt.sign(process.env.MANAGER_SECRET_KEY, process.env.MANAGER_SECRET_KEY);

    res.setHeader("Set-Cookie", `jwt_token=${jwt_token}; Path=/; HttpOnly`);
    res.status(200).send({ token: jwt_token });
    return jwt_token;
};

export const createJwtForMentors = (req, res, next) => {
    let jwt_token = Jwt.sign(process.env.MENTOR_SECRET_KEY, process.env.MENTOR_SECRET_KEY);

    res.setHeader("Set-Cookie", `jwt_token=${jwt_token}; Path=/; HttpOnly`);
    res.status(200).send({ token: jwt_token });
    return jwt_token;
};

const studentDetails = {
    name: "hppy",
    email: "happy@gmail.cm",
    usn: "4so22",
};

export const createJwtForStudents = async (req, res, next) => {
    let jwt_token = await Jwt.sign(studentDetails, process.env.STUDENT_SECRET_KEY);
    res.setHeader("Set-Cookie", `jwt_token=${jwt_token}; Path=/; HttpOnly`);
    req.jwt_token = jwt_token; // Store jwt_token in the request object

    next();
};
