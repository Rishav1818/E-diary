showEntry();
// add entry
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTitle=document.getElementById('addTitle');
    let addTxt = document.getElementById('addText');
    let entryTitle= localStorage.getItem('entryTitle')
    let entryItem = localStorage.getItem('entryItem');
    if (entryItem == null && entryTitle==null) {
        entryTitleArr = [];
        entryArr = [];
    } else {
        entryTitleArr=JSON.parse(entryTitle);
        entryArr = JSON.parse(entryItem);
    }
    if (addTxt.value!="" && addTitle.value!="") {
        entryTitleArr.push(addTitle.value);
        entryArr.push(addTxt.value);
        localStorage.setItem('entryTitle',JSON.stringify(entryTitleArr));
        localStorage.setItem('entryItem', JSON.stringify(entryArr));
        addTitle.value='';
        addTxt.value = '';
        showEntry();
    } else {
        alert("Cannot Add Entry witout a title or content")
    }
    // entryArr.push(addTxt.value);
    // localStorage.setItem('entryItem', JSON.stringify(entryArr));
    // addTxt.value = '';
    // showEntry();
})
// show entry
function showEntry() {
    // let entryItem = localStorage.getItem('entryItem');
    // if (entryItem == null) {
    //     entryArr = [];
    // } else {
    //     entryArr = JSON.parse(entryItem);
    // }
    let entryTitle= localStorage.getItem('entryTitle')
    let entryItem = localStorage.getItem('entryItem');
    if (entryItem == null && entryTitle==null) {
        entryTitleArr = [];
        entryArr = [];
    } else {
        entryTitleArr=JSON.parse(entryTitle);
        entryArr = JSON.parse(entryItem);
    }
    let html = '';
    entryArr.forEach(function (element,index) {
        let title= entryTitleArr[index];
        html += ` <div class="card filter my-3 mx-auto" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">#${index+1} . ${title}</h5>
      <p class="card-text"><pre>${element}</pre></p>
      <button class="btn btn-sm btn-outline-danger id="${index}" onclick="deleteEntries(${index})">Discard Entry</button>
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
    // let entryItem = localStorage.getItem('entryItem');
    // if (entryItem == null) {
    //     entryArr = [];
    // } else {
    //     entryArr = JSON.parse(entryItem);
    // }
    let entryTitle= localStorage.getItem('entryTitle')
    let entryItem = localStorage.getItem('entryItem');
    if (entryItem == null && entryTitle==null) {
        entryTitleArr = [];
        entryArr = [];
    } else {
        entryTitleArr=JSON.parse(entryTitle);
        entryArr = JSON.parse(entryItem);
    }
    entryTitleArr.splice(index,1);
    entryArr.splice(index, 1);
    localStorage.setItem('entryItem', JSON.stringify(entryArr));
    localStorage.setItem('entryTitle', JSON.stringify(entryTitleArr));
    showEntry();
}
//search filter
let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
    let typedTxt = search.value.toLowerCase();
    let allCards = document.getElementsByClassName('filter');
    Array.from(allCards).forEach(function (element) {
        let txt = element.getElementsByTagName("h5")[0].innerText;
        if (txt.includes(typedTxt)) {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })
})