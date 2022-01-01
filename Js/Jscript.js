let body = document.querySelector("body"),
    header = document.querySelector(".Section_One header"),
    BtnToogleList = document.querySelector(".BtnToogleList"),
    UlToogleList = document.querySelector(".Section_One header nav ul");

//  header Toggle Class
body.onscroll = function() {
    header.classList.toggle("active", window.scrollY)
}

// BtnToogleList
BtnToogleList.onclick = function() {
    UlToogleList.classList.toggle("active")
}


// Add Lessons
let AllCourse = document.querySelector(".AllCourse")
let List = [{
    "Name": "Leeson 1",
    "Src": "Html/1 (1).mp4"
}, {
    "Name": "Leeson 2",
    "Src": "Html/1 (2).mp4"
}, {
    "Name": "Leeson 3",
    "Src": "Html/1 (3).mp4"
}, {
    "Name": "Leeson 4",
    "Src": "Html/1 (4).mp4"
}, {
    "Name": "Leeson 5",
    "Src": "Html/1 (5).mp4"
}, {
    "Name": "Leeson 6",
    "Src": "Html/1 (6).mp4"
}, {
    "Name": "Leeson 7",
    "Src": "Html/1 (7).mp4"
}, {
    "Name": "Leeson 8",
    "Src": "Html/1 (8).mp4"
}, {
    "Name": "Leeson 9",
    "Src": "Html/1 (9).mp4"
}, {
    "Name": "Leeson 10",
    "Src": "Html/1 (10).mp4"
}, {
    "Name": "Leeson 11",
    "Src": "Html/1 (11).mp4"
}, {
    "Name": "Leeson 12",
    "Src": "Html/1 (12).mp4"
}, {
    "Name": "Leeson 13",
    "Src": "Html/1 (13).mp4"
}, {
    "Name": "Leeson 14",
    "Src": "Html/1 (14).mp4"
}, {
    "Name": "Leeson 15",
    "Src": "Html/1 (15).mp4"
}, {
    "Name": "Leeson 16",
    "Src": "Html/1 (16).mp4"
}, {
    "Name": "Leeson 17",
    "Src": "Html/1 (17).mp4"
}, {
    "Name": "Leeson 18",
    "Src": "Html/1 (18).mp4"
}, {
    "Name": "Leeson 19",
    "Src": "Html/1 (19).mp4"
}, {
    "Name": "Leeson 20",
    "Src": "Html/1 (20).mp4"
}, {
    "Name": "Leeson 21",
    "Src": "Html/1 (21).mp4"
}, {
    "Name": "Leeson 22",
    "Src": "Html/1 (22).mp4"
}, {
    "Name": "Leeson 23",
    "Src": "Html/1 (23).mp4"
}, {
    "Name": "Leeson 24",
    "Src": "Html/1 (24).mp4"
}, {
    "Name": "Leeson 25",
    "Src": "Html/1 (25).mp4"
}, {
    "Name": "Leeson 26",
    "Src": "Html/1 (26).mp4"
}]
let CounLessons = List.length;
let RemainderODivision = CounLessons % 5
let Total = (CounLessons - (CounLessons % 5)) / 5
let Buttos2 = ''

for (let i = 0; i < Total; i++) {

    let Array = List.slice((i + 1) * 5 - 5, (i + 1) * 5)
    for (let x = 0; x < Array.length; x++) {
        Buttos2 += `<button data-click="${Array[x].Src}">${Array[x].Name}</button>`
    }

    AllCourse.innerHTML += `
        <div>
            <h5>Unit ${i + 1}</h5>
            <div class="Other">
            ${Buttos2}
            </div>
        </div>
    `;
    Buttos2 = ""
}
if (RemainderODivision != 0) {
    let Buttos = ''
    for (let i = RemainderODivision; i > 0; i--) {
        Buttos += `<button data-click="${List[List.length -(i)].Src}">${List[List.length -(i)].Name}</button>`
    }
    AllCourse.innerHTML += `<div>
        <h5>Unit ${Total+1}</h5>
        <div class="Other">
            ${Buttos}
        </div>
    </div>`;
}
let All_Buttons = document.querySelectorAll(".AllCourse div button")
let All_Divs = document.querySelectorAll(".AllCourse div.Other")
let All_H5s = document.querySelectorAll(".AllCourse div h5")

All_H5s.forEach(All_H5 => {
    let Height = All_H5.parentElement.querySelector(".Other").offsetHeight + 10
    All_H5.parentElement.querySelector(".Other").style.height = "0"
    All_H5.parentElement.querySelector(".Other").style.padding = "0"
    All_H5.onclick = function() {
        All_H5s.forEach(All_H5 => {
            All_H5.parentElement.querySelector(".Other").style.height = 0
            All_H5.parentElement.querySelector(".Other").style.padding = "0"
        })
        if (All_H5.parentElement.querySelector(".Other").offsetHeight == 0) {
            All_H5.parentElement.querySelector(".Other").style.height = Height + "px"
            All_H5.parentElement.querySelector(".Other").style.padding = "10px 0"
        } else {
            All_H5.parentElement.querySelector(".Other").style.height = 0
            All_H5.parentElement.querySelector(".Other").style.padding = "0"
        }
    }
});

let Video = document.querySelector("Video")
All_Buttons.forEach(All_Button => {
    All_Button.onclick = function() {
        Video.src = All_Button.dataset.click;
    }
})