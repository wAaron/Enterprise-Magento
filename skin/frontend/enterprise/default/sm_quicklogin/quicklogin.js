jQuery(function(){
    jQuery('.quick-access > .links li,.header-panel .links li:first').click(function(e){
        jQuery('#quicklogin').slideToggle('slow');
        e.preventDefault();
    });
    /*Ajax Login Function */
    jQuery('#login-form').submit(function(e){
        jQuery(".login-message").text('');
        var form = jQuery(this);
        jQuery.ajax ({
            url: form.attr('action'),
            type: "POST",
            dataType: "JSON",
            data: form.serialize(),
            success:function(json){
                //alert(json);
                if (json.success) {
                    //alert(json.redirecturl);
                    setLocation(json.redirecturl);
                } else {
                    jQuery(".login-message").text(json.message);
                }
            }
        });
        e.preventDefault();
    })

    /*Ajax Register Function */
    jQuery('#regis-form').submit(function(e){
        jQuery(".regis-message").text('');
        var form = jQuery(this);
        jQuery.ajax ({
            url: form.attr('action'),
            type: "POST",
            dataType: "JSON",
            data: form.serialize(),
            success:function(json){
                if (json.success) {
                    setLocation(json.redirecturl);
                } else {
                    jQuery(".regis-message").text(json.message);
                }
            }
        });
        e.preventDefault();
    })

    /*Ajax Forgot Password Function */
    jQuery('#forgot-form1').submit(function(e){
        jQuery(".forgot-message").text('');
        var form = jQuery(this);
        jQuery.ajax ({
            url: form.attr('action'),
            type: "POST",
            dataType: "JSON",
            data: form.serialize(),
            success:function(json){
                alert(json.message);
                jQuery(".forgot-message").text(json.message);
                if (json.success) {
                    //setLocation(json.redirecturl);
                } else {
                    jQuery(".forgot-message").text(json.message);
                }
            }
        });
        e.preventDefault();
    })
});
function createAccount(){
    jQuery('.register-form').toggle();
}
function forgotAccount(){
    jQuery('.forgot-form').toggle();
}