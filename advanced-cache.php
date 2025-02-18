<?php
# WP SUPER CACHE 1.2
# WP SUPER CACHE 0.8.9.1
# AL ADVANCED CACHE 1.0
$cache_fname = dirname( __FILE__ ) . "/plugins/airlift/buffer/cache.php";
$helper_fname = dirname( __FILE__ ) . '/plugins/airlift/helper.php';

if (file_exists($cache_fname) && file_exists($helper_fname)) {
	require_once $cache_fname;
	require_once $helper_fname;

	$GLOBALS['al_cache_skip_cookies'] = ["woocommerce_cart_hash", "woocommerce_items_in_cart"];

	function hasIgnoredCookies($ignored_cookies) {
		if (!is_array($_COOKIE)) {
			return true;
		}
		foreach (array_keys($_COOKIE) as $cookie_name) {
			foreach ($ignored_cookies as $ignored_cookie) {
				if (AlHelper::safePregMatch($ignored_cookie, $cookie_name)) {
					return true;
				}
			}
		}
		return false;
	}

	function hasIgnoredUserAgents($ignored_user_agents) {
		if (!$_SERVER['HTTP_USER_AGENT']) {
			return true;
		}
		foreach ($ignored_user_agents as $ignored_ua) {
			if(ALHelper::safePregMatch($ignored_ua, $_SERVER['HTTP_USER_AGENT'])) {
				return true;
			}
		}
		return false;
	}

	function isIgnoredRequestMethod($allowed_methods) {
		if (in_array($_SERVER['REQUEST_METHOD'], $allowed_methods)) {
			return false;
		}
		return true;
	}

	function canCachePage() {
		$ignored_cookies = array("/testa/", "/wp-postpass_/", "/wptouch_switch_toggle/", "/comment_author_/", "/comment_author_email_/", "/wordpress_logged_in_.+/");
		$ignored_user_agents = array("/facebookexternalhit/");
		$allowed_methods = array("GET", "HEAD");
		if (hasIgnoredCookies($ignored_cookies) || hasIgnoredUserAgents($ignored_user_agents) || isIgnoredRequestMethod($allowed_methods)) {
			return false;
		}
		return true;
	}

	if (canCachePage()) {
		$socache = new ALCache();
		$socache->startCaching();
	}
}