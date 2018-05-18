/*
 * Ready
 *
 */

jQuery( document ).ready(function(e) {
    

    $('.js-update-post').on('click', function(e){

        $(this).addClass('fa-spin');

        var post_id = $(this).data('id');

        console.log('Demande de mise à jour du post n°'+post_id);

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: ajax_object.ajax_url,
            data: 'action=update_fluxi_content&post_id='+post_id,
            success: function(data){
                if(data[0].validation == 'error'){
                    //$('.js-notify').html('<p>Il semble y avoir un problème, veuillez ré-essayer.</p>');
                    console.log('Erreur durant la mise à jour du post.');
                }else{                   
                    console.log('Mise à jour effectuée.');
                    location.reload();
                }
            },
            error : function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR + ' :: ' + textStatus + ' :: ' + errorThrown);                
            }

        });
        return false;
    });

});