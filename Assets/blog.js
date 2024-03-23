
function createPost(username, title, content) {
    let post = document.createElement('section')
    post.classList.add('post')
    
    let titleElement = document.createElement('h2')
    titleElement.classList.add('title')
    titleElement.innerText = title
    post.appendChild(titleElement)
    let contentElement = document.createElement('p')
    contentElement.classList.add('content')
    contentElement.innerText = content
    post.appendChild(contentElement)
    let usernameElement = document.createElement('h3')
    usernameElement.classList.add('username')
    usernameElement.innerText = username
    post.appendChild(usernameElement)
    
    return post
}

document.addEventListener('DOMContentLoaded', function(){
    let newSection = document.getElementById('new-section')
    let postList = localStorage.getItem('posts')
    if (postList == null){
        postList= '[]'
    }
    let posts = JSON.parse(postList)

    for (let post of posts ) {
        console.log(post)
        newSection.appendChild(createPost(post.username, post.title, post.content))
       
    } 
})
const themeSwitcher = document.getElementById('theme-switch')
const container = document.querySelector('.container')

console.log(container)


themeSwitcher.addEventListener('change', function(){
    container.classList.toggle("dark")
  
})
