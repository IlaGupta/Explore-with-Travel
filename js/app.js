



var app = angular.module('appTourism' , []);



$(document).ready(function(){

    $('a#navHome').on('click', function() {

        $('#navHome').effect(slide);
    });


    $('a#navToDo').on('click', function() {

        $('#toDos').effect(slide);
    });

    $('a#navAdventure').on('click', function() {

        $('#adventure').effect(slide);
    });

    $('a#navReviews').on('click', function(){

        $('#active_form').effect(slide);
    });

});
