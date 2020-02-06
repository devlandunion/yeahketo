(function () {
  const head = document.getElementsByTagName("head")[0]
  const scriptGA = document.createElement("SCRIPT")
  const scriptGtag = document.createElement("SCRIPT")
  const scriptGtagConfig = document.createElement("SCRIPT")

  const variationId = JSON.stringify(getCookie("variation"))
  const experimentID = JSON.stringify(getCookie("experimentID"))
  const trackingID = JSON.stringify(getCookie("trackingID"))
  const optimizeID = JSON.stringify(getCookie("optimizeID"))

  function getCookie(name) {
    let value = `; ${  document.cookie}`
    let parts = value.split(`; ${  name  }=`)
    if (parts.length == 2)
    {return parts
      .pop()
      .split(";")
      .shift()}
  }

  // Import GA and GTag scripts
  scriptGA.innerHTML = `(function(i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			(i[r] =
			i[r] ||
			function() {
				(i[r].q = i[r].q || []).push(arguments);
			}),
			(i[r].l = 1 * new Date());
			(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m);
		})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

		ga("create", ${trackingID}, "auto");

		ga("set", "expId", ${experimentID});
    	ga("set", "expVar", ${variationId});

    	ga("send", "pageview");
	   `

  scriptGtag.async = true
  scriptGtag.src = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`
  scriptGtagConfig.innerHTML = `window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());

								gtag('config', ${trackingID}, { 'optimize_id': ${optimizeID}});`

  head.insertBefore(scriptGtag, head.childNodes[20])
  head.insertBefore(scriptGA, head.childNodes[22])
  head.insertBefore(scriptGtagConfig, head.childNodes[22])
}())
