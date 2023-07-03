import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

//   The initial value of avatar is set to null. 
// The setAvatar function is used to update the value of the avatar state variable.
  const [avatar, setAvatar] = useState(null);

  const handledSubmit = () => {
    console.log("ffff");
  };
//   The handleFileInputChange function is an event handler 
//   that gets triggered when a file is selected using the file
//    input field. It retrieves the selected file from the event
//     (e.target.files[0]) and sets it as the new value for the
//      avatar state variable using the setAvatar function.
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    // style from tailwind css
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          REGISTER FOR AN ACCOUNT
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text "
                  autoComplete="name"
                  required
                  value={name}
                  // So, when the user types or changes the value in the email input field,
                  //  the onChange event is triggered. The arrow function is then called with
                  //  the event object e. The function extracts the current value of the input
                  //   field using e.target.value and updates the email state using the
                  //    setEmail function. This allows the component to keep track of the email
                  //     value and perform any necessary actions or validations based on
                  //     the updated value.
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  // So, when the user types or changes the value in the email input field,
                  //  the onChange event is triggered. The arrow function is then called with
                  //  the event object e. The function extracts the current value of the input
                  //   field using e.target.value and updates the email state using the
                  //    setEmail function. This allows the component to keep track of the email
                  //     value and perform any necessary actions or validations based on
                  //     the updated value.
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  // this type enable us to set our password visiblity
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {/* this code is for password visibility when typing code password */}
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>

              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm text font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            <div>
              <button
              
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-blue-700   "
              >
                SIGN UP
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>Already have an account?</h4>{" "}
              <Link to="/login" className="text-green-600 pl-2  hover:text-blue-700 " >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
