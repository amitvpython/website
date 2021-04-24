var _trumbowyg = $('.article').trumbowyg({
    btnsDef: {
        // Create a new dropdown
        // image: {
        //     dropdown: ['insertImage', 'upload'],
        //     ico: 'insertImage'
        // }
    },
    // Redefine the button pane
    btns: [
        ['viewHTML'],
        ['formatting'],
        ['strong', 'em', 'del'],
        ['superscript', 'subscript'],
        ['link'],
        // ['image'], // Our fresh created dropdown
        ['upload'], // Our fresh created dropdown
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
        ['unorderedList', 'orderedList'],
        ['horizontalRule'],
        ['removeformat'],
        ['fullscreen']
    ],
    plugins: {
        // Add imagur parameters to upload plugin for demo purposes
        upload: {
            serverPath: 'https://api.imgur.com/3/image',
            fileFieldName: 'image',
            headers: {
                'Authorization': 'Client-ID ebc904b5d231a57'
            },
            urlPropertyName: 'data.data.link',
            success: function (data, _trumbowyg, $modal, values) {

                console.log(data);
                console.log(data.data.link);
                console.log(_trumbowyg);
                console.log($modal);
                console.log(values);
                $('.article').append($('<img src="'+data.data.link+'" />'));
                $($modal).hide();
            }
        },
        resizimg : {
          minSize: 64,
          step: 16,
        }
    }
});

$('#tags').selectize({
    delimiter: ',',
    persist: false,
    create: function (input) {
        return {
            value: input,
            text: input
        }
    }
});
$('#categories').selectize({
    delimiter: ',',
    persist: false,
    create: function (input) {
        return {
            value: input,
            text: input
        }
    }
});
$('#author').selectize({
    create: true,
    sortField: 'text'
});
$('.form-check-input').on('click',function() { $(this).attr('value', !$.parseJSON($(this).val())); });




// //on button click
// vanilla.result('blob').then(function(blob) {
//     // do something with cropped blob
// });

var $uploadCrop;

$uploadCrop = $('.image-preview').croppie({
    viewport: { width: 800, height: 500 },
    showZoomer: false,
    enableOrientation: false,
    enableExif: true
});

function readFile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.image-preview').addClass('ready');
            $uploadCrop.croppie('bind', {
                url: e.target.result
            }).then(function(){
                console.log('jQuery bind complete');
                $('.upload-result').text('Save');
                $('.upload-result').removeAttr('disabled');
            });
        }
        reader.readAsDataURL(input.files[0]);
    }
    else {
        swal("Sorry - you're browser doesn't support the FileReader API");
    }
}

$('#customFile').on('change', function () {
    readFile(this);
});

$('.upload-result').on('click', function (ev) {
    $uploadCrop.croppie('result', {
        type: 'canvas',
        size: 'viewport'
    }).then(function (resp) {
        console.log(resp);
        $('[name="image"]').val(resp);
        $('.upload-result').text('Saved');
        $('.upload-result').attr('disabled','disabled');
    });
});


$(document).ready(function() {
    $("#articleDescription").on('keyup', function() {
        var words = this.value.match(/\S+/g).length;
        if (words > 50) {
            // Split the string on first 200 words and rejoin on spaces
            var trimmed = $(this).val().split(/\s+/, 50).join(" ");
            // Add a space at the end to keep new typing making new words
            $(this).val(trimmed + " ");
        }
        else {
            $('#display_count').text(words);
            $('#word_left').text(50-words);
        }
    });
 });