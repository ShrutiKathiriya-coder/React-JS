import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

function Studentform() {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [std, setStd] = useState<string>("");
  const [hobby, setHobby] = useState<string[]>([]);
  const [error, setError] = useState<any>({});
  const [allStudents, setAllStudents] = useState<studentObject[]>(
    JSON.parse(localStorage.getItem("students") || "[]")
  );
  const [editId, setEditId] = useState<number>();

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(allStudents));
  }, [allStudents]);

  const allstd: string[] = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
  ];

  const allhobby: string[] = ["Reading", "Coding", "Dancing"];

  type studentObject = {
    fname: string;
    lname: string;
    email: string;
    phone: string;
    gender: string;
    std: string;
    hobby: string[];
  };

  const getHobby = (event: any) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) setHobby((data) => [...data, value]);
    else setHobby((data) => data.filter((element) => element !== value));
  };

  const validation = () => {
    const error: any = {};

    if (!fname.trim()) error.fname = "first name is required";
    if (!lname.trim()) error.lname = "last name is required";
    if (!email.trim()) error.email = "email is required";
    else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    )
      error.email = "invalid email format";

    if (!phone.trim()) error.phone = "phone is required";
    else if (!/^(?:\+?91[-\s]?|0)?[6-9]\d{9}$/.test(phone))
      error.phone = "invalid phone number";

    if (!gender.trim()) error.gender = "gender is required";
    if (!std.trim() || std === "select") error.std = "std is required";
    if (hobby.length == 0) error.hobby = "hobby is required";

    setError(error);
    return Object.keys(error).length;
  };

  const submitStudForm = (event: any) => {
    event.preventDefault();
    if (validation() !== 0) return;

    const student: studentObject = {
      fname,
      lname,
      email,
      phone,
      gender,
      std,
      hobby,
    };

    if (editId === undefined) {
      setAllStudents((allStudents) => [...allStudents, student]);
      toast.success("Student added successfully", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to update this student?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
        cancelButtonText: "No, cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          const data = allStudents.map((stud, index) =>
            editId === index ? student : stud
          );
          setAllStudents(data);

          // ✅ Toastify update notification
          toast.info("Student updated successfully", {
            position: "top-right",
            autoClose: 2000,
          });
        } else {
          toast.warning("Update cancelled", {
            position: "top-right",
            autoClose: 1500,
          });
        }
      });
    }


    // Reset form
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setGender("");
    setStd("");
    setHobby([]);
    setEditId(undefined);
  };

  const deleteStudent = (i: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This student will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "✅ Yes, delete",
      cancelButtonText: "❌ Cancel",
      reverseButtons: true, // Cancel left, Confirm right (better UX)
    }).then((result) => {
      if (result.isConfirmed) {
        setAllStudents((allStudents) =>
          allStudents.filter((_, index) => index !== i)
        );

        Swal.fire({
          title: "Deleted!",
          text: "Student has been removed successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Student is safe 🙂",
          icon: "info",
          timer: 1200,
          showConfirmButton: false,
        });
      }
    });
  };


  const editStudent = (i: number) => {
    setEditId(i);
    setFname(allStudents[i].fname);
    setLname(allStudents[i].lname);
    setEmail(allStudents[i].email);
    setPhone(allStudents[i].phone);
    setGender(allStudents[i].gender);
    setStd(allStudents[i].std);
    setHobby(allStudents[i].hobby);
  };

  return (
    <>
      {/* Form */}
      <div className="w-full flex justify-center mt-10 px-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <form className="space-y-6" onSubmit={submitStudForm}>
            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
              {editId === undefined ? "Add New Student" : "Update Student"}
            </h2>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              Please fill out all the details below
            </p>

            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                First Name
              </label>
              <input
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                placeholder="Enter you first name"
                className={`mt-1 w-full p-2.5 rounded-lg text-sm border focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition ${error.fname ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } bg-gray-50 dark:bg-gray-800 dark:text-white`}
              />
              {error.fname && (
                <p className="text-red-500 text-xs mt-1">{error.fname}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                placeholder="Enter your last name"
                className={`mt-1 w-full p-2.5 rounded-lg text-sm border focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition ${error.lname ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } bg-gray-50 dark:bg-gray-800 dark:text-white`}
              />
              {error.lname && (
                <p className="text-red-500 text-xs mt-1">{error.lname}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`mt-1 w-full p-2.5 rounded-lg text-sm border focus:ring-2 focus:ring-green-400 focus:border-green-400 transition ${error.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } bg-gray-50 dark:bg-gray-800 dark:text-white`}
              />
              {error.email && (
                <p className="text-red-500 text-xs mt-1">{error.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="enter you phone"
                className={`mt-1 w-full p-2.5 rounded-lg text-sm border focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition ${error.phone ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } bg-gray-50 dark:bg-gray-800 dark:text-white`}
              />
              {error.phone && (
                <p className="text-red-500 text-xs mt-1">{error.phone}</p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Gender
              </label>
              <div className="flex gap-3 mt-2">
                {["male", "female"].map((g) => (
                  <button
                    type="button"
                    key={g}
                    onClick={() => setGender(g)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${gender === g
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                      }`}
                  >
                    {g.charAt(0).toUpperCase() + g.slice(1)}
                  </button>
                ))}
              </div>
              {error.gender && (
                <p className="text-red-500 text-xs mt-1">{error.gender}</p>
              )}
            </div>

            {/* Standard */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Standard
              </label>
              <select
                value={std}
                onChange={(e) => setStd(e.target.value)}
                className="mt-1 w-full p-2.5 rounded-lg text-sm border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-gray-50 dark:bg-gray-800 dark:text-white"
              >
                <option value="">Select Standard</option>
                {allstd.map((element, index) => (
                  <option key={index}>{element}</option>
                ))}
              </select>
              {error.std && (
                <p className="text-red-500 text-xs mt-1">{error.std}</p>
              )}
            </div>

            {/* Hobby */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Hobby
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {allhobby.map((data, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      hobby.includes(data)
                        ? setHobby(hobby.filter((h) => h !== data))
                        : setHobby([...hobby, data])
                    }
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${hobby.includes(data)
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                      }`}
                  >
                    {data}
                  </button>
                ))}
              </div>
              {error.hobby && (
                <p className="text-red-500 text-xs mt-1">{error.hobby}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 rounded-lg shadow-md font-medium text-sm text-white transition transform hover:scale-105 ${editId === undefined
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                  : "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
                }`}
            >
              {editId === undefined ? "Add Student" : "Update Student"}
            </button>
          </form>
        </div>
      </div>



      {/* Student Table */}
     <div className="max-w-6xl mx-auto mt-12 px-4">
  {/* Card Container */}
  <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden border dark:border-gray-700">
    
    {/* Header Section */}
    <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">
      <h2 className="text-2xl  font-semibold text-gray-800 dark:text-gray-100">
        🎓 Students List
      </h2>
      
    </div>

    {/* Table Section */}
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 uppercase text-xs">
          <tr>
            <th className="px-6 py-3">No</th>
            <th className="px-6 py-3">First Name</th>
            <th className="px-6 py-3">Last Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Phone</th>
            <th className="px-6 py-3">Gender</th>
            <th className="px-6 py-3">Std</th>
            <th className="px-6 py-3">Hobby</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allStudents.map((stud, index) => (
            <tr
              key={index}
              className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                {index + 1}
              </td>
              <td className="px-6 py-4 dark:text-white">{stud.fname}</td>
              <td className="px-6 py-4 dark:text-white">{stud.lname}</td>
              <td className="px-6 py-4 dark:text-white">{stud.email}</td>
              <td className="px-6 py-4 dark:text-white">{stud.phone}</td>
              <td className="px-6 py-4 dark:text-white">{stud.gender}</td>
              <td className="px-6 py-4 dark:text-white">{stud.std}</td>
              <td className="px-6 py-4 dark:text-white">
                {stud.hobby.join(", ")}
              </td>
              <td className="px-6 py-4 flex gap-2 justify-center">
                <button
                  onClick={() => editStudent(index)}
                  className="px-3 py-1 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-white text-xs shadow transition"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => deleteStudent(index)}
                  className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs shadow transition"
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
          {allStudents.length === 0 && (
            <tr>
              <td
                colSpan={9}
                className="text-center py-6 text-gray-500 dark:text-gray-400"
              >
                No students added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>


      <ToastContainer />
    </>
  );
}

export default Studentform;
