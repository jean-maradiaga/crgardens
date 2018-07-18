var projects = {};
var en_projects = {};
projects.init = function (){

    $(document).ready(function()
          {
            $.get('fixtures/projects.xml', function(d){

            $(d).find('item').each(function(){

                var $item = $(this);
                var name  = $item.find("name").text();
                var source = $item.find('source').text();

                var html  =
                '<li class="col-md-4 col-sm-6 col-xs-6 grid-item project-grid-item decking format-image">'+
                '<a class="popup-image media-box" href=' + source + '><img src=' + source + 'alt=' + name + '></a>'+
                '</li>';

                $('#project-list').append($(html));
            });
        });
    });
}


en_projects.en_init = function (){

    $(document).ready(function()
          {
            $.get('../fixtures/en_projects.xml', function(d){

            $(d).find('item').each(function(){

                var $item = $(this);
                var name  =  $item.find("name").text();
                var source = $item.find('source').text();

                var html  =
                '<li class="col-md-4 col-sm-6 col-xs-6 grid-item project-grid-item decking format-image">'+
                '<a class="popup-image media-box" href=' + source + '><img src=' + source + 'alt=' + name + '></a>'+
                '</li>';

                $('#project-list').append($(html));
            });
        });
    });
}
