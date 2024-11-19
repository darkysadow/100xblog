export function utils() {
    // AUTO SELECTING CHECKBOX ON FORM SUBMIT BUTTON CLICK
    $('.wpcf7-form .btn').on('click', function(){
        $(this).closest('.wpcf7-form').find('[name="policy-accept"]').attr('checked', 'checked')
    })

    // AUTO DESELECTING CHECKBOX AFTER FORM HAS BEEN SENT
    $('.wpcf7').on('wpcf7mailsent', function(){
        $(this).find('[name="policy-accept"]').removeAttr('checked')
    })
}