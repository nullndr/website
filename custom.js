(() => {
	/**
	 * @param {HTMLAnchorElement} anchorElement
	 */
	function setTypoLink(anchorElement) {
		const fileName = window.location.pathname
			.replace(".html", "")
			.replaceAll("-", "_");

		const gitLink = `https://github.com/nullndr/website/edit/main/content${fileName}.md`;

		anchorElement.href = gitLink;
	}

	/**
	 * @type {HTMLAnchorElement}
	 */
	const typoLink = document.getElementById("typo-link");

	if (typoLink) setTypoLink(typoLink);
})();
