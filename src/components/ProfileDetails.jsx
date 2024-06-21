
function ProfileDetails() {
    return (<>
    
        <div className="flex flex-col gap-4 items-center justify-center p-8">

            <span className="material-symbols-outlined "> person </span>
            <span className="text-4xl"> Maaz Tariq </span>
            <div className="flex justify-center items-center gap-2">
                <span className="material-symbols-outlined"> eco </span>
                <span className="text-md font-mono"> maazt23 </span>
            </div>
            <span className="font-mono">2 following</span>
            <div className="flex items-center justify-center gap-6">
                <button className="p-2 px-4 bg-slate-800 hover:bg-slate-700 rounded-3xl">Share</button>
                <button className="p-2 px-4 bg-slate-800 hover:bg-slate-700 rounded-3xl">Edit Profile</button>
            </div>

        </div>
    
    </>);
}

export default ProfileDetails;