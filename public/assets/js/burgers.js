$(function () {
    $(".change-status").on("click", function (event) {
        var id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: true
        }).then(function () {
            console.log("changed devour to", true);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("button clicked");
        var newBurg = {
            name: $("#bu")
                .val()
                .trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(function () {
            console.log("created new Burger");
            // Reload the page to get the updated list
            location.reload();
        });
    });
});