import {useState} from 'react';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';

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

    function handleCancelAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
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

    function handleSelectProject(projectId) {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: projectId,
            }
        });
    }

    let content;

    if (projectsState.selectedProjectId === null) {
        content = <NewProject
            onAddProject={handleAddProject}
            onCancelAddProject={handleCancelAddProject}
        />;
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    } else {
        content = <SelectedProject
            project={projectsState.projects.find(project => project.id === projectsState.selectedProjectId)}
        />
    }

    return (
        <>
            <main className="h-screen my-8 flex gap-8">
                <ProjectsSidebar
                    onStartAddProject={handleStartAddProject}
                    onSelectProject={handleSelectProject}
                    projects={projectsState.projects}
                    selectedProjectId={projectsState.selectedProjectId}
                />
                {content}
            </main>
        </>
    );
}

export default App;
