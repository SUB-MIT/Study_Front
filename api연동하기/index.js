let writePostBtn = document.getElementById("writePostBtn");
let writePost = document.getElementById("writePost");
let whiteWindow = document.getElementById("whiteWindow");
const baseURL = 'https://submit-test.herokuapp.com';
let viewPost = document.getElementById("viewPost");
let writeBtn = document.getElementById("writeBtn");
let writeContent = document.getElementById("writeContent");
let writeTitle = document.getElementById("writeTitle");
let blank_pattern = /^\s+|\s+$/g;

whiteWindow.addEventListener("click", () => {
    writePost.style.visibility = "hidden";
    whiteWindow.style.visibility = "hidden";
    writeTitle.value="";
    writeContent.value="";
});

writePostBtn.addEventListener("click", () => {
    writePost.style.visibility = "visible";
    whiteWindow.style.visibility = "visible";
});

writeBtn.addEventListener("click", () =>{
    if(writeTitle.value.replace(blank_pattern,'') ==""){
        alert("제목을 입력하세요");
        return;
    }else if(writeContent.value.replace(blank_pattern,'') ==""){
        alert("내용을 입력하세요");
        return;
    }
    axios({
        baseURL: baseURL,
        method: 'post',
        url: baseURL+'/post',
        data: {
            title: writeTitle.value,
            content: writeContent.value,
        },
    }).then((res) => {
        alert("게시물 작성 완료");
        writePost.style.visibility = "hidden";
        whiteWindow.style.visibility = "hidden";
        writeTitle.value="";
        writeContent.value="";
        window.location.reload();
    }).catch((error)=>{
        alert("게시물 작성 실패");
        console.error(error);
    })
});

window.onload = ()=> {
    axios({
        baseURL: baseURL,
        method: 'get',
        url: baseURL+'/post',
    }).then((res) => {
        console.log(res);
        res.data.postContents.map((i)=>{
            let postDiv = document.createElement('div');
            let postTitle = document.createElement('p');
            postTitle.className="postTitle";
            postDiv.className = "postDiv";
            postDiv.appendChild(postTitle);
            postDiv.id = i.id;
            postTitle.innerHTML=i.title;

            viewPost.appendChild(postDiv);

            postDiv.addEventListener("click",() => {
                let num = postDiv.id;

                axios({
                    baseURL: baseURL,
                    method: 'get',
                    url: baseURL+'/post/'+num,
                }).then((res) => {
                    console.log(res);
                }).catch((error)=>{
                    console.error(error);
                })
            });
        });
    }).catch((error) => {
        console.error(error);
    });
};