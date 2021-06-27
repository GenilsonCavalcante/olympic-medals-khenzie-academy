

let geturlApi = "https://kenzie-olimpiadas.herokuapp.com/paises"
const section = document.querySelector("section")


fetch(geturlApi)
  .then(response => response.json())
  .then(data => reordenarQtdMedalhas(data));

function reordenarQtdMedalhas(arrayPaises){
    let newArrayPaises = []
    
    newArrayPaises = arrayPaises.map(somarTotalMedalhas).sort((a,b) => b.medal_gold - a.medal_gold)

    //console.log(newArrayPaises)
    newArrayPaises.forEach(criarTemplate);
} 

function somarTotalMedalhas(pais){
    let acumulador = 0
    acumulador += (pais.medal_bronze + pais.medal_gold + pais.medal_silver)
    pais.total = acumulador

    return pais
}

function criarTemplate(pais,index){
    
    const linha = document.createElement("div")
    linha.classList.add("linha")
    const rank = document.createElement("div")
    rank.classList.add("coluna", "coluna-rank")
    const span = document.createElement("span")
    span.innerText = `${index+1}º`
    rank.appendChild(span)
    linha.appendChild(rank)
    
    for(propriedade in pais){
        if(propriedade !== "id" && propriedade !== "position" && propriedade !== "flag_url"  && propriedade !== "flag"){
            
            const div = document.createElement("div")
            if(propriedade == "country"){
                const img = document.createElement("img")
                img.src = pais["flag_url"]
                img.alt =  pais[propriedade]
                div.appendChild(img)
            }
            const span = document.createElement("span")
            span.innerText = pais[propriedade]
            div.classList.add("coluna",propriedade)
            div.appendChild(span)
            linha.appendChild(div)
            
        }
      
    }

   
    section.appendChild(linha)
}

                                    