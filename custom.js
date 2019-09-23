let secondSection_case0 = document.querySelector('.second-section__case0');
let secondSection_case1 = document.querySelector('.second-section__case1');
let secondSection_case2 = document.querySelector('.second-section__case2');
let secondSection_case3 = document.querySelector('.second-section__case3');
let secondSection_case4 = document.querySelector('.second-section__case4');
let secondSection_case5 = document.querySelector('.second-section__case5');
let secondSection_case6 = document.querySelector('.second-section__case6');


secondSection_case1.addEventListener('click', function() {
    
    if (secondSection_case3.classList.contains('second-section-onclick')) {
        secondSection_case3.classList.remove('second-section-onclick');
        secondSection_case3.classList.remove('triangle');
    }
    if (secondSection_case4.classList.contains('second-section-onclick')) {
        secondSection_case4.classList.remove('second-section-onclick');
        secondSection_case4.classList.remove('triangle');
    }
    if (secondSection_case2.classList.contains('second-section-onclick')) {
        secondSection_case2.classList.remove('second-section-onclick');
        secondSection_case2.classList.remove('triangle');
    }
    if (secondSection_case5.classList.contains('second-section-onclick')) {
        secondSection_case5.classList.remove('second-section-onclick');
        secondSection_case6.classList.remove('second-section-onclick');
        secondSection_case5.classList.remove('triangle');
    }
    
    secondSection_case0.classList.add('second-section-onclick');
    secondSection_case1.classList.add('second-section-onclick');
    secondSection_case1.classList.add('triangle');
    
});

secondSection_case2.addEventListener('click', function() {
    
    if (secondSection_case3.classList.contains('second-section-onclick')) {
        secondSection_case3.classList.remove('second-section-onclick');
        secondSection_case3.classList.remove('triangle');
    }
    if (secondSection_case4.classList.contains('second-section-onclick')) {
        secondSection_case4.classList.remove('second-section-onclick');
        secondSection_case4.classList.remove('triangle');
    }
    if (secondSection_case1.classList.contains('second-section-onclick')) {
        secondSection_case0.classList.remove('second-section-onclick');
        secondSection_case1.classList.remove('second-section-onclick');
        secondSection_case1.classList.remove('triangle');
    }
    if (secondSection_case5.classList.contains('second-section-onclick')) {
        secondSection_case5.classList.remove('second-section-onclick');
        secondSection_case6.classList.remove('second-section-onclick');
        secondSection_case5.classList.remove('triangle');
    }
    
    secondSection_case2.classList.add('second-section-onclick');
    secondSection_case2.classList.add('triangle');   
});

secondSection_case3.addEventListener('click', function() {
    
    if (secondSection_case2.classList.contains('second-section-onclick')) {
        secondSection_case2.classList.remove('second-section-onclick');
        secondSection_case2.classList.remove('triangle');
    }
    if (secondSection_case4.classList.contains('second-section-onclick')) {
        secondSection_case4.classList.remove('second-section-onclick');
        secondSection_case4.classList.remove('triangle');
    }
    if (secondSection_case1.classList.contains('second-section-onclick')) {
        secondSection_case0.classList.remove('second-section-onclick');
        secondSection_case1.classList.remove('second-section-onclick');
        secondSection_case1.classList.remove('triangle');
    }
    if (secondSection_case5.classList.contains('second-section-onclick')) {
        secondSection_case5.classList.remove('second-section-onclick');
        secondSection_case6.classList.remove('second-section-onclick');
        secondSection_case5.classList.remove('triangle');
    }
    
    secondSection_case3.classList.add('second-section-onclick');
    secondSection_case3.classList.add('triangle');    
});

secondSection_case4.addEventListener('click', function() {
    
    if (secondSection_case3.classList.contains('second-section-onclick')) {
        secondSection_case3.classList.remove('second-section-onclick');
        secondSection_case3.classList.remove('triangle');
    }
    if (secondSection_case2.classList.contains('second-section-onclick')) {
        secondSection_case2.classList.remove('second-section-onclick');
        secondSection_case2.classList.remove('triangle');
    }
    if (secondSection_case1.classList.contains('second-section-onclick')) {
        secondSection_case0.classList.remove('second-section-onclick');
        secondSection_case1.classList.remove('second-section-onclick');
        secondSection_case1.classList.remove('triangle');
    }
    if (secondSection_case5.classList.contains('second-section-onclick')) {
        secondSection_case5.classList.remove('second-section-onclick');
        secondSection_case6.classList.remove('second-section-onclick');
        secondSection_case5.classList.remove('triangle');
    }
    
    secondSection_case4.classList.add('second-section-onclick');
    secondSection_case4.classList.add('triangle');
    
});

secondSection_case5.addEventListener('click', function() {
    
    if (secondSection_case3.classList.contains('second-section-onclick')) {
        secondSection_case3.classList.remove('second-section-onclick');
        secondSection_case3.classList.remove('triangle');
    }
    if (secondSection_case2.classList.contains('second-section-onclick')) {
        secondSection_case2.classList.remove('second-section-onclick');
        secondSection_case2.classList.remove('triangle');
    }
    if (secondSection_case1.classList.contains('second-section-onclick')) {
        secondSection_case0.classList.remove('second-section-onclick');
        secondSection_case1.classList.remove('second-section-onclick');
        secondSection_case1.classList.remove('triangle');
    }
    if (secondSection_case4.classList.contains('second-section-onclick')) {
        secondSection_case4.classList.remove('second-section-onclick');
        secondSection_case4.classList.remove('triangle');
    }
    
    secondSection_case5.classList.add('second-section-onclick');
    secondSection_case6.classList.add('second-section-onclick');
    secondSection_case5.classList.add('triangle');
    
});


