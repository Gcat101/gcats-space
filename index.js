var clicks = 0;
var gcatToggled = false

function twitter() {
    window.location.href='https://twitter.com/GcatInTrueForm';
}
function youtube() {
    window.location.href='https://www.youtube.com/channel/UCOH7EaAnk1HJhbJNPRCVC2g';
}
function discord() {
    window.location.href='https://discord.gg/WApvNpPeBV';
}
function github() {
    window.location.href='https://github.com/Gcat101';
}
function twitch() {
    window.location.href='https://twitch.com/g_cat';
}
function itch() {
    window.location.href='https://g-cat.itch.io/';
}
function reddit() {
    window.location.href='https://www.reddit.com/user/G_cat101';
}
function vk() {
    window.location.href='https://vk.com/g_cat101';
}
function tiktok() {
    alert('Go fuck yourself');
    while(1)location.reload(1)
}
function spotify() {
    window.location.href='https://open.spotify.com/user/3162kbap6gydnbuokgug2chmhldy?si=610e32eaacc244f1';
}
function instagram() {
    window.location.href='https://www.instagram.com/gcat101/';
}
function facebook() {
    window.location.href='https://www.facebook.com/profile.php?id=100025216698767';
}
function copyleft() {
    window.location.href='https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BF%D0%B8%D0%BB%D0%B5%D1%84%D1%82';
}
function projects() {
    window.location.href='/projects';
}
function main_page() {
    window.location.href='/';
}
function lorem_project() {
    window.location.href='/loremProject';
}
function jpeg_to_json() {
    window.location.href='/Jpeg-to-Json';
}
function whosthatstand() {
    window.location.href='/whosthatstand';
}
function d54() {
    window.location.href='/d54';
}
function gcats_space() {
    window.location.href='/this-website';
}
function about() {
    window.location.href='/about';
}
function contacts() {
    window.location.href='/contacts';
}
function jpeg_github() {
    window.location.href='https://github.com/Gcat101/jpeg-to-json';
}
function whos_github() {
    window.location.href='https://github.com/Gcat101/Whos-That-Stand-RU';
}
function whos_discord() {
    window.location.href='https://discord.com/api/oauth2/authorize?client_id=839415817195487252&permissions=8&scope=bot';
}
function website_github() {
    window.location.href='https://github.com/Gcat101/gcats-space';
}
function haha() {
    switch (clicks) {
        case 0:
            alert('Ты не можешь сделать такое с конструктором, bruh');
            break;
        case 1:
            alert('Ты не можешь сделать такое с конструктором, bruh');
            break;
        case 2:
            alert('Ты не можешь сделать такое с конструкто- стоп');
            break;
        case 3:
            alert('Хватит');
            break;
        case 4:
            alert('Окей, я перестану отвечать.');
            break;
        case 5:
            alert('Пока!');
            break;
    
        default:
            break;
    }

    clicks++;
}
function up() {
    scroll(0,0);
}

function reloadStuff() {
    scroll(0,0);
}

function toggle_gcat() {
    if (gcatToggled == false) {
        document.getElementById('gcat').style.filter = "invert(0)";
        gcatToggled = true;
    }
    else if (gcatToggled == true) {
        document.getElementById('gcat').style.filter = "invert(1)";
        gcatToggled = false;
    }
}

history.scrollRestoration = "manual";

window.onload = reloadStuff();
