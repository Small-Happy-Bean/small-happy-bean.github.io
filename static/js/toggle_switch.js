function language_switch() {
    let toggle_check = document.getElementsByClassName("toggle_check")
    let is_checked = toggle_check[0].checked
    let zh_span = document.querySelectorAll("span[lang=zh]")
    let en_span = document.querySelectorAll("span[lang=en]")
    // console.log(is_checked)
    if (is_checked == true) {
        document.title = "Lemonade Space By Xiaole"
        zh_span.forEach(
            elem => elem.style.display = "none"
        )
        en_span.forEach(
            elem => elem.style.display = "inherit"
        )

    }
    else {
        document.title = "小乐的柠檬水空间"
        zh_span.forEach(
            elem => elem.style.display = "inherit"
        )
        en_span.forEach(
            elem => elem.style.display = "none"
        )

    }

}
