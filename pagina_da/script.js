// togle menu button

function  toggleManu(){
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}


// change the background video when click on the galery images

function changeVideo(name){
    const bgVideolist = document.querySelectorAll('.bg_video');
    const trailer = document.querySelectorAll('.trailer');
    const model = document.querySelectorAll('.model');

    // javascript higher order array function for each
    // thi is easier to do data mapping
    bgVideolist.forEach(video =>{
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }
    });
}
