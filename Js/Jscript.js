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
let CounLessons = 52;
let RemainderODivision = CounLessons % 5
let Total = (CounLessons - (CounLessons % 5)) / 5
for (let i = 0; i < Total; i++) {
    AllCourse.innerHTML += `
        <div>
            <h5>Unit ${i+1}</h5>
            <button>Lesson 1</button>
            <button>Lesson 2</button>
            <button>Lesson 3</button>
            <button>Lesson 4</button>
            <button>Lesson 5</button>      
        </div>
    `;
}
if (RemainderODivision != 0) {
    let Buttos = ''
    for (let i = 0; i < RemainderODivision; i++) {
        Buttos += `<button>Lesson ${i + 1}</button>`
    }
    AllCourse.innerHTML += `<div>
        <h5>${Total+1}</h5>
        ${Buttos}
    </div>`;
}