import './ProjectCard.css'

const ProjectCard = (props) => {
    return(
        <div className='card-container'>
            <h1>{props.title}</h1>
        </div>
    );
}

export default ProjectCard;