let sixSection_case1 = document.querySelector('#headingOne .sixth-section__table-title');
let sixSection_case1_glyphicon = document.querySelector('#headingOne .fa-chevron-down');
let sixSection_case2 = document.querySelector('#headingTwo .sixth-section__table-title');
let sixSection_case2_glyphicon = document.querySelector('#headingTwo .fa-chevron-down');
let sixSection_case3 = document.querySelector('#headingThree .sixth-section__table-title');
let sixSection_case3_glyphicon = document.querySelector('#headingThree .fa-chevron-down');
let sixSection_case4 = document.querySelector('#headingFour .sixth-section__table-title');
let sixSection_case4_glyphicon = document.querySelector('#headingFour .fa-chevron-down');
let sixSection_case5 = document.querySelector('#headingFive .sixth-section__table-title');
let sixSection_case5_glyphicon = document.querySelector('#headingFive .fa-chevron-down');

sixSection_case1.addEventListener('click', function(){
    if (sixSection_case2.classList.contains('sixth-section__table-title-start')) {
        sixSection_case2.classList.remove('sixth-section__table-title-start');
        sixSection_case2_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case3.classList.contains('sixth-section__table-title-start')) {
        sixSection_case3.classList.remove('sixth-section__table-title-start');
        sixSection_case3_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case4.classList.contains('sixth-section__table-title-start')) {
        sixSection_case4.classList.remove('sixth-section__table-title-start');
        sixSection_case4_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case5.classList.contains('sixth-section__table-title-start')) {
        sixSection_case5.classList.remove('sixth-section__table-title-start');
        sixSection_case5_glyphicon.classList.remove('glyphicon-rotate');
    }
    
    sixSection_case1.classList.toggle('sixth-section__table-title-start');
    sixSection_case1_glyphicon.classList.toggle('glyphicon-rotate');
});

sixSection_case2.addEventListener('click', function(){
    if (sixSection_case1.classList.contains('sixth-section__table-title-start')) {
        sixSection_case1.classList.remove('sixth-section__table-title-start');
        sixSection_case1_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case3.classList.contains('sixth-section__table-title-start')) {
        sixSection_case3.classList.remove('sixth-section__table-title-start');
        sixSection_case3_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case4.classList.contains('sixth-section__table-title-start')) {
        sixSection_case4.classList.remove('sixth-section__table-title-start');
        sixSection_case4_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case5.classList.contains('sixth-section__table-title-start')) {
        sixSection_case5.classList.remove('sixth-section__table-title-start');
        sixSection_case5_glyphicon.classList.remove('glyphicon-rotate');
    }
    
    sixSection_case2.classList.toggle('sixth-section__table-title-start');
    sixSection_case2_glyphicon.classList.toggle('glyphicon-rotate');
});

sixSection_case3.addEventListener('click', function(){
    if (sixSection_case1.classList.contains('sixth-section__table-title-start')) {
        sixSection_case1.classList.remove('sixth-section__table-title-start');
        sixSection_case1_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case2.classList.contains('sixth-section__table-title-start')) {
        sixSection_case2.classList.remove('sixth-section__table-title-start');
        sixSection_case2_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case4.classList.contains('sixth-section__table-title-start')) {
        sixSection_case4.classList.remove('sixth-section__table-title-start');
        sixSection_case4_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case5.classList.contains('sixth-section__table-title-start')) {
        sixSection_case5.classList.remove('sixth-section__table-title-start');
        sixSection_case5_glyphicon.classList.remove('glyphicon-rotate');
    }
    
    sixSection_case3.classList.toggle('sixth-section__table-title-start');
    sixSection_case3_glyphicon.classList.toggle('glyphicon-rotate');
});

sixSection_case4.addEventListener('click', function(){
    if (sixSection_case1.classList.contains('sixth-section__table-title-start')) {
        sixSection_case1.classList.remove('sixth-section__table-title-start');
        sixSection_case1_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case3.classList.contains('sixth-section__table-title-start')) {
        sixSection_case3.classList.remove('sixth-section__table-title-start');
        sixSection_case3_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case2.classList.contains('sixth-section__table-title-start')) {
        sixSection_case2.classList.remove('sixth-section__table-title-start');
        sixSection_case2_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case5.classList.contains('sixth-section__table-title-start')) {
        sixSection_case5.classList.remove('sixth-section__table-title-start');
        sixSection_case5_glyphicon.classList.remove('glyphicon-rotate');
    }
    
    sixSection_case4.classList.toggle('sixth-section__table-title-start');
    sixSection_case4_glyphicon.classList.toggle('glyphicon-rotate');
});

sixSection_case5.addEventListener('click', function(){
    if (sixSection_case1.classList.contains('sixth-section__table-title-start')) {
        sixSection_case1.classList.remove('sixth-section__table-title-start');
        sixSection_case1_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case3.classList.contains('sixth-section__table-title-start')) {
        sixSection_case3.classList.remove('sixth-section__table-title-start');
        sixSection_case3_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case4.classList.contains('sixth-section__table-title-start')) {
        sixSection_case4.classList.remove('sixth-section__table-title-start');
        sixSection_case4_glyphicon.classList.remove('glyphicon-rotate');
    }
    if (sixSection_case2.classList.contains('sixth-section__table-title-start')) {
        sixSection_case2.classList.remove('sixth-section__table-title-start');
        sixSection_case2_glyphicon.classList.remove('glyphicon-rotate');
    }
    
    sixSection_case5.classList.toggle('sixth-section__table-title-start');
    sixSection_case5_glyphicon.classList.toggle('glyphicon-rotate');
});

