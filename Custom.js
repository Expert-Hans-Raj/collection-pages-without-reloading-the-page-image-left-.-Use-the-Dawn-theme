$(document).ready(function(){
  $(document).on('click','.get-products',function(e){
  
    event.preventDefault();
    $('.get-products').removeClass('active');
    $(this).addClass('active');
    var Title = $.trim($(this).text());
    var url = $(this).attr('collection_url');
     $('.view-all-btn a').attr('href', url);
     $('.tab-all-btn').text(Title); 
    if (Title == 'All'){
     $('.view-all-btn a').text('See '+Title);
      }else{
         $('.view-all-btn a').text('See All '+Title);        
      }
    //console.log(Title);
    $.ajax({
      url:url,
      type:'GET',
      success: function(data){
       var data = $(data).find(".collection-wraper_");
        var bannerdata = $(data).find(".collection-banner_");
        $('#ajax-banner').html(bannerdata);
        $('#ajax-product').html(data);

        $(document).on('click','.get_product', function(){

          var url = $(this).attr('pro_url');
          $.ajax({
            url:url,
            type:'GET',
            success: function(data){
              var data = $(data).find("#shopify-section-product-template");
              $('#ajax-product').html(data);
            }
          });

        });
      }
    });
    ;
  });
  const $menu = $('.dropdown');
 $(document).mouseup(e => {
   if (!$menu.is(e.target) // if the target of the click isn't the container...
   && $menu.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $menu.removeClass('is-active');
  }
 });

$('.toggle').on('click', () => {
  $menu.toggleClass('is-active');
});

});
