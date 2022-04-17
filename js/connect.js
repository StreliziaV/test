var current_user = undefined
var save = undefined
var centerqq = document.getElementById('center');

window.onload = function() {
    var status = false;
    // ajax
    var myajax = $.ajax({
        url: "http://127.0.0.1:8080/game",
        type: "get",
        success: function(data) {
            status = true;
            current_user = data.current_user;
            save = data.result;
        }
    });

    for (var i = 0; i <= save.length - 1; i++) {
        saved[save[i].location] = save[i].scene;
    }

    // 根据 status 的状态 进行后续操作
    // myajax 请求完毕时执行
    $.when(myajax).done(function() {
        if (status) {
            if (current_user == undefined) {
                alert('Fail to get userinfo. Please login!');
                setTimeout("window.location = 'index.html'", 500);
                return;
            }
        }
    });
}

function center() {
    var status = false;
    // ajax
    var myajax = $.ajax({
        url: "http://127.0.0.1:8080/center",
        data: {
            current_user: current_user,
        },
        type: "get",
        success: function(data) {
            status = true;
        }
    });

    // 根据 status 的状态 进行后续操作
    // myajax 请求完毕时执行
    $.when(myajax).done(function() {
        if (status) {
            setTimeout("window.location = 'my.html'", 500);
        }
    });
}

function save_data(location, scene, save_name, havering) {
    var status = false;
    // ajax
    var myajax = $.ajax({
        url: "http://127.0.0.1:8080/save",
        data: {
            user_id: current_user.id,
            location: location,
            scene: scene,
            save_name: save_name,
            havering: havering
        },
        type: "get",
        success: function(data) {
            status = true;
            flag = data.f;
        }
    });

    // 根据 status 的状态 进行后续操作
    // myajax 请求完毕时执行
    $.when(myajax).done(function() {
        if (status) {
            if (f = 0) {
                alert('Fail to save.');
            }
            alert('Save successfully!');
        }
    });
}

centerqq.addEventListener('click', center);