import "./modalCard.scss"
import leaf from "../../../images/svg/leaf.svg"
import progress from "../../../images/svg/progress.svg"

const ModalCard = () => {
    let progressPercents = 20;
    let currentModule = "Lesson 3 - Analyze Charts"
    return(
        <div className="modalCard">
            <div className="thisModule">
                <div className="moduleInfo">
                    <div className="moduleInfoText">
                        <div className="moduleInfoHeading">
                            <div className="modulePercents">
                                <div className="h2">{progressPercents}%</div>
                                <div className="h5">Complete</div>
                            </div>
                            <div className="moduleBadge">
                                <img src={leaf} alt=""/>
                                <div className="moduleBadgeName">Beginner</div>
                            </div>
                        </div>
                        <div className="currentModule">
                            <div className="currentModuleText">Current Module:</div>
                            <div className="currentModuleName">{currentModule}</div>
                        </div>
                    </div>
                    <div className="moduleInfoVideo">

                    </div>
                </div>
                <div className="progressBar">
                    <div className="progressBarText">
                        <div className="progressBarHeading">
                            <img src={progress} alt=""/>
                            <div> Course progress</div>
                        </div>
                        <div className="coursesCount">
                            3 of 25 lessons
                        </div>
                    </div> 
                    <div className="progressBarGraph">
                    
                    </div>       
                </div>
            </div>
            <div className="nextModule">
                <div className="progressTask">
                    <div className="progressTaskHeading">

                    </div>
                    <div className="nextModuleButton">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCard;