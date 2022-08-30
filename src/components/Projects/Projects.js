import React, { useEffect, useState } from 'react'
import JsFun from './JsFun';

const Projects = () => {
    const [display, setDisplay] = useState([]);
    const getData = () => {
        fetch('projectList.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setDisplay(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])
    

    

    return (

        <div className="accordion accordion-flush " id="accordionFlushExample">
            <div class="accordion-item" id='projectID'>
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed projects-section-header text-center" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                        HTML, JavaScript, CSS, React projects...
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse show"
                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">

                    <section id="projects" className="projects-section accordion-body">

                        <div class="projects-grid">

                            {
                                display && display.length > 0 && display.map((item) =>
                                    <a href={item.link} rel="noreferrer" target="_blank" class="project project-tile">
                                        <img class="project-image" src={item.img} alt="project" />
                                        <p class="project-title">
                                            <span class="code">&lt;&nbsp;</span>
                                            {item.title}
                                            <span class="code">&nbsp;&#47;&gt;</span>
                                        </p>
                                    </a>)
                            }

                        </div>
                        <a href="https://codepen.io/tintodd" class="btn btn-show-all" rel="noreferrer" target="_blank">CodePen.io<i class="fas fa-chevron-right"></i></a>
                    </section>

                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button  class="accordion-button collapsed projects-section-header text-center" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        JavaScript fun!
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse "
                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">

            <JsFun />
            </div>
            </div>
        </div>
        

    )
}

export default Projects
