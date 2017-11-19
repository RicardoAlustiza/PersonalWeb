$(document).ready(function() {
    // hide our element on page load
    //Home
    // $('#fadeInUp-1').css('opacity', 0);
    // $('#fadeInUp-2').css('opacity', 0);
    //$('#featurette-1').css('opacity', 0);

    $("#fadeInUp-1").waypoint(function() {
        $('#fadeInUp-1').addClass('fadeInUp');
    }, { offset: '100%' });
    $("#fadeInUp-2").waypoint(function() {
        $('#fadeInUp-2').addClass('fadeInUp');
    }, { offset: '100%' });
    $("#featurette-1").waypoint(function() {
        $('#featurette-1').addClass('fadeInLeft');
    }, { offset: '100%' });
    $("#featurette-2").waypoint(function() {
        $('#featurette-2').addClass('fadeInRight');
    }, { offset: '100%' });
    $("#fadein").waypoint(function() {
        $('#fadein').addClass('fadeIn');
    }, { offset: '100%' });
    $("#fadein2").waypoint(function() {
        $('#fadein2').addClass('fadeIn');
    }, { offset: '100%' });
    $("#fadein3").waypoint(function() {
        $('#fadein3').addClass('fadeIn');
    }, { offset: '100%' });
    $("#trajectorytext2").waypoint(function() {
        $('#trajectorytext2').addClass('fadeInRight');
    }, { offset: '100%' });
    $("#bullet2").waypoint(function() {
        $('#bullet2').addClass('zoomIn');
    }, { offset: '100%' });
    $("#btnexperiencie2").waypoint(function() {
        $('#btnexperiencie2').addClass('zoomIn');
    }, { offset: '100%' });
    $("#trajectorytext3").waypoint(function() {
        $('#trajectorytext3').addClass('fadeInLeft');
    }, { offset: '100%' });
    $("#bullet3").waypoint(function() {
        $('#bullet3').addClass('zoomIn');
    }, { offset: '100%' });
    $("#btnexperiencie3").waypoint(function() {
        $('#btnexperiencie3').addClass('zoomIn');
    }, { offset: '100%' });
});

document.addEventListener('DOMContentLoaded', function() {
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if (wrapper.className.indexOf('skewed') != -1) {
        skew = 1000;
    }

    wrapper.addEventListener('mousemove', function(e) {
        delta = (e.clientX - window.innerWidth / 2) * 0.5;

        handle.style.left = e.clientX + delta + 'px';

        topLayer.style.width = e.clientX + skew + delta + 'px';
    });
});