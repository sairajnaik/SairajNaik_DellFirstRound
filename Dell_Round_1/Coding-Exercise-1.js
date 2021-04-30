// Please write the code to change the order of the ANAV filter category 
// (Shipping to second place and Processor Generation to first place and Processor at third place ) from the below URL
// https://www.dell.com/en-us/shop/desktop-computers/sr/desktops/xps-desktops?~ck=bt


var list = document.querySelector('.leftanav__option__box');
list.insertBefore(list.children[3], list.children[1]);