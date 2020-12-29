jQuery(function ($) { // use jQuery code inside this to avoid "$ is not defined" error
    $('.gd_loadbtn').click(function () {

        var button = $(this),
		    data = {
		        'action': 'loadmore',
		        'query': gda_ajax_obj.posts, // that's how we get params from wp_localize_script() function
		        'page': gda_ajax_obj.current_page
		    };

        $.ajax({ // you can also use $.post here
            url: gda_ajax_obj.ajaxurl, // AJAX handler
            data: data,
            type: 'POST',
            beforeSend: function (xhr) {
                button.text('Loading...'); // change the button text, you can also add a preloader image
                $('.gd_ellipsis').show();
            },
            success: function (data) {
                if (data) {                    
                    $('#load-posts').append(data); // insert new posts
                    $('.gd_post__list .gd_post__image').each(function () {
                        $(this).height($(this).width());
                    });
                    gda_ajax_obj.current_page++;
                    $('.gd_ellipsis').hide(300);
                    if (gda_ajax_obj.current_page == gda_ajax_obj.max_page)
                        button.remove(); // if last page, remove the button

                    // you can also fire the "post-load" event here if you use a plugin that requires it
                    // $( document.body ).trigger( 'post-load' );
                } else {
                    button.remove(); // if no data, remove the button as well
                }
            }
        });
    });
});

/* //Loadmore scroll
jQuery(function($){
    var canBeLoaded = true, // this param allows to initiate the AJAX call only if necessary
	    bottomOffset = 2000; // the distance (in px) from the page bottom when you want to load more posts
 
    $(window).scroll(function(){
        var data = {
            'action': 'loadmore',
            'query': gda_ajax_obj.posts,
            'page' : gda_ajax_obj.current_page
        };
        if( $(document).scrollTop() > ( $(document).height() - bottomOffset ) && canBeLoaded == true ){
            $.ajax({
                url : gda_ajax_obj.ajaxurl,
                data:data,
                type:'POST',
                beforeSend: function( xhr ){
                    // you can also add your own preloader here
                    // you see, the AJAX call is in process, we shouldn't run it again until complete
                    canBeLoaded = false; 
                },
                success:function(data){
                    if( data ) {
                        $('#main').find('article:last-of-type').after( data ); // where to insert posts
                        canBeLoaded = true; // the ajax is completed, now we can run it again
                        gda_ajax_obj.current_page++;
                    }
                }
            });
        }
    });
});

*/