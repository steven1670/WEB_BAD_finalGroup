function clickReview() {
    var rev = document.getElementById("btnGamesReview");
    var walk = document.getElementById("btnGamesWalkthrough");
    rev.className = rev.className.replace(" clicked", "");
    walk.className = walk.className.replace(" clicked", "");

    rev.className += " clicked";

    var listWalk = document.getElementById("walkthroughList");
    listWalk.className += " hidden";
    var listRev = document.getElementById("reviewList")
    listRev.className = listRev.className.replace("hidden", "");
}

function clickWalkthrough() {
    var rev = document.getElementById("btnGamesReview");
    var walk = document.getElementById("btnGamesWalkthrough");
    rev.className = rev.className.replace(" clicked", "");
    walk.className = rev.className.replace(" clicked", "");

    walk.className += " clicked";

    var listWalk = document.getElementById("walkthroughList");
    listWalk.className = listWalk.className.replace("hidden", "");
    var listRev = document.getElementById("reviewList")
    listRev.className += " hidden";
}


