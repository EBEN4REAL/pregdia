document.querySelector('.card-1').addEventListener('click' , (e) => {
    localStorage.setItem('pregiaCategory', 'pre-natal')
    setTimeout(() => {
        window.location.replace("http://127.0.0.1:5500/diagnose.html")
    }, 3000)
    document.querySelector('.card-1').style.boxShadow = '0px 4.5px 7px #6757a8'
    document.querySelector('.card-2').style.boxShadow = '0px 1.5px 3px #0000000d'
    document.querySelector('.header-bg').style.background = "linear-gradient(rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0.8)),  url(img/preg.jpeg) no-repeat"
    document.querySelector('.header-bg-2').style.background = "linear-gradient(rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0.8)),  url(img/preg.jpeg) no-repeat"
    document.querySelector('.header-bg').style.backgroundSize = "cover"
    document.querySelector('.header-bg').style.backgroundPosition = "center"
    document.querySelector('.header-bg-2').style.backgroundSize = "cover"
    document.querySelector('.header-bg-2').style.backgroundPosition = "center"
})
document.querySelector('.card-2').addEventListener('click' , (e) => {
    localStorage.setItem('pregiaCategory', 'post-natal')
    setTimeout(() => {
        window.location.replace("http://127.0.0.1:5500/diagnose.html")
    }, 3000)
    document.querySelector('.card-2').style.boxShadow = '0px 4.5px 7px #6757a8'
    document.querySelector('.card-1').style.boxShadow = '0px 1.5px 3px #0000000d'
    document.querySelector('.header-bg').style.background = "linear-gradient(rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0.8)),  url(img/pn.jpeg) no-repeat"
    document.querySelector('.header-bg-2').style.background = "linear-gradient(rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0.8)),  url(img/pn.jpeg) no-repeat"
    document.querySelector('.header-bg').style.backgroundSize = "cover"
    document.querySelector('.header-bg').style.backgroundPosition = "center"
    document.querySelector('.header-bg-2').style.backgroundSize = "cover"
    document.querySelector('.header-bg-2').style.backgroundPosition = "center"
})


function goBack($route) {
    window.location.replace(`http://127.0.0.1:5500/${$route}.html`)
}




