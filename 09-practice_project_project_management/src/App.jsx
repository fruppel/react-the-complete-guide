import {useState} from 'react';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';

function App() {

    const [projectsState, setProjectsState] = useState({
        projects: [],
        selectedProjectId: undefined,
    });

    function handleStartAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null,
            }
        });
    }

    function handleAddProject(project) {
        setProjectsState(prevState => {
            const projectId = Math.random();
            const newProject = {
                ...project,
                id: projectId,
            };

            return {
                ...prevState,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    let content;

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAddProject={handleAddProject} />;
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    }

    return (
        <>
            <main className="h-screen my-8 flex gap-8">
                <ProjectsSidebar
                    onStartAddProject={handleStartAddProject}
                    projects={projectsState.projects}
                />
                {content}
            </main>
        </>
    );
}

export default App;
