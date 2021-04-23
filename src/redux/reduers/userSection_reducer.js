import {
    ADD_MODULE,
    DELETE_MODULE,
    GET_MODULE,
    UPDATE_MODULE,
    UPDATE_EXPERIENCE,
    DELETE_EXPERIENCE,
    ADD_EXPERIENCE,
    UPDATE_EXPERIENCE_SECTION,
    DELETE_EXPERIENCE_SECTION,
    ADD_EXPERIENCE_SECTION,
    UPDATE_EXPERIENCE_SECTION_INFO,
    DELETE_EXPERIENCE_SECTION_INFO,
    ADD_EXPERIENCE_SECTION_INFO,
    ADD_EXP_SECTION_INFO
} from "../constant";



const initModuleState = {
    modules: [
        {id: "lgCeTDkAvYlDobUgwfBQN", module: "education"},
        {id: "JVPGlab2QGb7TLXXl8pgw", module: "project"},
    ]};

const initExperience = {
    experiences: {
        "lgCeTDkAvYlDobUgwfBQN": {id:  "lgCeTDkAvYlDobUgwfBQN", module: "education", title: "education", sectionId: "1"},
        "JVPGlab2QGb7TLXXl8pgw": {id: "JVPGlab2QGb7TLXXl8pgw", module: "project", title: "project", sectionId:"2"},
    },

    sections: {
        "1": {sectionId: "1", sectionList: ["1", "2", "3"]},
        "2": {sectionId: "2", sectionList: ["4", "5", "6"]},
    },

    information: {
        "1": {infoId: "1", school: "qianghua", major: "B.A. CS", degree: "master", location: "Flushing",
            startDate:"06-2024", endDate: "06-2025",
            HTMLContent: "", RAWContent: {}
        },

        "2": {infoId: "2", school: "beida", major: "B.A. CS", degree: "master", location: "Flushing",
            startDate:"06-2024", endDate: "06-2025",
            HTMLContent: "", RAWContent: {}
        },

        "3": {infoId: "3", school: "qianghua", major: "B.A. CS", degree: "master", location: "Flushing",
            startDate:"06-2024", endDate: "06-2025",
            HTMLContent: "", RAWContent: {}
        },

        "4": {infoId: "4", project: "buzhidao", role: "manager", location: "flushing",
            startDate:"06-2024", endDate: "06-2025",
            HTMLContent: "", RAWContent: {}
        },

        "5": {infoId: "5", project: "diaonima", role: "manager", location: "flushing",
            startDate:"06-2024", endDate: "06-2025",
            HTMLContent: "", RAWContent: {}
        },

        "6": {infoId: "6", project: "caonima", role: "manager", location: "flushing",
            startDate:"06-2024", endDate: "06-2025",
            HTMLContent: "", RAWContent: {}
        },

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
        case UPDATE_EXPERIENCE_SECTION_INFO:
            let newUpdateState = JSON.parse(JSON.stringify(preState))
            const oldInfo = newUpdateState.information[data.infoId]
            oldInfo[data.type] = data.value;
            return newUpdateState

        case DELETE_EXPERIENCE_SECTION_INFO:
            let newDeleteState = JSON.parse(JSON.stringify(preState))
            //get the targetSectionId
            const targetSectionIdForDelete = newDeleteState.experiences[data.experienceId].sectionId

            const newSectionListAfterFilter = newDeleteState.sections[targetSectionIdForDelete].sectionList.filter(function (id){
                return id !== data.infoId
            })
            newDeleteState.sections[targetSectionIdForDelete].sectionList = newSectionListAfterFilter
            delete newDeleteState.information[data.infoId]
            return newDeleteState

        case ADD_EXPERIENCE_SECTION_INFO:
            let newAddState = JSON.parse(JSON.stringify(preState))
            const newKey = data.id
            newAddState.information[newKey] = data.info
            newAddState.sections[data.sectionId].sectionList.push(newKey)
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
        default:
            return preState
    }

}
