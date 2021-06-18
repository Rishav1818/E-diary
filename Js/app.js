showEntry();
// add notes
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addText');
    let entryItem = localStorage.getItem('entryItem');
    if (entryItem == null) {
        entryArr = [];
    } else {
        entryArr = JSON.parse(entryItem);
    }
    entryArr.push(addTxt.value);
    localStorage.setItem('entryItem', JSON.stringify(entryArr));
    addTxt.value = '';
    showEntry();
})
// show entry
function showEntry() {
    let entryItem = localStorage.getItem('entryItem');
    if (entryItem == null) {
        entryArr = [];
    } else {
        entryArr = JSON.parse(entryItem);
    }
    let html = '';
    entryArr.forEach(function (element, index) {
        html += ` <div class="card filter my-3 mx-auto" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">#Entry ${index + 1}</h5>
      <p class="card-text">${element}</p>
      <button class="btn btn-primary id="${index}" onclick="deleteEntries(${index})">Discard Entry</button>
    </div>
  </div>`
    });
    let entryElement = document.getElementById('entry');
    if (entryArr.length != 0) {
        entryElement.innerHTML = html;
    } else {
        entryElement.innerHTML = `<h6 class="text-center my-5" style="font-weight : 400;color : grey;">Start Adding Your Entries<h6>`
    }
}
//delete entries
function deleteEntries(index) {
    let entryItem = localStorage.getItem('entryItem');
    if (entryItem == null) {
        entryArr = [];
    } else {
        entryArr = JSON.parse(entryItem);
    }
    entryArr.splice(index, 1)
    localStorage.setItem('entryItem', JSON.stringify(entryArr));
    showEntry();
}
//search filter
let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
    let typedTxt = search.value.toLowerCase();
    let allCards = document.getElementsByClassName('filter');
    Array.from(allCards).forEach(function (element) {
        let txt = element.getElementsByTagName("p")[0].innerText;
        if (txt.includes(typedTxt)) {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })
})