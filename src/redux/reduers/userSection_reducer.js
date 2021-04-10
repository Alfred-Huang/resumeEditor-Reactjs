import {ADD_MODULE, DELETE_MODULE, GET_MODULE, UPDATE_MODULE, UPDATE_EXPERIENCE, DELETE_EXPERIENCE,
    ADD_EXPERIENCE, UPDATE_EXPERIENCE_SECTION, DELETE_EXPERIENCE_SECTION, ADD_EXPERIENCE_SECTION
} from "../constant";

const initModuleState = {
    modules: [
        {id: '1', module: "education"},
        {id: '2', module: "project"},
        {id: '3', module: "summary"},
        {id: '4', module: "leadership"},
        {id: '5', module: "custom"}
    ]};

const initExperience = {experiences :[
        {id: '1', module: "education", title: "education",
            sections: [
                {sectionId: "1", information: {school: "qianghua", major: "B.A. CS", degree: "master", location: "Flushing",
                        time:[
                            {start: "spring 2024"},
                            {end: "fall 2025"}
                            ]
                        },
                content:""
                },

                {sectionId: "2", information: {school: "qianghua", major: "B.A. CS", degree: "master", location: "Flushing",
                        time:[
                            {start: "spring 2024"},
                            {end: "fall 2025"}
                        ]
                    },
                    content:""
                },

                {sectionId: "3", information: {school: "qianghua", major: "B.A. CS", degree: "master", location: "Flushing",
                        time:[
                            {start: "spring 2024"},
                            {end: "fall 2025"}
                        ]
                    },
                    content:""
                }
                ]
        },

        {id: '2', module: "education", title: "education",
            sections: [
                {sectionId: "3", information: {school: "qianghua", major: "B.A. CS", degree: "master", location: "Flushing",
                        time:[
                            {start: "spring 2024"},
                            {end: "fall 2025"}
                        ]
                    },
                    content:""
                },

                {sectionId: "4", information: {school: "qianghua", major: "B.A. CS", degree: "master", location: "Flushing",
                        time:[
                            {start: "spring 2024"},
                            {end: "fall 2025"}
                        ]
                    },
                    content:""
                },

                {sectionId: "5", information: {school: "qianghua", major: "B.A. CS", degree: "master", location: "Flushing",
                        time:[
                            {start: "spring 2024"},
                            {end: "fall 2025"}
                        ]
                    },
                    content:""
                }
            ]
        }
    ]}


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

export function experienceReducer(preState=initExperience, action){
    const {type, date} = action
    return preState
}
