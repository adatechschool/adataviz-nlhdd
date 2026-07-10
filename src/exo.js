const load = async () => {
	try {
		const reponse = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/les-titres-les-plus-pretes/records?order_by=prets%20DESC&limit=100&refine=type_de_document%3A%22Livre%20adulte%22")
		const donnees = await reponse.json()
		console.log(`${donnees.results.length}`)
	} catch (erreur) {
		console.error("Erreur de chargement :", erreur.message)
	}
}

load()