console.log('she works')

let theme =localStorage.getItem('theme')
if(theme == null){
    setTheme('default')
}
else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for(var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('clicked: ', mode)

        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'default'){
        document.getElementById('theme-style').href = 'style.css'
    }
    if(mode == 'theme2'){
        document.getElementById('theme-style').href = 'theme2.css'
    }
    if(mode == 'theme3'){
        document.getElementById('theme-style').href = 'theme3.css'
    }
    if(mode == 'theme4'){
        document.getElementById('theme-style').href = 'theme4.css'
    }

    localStorage.setItem('theme', mode)
}
