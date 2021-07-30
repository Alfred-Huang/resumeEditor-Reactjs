import { v4 as uuidv4 } from 'uuid';

let experienceIdForEducation = uuidv4()
let experienceIdForBasicInfo = uuidv4()
let sectionIdForEducation = uuidv4()
let sectionIdForBasicInfo = uuidv4()
let infoIdForBasic = uuidv4()
let infoIdForEducation = uuidv4()
let data = {
    experiences: {
        [experienceIdForEducation]: {id: experienceIdForEducation, module: "education", resumeId: "", sectionId: sectionIdForEducation, title: "education"},
        [experienceIdForBasicInfo]: {id: experienceIdForBasicInfo, module: "basicInfo", resumeId: "",sectionId: sectionIdForBasicInfo, title: "basic info"}
    },
    modules:[
        {id:experienceIdForBasicInfo, resumeId: "123", module: "basicInfo", sortId: 1},
        {id:experienceIdForEducation, resumeId: "123", module: "education", sortId: 2},
    ],
    sections:{
        [sectionIdForBasicInfo]: {
            sectionId: sectionIdForBasicInfo,
            infoIdList: [
                infoIdForBasic
            ]
        },
        [sectionIdForEducation]: {
            sectionId: sectionIdForEducation,
            infoIdList: [
                infoIdForEducation
            ]
        }
    },
    information:{
        [infoIdForBasic]:{
            infoId: infoIdForBasic,
            HTMLContent: "",
            email: "xxx@gmail.com",
            endDate: "",
            location: "",
            name: "NAME",
            other: "",
            personalLocation: "New York",
            project: "",
            role: "",
            startDate: "",
            telephone: "(xxx)xxx-xxxx"
        },
        [infoIdForEducation]:{
            infoId: infoIdForEducation,
            HTMLContent: "",
            email: "",
            endDate: "",
            location: "",
            name: "",
            other: "",
            personalLocation: "",
            project: "",
            role: "",
            startDate: "",
            telephone: ""
        }
    }

}
export default data
