$(function () {
    var $progressbar = $("#progressbar");
    var $message = $("#message");

    $progressbar.slider({
        range: "min",
        min: 0,
        max: 100,
        value: 0,
        slide: function (event, ui) {
            var value = ui.value;
            $progressbar.slider("value", value);
            showMessage(value);
        }
    });

    function showMessage(value) {
        if (value >= 50) {
            $message.text("");
        } else {
            $message.text("¡Hola!");
        }
    }
});