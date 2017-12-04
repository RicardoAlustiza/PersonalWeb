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
    $("#trajectorytext1").waypoint(function() {
        $('#trajectorytext1').addClass('fadeInRight');
    }, { offset: '100%' });
    $("#bullet1").waypoint(function() {
        $('#bullet1').addClass('zoomIn');
    }, { offset: '100%' });
    $("#btnexperiencie1").waypoint(function() {
        $('#btnexperiencie1').addClass('zoomIn');
    }, { offset: '100%' });
    $("#trajectorytextR").waypoint(function() {
        $('#trajectorytextR').addClass('fadeInRight');
    }, { offset: '100%' });
    $("#bulletR").waypoint(function() {
        $('#bulletR').addClass('zoomIn');
    }, { offset: '100%' });
    $("#btnexperiencieR").waypoint(function() {
        $('#btnexperiencieR').addClass('zoomIn');
    }, { offset: '100%' });
    $("#trajectorytext4").waypoint(function() {
        $('#trajectorytext4').addClass('fadeInLeft');
    }, { offset: '100%' });
    $("#bullet4").waypoint(function() {
        $('#bullet4').addClass('zoomIn');
    }, { offset: '100%' });
    $("#btnexperiencie4").waypoint(function() {
        $('#btnexperiencie4').addClass('zoomIn');
    }, { offset: '100%' });
    $("#trajectorytextR2").waypoint(function() {
        $('#trajectorytextR2').addClass('fadeInRight');
    }, { offset: '100%' });
    $("#bulletR2").waypoint(function() {
        $('#bulletR2').addClass('zoomIn');
    }, { offset: '100%' });
    $("#btnexperiencieR2").waypoint(function() {
        $('#btnexperiencieR2').addClass('zoomIn');
    }, { offset: '100%' });
    $("#entertaimentimg").waypoint(function() {
        $('#entertaimentimg').addClass('fadeInUp');
    }, { offset: '100%' });
    $("#scienceimg").waypoint(function() {
        $('#scienceimg').addClass('fadeInUp');
    }, { offset: '100%' });
    $("#projectsimg").waypoint(function() {
        $('#projectsimg').addClass('fadeInUp');
    }, { offset: '100%' });
    $("#socialimg").waypoint(function() {
        $('#socialimg').addClass('fadeInUp');
    }, { offset: '100%' });
    $("#travelimg").waypoint(function() {
        $('#travelimg').addClass('fadeInUp');
    }, { offset: '100%' });
    $("#workspaceimg").waypoint(function() {
        $('#workspaceimg').addClass('fadeInUp');
    }, { offset: '100%' });
    $("#btnexperiencie1_2").waypoint(function() {
        $('#btnexperiencie1_2').addClass('zoomIn');
    }, { offset: '100%' });
    $("#btnexperiencie2_2").waypoint(function() {
        $('#btnexperiencie2_2').addClass('zoomIn');
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