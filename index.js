$.fancybox.open({
	src  : 'link-to-your-page.html',
	type : 'iframe',
	opts : {
		afterShow : function( instance, current ) {
			console.info( 'done!' );
		}
	}
});