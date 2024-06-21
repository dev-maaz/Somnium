import CreateDream from "../components/CreateDream";
import DreamDrafts from "../components/DreamDrafts";

function CreatePage() {
    return (<>
    
        <div className="flex">
            <DreamDrafts />
            <CreateDream />
        </div>

    </>);
}

export default CreatePage;