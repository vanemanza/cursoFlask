function toggleTheme(){
    const container = document.getElementById('container' );
    container.classList.toggle('themeDark');
    const theme = document.getElementById('themeButton').innerHTML;
    if (theme === "Theme Dark"){
        document.getElementById('themeButton').innerText = "Theme Light";
    } else {
        document.getElementById('themeButton').innerText = "Theme Dark";
    }
}

async function fetchData(){
    
    const inputValue = document.getElementById('user').value;
    const data = await fetch(`http://api.github.com/users/${inputValue}`);
    const json = await data.json();    
    document.getElementById('avatar').src = json.avatar_url;
    document.getElementById('name').innerText = json.name;
    document.getElementById('bio').innerText = json.bio;
    document.getElementById('company').innerText = json.company;
    document.getElementById('location').innerText = json.location;       
    
}

function showData(){
    document.getElementById('info').style.display='flex';
    fetchData();
    document.getElementById('user').value = " ";
}

