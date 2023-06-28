import './Projects.css';
import ProjectCard from '../components/ProjectCard';



const Projects = () => {

    const oneTitle = "Project 1";
    const oneDescription = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quos ducimus quo hic voluptatem quae qui soluta perspiciatis eius at aut, voluptatibus tempore accusantium praesentium enim dolore neque quisquam asperiores?"
    const techstack = ["one", "two", "three"];


    return(
        <div className='projects-container'>
            <section className='projects-titlesection'>
                <h1 class="projects-title">Featured Projects</h1>
                <span className='about-line'></span>
            </section>

            <div className='project-card-container'>
                <ProjectCard 
                    title={oneTitle}
                    description = {oneDescription}
                    techstack = {techstack}
                    links = {[]}
                />
                <ProjectCard 
                    title={''}
                    description = {''}
                    techstack = {''}
                    links = {[]}
                />
                <ProjectCard 
                    title={''}
                    description = {''}
                    techstack = {''}
                    links = {[]}
                />
            </div>
        </div>
    );
}

export default Projects;