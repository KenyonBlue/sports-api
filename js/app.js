$(document).ready(function () {
    var params = {
        // Request parameters
    };

    $.ajax({
            url: "https://api.fantasydata.net/v3/nfl/scores/JSON/News?" + $.param(params),
            beforeSend: function (xhrObj) {
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "d81fc5f92a31429da16d056b7160b167");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function (data) {
            console.log(data);
            var htmlOutput = "";
            $.each(data, function (key, value) {
                htmlOutput += '<li class="news-item"><h2><a href="' + value.Url + '">' + value.Title + '</a></h2><p>' + value.Content + '</p></li>';
            });
            //            console.log(htmlOutput);
            $('#news').html(htmlOutput);
        })
        .fail(function () {
            alert("error");
        });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //get team name function
    $('#submitTeam').on('click', function () {
        var teamNameValue = $('#teamName').val();
        if (teamNameValue.length == 0){
            alert('Please add Team Name to search');
        }
        else {
            getTeamNews(teamNameValue);
        }

//        alert(teamNameValue);
    });
    //get team news function
function getTeamNews(teamName){
    var params = {
        // Request parameters
    };

    $.ajax({
        url: "https://api.fantasydata.net/v3/nfl/scores/{format}/NewsByTeam/{team}?" + $.param(params),
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "{subscription key}");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
        .done(function (data) {
        alert("success");
    })
        .fail(function () {
        alert("error");
    });
}





})
