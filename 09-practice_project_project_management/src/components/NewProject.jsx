import {useRef} from 'react';
import Input from './Input.jsx';

export default function NewProject({onAddProject}) {
    const titleRef = useRef();
    const decriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const title = titleRef.current.value;
        const description = decriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        onAddProject({title, description, dueDate});
    }

    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950">Cancel</button>
            </li>
            <li>
                <button
                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                    onClick={handleSave}
                >
                    Save
                </button>
            </li>
        </menu>
        <div>
            <Input
                label="Title"
                type="text"
                isTextarea={false}
                ref={titleRef}
            />

            <Input
                label="Description"
                isTextarea={true}
                ref={decriptionRef}
            />

            <Input
                label="Due Date"
                type="date"
                isTextarea={false}
                ref={dueDateRef}
            />
        </div>
    </div>;
}
