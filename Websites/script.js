// Pop-up window
const popup = document.getElementById("more-info-dialogue");
const wrapper = document.querySelector(".wrapper");

function showMoreInfo(){
    popup.showModal();
}

function closeMoreInfo() {
    popup.close();
}

popup.addEventListener("click", (e) => {
    if(!wrapper.contains(e.target))
    {
        popup.close();
    }
});