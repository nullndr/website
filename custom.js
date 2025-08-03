(() => {
	/**
	 * @param {HTMLAnchorElement} anchorElement
	 */
	function setTypoLink(anchorElement) {
		const fileName = window.location.pathname
			.replace(".html", "")
			.replaceAll("-", "_");

		const gitLink = `https://git.nullndr.com/nullndr/website/src/branch/main/content${fileName}.md`;

		anchorElement.href = gitLink;
	}

	/**
	 * @type {HTMLAnchorElement}
	 */
	const typoLink = document.getElementById("typo-link");

	if (typoLink) setTypoLink(typoLink);
})();
