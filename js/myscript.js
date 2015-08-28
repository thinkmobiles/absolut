/**
 * Created by Family on 13.08.2015.
 */
$(document).ready(function(){
    $(".select_list li").click(function(e){
        $(e.target).closest("li").toggleClass("selected")
    });
    $(".courier .button_select_courier").click(function(e){
    e.preventDefault();
        $(".courier li.selected").removeClass("selected");
    $(e.target).closest("li").toggleClass("selected")
});
});