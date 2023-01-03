let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
const ulEl = document.getElementById("ul-el")
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: false, currentWindow: true}, function(tabs){

        for (let i = 0; i < tabs.length; i++) {
            myLeads.push(tabs[i].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads) )
            render(myLeads)
        }
    })
})

function addItem() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
}
inputEl.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        addItem();
    }
});
inputBtn.addEventListener("click", function() {
    addItem();
})
clearBtn.addEventListener("click", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
});

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}