$(function () {
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
            alert("success");
        })
        .fail(function () {
            alert("error");
        });
});
