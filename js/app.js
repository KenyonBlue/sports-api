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
            //starting all news code
            var htmlOutput = "";
            $.each(data, function (key, value) {
                htmlOutput += '<li class="news-item"><h2><a href="' + value.Url + '">' + value.Title + '</a></h2><p>' + value.Content + '</p></li>';
            });
            //            console.log(htmlOutput);
            $('#news').html(htmlOutput);
            // ending all news code
        })
        .fail(function () {
            alert("error");
        });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //get team name function
    $('#submitTeam').on('click', function () {
        var teamNameValue = $('#teamName').val();


        getTeamNews(teamNameValue);

        //        alert(teamNameValue);
    });
    //get team news function
    function getTeamNews(teamName) {
        //        console.log(teamName);
        var params = {
            team: teamName

        };

        $.ajax({
                //                url: "https://api.fantasydata.net/v3/nfl/scores/JSON/NewsByTeam/{team}?" + $.param(params),
                url: "https://api.fantasydata.net/v3/nfl/scores/JSON/NewsByTeam/" + teamName,
                beforeSend: function (xhrObj) {
                    // Request headers
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "d81fc5f92a31429da16d056b7160b167");
                },
                type: "GET",
                // Request body
                data: "{body}",
            })
            .done(function (data) {
                //                console.log(data);
                //starting team news code
                var htmlOutput = "";
                $.each(data, function (key, value) {
                    htmlOutput += '<li class="news-item"><h2><a href="' + value.Url + '">' + value.Title + '</a></h2><p>' + value.Content + '</p></li>';
                });
                //            console.log(htmlOutput);
                $('.showTeamNews').html(htmlOutput);
                //                ending team news code
            })
            .fail(function () {
                alert("error team news");
            });
    }





})
