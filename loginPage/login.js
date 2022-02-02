function showPwd() {

}
let i = 1;
$('#img1').on('click', function() {
    // view or not password
    let input = document.getElementById('passwordInput');
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
    // eye image changing
    i++;
    $('#img1').attr('src', 'open-eyes.png'); // replace img
    if (i == 2) {
        $('#img1').attr('src', 'closed-eyes.png');
        i = 0;
    }
})