// async function setContentByLanguage(lang_choice) {
//     let projects_data = []
//     let footer_texts = []
//     let data_with_lang = await getContentFromJson()



//     let header_content = document.querySelectorAll(".header_content")

//     let self_intro = document.querySelectorAll(".self_intro")
//     let freetime_works = document.querySelectorAll(".freetime_works")

//     let done_projects = document.querySelectorAll(".done_projects")

//     let dot_container = document.querySelectorAll(".dot_container")
//     let footer = document.querySelectorAll(".footer")


//     let block_titles = data_with_lang["block_titles"]
//     console.log(block_titles)
//     console.log(data_with_lang)
//     console.log(data_with_lang["block_titles"])
//     console.log(data_with_lang["header_text"]["header_title"])

//     // Add Block Title
//     let block_title1 = document.createElement("div")
//     let block_title2 = document.createElement("div")
//     let block_title3 = document.createElement("div")
//     block_title1.className = "block_title"
//     block_title2.className = "block_title"
//     block_title3.className = "block_title"
//     block_title1.textContent = block_titles[0]
//     block_title2.textContent = block_titles[1]
//     block_title3.textContent = block_titles[2]
//     self_intro[0].appendChild(block_title1)
//     freetime_works[0].appendChild(block_title2)
//     done_projects[0].prepend(block_title3)



//     // The header part
//     let header_title = document.createElement("div")
//     let header_description = document.createElement("div")
//     header_title.className = "header_title"
//     header_description.className = "header_description"
//     header_title.textContent = data_with_lang["header_text"]["header_title"]
//     header_description.textContent = data_with_lang["header_text"]["header_description"]
//     header_content[0].appendChild(header_title)
//     header_content[0].appendChild(header_description)

//     // header_description.textContent = json_data

//     // The project part
//     // ! Should add a judgement of array but now no need?
    



//     projects_data = data_with_lang["projects"]
//     projects_data.forEach(item => {
//         console.log(item)
//         let project_block = document.createElement("div")
//         let dot_element = document.createElement("span")
//         dot_element.className = "dot"
//         project_block.className = "project_block fade"
//         // Project_preview part
//         let project_preview = document.createElement("div")
//         let project_preview_image = document.createElement("img")


//         let project_intro = document.createElement("div")
//         let project_title = document.createElement("div")
//         let project_structure_intro = document.createElement("div")
//         let project_description_intro = document.createElement("div")

//         project_intro.className = "project_intro"
//         project_title.className = "project_title"

//         project_title.textContent = item["name"]
//         project_structure_intro.textContent = item["structure"]
//         project_description_intro.textContent = item["intro"]


//         project_intro.append(project_title, project_structure_intro, project_description_intro)

//         project_block.append(project_preview, project_intro)

//         done_projects[0].append(project_block)
//         dot_container[0].append(dot_element)
//     })

//     // The footer part
//     footer_texts = data_with_lang["footer_text"]
//     console.log(footer_texts)
//     footer_texts.forEach(item => {
//         let footer_text_block = document.createElement("div")
//         footer_text_block.textContent = item
//         footer[0].appendChild(footer_text_block)

//     })
//     console.log(data_with_lang["self_intro"])
//     console.log(data_with_lang["self_intro"]["develop_experience"])
//     console.log(data_with_lang["self_intro"]["individual_plan"])
// }

// async function getContentFromJson() {
//     let json_data = {}
//     await fetch("./assets/json/content.json")
//         .then(res => res.json())
//         .then(res => {
//             // console.log(res)
//             json_data = res["zh-CN-Content"]
//         })
//     // console.log(json_data)
//     return json_data
// }

// setContentByLanguage()