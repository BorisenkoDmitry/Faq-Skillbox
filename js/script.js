$(function () {
    $(".faq__modules").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content",
        animate: 300
    });
    
    $(".module-item__list").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content",
        animate: 200
    });
});