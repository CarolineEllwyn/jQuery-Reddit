$(document).ready(function () {

    const $content = $('body');

    $.ajax({
        method: "GET",
        url: 'https://www.reddit.com/r/funny/top.json?limit=15',   //url to 15 posts
        success: function (data) {                               //if successful, the method retrieves a permalink, a picture and the title from API and turns it into a link named by the title
            $(data.data.children).each(function (index, item) {
                const result = `
                <div class="container">
                <div class="row">
                    <div class="col-12 pb-4 d-flex justify-content-center">
                          <div class="card mb-3">
                          <img class="card-img-top" src="${item.data.url}" alt="image.jpg" style="width: 800px; height:500px;">
                                        <div class="card-body">
                                        <h5 class="card-title"><a id="text-animate" href="https://www.reddit.com${item.data.permalink}">${item.data.title}</a></h5>
                                         </div>
                                        </div>
                    </div>
                </div>
                </div>

            `
                $content.append(result); // add result from the AJAX into the content variable.
                $(".card-title").click(function () { //an animation thats make the title on every card fade away after click.
                    $("body").animate({
                        opacity: 0.5,
                    }, 1000, function () {
                    })
                })
            })
        },
        error: function (error) {
            console.log('error: ', error);
        }
    })

})







