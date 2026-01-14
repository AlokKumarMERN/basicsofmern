// import { useState } from "react";
// import axios from "axios";


// const UserForm = () => {
//   // State to store form input
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//   });

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await axios.post("http://localhost:5000/api/users", formData);

//     alert("User Saved!");
//     setFormData({ name: "", email: "", age: "" });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>User Form</h2>

//       <input
//         type="text"
//         name="name"
//         placeholder="Enter name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Enter email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />

//       <input
//         type="number"
//         name="age"
//         placeholder="Enter age"
//         value={formData.age}
//         onChange={handleChange}
//         required
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default UserForm;


import { useState } from "react";
import axios from "axios";

function UserForm() {
  const [name, setName] = useState("gdd");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/users", {
      name,
      email,
      age,
    });

    alert("User Saved");

    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <form onSubmit={submitForm}>
      <h2>User Form</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
