var tabPanel = document.querySelectorAll(".tabContent");
var buttons = document.querySelectorAll(".tabButton");
for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {
        tabPanel.forEach(btn => {
            btn.classList.add("hidden")

            if (this.getAttribute("id") === "photos") {
                tabPanel[1].classList.remove("hidden")
                console.log("if triggered")
            }
        })


    })
}