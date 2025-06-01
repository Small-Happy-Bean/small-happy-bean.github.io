// Scripts to test how to create dom with js rather than write in html

// Init global lang_option
let lang_option = false;

// Get content data from json
async function getContentFromJson() {
  let json_data = await fetch("./assets/json/contents.json")
    .then((res) => res.json())
    .then((res) => {
      //   console.log(res);
      return res;
    });
  return json_data;
}

// Init content DOM
async function initContentElement(lang_set) {
  let lang_option = lang_set ? "en" : "zh";
  let raw_data = await getContentFromJson();
  // console.log(raw_data);

  // Init devinfo unordered list
  let devinfos = raw_data["devinfos"][lang_option];
  let devinfo_ulist = document.querySelector(".devinfo-ulist");
  for (let devinfo_index in devinfos) {
    let devinfo_li = document.createElement("li");
    devinfo_li.innerText = devinfos[devinfo_index];
    devinfo_ulist.appendChild(devinfo_li);
  }

  // Init indplan unordered list
  let indplans = raw_data["indplans"][lang_option];
  let indplan_ulist = document.querySelector(".indplan-ulist");
  for (let indplan_index in indplans) {
    let indplan_li = document.createElement("li");
    indplan_li.innerText = indplans[indplan_index];
    indplan_ulist.appendChild(indplan_li);
  }

  // Init artwork images
  let artwork_links = raw_data["artworks"];
  let freetime_work_block = document.querySelector(".freetime-work-block");
  for (let artwork_link_index in artwork_links) {
    let artwork_image = document.createElement("img");
    artwork_image.className = "artwork-image";
    artwork_image.src = artwork_links[artwork_link_index];
    freetime_work_block.appendChild(artwork_image);
  }

  // Init project blocks
  let projects = raw_data["projects"][lang_option];
  let projects_container = document.querySelector(".project-block-container");
  let dot_container = document.querySelector(".dot-container");
  // Loop and init
  for (let project_index in projects) {
    // Dot span
    let dot_span = document.createElement("span");
    dot_span.className = "dot";
    dot_span.onclick = function () {
      currentSlide(project_index);
    };
    // Project block
    let project_block = document.createElement("div");
    project_block.className = "project-block fade";
    // Project preview part
    let project_preview = document.createElement("div");
    project_preview.className = "project-preview";
    // Project preview image
    let project_preview_image = document.createElement("img");
    project_preview_image.className = "project-preview-image";
    project_preview_image.src = projects[project_index]["preview"];
    project_preview_image.alt = "Preview Image No Found!";
    // Project intro part
    let project_intro = document.createElement("div");
    project_intro.className = "project-intro";
    // Project title
    let project_title = document.createElement("div");
    project_title.className = "project-title";
    project_title.innerText = projects[project_index]["title"];
    // Project structure text
    let project_structure_text = document.createElement("div");
    project_structure_text.className = "project-structure-text";
    project_structure_text.innerText = projects[project_index]["structure"];
    // Project description text
    let project_description_text = document.createElement("div");
    project_description_text.className = "project-description-text";
    project_description_text.innerText = projects[project_index]["description"];
    // Final project block
    project_preview.appendChild(project_preview_image);
    project_intro.appendChild(project_title);
    project_intro.appendChild(project_structure_text);
    project_intro.appendChild(project_description_text);
    project_block.appendChild(project_preview);
    project_block.appendChild(project_intro);
    // Whole project container and dot container
    dot_container.appendChild(dot_span);
    projects_container.appendChild(project_block);
  }
  // Check the length between real dom and json data
  let devinfo_list_child_node_len = devinfo_ulist.childElementCount;
  let indplan_list_child_node_len = indplan_ulist.childElementCount;
  let artwork_block_child_node_len = freetime_work_block.childElementCount;
  let project_container_child_node_len = projects_container.childElementCount;
  let is_all_len_valid =
    devinfo_list_child_node_len === devinfos.length &&
    indplan_list_child_node_len === indplans.length &&
    artwork_block_child_node_len === artwork_links.length &&
    project_container_child_node_len === projects.length;
  return is_all_len_valid;
}

// Update content dom with language
function updateContentElement(lang_set) {
  let lang_option = lang_set ? "en" : "zh";
  getContentFromJson().then((data) => {
    // Get the data by language choice

    let devinfos = data["devinfos"][lang_option];
    let indplans = data["indplans"][lang_option];
    let projects = data["projects"][lang_option];
    // Elements to update

    // Update devinfo unordered list
    let devinfo_lis = document.querySelectorAll(".devinfo-ulist li");
    for (let devinfo_index in devinfo_lis) {
      devinfo_lis[devinfo_index].innerText = devinfos[devinfo_index];
    }

    // Update indplan unordered list
    let indplan_lis = document.querySelectorAll(".indplan-ulist li");
    for (let indplan_index in indplan_lis) {
      indplan_lis[indplan_index].innerText = indplans[indplan_index];
    }

    // Update project block
    let project_titles = document.querySelectorAll(".project-title");
    let project_structure_texts = document.querySelectorAll(
      ".project-structure-text"
    );
    let project_description_texts = document.querySelectorAll(
      ".project-description-text"
    );
    for (let project_index in projects) {
      project_titles[project_index].innerText =
        projects[project_index]["title"];
      project_structure_texts[project_index].innerText =
        projects[project_index]["structure"];
      project_description_texts[project_index].innerText =
        projects[project_index]["description"];
    }
    // Check the length of the elements the same as project json data...
    // console.log(project_titles.length);
    // console.log(project_description_texts.length);
    // console.log(project_structure_texts.length);
  });
}

// Init the content element
initContentElement(lang_option).then(() => {
  showSlides(slide_index);
});
