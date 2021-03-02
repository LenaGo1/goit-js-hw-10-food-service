const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const refs = {
    body: document.querySelector('body'),
    input: document.getElementById("theme-switch-toggle")
}

saveTheme ();
function saveTheme (){
    const savedTheme = localStorage.getItem('theme');
    console.log(savedTheme);
    if (savedTheme){
        refs.body.classList.add(savedTheme);
        if (savedTheme === 'dark-theme'){
            refs.input.checked = true;
        }
    }

}

refs.input.addEventListener('click', changeTheme);

function changeTheme() {
    if (refs.input.checked) {
        refs.body.classList.remove(Theme.LIGHT);   
        refs.body.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    }
    else {
        refs.body.classList.remove(Theme.DARK);
        refs.body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}