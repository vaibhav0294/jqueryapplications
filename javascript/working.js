$(document).ready(function () {
    var myCard = true;
    var expandedMenu = false;
    var modalVisible = false;
    $('#link').click(function () {
        if (myCard) {
            $('.myCard').hide("10000")
            myCard = false;
        } else if (!myCard) {
            $('.myCard').show("1000")
            myCard = true;
        }

    });

    $('#collapseSection .btn').click(function () {
        if (myCard) {
            $('.myCard').hide("10000")
            myCard = false;
        } else if (!myCard) {
            $('.myCard').show("1000")
            myCard = true;
        }

    });

    $('.bg').click(function () {
        if (expandedMenu) {
            $('.navbar ul').css("display", "none");
            $('.searchBar').css("display", "none");
            $('.parmary-text1').css("padding-buttom", "0");
            expandedMenu = false;

        } else if (!expandedMenu) {
            $('.navbar ul').css("display", "block");
            $('.searchBar').css("display", "block");
            $('.parmary-text1').css("padding-buttom", "15px");
            expandedMenu = true;
        }
    });

    $('#modalSection .btn').click(function () {
        $('.box').show('slow');
    });

    $('.close').click(function () {
        $('.box').hide('slow');
    });

    $('a .disable').on('click',function(event){
        event.preventDefault();
        event.stopPropogation();
    })

    $('#toggle').click(function () {
        alert('hi')
    });
});