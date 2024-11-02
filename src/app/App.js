const App = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-custom-gradient ">

      {/* Tüm içeriği saran dış div */}
      <div className="flex flex-row w-[80%] h-[80%] border border-black-500 shadow-xl shadow-gray-400">
        
        <div className="w-1/2 h-full">
        <img src="image 1 (1).png"/>
        </div>
        
        {/* Sağ Taraf */}
        <div className="flex flex-col justify-center items-center h-full w-1/2 bg-white">
          <h1 className="font-sans text-6xl text-[#101A1CD6]">LOGIN</h1>
          
          <input
            placeholder="Username"
            className="border-2 w-80 h-10 mt-5 rounded-md"
          />
          <input
            placeholder="Password"
            className="border-2 w-80 h-10 mt-5 rounded-md"
          />
          
          <div className="flex flex-row">
            <button className="w-48 h-10 bg-[#1AEBB7] text-white mt-5 border border-black self-start">
              LOGIN
            </button>
            
            <div className="mt-5 self-end text-[#101A1CA3] ml-5">
              <p>Forgot password</p>
              <p className="text-right">Register</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
