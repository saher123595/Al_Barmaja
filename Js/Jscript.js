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
if (body.dataset.who != "Home" && body.dataset.who != "New Course") {
    if (localStorage.getItem(body.dataset.who) == null) {
        localStorage.setItem(body.dataset.who, JSON.stringify([]))
    }
}


// Add Lessons
let AllCourse = document.querySelector(".AllCourse")
let List
if (body.dataset.who == "Html") {
    List = [{
        "Name": "Html Lesson 1",
        "Src": "Html/1 (1).mp4"
    }, {
        "Name": "Html Lesson 2",
        "Src": "Html/1 (2).mp4"
    }, {
        "Name": "Html Lesson 3",
        "Src": "Html/1 (3).mp4"
    }, {
        "Name": "Html Lesson 4",
        "Src": "Html/1 (4).mp4"
    }, {
        "Name": "Html Lesson 5",
        "Src": "Html/1 (5).mp4"
    }, {
        "Name": "Html Lesson 6",
        "Src": "Html/1 (6).mp4"
    }, {
        "Name": "Html Lesson 7",
        "Src": "Html/1 (7).mp4"
    }, {
        "Name": "Html Lesson 8",
        "Src": "Html/1 (8).mp4"
    }, {
        "Name": "Html Lesson 9",
        "Src": "Html/1 (9).mp4"
    }, {
        "Name": "Html Lesson 10",
        "Src": "Html/1 (10).mp4"
    }, {
        "Name": "Html Lesson 11",
        "Src": "Html/1 (11).mp4"
    }, {
        "Name": "Html Lesson 12",
        "Src": "Html/1 (12).mp4"
    }, {
        "Name": "Html Lesson 13",
        "Src": "Html/1 (13).mp4"
    }, {
        "Name": "Html Lesson 14",
        "Src": "Html/1 (14).mp4"
    }, {
        "Name": "Html Lesson 15",
        "Src": "Html/1 (15).mp4"
    }, {
        "Name": "Html Lesson 16",
        "Src": "Html/1 (16).mp4"
    }, {
        "Name": "Html Lesson 17",
        "Src": "Html/1 (17).mp4"
    }, {
        "Name": "Html Lesson 18",
        "Src": "Html/1 (18).mp4"
    }, {
        "Name": "Html Lesson 19",
        "Src": "Html/1 (19).mp4"
    }, {
        "Name": "Html Lesson 20",
        "Src": "Html/1 (20).mp4"
    }, {
        "Name": "Html Lesson 21",
        "Src": "Html/1 (21).mp4"
    }, {
        "Name": "Html Lesson 22",
        "Src": "Html/1 (22).mp4"
    }, {
        "Name": "Html Lesson 23",
        "Src": "Html/1 (23).mp4"
    }, {
        "Name": "Html Lesson 24",
        "Src": "Html/1 (24).mp4"
    }, {
        "Name": "Html Lesson 25",
        "Src": "Html/1 (25).mp4"
    }, {
        "Name": "Html Lesson 26",
        "Src": "Html/1 (26).mp4"
    }]
} else if (body.dataset.who == "Css") {
    List = [{
        "Name": "Css Lesson 1",
        "Src": "Css/1 (1).mp4"
    }, {
        "Name": "Css Lesson 2",
        "Src": "Css/1 (2).mp4"
    }, {
        "Name": "Css Lesson 3",
        "Src": "Css/1 (3).mp4"
    }, {
        "Name": "Css Lesson 4",
        "Src": "Css/1 (4).mp4"
    }, {
        "Name": "Css Lesson 5",
        "Src": "Css/1 (5).mp4"
    }, {
        "Name": "Css Lesson 6",
        "Src": "Css/1 (6).mp4"
    }, {
        "Name": "Css Lesson 7",
        "Src": "Css/1 (7).mp4"
    }, {
        "Name": "Css Lesson 8",
        "Src": "Css/1 (8).mp4"
    }, {
        "Name": "Css Lesson 9",
        "Src": "Css/1 (9).mp4"
    }, {
        "Name": "Css Lesson 10",
        "Src": "Css/1 (10).mp4"
    }, {
        "Name": "Css Lesson 11",
        "Src": "Css/1 (11).mp4"
    }, {
        "Name": "Css Lesson 12",
        "Src": "Css/1 (12).mp4"
    }, {
        "Name": "Css Lesson 13",
        "Src": "Css/1 (13).mp4"
    }, {
        "Name": "Css Lesson 14",
        "Src": "Css/1 (14).mp4"
    }, {
        "Name": "Css Lesson 15",
        "Src": "Css/1 (15).mp4"
    }, {
        "Name": "Css Lesson 16",
        "Src": "Css/1 (16).mp4"
    }, {
        "Name": "Css Lesson 17",
        "Src": "Css/1 (17).mp4"
    }, {
        "Name": "Css Lesson 18",
        "Src": "Css/1 (18).mp4"
    }, {
        "Name": "Css Lesson 19",
        "Src": "Css/1 (19).mp4"
    }, {
        "Name": "Css Lesson 20",
        "Src": "Css/1 (20).mp4"
    }, {
        "Name": "Css Lesson 21",
        "Src": "Css/1 (21).mp4"
    }, {
        "Name": "Css Lesson 22",
        "Src": "Css/1 (22).mp4"
    }, {
        "Name": "Css Lesson 23",
        "Src": "Css/1 (23).mp4"
    }, {
        "Name": "Css Lesson 24",
        "Src": "Css/1 (24).mp4"
    }, {
        "Name": "Css Lesson 25",
        "Src": "Css/1 (25).mp4"
    }, {
        "Name": "Css Lesson 26",
        "Src": "Css/1 (26).mp4"
    }]
} else if (body.dataset.who == "Javascript") {
    List = [{
        "Name": "Javascript Lesson 1 ",
        "Src": "Javascript/1 (1).mp4"
    }, {
        "Name": "Javascript Lesson 2 ",
        "Src": "Javascript/1 (2).mp4"
    }, {
        "Name": "Javascript Lesson 3 ",
        "Src": "Javascript/1 (3).mp4"
    }, {
        "Name": "Javascript Lesson 4 ",
        "Src": "Javascript/1 (4).mp4"
    }, {
        "Name": "Javascript Lesson 5 ",
        "Src": "Javascript/1 (5).mp4"
    }, {
        "Name": "Javascript Lesson 6 ",
        "Src": "Javascript/1 (6).mp4"
    }, {
        "Name": "Javascript Lesson 7 ",
        "Src": "Javascript/1 (7).mp4"
    }, {
        "Name": "Javascript Lesson 8 ",
        "Src": "Javascript/1 (8).mp4"
    }, {
        "Name": "Javascript Lesson 9 ",
        "Src": "Javascript/1 (9).mp4"
    }, {
        "Name": "Javascript Lesson 10 ",
        "Src": "Javascript/1 (10).mp4"
    }, {
        "Name": "Javascript Lesson 11 ",
        "Src": "Javascript/1 (11).mp4"
    }, {
        "Name": "Javascript Lesson 12 ",
        "Src": "Javascript/1 (12).mp4"
    }, {
        "Name": "Javascript Lesson 13 ",
        "Src": "Javascript/1 (13).mp4"
    }, {
        "Name": "Javascript Lesson 14 ",
        "Src": "Javascript/1 (14).mp4"
    }, {
        "Name": "Javascript Lesson 15 ",
        "Src": "Javascript/1 (15).mp4"
    }, {
        "Name": "Javascript Lesson 16 ",
        "Src": "Javascript/1 (16).mp4"
    }, {
        "Name": "Javascript Lesson 17 ",
        "Src": "Javascript/1 (17).mp4"
    }, {
        "Name": "Javascript Lesson 18 ",
        "Src": "Javascript/1 (18).mp4"
    }, {
        "Name": "Javascript Lesson 19 ",
        "Src": "Javascript/1 (19).mp4"
    }, {
        "Name": "Javascript Lesson 20 ",
        "Src": "Javascript/1 (20).mp4"
    }, {
        "Name": "Javascript Lesson 21 ",
        "Src": "Javascript/1 (21).mp4"
    }, {
        "Name": "Javascript Lesson 22 ",
        "Src": "Javascript/1 (22).mp4"
    }, {
        "Name": "Javascript Lesson 23 ",
        "Src": "Javascript/1 (23).mp4"
    }, {
        "Name": "Javascript Lesson 24 ",
        "Src": "Javascript/1 (24).mp4"
    }, {
        "Name": "Javascript Lesson 25 ",
        "Src": "Javascript/1 (25).mp4"
    }, {
        "Name": "Javascript Lesson 26 ",
        "Src": "Javascript/1 (26).mp4"
    }]
} else if (body.dataset.who == "Bootstrap") {
    List = [{
        "Name": "Bootstrap Lesson 1",
        "Src": "../Html/Html/1 (1).mp4"
    }, {
        "Name": "Bootstrap Lesson 2",
        "Src": "../Html/Html/1 (2).mp4"
    }, {
        "Name": "Bootstrap Lesson 3",
        "Src": "../Html/Html/1 (3).mp4"
    }, {
        "Name": "Bootstrap Lesson 4",
        "Src": "../Html/Html/1 (4).mp4"
    }, {
        "Name": "Bootstrap Lesson 5",
        "Src": "../Html/Html/1 (5).mp4"
    }, {
        "Name": "Bootstrap Lesson 6",
        "Src": "../Html/Html/1 (6).mp4"
    }, {
        "Name": "Bootstrap Lesson 7",
        "Src": "../Html/Html/1 (7).mp4"
    }, {
        "Name": "Bootstrap Lesson 8",
        "Src": "../Html/Html/1 (8).mp4"
    }, {
        "Name": "Bootstrap Lesson 9",
        "Src": "../Html/Html/1 (9).mp4"
    }, {
        "Name": "Bootstrap Lesson 10",
        "Src": "../Html/Html/1 (10).mp4"
    }, {
        "Name": "Bootstrap Lesson 11",
        "Src": "../Html/Html/1 (11).mp4"
    }, {
        "Name": "Bootstrap Lesson 12",
        "Src": "../Html/Html/1 (12).mp4"
    }, {
        "Name": "Bootstrap Lesson 13",
        "Src": "../Html/Html/1 (13).mp4"
    }, {
        "Name": "Bootstrap Lesson 14",
        "Src": "../Html/Html/1 (14).mp4"
    }, {
        "Name": "Bootstrap Lesson 15",
        "Src": "../Html/Html/1 (15).mp4"
    }, {
        "Name": "Bootstrap Lesson 16",
        "Src": "../Html/Html/1 (16).mp4"
    }, {
        "Name": "Bootstrap Lesson 17",
        "Src": "../Html/Html/1 (17).mp4"
    }, {
        "Name": "Bootstrap Lesson 18",
        "Src": "../Html/Html/1 (18).mp4"
    }, {
        "Name": "Bootstrap Lesson 19",
        "Src": "../Html/Html/1 (19).mp4"
    }, {
        "Name": "Bootstrap Lesson 20",
        "Src": "../Html/Html/1 (20).mp4"
    }, {
        "Name": "Bootstrap Lesson 21",
        "Src": "../Html/Html/1 (21).mp4"
    }, {
        "Name": "Bootstrap Lesson 22",
        "Src": "../Html/Html/1 (22).mp4"
    }, {
        "Name": "Bootstrap Lesson 23",
        "Src": "../Html/Html/1 (23).mp4"
    }, {
        "Name": "Bootstrap Lesson 24",
        "Src": "../Html/Html/1 (24).mp4"
    }, {
        "Name": "Bootstrap Lesson 25",
        "Src": "../Html/Html/1 (25).mp4"
    }, {
        "Name": "Bootstrap Lesson 26",
        "Src": "../Html/Html/1 (26).mp4"
    }]
} else if (body.dataset.who == "Project") {
    List = [{
        "Name": "Project Lesson 1",
        "Src": "Project/1 (1).mp4"
    }, {
        "Name": "Project Lesson 2",
        "Src": "Project/1 (2).mp4"
    }, {
        "Name": "Project Lesson 3",
        "Src": "Project/1 (3).mp4"
    }, {
        "Name": "Project Lesson 4",
        "Src": "Project/1 (4).mp4"
    }, {
        "Name": "Project Lesson 5",
        "Src": "Project/1 (5).mp4"
    }, {
        "Name": "Project Lesson 6",
        "Src": "Project/1 (6).mp4"
    }, {
        "Name": "Project Lesson 7",
        "Src": "Project/1 (7).mp4"
    }, {
        "Name": "Project Lesson 8",
        "Src": "Project/1 (8).mp4"
    }, {
        "Name": "Project Lesson 9",
        "Src": "Project/1 (9).mp4"
    }, {
        "Name": "Project Lesson 10",
        "Src": "Project/1 (10).mp4"
    }, {
        "Name": "Project Lesson 11",
        "Src": "Project/1 (11).mp4"
    }, {
        "Name": "Project Lesson 12",
        "Src": "Project/1 (12).mp4"
    }, {
        "Name": "Project Lesson 13",
        "Src": "Project/1 (13).mp4"
    }, {
        "Name": "Project Lesson 14",
        "Src": "Project/1 (14).mp4"
    }, {
        "Name": "Project Lesson 15",
        "Src": "Project/1 (15).mp4"
    }, {
        "Name": "Project Lesson 16",
        "Src": "Project/1 (16).mp4"
    }, {
        "Name": "Project Lesson 17",
        "Src": "Project/1 (17).mp4"
    }, {
        "Name": "Project Lesson 18",
        "Src": "Project/1 (18).mp4"
    }, {
        "Name": "Project Lesson 19",
        "Src": "Project/1 (19).mp4"
    }, {
        "Name": "Project Lesson 20",
        "Src": "Project/1 (20).mp4"
    }, {
        "Name": "Project Lesson 21",
        "Src": "Project/1 (21).mp4"
    }, {
        "Name": "Project Lesson 22",
        "Src": "Project/1 (22).mp4"
    }, {
        "Name": "Project Lesson 23",
        "Src": "Project/1 (23).mp4"
    }, {
        "Name": "Project Lesson 24",
        "Src": "Project/1 (24).mp4"
    }, {
        "Name": "Project Lesson 25",
        "Src": "Project/1 (25).mp4"
    }, {
        "Name": "Project Lesson 26",
        "Src": "Project/1 (26).mp4"
    }]
}
if (body.dataset.who != "Home" && body.dataset.who != "New Course") {
    let CounLessons = List.length;
    let RemainderODivision = CounLessons % 5
    let Total = (CounLessons - (CounLessons % 5)) / 5
    let Buttos2 = ''

    for (let i = 0; i < Total; i++) {

        let Array = List.slice((i + 1) * 5 - 5, (i + 1) * 5)
        for (let x = 0; x < Array.length; x++) {
            Buttos2 += `<button data-click="${Array[x].Src}" data-id="${Array[x].Name}">${Array[x].Name}</button>`
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
            Buttos += `<button data-click="${List[List.length -(i)].Src}" data-id="${List[List.length -(i)].Name}">${List[List.length -(i)].Name}</button>`
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
    let H2_AboutVideo = document.querySelector("#AboutVideo h2")

    let units_Watched = (localStorage.length == 0) ? 0 : Math.floor(JSON.parse(localStorage.getItem(body.dataset.who)).length / 5)
    for (let i = 0; i < All_Divs.length; i++) {
        All_Divs[i].parentElement.style.display = "none"
        if (units_Watched == 0) {
            All_Divs[units_Watched].parentElement.style.display = "block"
        } else if (units_Watched > 0) {

            for (let x = 0; x < units_Watched + 1; x++) {
                All_Divs[x].parentElement.style.display = "block"
            }
        }
    }
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
    if (body.dataset.cover == "true") {
        let cover = document.getElementById("cover")
        let AllCourses = document.querySelector(".AllCourse")
        AllCourses.innerHTML = "<span class='Soon'>Soon</span>"
        cover.style.height = Video.offsetHeight + "px"
    }
    window.onresize = function() {
        if (body.dataset.cover == "true") {
            let cover = document.getElementById("cover")
            let AllCourses = document.querySelector(".AllCourse")
            AllCourses.innerHTML = "<span class='Soon'>Soon</span>"
            cover.style.height = Video.offsetHeight + "px"
        }
    }
    Video.ontimeupdate = function() {
        if (Math.round(Video.currentTime) == Math.round(Video.duration)) {
            if (localStorage.length != 0) {
                let Arrays = []
                Arrays = JSON.parse(localStorage.getItem(body.dataset.who))
                if (Arrays[Arrays.indexOf(Video.dataset.id)] != Video.dataset.id) {
                    Arrays.push(Video.dataset.id)
                    localStorage.setItem(body.dataset.who, JSON.stringify(Arrays))
                } else {
                    console.log("You Watch This Video");
                }
            }
        }
    };
    let WatchedDiv = document.querySelector("#Watched")
    if (localStorage.length != 0) {
        let WatchedVideo = JSON.parse(localStorage.getItem(body.dataset.who))
        let Lessons_Wateched = []
        for (let i = 0; i < WatchedVideo.length; i++) {
            for (let x = 0; x < List.length; x++) {
                if ("@#$%" + List[x].Name.replaceAll(' ', "@") + "@#$%" == WatchedVideo[i]) {
                    WatchedDiv.innerHTML += `<span>${List[x].Name}</span>`;
                }
            }
        }
    }
    All_Buttons.forEach(All_Button => {
        Video.src = List[0].Src
        Video.setAttribute("data-Id", "@#$%" + All_Buttons[0].dataset.id.replaceAll(' ', "@") + "@#$%")
        H2_AboutVideo.innerHTML = All_Buttons[0].dataset.id
        All_Button.onclick = function() {
            Video.src = All_Button.dataset.click;
            H2_AboutVideo.innerHTML = All_Button.dataset.id
            Video.setAttribute("data-Id", "@#$%" + All_Button.dataset.id.replaceAll(' ', "@") + "@#$%")
        }
    })
}
