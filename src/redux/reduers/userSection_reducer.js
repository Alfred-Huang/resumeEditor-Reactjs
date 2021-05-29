import {
    ADD_EXP_SECTION_INFO,
    ADD_EXPERIENCE_SECTION_INFO,
    ADD_MODULE,
    ADD_RESUME,
    DELETE_EXPERIENCE_SECTION_INFO,
    DELETE_MODULE,
    DELETE_RESUME,
    GET_MODULE, INITIAL_EXPERIENCE_STATE,
    UPDATE_EXPERIENCE_SECTION_INFO,
    UPDATE_MODULE,
    UPDATE_MODULE_TITLE,
    UPDATE_RESUME,
    DELETE_ALL_MODULES,
    DELETE_ALL_EXPERIENCE
} from "../constant";


const resumeState = {
    resumeList: {}
}

const initModuleState = {
    modules: []
};

const initExperience = {
    experiences: {},
    sections: {},
    information: {}
}

export function resumeReducer(preState = resumeState, action){
    const {type, data} = action
    switch (type){
        case UPDATE_RESUME:
            let newUpdateState = JSON.parse(JSON.stringify(preState))
            newUpdateState.resumeList = data
            return newUpdateState
        case ADD_RESUME:
            let newAddState = JSON.parse(JSON.stringify(preState))
            newAddState.resumeList[data.resumeId] = data.resume
            return newAddState
        case DELETE_RESUME:
            let newDeleteState = JSON.parse(JSON.stringify(preState))
            delete newDeleteState.resumeList[data]
            return newDeleteState
        default:
            return preState
    }
}

export function moduleReducer(preState=initModuleState, action){
    const {type, data} = action
    switch (type) {
        case ADD_MODULE:
            let newAddState = JSON.parse(JSON.stringify(preState))
            newAddState.modules.push(data)
            return newAddState
        case DELETE_MODULE:
            let newDeleteState = JSON.parse(JSON.stringify(preState))
            let deletedState = newDeleteState.modules.filter(function (item, index){
                return item.id !== data
            })
            return {modules: deletedState}

        case DELETE_ALL_MODULES:
            let newDeleteAllModule = JSON.parse(JSON.stringify(preState));
            newDeleteAllModule.modules = []
            return newDeleteAllModule

        case GET_MODULE:
            return preState
        case UPDATE_MODULE:
            let newUpdateState = JSON.parse(JSON.stringify(preState))
            newUpdateState.modules = data
            return newUpdateState
        default:
            return preState
    }
}

export function experienceInfoReducer(preState=initExperience, action){
    const {type, data} = action
    switch (type){
        case INITIAL_EXPERIENCE_STATE:
            let newState = JSON.parse(JSON.stringify(preState))
            newState.experiences = data.experiences
            newState.sections = data.sections
            newState.information = data.information
            return newState
        case UPDATE_EXPERIENCE_SECTION_INFO:
            let newUpdateState = JSON.parse(JSON.stringify(preState))
            const oldInfo = newUpdateState.information[data.infoId]
            oldInfo[data.type] = data.value;
            return newUpdateState

        case DELETE_EXPERIENCE_SECTION_INFO:
            let newDeleteState = JSON.parse(JSON.stringify(preState))
            //get the targetSectionId
            const targetSectionIdForDelete = newDeleteState.experiences[data.experienceId].sectionId
            const newInfoIdListAfterFilter = newDeleteState.sections[targetSectionIdForDelete].infoIdList.filter(function (id){
                return id !== data.infoId
            })
            newDeleteState.sections[targetSectionIdForDelete].infoIdList = newInfoIdListAfterFilter
            delete newDeleteState.information[data.infoId]
            return newDeleteState

        case ADD_EXPERIENCE_SECTION_INFO:
            let newAddState = JSON.parse(JSON.stringify(preState))
            const newKey = data.id
            newAddState.information[newKey] = data.information
            newAddState.sections[data.sectionId].infoIdList.push(newKey)
            return newAddState

        case ADD_EXP_SECTION_INFO:
            let newExpSecInfo = JSON.parse(JSON.stringify(preState))
            const newExpId = data.experienceId
            const newSecId = data.sectionId
            const newInfo = data.informationId
            newExpSecInfo.experiences[newExpId] = data.newExperience
            newExpSecInfo.sections[newSecId] = data.newSection
            newExpSecInfo.information[newInfo] = data.newInformation
            return newExpSecInfo

        case UPDATE_MODULE_TITLE:
            let newTitleState = JSON.parse(JSON.stringify(preState))
            newTitleState.experiences[data.experienceId].title = data.title
            return newTitleState

        case DELETE_ALL_EXPERIENCE:
            let newAllDeletedState = JSON.parse(JSON.stringify(preState))
            newAllDeletedState.experience = {}
            newAllDeletedState.sections = {}
            newAllDeletedState.information = {}
            return newAllDeletedState
        default:
            return preState
    }

}


// export function userReducer(prestate = userState, action){
//
// }
