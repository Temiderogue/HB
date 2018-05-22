$(document).ready()
{
    $("#btn").click(function(){
        $(this).hide("slow");
        $('#press').hide("slow");
        $('#hb').show(800);
        $('#ach').delay(2000).show(1000).delay(3000);
        $('#family').delay(2000).show(2000).delay(3000);
        $('#house').delay(3000).show(2000).delay(3000);
        $('#work').delay(3000).show(2000).delay(3000);
        $('#car').delay(3000).show(2000).delay(3000);
        $('#bd').delay(3000).show(2000).delay(3000);
        $('#save').delay(3000).show(2000).delay(3000);
    });
    $('#next').click(function () {
        $('#part1').hide(200).delay(3000);
        $('#part2').show(800).delay(2000);
    })
    $('#last').click(function () {
        $('#part2').hide(200).delay(2000);
        $('#part3').show(800);
    })



}