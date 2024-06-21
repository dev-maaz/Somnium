
function Postrail() {

    let imageArray = [

        {
            src: "dum1.jpg",
            title: "Airplane 1",
            Description: "This is the aircraft model number 1 !"
        },
        {
            src: "dum2.jpg",
            title: "Airplane 2",
            Description: "This is the aircraft model number 2 !"
        },
        {
            src: "dum3.jpg",
            title: "Airplane 3",
            Description: "This is the aircraft model number 3 !"
        },
        {
            src: "dum4.jpg",
            title: "Airplane 4",
            Description: "This is the aircraft model number 4 !"
        },
        {
            src: "dum5.jpg",
            title: "Airplane 5",
            Description: "This is the aircraft model number 5 !"
        },
        {
            src: "dum6.jpg",
            title: "Airplane 6",
            Description: "This is the aircraft model number 6 !"
        },
        {
            src: "dum7.jpg",
            title: "Airplane 7",
            Description: "This is the aircraft model number 7 !"
        },
        {
            src: "dum8.jpg",
            title: "Airplane 8",
            Description: "This is the aircraft model number 8 !"
        },
        {
            src: "dum9.jpg",
            title: "Airplane 9",
            Description: "This is the aircraft model number 9 !"
        },
        {
            src: "dum10.jpg",
            title: "Airplane 10",
            Description: "This is the aircraft model number 10 !"
        },


    ];




    return (<>
    
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 p-4 ">

        {imageArray.map((image) => (

            <div >
                <div className="relative w-full overflow-hidden rounded-3xl group font-mono ">  

                    <img src={image.src} className="w-full"/>
                    <div className="w-full h-full absolute bg-black/50 z-10 top-0 left-0 hidden group-hover:flex group-hover:flex-col">

                        <div className="flex justify-between items-center w-full p-2">
                            <div className="flex items-center gap-2">
                                <span> Your Boards </span>
                                <button className="material-symbols-outlined ">Expand_Circle_Down</button>                               
                            </div>
                            <button className=" bg-violet-800 hover:bg-violet-700 rounded-full p-2 px-4 "> Save </button>
                        </div>

                        <div id="filler" className="w-full h-full"></div>

                        <div className="flex justify-between items-center w-full p-2  text-gray-950">
                            <span className=" bg-slate-50 rounded-full p-2 px-4  hover:bg-slate-200 "> Link </span>
                            <div className="flex items-center justify-between gap-2">
                                <button className="material-symbols-outlined bg-slate-50 rounded-full font-semibold p-2  hover:bg-slate-200 "> Upload </button>
                                <button className="material-symbols-outlined  bg-slate-50 rounded-full p-2  hover:bg-slate-200"> Atr </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
        ))}

        </div>
    
    </>);
}

export default Postrail;