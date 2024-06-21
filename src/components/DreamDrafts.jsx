
function DreamDrafts() {
    return (<>
    
        <div className="flex flex-col w-96">

            <div className="flex flex-col gap-4 m-2">

                <div className="flex justify-between items-center  p-2 ">
                    <span> Dream Drafts </span>
                    <span className="material-symbols-outlined p-2 hover:bg-slate-700 rounded-full">  keyboard_double_arrow_left </span>
                </div>

                <button className="p-2 bg-violet-800 rounded-full mx-4"> Create New </button>

            </div>

            <div name="draft list" className="flex m-2 rounded-xl hover:bg-slate-700 p-2 text-sm ">

                <div name="drafted dreams" className="flex gap-2 items-center">

                    <img src="dum1.jpg" alt="dream-image" className="size-20 box-border rounded-xl"/>

                    <div className="flex flex-col w-full">
                        <span> Cowboy Bebop </span>
                        <span className="text-slate-400 font-mono"> 27 days unti expiration </span>
                    </div>

                    <button className="material-symbols-outlined hover:bg-slate-600 rounded-full p-2"> atr </button>

                </div>
            </div>
        </div>
    
    </>);
}

export default DreamDrafts;