
function CreateDream() {
    return (<>
    
        <div className="flex flex-col w-full">

            <div className="flex justify-between border-t border-b  border-slate-500 rounded-xl p-6 m-2"> 
                <h2 className="text-2xl"> Create Dream </h2>
                <button className="bg-violet-800 rounded-full p-2 px-4 mr-8"> Publish </button>
            </div>

            <div className="flex gap-16 items-center">

                <div id="image column" className="flex flex-col gap-8 ml-32 my-8">
                    <div className="flex">
                        <div className="flex flex-col border-dotted border-2 border-slate-900 bg-slate-700 w-80 h-96 rounded-3xl justify-center items-center gap-2">
                            <span className="material-symbols-outlined font-semibold ">Upload_File</span>
                            <span>Choose a file or drag and drop it here</span>
                        </div>
                    </div>

                    <div name="line" className=" bg-slate-700 h-0.5 rounded-full "></div>

                    <button className="bg-slate-700 rounded-full p-2 mx-6"> Save from URL </button>

                </div>

                <form action="" className="flex flex-col font-medium flex-grow mr-80 gap-8">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="title"> Title </label>
                        <input type="text" placeholder="Add a title" className="border border-slate-300 rounded-xl bg-slate-900 p-2"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="description"> Description </label>
                        <textarea name="description" id="description" placeholder="Add a detailed description" className="border border-slate-300 rounded-xl bg-slate-900 p-2"></textarea>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="link"> Link </label>
                        <input type="text" placeholder="Add a link" className="border border-slate-300 rounded-xl bg-slate-900 p-2"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="dreamscapelabel">Dreamscape</label>
                        <select name="dreamscape" id="dreamscape" className="rounded-xl bg-slate-900 border border-slate-300 p-2">
                            <option value="airplanes">Air Planes</option>
                            <option value="jetengines">Jet Engines</option>
                            <option value="prototypes">Prototypes</option>
                        </select>
                    </div>

                </form>
            </div>
        </div>
    
    </>);
}

export default CreateDream;