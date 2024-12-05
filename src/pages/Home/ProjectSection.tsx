import React from 'react';
//import './ProjectSection.css';

interface projectsData {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    githubLink?: string;
    liveDemoLink?: string;
}

const projectsData: projectsData[] = [
    {
        title: 'How I designed a e-commerce website- a UX case study',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        imageUrl: '/images/project1.png',
        technologies: ['React', 'TypeScript', 'Node.js'],
        githubLink: 'https://github.com/example/project1',
        liveDemoLink: 'https://example.com/project1',
    },
    {
        title: 'zLink Rebranding',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        imageUrl: '/images/project2.png',
        technologies: ['React', 'Node.js', 'Express'],
    },
    // Add more projects here...
];

const ProjectSection: React.FC = () => {
    return (
        <div className="project-listing">
            {projectsData.map((project, index) => (
                    <div className='project-card' key={index}>
                        <div className='project-data'>
                            <h5>{project.title}</h5>
                            <span className='description'>{project.description}</span>
                            <div className='tech-list'>
                                {project.technologies.map((technologies, index) => (
                                    <span>{technologies}</span>
                                ))}
                            </div>
                            <div className='read-more'><a className="underline anime-cursor">Read More</a></div>               
                        </div>
                        <div className='thumbnail-area'></div>
                    </div>
                ))}
        </div>
    );
};

export default ProjectSection;
