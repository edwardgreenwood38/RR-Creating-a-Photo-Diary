// Renders a list of koalas
let renderKoalaList = koalas => {
    let koalaContainer = document.createElement('div')

    koalaContainer.setAttribute('class', 'ui items')

    koalas.forEach( koala => {
        let koalaCard = renderKoalaCard(koala)
        koalaContainer.append(koalaCard)
    })

    return koalaContainer
}


export default renderKoalaList;