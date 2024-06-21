

function Navbar() {
    return (  
        <>
            <div className="sticky top-0 w-full h-16 flex justify-between items-center gap-2 bg-slate-900 z-20">

                <span className="material-symbols-outlined w-16 h-14 flex items-center justify-center rounded-full p-2 hover:bg-slate-700"> Eco </span>

                <div className="flex rounded-full bg-slate-800">
                    <span className="bg-gray-950 rounded-full p-2 px-4"> Home </span>
                    <span className=" rounded-full p-2 px-4"> Create </span>
                </div>

                <div id="Search Bar" className="flex justify-start items-center gap-4 w-full h-10 my-8 bg-slate-600 rounded-full hover:bg-slate-500 ">
                    <span className="material-symbols-outlined ml-2"> Search  </span>
                    <input type="text" placeholder="Search" className="w-full mr-2" />
                </div>

                <div id="Account Logos" className="flex gap-2 mr-2">
                    <span className="material-symbols-outlined w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-700">Notifications</span>
                    <span className="material-symbols-outlined w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-700">Mail</span>
                    <span className="material-symbols-outlined w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-700">Person</span>
                    <span className="material-symbols-outlined w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-700">Menu</span>
                </div>

            </div>
        
        </>
    );
}

export default Navbar;