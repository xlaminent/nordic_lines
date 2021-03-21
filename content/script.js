window.onscroll = function () { navChangeOnScroll() }; 

function navChangeOnScroll() { 
    const largeLogo = document.querySelector('#logo');
    const header = document.querySelector('.header-panel');
    const nav = document.querySelector('nav');

    if (document.documentElement.scrollTop > 150) { 
        largeLogo.style.width = "120px";
        header.style.marginTop = "15px";
        nav.style.marginTop = "0";
    } 
    else if ( 
        document.documentElement.scrollTop > 0) { 
        largeLogo.style.width = "180px";
        header.style.marginTop = "24px";
        nav.style.marginTop = "20px";
    } 
} 

function openFilters() {
    const filterContainer = document.querySelector('#mbl-filter');

    if(filterContainer.style.display == "inline-block") {
        filterContainer.style.display = "none";
    }
    else { 
        filterContainer.style.display = "inline-block";
    }
}