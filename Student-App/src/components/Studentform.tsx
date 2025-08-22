import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [stock, setStock] = useState<string>("");
  const [features, setFeatures] = useState<string[]>([]);

  const allCategories: string[] = ["Electronics", "Fashion", "Grocery", "Toys"];
  const allFeatures: string[] = ["Free Delivery", "Warranty", "Return Policy"];

  type ProductObject = {
    name: string;
    price: string;
    category: string;
    description: string;
    stock: string;
    features: string[];
  };

  const submitProduct = (event: any) => {
    event.preventDefault();

    const newProduct: ProductObject = {
      name,
      price,
      category,
      description,
      stock,
      features,
    };

    console.log("Product Added:", newProduct);

    // reset
    setName("");
    setPrice("");
    setCategory("");
    setDescription("");
    setStock("");
    setFeatures([]);
  };

  const getFeature = (event: any) => {
    const value = event.target.value;
    const check = event.target.checked;
    if (check) {
      setFeatures((data) => [...data, value]);
    } else {
      setFeatures((data) => data.filter((el) => el !== value));
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-2xl shadow-lg dark:bg-gray-900 dark:border-gray-700">

        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Add New Product
        </h2>

        <form className="space-y-5" onSubmit={submitProduct}>
          {/* Product Name */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          />

          {/* Price */}
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          />

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
            required
          >
            <option value="">Select Category</option>
            {allCategories.map((cat, i) => (
              <option key={i}>{cat}</option>
            ))}
          </select>

          {/* Description */}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description"
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          />

          {/* Stock */}
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Enter stock quantity"
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          />

          {/* Features */}
          <div className="flex gap-4 flex-wrap">
            {allFeatures.map((feat) => (
              <label key={feat} className="text-white">
                <input
                  type="checkbox"
                  value={feat}
                  checked={features.includes(feat)}
                  onChange={getFeature}
                />{" "}
                {feat}
              </label>
            ))}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white p-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;







// import { useState } from "react";

// function submitstudents() {
//   const [fname, setfname] = useState<string>("");
//   const [lname, setlname] = useState<string>("");
//   const [email, setemail] = useState<string>("");
//   const [phone, setPhone] = useState<string>("");
//   const [gender, setgender] = useState<string>("");
//   const [std, setstd] = useState<string>("");
//   const [hobby, sethobby] = useState<string[]>([]);

//   const allStd: string[] = [
//     "1st", "2nd", "3rd", "4th", "5th", "6th",
//     "7th", "8th", "9th", "10th", "11th", "12th"
//   ];
//  type studentObject = {
//         firstName: string,
//         lastName: string,
//         email: string,
//         phone: string,
//         gender: string,
//         std: string,
//         hobby: string[]
//     }
//   const submitstudents = (event:any) => {
//     event.preventDefault();
//       const students: studentObject = {
//             firstName: fname,
//             lastName: lname,
//             email: email,
//             phone: phone,
//             gender: gender,
//             std: std,
//             hobby: hobby
//         };

//            console.log(students);

//     setfname("");
//     setlname("");
//     setemail("");
//     setPhone("");
//     setgender("");
//     setstd("");
//     sethobby([]);
//   };

//   const getHobby = (event: any) => {
//     const value = event.target.value;
//     const check = event.target.checked;
//     if (check) {
//       sethobby((data) => [...data, value]);
//     } else {
//       sethobby((data) => data.filter((el) => el !== value));
//     }
//   };

//   return (
//     <div className="flex justify-center mt-10">
//       <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-2xl shadow-lg dark:bg-gray-900 dark:border-gray-700">

//         <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
//           Student Registration
//         </h2>

//         <form className="space-y-5" onSubmit={submitstudents}>
//           {/* First Name */}
//           <input
//             type="text"
//             value={fname}
//             onChange={(e) => setfname(e.target.value)}
//             placeholder="Enter your first name"
//             required
//             className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           {/* Last Name */}
//           <input
//             type="text"
//             value={lname}
//             onChange={(e) => setlname(e.target.value)}
//             placeholder="enter your Last Name"
//             required
//             className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           {/* Email */}
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setemail(e.target.value)}
//             placeholder="enter your Email Address"
//             required
//             className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           {/* Phone */}
//           <input
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             placeholder="enter your Phone Number"
//             required
//             className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           {/* Gender */}
//           <div className="flex gap-4">
//             <label className="text-white">
//               <input
//                 type="radio"
//                 value="Male"
//                 checked={gender === "Male"}
//                 onChange={(e) => setgender(e.target.value)}
//               />{" "}
//               Male
//             </label>
//             <label className="text-white">
//               <input
//                 type="radio"
//                 value="Female"
//                 checked={gender === "Female"}
//                 onChange={(e) => setgender(e.target.value)}
//               />{" "}
//               Female
//             </label>
//           </div>

//           {/* Std */}
//           <select
//             value={std}
//             onChange={(e) => setstd(e.target.value)}
//             className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
//             required
//           >
//             <option value="">Select Standard</option>
//             {allStd.map((s, i) => (
//               <option key={i}>{s}</option>
//             ))}
//           </select>

//           {/* Hobby */}
//           <div className="flex gap-4 flex-wrap">
//             {["Cooking", "Dancing", "Traveling"].map((h) => (
//               <label key={h} className="text-white">
//                 <input
//                   type="checkbox"
//                   value={h}
//                   checked={hobby.includes(h)}
//                   onChange={getHobby}
//                 />{" "}
//                 {h}
//               </label>
//             ))}
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl font-medium hover:opacity-90 transition"
//           >
//             Add Student
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default submitstudents;
