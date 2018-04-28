$(function () {


    // Dynamically adding buttons next to each burger
    $(".devourBTN").click(function () {
        var burgerID = $(this).attr('value');
        //put
        var data = {
            devoured: true
        }

        jQuery.ajax({
            type: 'PUT',
            url: '/burgers/' + burgerID,
            data: data,
        });
        console.log(burgerID);
        location.reload();
    });

    $("#submitBTN").on("click", function (event) {
        event.preventDefault();
        console.log("Button works!");

        var burger = {
            burger_name: $("#burger-input").val(),
            devoured: false
        }

        // console.log(burger)

        $.post('/burgers', burger).then(function (data) {
            console.log(data)
            location.reload()
        })

    });
});
