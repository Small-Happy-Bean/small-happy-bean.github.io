// Switch the language
// ! Language switch from toggling to radio check
function languageSwitch() {
  let radios = document.getElementsByName("langOption");
  console.log(radios);
  let is_checked = !radios[0].checked;
  // let toggle_check = document.getElementsByClassName("toggle-check");
  // let is_checked = toggle_check[0].checked;
  //
  let zh_span = document.querySelectorAll("span[lang=zh]");
  let en_span = document.querySelectorAll("span[lang=en]");
  // console.log(is_checked)
  if (is_checked === true) {
    document.title = "Oolong Space of Xiaole";
    zh_span.forEach((elem) => (elem.style.display = "none"));
    en_span.forEach((elem) => (elem.style.display = "inline-block"));
  } else {
    document.title = "小乐的乌龙茶空间";
    zh_span.forEach((elem) => (elem.style.display = "inline-block"));
    en_span.forEach((elem) => (elem.style.display = "none"));
  }
  // Toggle switch then update
  updateContentElement(is_checked);
}
