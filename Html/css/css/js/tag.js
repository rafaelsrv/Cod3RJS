const colors = {
    p:'#338e3c',
    div: '#1565c0',
    span:'#338e3c',
    section: '#1565c0',
    ul:'#338e3c',
    ol: '#1565c0',
    header:'#338e3c',
    footer: '#1565c0',
    form:'#338e3c',
    body: '#1565c0',
    padrao:'#338e3c',
    
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
    

    
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()
    
    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})