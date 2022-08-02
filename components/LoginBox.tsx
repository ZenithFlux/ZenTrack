export default function LoginBox() {
  return (
    <form className="bg-white dark:bg-gray-800 rounded-md shadow-xl py-5 px-8">
        <h1 className="font-bold text-2xl mb-4">Welcome User</h1>
        <p className="text-lg font-normal text-gray-600 mb-3">Please Login</p>
        <div className="flex items-center border-2 mb-5 py-2 px-3 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-gray-400' viewBox="0 0 48 48" version="1.1" fill='currentColor'>
              <g id="🔍-System-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="ic_fluent_person_48_filled" fill="currentColor" fillRule="nonzero">
                      <path d="M35.7502,28 C38.0276853,28 39.8876578,29.7909151 39.9950978,32.0427546 L40,32.2487 L40,33 C40,36.7555 38.0583,39.5669 35.0798,41.3802 C32.1509,43.1633 28.2139,44 24,44 C19.7861,44 15.8491,43.1633 12.9202,41.3802 C10.0319285,39.6218485 8.11862909,36.9249713 8.00532378,33.3388068 L8,33 L8,32.2489 C8,29.9703471 9.79294995,28.1122272 12.0440313,28.0048972 L12.2499,28 L35.7502,28 Z M24,4 C29.5228,4 34,8.47715 34,14 C34,19.5228 29.5228,24 24,24 C18.4772,24 14,19.5228 14,14 C14,8.47715 18.4772,4 24,4 Z" id="🎨-Color"/>
                  </g>
              </g>
          </svg>
          <input id="username" className="bg-white dark:bg-gray-800 pl-2 w-full outline-none border-none" type="text" name="username" placeholder="Username" />
        </div>
        <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <input className="bg-white dark:bg-gray-800 pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Password" />
          
        </div>
        <button type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Login</button>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Don{"'"}t have an account yet?</a>
        </div>
        
      </form>
  )
}
