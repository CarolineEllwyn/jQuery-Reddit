$(document).ready(function(){

    const $content = $('#restultDiv');

    $.ajax({
        method:"GET",
        url: 'https://www.reddit.com/r/funny/top.json?top=15',   //url to top 15 posts
        success: function(data) {                               //if successful, the method retrieves a permalink and the title from API and turns it into a link named by the title
            $(data.data.children).each(function(index, item){
                const result = `
                <div class="post-body">
                    <div class="post-title"><a href="https://www.reddit.com${item.data.permalink}">${item.data.title}</a></div>
                </div>
            `
            $content.append(result); // lägger till post till content
            })           
        },
        error: function(error) {
            console.log('error: ', error);
        }
        
    })
})



