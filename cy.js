console.log("Hello world!");
const navbar = document.querySelector('.navbar');
    const menuBtn= document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');


    menuBtn.addEventListener('click',()=>{
        themeControls.classList.toggle('menu-open');
    });
    window.addEventListener('scroll',()=>{
    if(scrollY> 50){
        navbar.classList.add('navbar-active');
    } else if(scrollY<50){
        navbar.classList.remove('navbar-active');
    }
    });

    const colors = document.querySelectorAll('.color');
    const darkMode = document.querySelector('.dark-mode');
    const themeBtn=document.querySelector('.theme-btn');
    const themeControls = document.querySelector('.theme-controls');
    
    let lightTheme = false;
    const themeColor = {
        accent:'',
        accentDark:'',
    };
    themeBtn.addEventListener('click',()=>{
        themeControls.classList.toggle('theme-open');

    });

    const r= document.querySelector(':root');
    const rs= getComputedStyle(r);

    darkMode.addEventListener('click',()=>{
        document.body.classList.toggle('light-theme');
        darkMode.firstElementChild.classList.toggle('fa-sun');
    if(document.body.classList.contains('light-theme')){
        lightTheme= true;
    }else{
        lightTheme=false;
    }
    localStorage.setItem("theme",JSON.stringify(lightTheme));
    });

    colors.forEach(Color=>{
        Color.addEventListener('click',e=>{
            const clickedElement= window.getComputedStyle(e.target);
            const accentColor = clickedElement.backgroundColor;
            const accentColorDarken = clickedElement.color;
            r.style.setProperty('--accent',accentColor);
            r.style.setProperty('--accent-darken', accentColorDarken);
            themeColor.accent=accentColor;
            themeColor.accentDark=accentColorDarken;
            localStorage.setItem("color", JSON.stringify(themeColor));
        }); 

    });
    const customTheme = JSON.parse(localStorage.getItem("theme"));
    if(customTheme == true){
       document.body.classList.add('light-theme');
       darkMode.firstElementChild.classList.add('fa-sun');  
    }
    if(localStorage.getItem("color")!=null){
        const customColor =JSON.parse(localStorage.getItem("color"));
        r.style.setProperty('--accent',customColor.accent);
        r.style.setProperty('--accent-darken', customColor.accentDark);
    }
    document.querySelector('.year').innerHTML=new Date().getFullYear();