/**
 * Initialize SN object
 */
SN.init = function() {
	SN.cache.init();
	SN.externalLinks.init();
	SN.cookies.init();
	SN.snitch.init(true);
}

$(function() {

	SN.init();

});
