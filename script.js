
$(document).ready(function(){
    let expression = '';
    $('.operand').click(function(){
        expression += $(this).text();
        $('.display').text(expression);
    })
    $('.operator').click(function(){
        expression += $(this).text();
        $('.display').text(expression);
    })
    $(".clear").click(function(){
        expression = "";
        $('.display').text(expression);
    })
    $(".equals").click(function(){
        let result = eval(expression);
        $('.display').text(result);
    })
})