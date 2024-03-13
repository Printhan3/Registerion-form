import React, { useState } from 'react';


export const Reg = () => {
  const [user, setUser] = useState({
    name: "Printhan",
    age: "25",
    gender: "Male",
    isMarried: true,
    country: "SriLanka",
    bio: "Write something about yourself"
    
  });

  function ChangeHandler(e) {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUser({ ...user, [name]: value });
  }
  return (
    <>
    <div className="container">
      <h1 className="Tittle">Registerion Form</h1>
      <table>
      <tbody>
        <tr>
          <td className="label">Name</td>
          <td>{user.name}</td>
          </tr>
          <tr>
          <td className="label">Age</td>
          <td>{user.age}</td>
          </tr>
          <tr>
          <td className="label">Gender</td>
          <td>{user.gender}</td>
          </tr>
          <tr>
          <td className="label">isMarried</td>
          <td>{user.isMarried ? "Married" : "Not Married"}</td>
          </tr>
          <tr>
          <td className="label">Country</td>
          <td>{user.country}</td>
          </tr>
          <tr>
          <td className="label">Bio</td>
          <td>{user.bio}</td>
          </tr>
          </tbody></table>
          
          <input type="text" placeholder="Full Name" name="name" onChange={ChangeHandler} value={user.name}/>
          <input type="number" placeholder="Age" name="age" onChange={ChangeHandler} value={user.age} />
          <div className="gender">
            <label htmlFor="Male">
              <input type="radio" name="gender" onChange={ChangeHandler} id="male" checked={user.gender == "Male"}
               value="Male"/>
              Male
              </label>
              <label htmlFor="Female">
              <input type="radio" name="gender" onChange={ChangeHandler} id="female" checked={user.gender == "Female"}
               value="Female"/>
              Female
              </label>
          </div>
          <div className="isMarried">
          <label htmlFor="isMarried">
            <input type="checkbox" onChange={ChangeHandler} name="isMarried" id="isMarried" checked={user.isMarried}/>
            isMarried
          </label>
          </div>
<form>
          <div className="select country">
            <label htmlFor="country">Select Country:</label>
            <select name="country"  id="country" onChange={ChangeHandler} value={user.country}>
              <option value="Srilanka">Srilanka</option>
              <option value="India">India</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
              <option value={"Canada"}>Canada</option>
              <option value={"Singapore"}>Singapore</option>
            </select>
          </div>
          <textarea name="bio" id="bio" cols="30" rows="5" value={user.bio} placeholder="write about you" onChange={ChangeHandler}></textarea>
</form>
          </div>
          
          
      </>
          
  )
}

