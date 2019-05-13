$('button').on("click",function(e){
    e.preventDefault();
    axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(function(response){
            var photoHTML = response.data.map(function(photo){
                var url = photo.url;
                var title = photo.title;
                var $url = $('<img>').attr('src',url).attr('alt',title);
                var $title = $('<p>').html(title);
                return $('<div>').html($url).append($title);
            })
            $('#tasks').html(photoHTML);
        });

})