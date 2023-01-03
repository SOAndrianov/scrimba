let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
const ulEl = document.getElementById("ul-el")
ulEl.innerHTML = localStorage.getItem("Leads")
function addItem() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
};
inputBtn.addEventListener("click", function() {
    addItem();
});
inputEl.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        addItem();
    }
    else {
        
    }
});
clearBtn.addEventListener("click", function() {
    localStorage.clear()
    location.reload()
});

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        savedItems = localStorage.getItem("Leads")
        if (localStorage.getItem("Leads") === null) {
            localStorage.setItem("Leads", savedItems =`
                <li>
                    <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                    </a>
                </li>
            `);
        }
        else {
            localStorage.setItem("Leads", listItems +=`
                <li>
                    <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                    </a>
                </li>
            `);
        }
    }
    if (localStorage.getItem("Leads") != 0){
        ulEl.innerHTML = localStorage.getItem("Leads")
    }
}
