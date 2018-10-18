$(document).ready(function () {
    $("button").click(function () {
        let id = this.id;
        let fSize = '16px';
        switch (id) {
            case 'small':
                fSize = '10px';
                break;
            case 'medium':
                break;
            case 'big':
                fSize = '30px';
                break;
        }

        $("h1").css('font-size', fSize);
        $("p").css('font-size', fSize);
    })
});