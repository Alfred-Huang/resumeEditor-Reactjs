import {ADD_MODULE, DELETE_MODULE, GET_MODULE, UPDATE_MODULE, UPDATE_EXPERIENCE, DELETE_EXPERIENCE,
    ADD_EXPERIENCE, UPDATE_EXPERIENCE_SECTION, DELETE_EXPERIENCE_SECTION, ADD_EXPERIENCE_SECTION
} from "../constant";

const initModuleState = {
    modules: [
        {id: "lgCeTDkAvYlDobUgwfBQN", module: "education"},
        {id: "JVPGlab2QGb7TLXXl8pgw", module: "project"},
        {id: "46rORawpcRAOU0lQKB-MG", module: "summary"},
        {id: "sTwDfRx3nyYJ-RaYy6xsx", module: "leadership"},
        {id: "ltNvXFfNAHbpPOD4INRb9", module: "custom"}
    ]};




const s = {
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
                        time:[
                            {start: "spring 2024"},
                            {end: "fall 2025"}
                        ],
                        content:""
                    },

                    "2": {infoId: "2", school: "beida", major: "B.A. CS", degree: "master", location: "Flushing",
                         time:[
                            {start: "spring 2024"},
                            {end: "fall 2025"}
                        ],
                        content:""
                    },

                    "3": {infoId: "3", school: "qianghua", major: "B.A. CS", degree: "master", location: "Flushing",
                        time:[
                            {start: "spring 2024"},
                            {end: "fall 2025"}
                        ],
                        content:""
                    },

                    "4": {infoId: "4", project: "buzhidao", role: "manager", city: "flushing",
                        time:[
                            {start: "spring 2024"},
                            {end: "fall 2025"}
                        ],
                        content:""
                    },

                    "5": {infoId: "5", project: "buzhidao", role: "manager", city: "flushing",
                        time:[
                            {start: "spring 2024"},
                            {end: "fall 2025"}
                        ],
                        content:""
                    },

                    "6": {infoId: "6", project: "buzhidao", role: "manager", city: "flushing",
                        time:[
                            {start: "spring 2024"},
                            {end: "fall 2025"}
                        ],
                        content:""
                    },

                }
}

const initExperience = {experiences : [
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

        {id: '2', module: "project", title: "project",
            sections: [
                {sectionId: "1", information: {project: "buzhidao", role: "manager", city: "flushing",
                        time:[
                            {start: "spring 2024"},
                            {end: "fall 2025"}
                        ]
                    },
                    content:""
                },

                {sectionId: "2", information: {project: "wohaishibuzhdai", role: "manager", city: "flushing",
                        time:[
                            {start: "spring 2024"},
                            {end: "fall 2025"}
                        ]
                    },
                    content:""
                },

                {sectionId: "3", information: {project: "wozhengbuzhidao", role: "manager", city: "flushing",
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
