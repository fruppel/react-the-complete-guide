import {useRef} from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({onAddProject}) {
    const titleRef = useRef();
    const decriptionRef = useRef();
    const dueDateRef = useRef();
    const modal = useRef();

    function handleSave() {
        const title = titleRef.current.value;
        const description = decriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        if (
            title.trim() === ''
            || description.trim() === ''
            || dueDate.trim() === ''
        ) {
            modal.current.open();
            return;
        }

        onAddProject({title, description, dueDate});
    }

    return <>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
            <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
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
        </div>
    </>;
}
