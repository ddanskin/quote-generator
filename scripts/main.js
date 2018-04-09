let apiUrl = "https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";

$("#getQuote").on("click", function(){
    getQuote();
});

function getQuote() {
    $.getJSON(apiUrl, function(data) {
        let html = "";
        let qAuthor = data.quoteAuthor;
        if (qAuthor === "") {qAuthor = "Unknown";}
        html += data.quoteText + "<br> ~ "+ qAuthor;
        $(".message").html(html);
        let tUrl = "https://twitter.com/intent/tweet?text=";
        tUrl += data.quoteText + " ~ " + qAuthor;
        $(".twitter-share-button").attr("href", tUrl);
    });
}

getQuote();
