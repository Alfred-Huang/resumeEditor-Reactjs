import {
    ADD_MODULE,
    DELETE_MODULE,
    GET_MODULE,
    UPDATE_MODULE,
    ADD_EXPERIENCE,
    ADD_EXPERIENCE_SECTION,
    DELETE_EXPERIENCE,
    DELETE_EXPERIENCE_SECTION,
    UPDATE_EXPERIENCE,
    UPDATE_EXPERIENCE_SECTION,
    UPDATE_EXPERIENCE_SECTION_INFO,
    DELETE_EXPERIENCE_SECTION_INFO,
    ADD_EXPERIENCE_SECTION_INFO
} from "../constant"


//module
export const addModuleAction = modules => ({type: ADD_MODULE, data: modules})
export const deleteModuleAction = modules => ({type: DELETE_MODULE, data: modules})
export const getModuleAction = modules => ({type: GET_MODULE, data: modules})
export const updateModuleAction = modules => ({type: UPDATE_MODULE, data: modules})


//experience
export const addExperience = experience =>({type: ADD_EXPERIENCE, data: experience})
export const deleteExperience = experience =>({type: DELETE_EXPERIENCE, data: experience})
export const updateExperience = experience =>({type: UPDATE_EXPERIENCE, data: experience})


export const addExperienceSection = section =>({type: ADD_EXPERIENCE_SECTION, data: section})
export const deleteExperienceSection = section =>({type: DELETE_EXPERIENCE_SECTION, data: section})
export const updateExperienceSection = section =>({type: UPDATE_EXPERIENCE_SECTION, data: section})


export const updateExperienceSectionInfo = infoObj =>({type: UPDATE_EXPERIENCE_SECTION_INFO, data: infoObj})
export const addExperienceSectionInfo = infoObj =>({type: ADD_EXPERIENCE_SECTION_INFO, data: infoObj})

export const deleteExperienceSectionInfo = (data) =>{
    return (dispatch) =>{
        dispatch({
            type: DELETE_EXPERIENCE_SECTION_INFO,
            data: data
        })
        return Promise.resolve()
    }
}

