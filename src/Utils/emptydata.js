// export const emptydata = {
//     "personal": {
//         "name": "",
//         "email": "",
//         "phone": "",
//         "location": "",
//         "github": "",
//         "linkedin": "",
//         "summary": "",
//         "allTrue": ""
//     },
//     "education": [
//         {
//             "school": "",
//             "degree": "",
//             "cgpa": "",
//             "start": "",
//             "end": "",
//             "id": Date.now()
//         }
//     ],
//     "projects": [
//         {
//             "title": "",
//             "url": "",
//             "github": "",
//             "skills": [],
//             "summary": "",
//             "id": Date.now()
//         }
//     ],
//     "skills": {
//         "types": { 
//             "technical": [],
//             "soft": [],
//             "tools": [],
//             "allTrue": "",
//             "id": Date.now()
//         }
//     },
//     "workExperience": [
//         {
//             "company": "",
//             "role": "",
//             "start": "",
//             "end": "",
//             "summary": "",
//             "id": Date.now()
//         }
//     ]
// };


export const emptydata = {

  personal:{
    name:"",
    email:"",
    phone:"",
    location:"",
    github:"",
    linkedin:"",
    summary:"",
    allTrue:""
  },

  education:{
    types:[
      {
        school:"",
        degree:"",
        cgpa:"",
        start:"",
        end:"",
        allTrue:"",
        id:Date.now()
      }
    ]
  },

  projects:{
    types:[
      {
        title:"",
        url:"",
        github:"",
        skills:[],
        summary:"",
        allTrue:"",
        id:Date.now()
      }
    ]
  },

  skills:{
    types:{
      technical:[],
      soft:[],
      tools:[],
      allTrue:"",
      id:Date.now()
    }
  },

  work:{
    types:[
      {
        company:"",
        role:"",
        start:"",
        end:"",
        summary:"",
        allTrue:"",
        id:Date.now()
      }
    ]
  }

}