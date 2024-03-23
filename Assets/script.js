// connect the form to the js
const userN = document.getElementById('user-input')
const title = document.getElementById('title-input')
const content = document.getElementById('content-input')

const button = document.querySelector('button')
const backButton = document.querySelector('back')
const themeSwitcher = document.getElementById('theme-switch')
const container = document.querySelector('.container')



themeSwitcher.addEventListener('change', function(){

    container.classList.toggle("dark")
  
})


let userArray = []


button.addEventListener('click', function () {

    let userObj = {
        username: userN.value.trim(),
        title: title.value.trim(),
        content: content.value.trim()
    }

    if (userObj.username == '' || userObj.title == '' || userObj.content == '') {
        alert('type in all the boxes :)')
    } else {
        let postList = localStorage.getItem('posts')
        if (postList == null) {
            postList = "[]"

        }
        let posts = JSON.parse(postList)

        posts.push(userObj)

        localStorage.setItem('posts', JSON.stringify(posts))

        userArray.push(userObj)
        console.log(userObj)
        location.href = "blog.html"
    }





})


// localStorage.removeItem(null)