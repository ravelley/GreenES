$(document).ready(function() {
    Path.map('#/teacher/:name').to(function() {
        var name = this.params['name'];
        $.get('teacher/' + name, function(data) {
            var content = '<div class="row">' +
                '<div class="box">' +
                '<ol class="breadcrumb">' +
                '<li><a href="#/welcome">Home</a></li>' +
                '<li><a href="#/staff/teachers">Teachers</a></li>' +
                '<li class="active">' + name + '</li>' +
                '</ol>' +
                data +
                '</div>' +
                '</div>';
            $('#container').html(content);
        });
        $('.navbar-collapse').collapse('hide');
    });
    Path.map('#/specialist/:name').to(function() {
        var name = this.params['name'];
        $.get('specialist/' + name, function(data) {
            var content = '<div class="row">' +
                '<div class="box">' +
                '<ol class="breadcrumb">' +
                '<li><a href="#/welcome">Home</a></li>' +
                '<li><a href="#/staff/specialists">Specialists</a></li>' +
                '<li class="active">' + name + '</li>' +
                '</ol>' +
                data +
                '</div>' +
                '</div>';
            $('#container').html(content);
        });
        $('.navbar-collapse').collapse('hide');
    });
    Path.map('#/:folder(/:page)').to(function() {
        var path = this.params['folder'];
        if(this.params['page']) path = this.params['folder'] + '/' + this.params['page'];
        $('#container').load(path + '.html');
        $('.navbar-collapse').collapse('hide');
    });
    Path.rescue(function() {
        $('#container').load('welcome.html');
        $('.navbar-collapse').collapse('hide');
    });
    Path.root("#/welcome");
    Path.listen();
});