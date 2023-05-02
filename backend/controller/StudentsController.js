// model -- StudentSchema
import Student from "../model/StudentsSchema.js";
import Addcontact from "../model/contact.js";
import Newuser from "../model/userschema.js";
import Datainp from "../model/input.js";

const getStudents = async (req, res) => {
  try {
    const allStudents = await Student.find({});
    return res.status(200).json(allStudents);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const data1 = async (req, res) => {
  try {
    console.log(req.params);
    const getdata = await Datainp.find({type:"60 sec game"});
    return res.status(200).json(getdata);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const data2 = async (req, res) => {
  try {
    console.log(req.params);
    const getdata = await Datainp.find({type:"180 sec game"});
    return res.status(200).json(getdata);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const data3 = async (req, res) => {
  try {
    console.log(req.params);
    const getdata = await Datainp.find({type:"300 sec game"});
    return res.status(200).json(getdata);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};


const getFilteredStudent = async (req, res) => {
  try {
    console.log("getStudent filtered data", req.body);

    const filteredStudents = await Student.find({
      $and: [{ standard: req.body.standard }, { section: req.body.section }],
    });
    console.log("getfilterddata", filteredStudents);
    return res.status(200).json(filteredStudents);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const editStudent = async (req, res) => {
  try {
    console.log("editStudent", req.body);

    const updatedStudent = await Student.findByIdAndUpdate(
      req.body._id,
      req.body
    );
    console.log("Student updated", updatedStudent);
    return res.status(200).json({ message: "student updated successfully" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const deleteStudent = async (req, res) => {
  try {
    console.log("deleteStudent", req.body);

    const deletedStudent = await Student.findByIdAndDelete(req.body._id);
    console.log("Student deleted", deletedStudent);
    return res.status(200).json({ message: "student deleted successfully" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const postmsg = async (req, res) => {
  try {
    console.log("addmsg", req.body);

    const data = {
      name: req.body.f1,
      email: req.body.f2,
      message: req.body.f3,
    };

    const msg = new Addcontact(data);
    await msg.save();

    return res.status(200).json(msg);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

const signup = async (req, res) => {
  try {
    console.log("user", req.body);

    const data = {
      email: req.body.f1,
      password: req.body.f2,
    };

    const user1 = new Newuser(data);
    await user1.save();

    return res.status(200).json(user1);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

const datadb = async (req, res) => {
  console.log("hell");
  try {
    console.log(req.body);
    const data = {
      wpm: req.body.data1,
      accuracy: req.body.data2,
      type: req.body.data4+" sec game",
      time: req.body.data3,
    };

    const inp1 = new Datainp(data);
    await inp1.save();

    return res.status(200).json(inp1);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

const signin = async (req, res) => {
  try {
    console.log("get login data", req.query.email);

    // const data = await Newuser.find({});
    const data = await Newuser.find({email:req.query.email});

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export {
  postmsg,
  signup,
  signin,
  datadb,
  data1,
  data2,
  data3,
};
