import {useState} from 'react';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {

    const [projectsState, setProjectsState] = useState({
        projects: [],
        tasks: [],
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

    function handleDeleteProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId),
            }
        });
    }

    function handleAddTask(text) {
        setProjectsState(prevState => {
            const taskId = Math.random();
            const newTask = {
                text: text,
                id: taskId,
                projectId: prevState.selectedProjectId,
            };

            return {
                ...prevState,
                tasks: [newTask, ...prevState.tasks]
            }
        });
    }

    function handleDeleteTask(taskId) {
        setProjectsState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(task => task.id !== taskId),
            }
        });
    }

    const selectedProjectTasks = projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId);
    console.log(selectedProjectTasks);

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
            tasks={selectedProjectTasks}
            onDeleteProject={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
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
