import Button from './Button.jsx';

export default function ProjectsSidebar() {
    return <aside className="w-1/3 py-16 px-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
        <ul>
            ...
        </ul>
        <Button>+ Add Project</Button>
    </aside>;
}
