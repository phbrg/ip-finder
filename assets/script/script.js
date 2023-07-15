fetch('https://api.ipify.org?format=json') // usa api de descobrir ip
  .then(resposta => {
    if (!resposta.ok) throw new Error("Erro ao decifrar IP."); // verifica se conseguiu executar a apI se não retorna um erro
    return resposta.json(); // retorna as respostas em JSON
  })
  .then(data => {
    let ip = data.ip // pega o IP que veio da API

    const url = `https://ipapi.co/${ip}/json/` // cria a URL de localização de IP

    fetch(url) // usa api de localizar IP
      .then(resposta => {
        if (!resposta.ok) throw new Error("Erro ao buscar IP."); // verifica se conseguiu executar a apI se não retorna um erro
        return resposta.json(); // retorna as respostas em JSON
      })
      .then(data => {
        const errorSaida = document.querySelector(".error") // pega o elemento que printa o erro
        errorSaida.style.color = "#fff" // seta a mesma cor do background para sumir

        let printIP = document.querySelector(".printIP") // pega o elemento
        printIP.innerHTML = `IP: ${data.ip}` // printa o texto vindo da API

        let printVersion = document.querySelector(".printVersion")
        printVersion.innerHTML = `Version: ${data.version}`

        let printCity = document.querySelector(".printCity")
        printCity.innerHTML = `City: ${data.city}`

        let printRegion = document.querySelector(".printRegion")
        printRegion.innerHTML = `Region: ${data.region}`

        let printCountry = document.querySelector(".printCountry")
        printCountry.innerHTML = `Country: ${data.country_name}`

        let printLat = document.querySelector(".printLat")
        printLat.innerHTML = `Latitude: ${data.latitude}`

        let printLong = document.querySelector(".printLong")
        printLong.innerHTML = `Longitude: ${data.longitude}`

        let printTime = document.querySelector(".printTime")
        printTime.innerHTML = `Time zone: ${data.timezone}`

        let printAsc = document.querySelector(".printAsc")
        printAsc.innerHTML = `ASN: ${data.asn}`

        let printOrg = document.querySelector(".printOrg")
        printOrg.innerHTML = `Organization: ${data.org}`
      })
      .catch(error => {
        console.error(error); // printa o erro no console
      });
  })
  .catch(error => {
    console.error(error); // printa o erro no console
  });

function findIp() { // função de achar o ip digitaro pelo usuario
    let ip = document.querySelector("#ipEntrada").value; // pega o valor do input

    const url = `https://ipapi.co/${ip}/json/` // cria a url da API

    fetch(url) // usa a API
      .then(resposta => {
        if (!resposta.ok) throw new Error("Erro ao buscar IP."); // verifica se deu algum erro
        return resposta.json(); // retorna a resposta em JSON
      })
      .then(data => {
        if(data.error == true) { // verifica se o IP digitado é correto
            const saida = document.querySelector(".saida") // pega o elemento de saida
            saida.style.display = "none" // seta ele como display none

            const errorSaida = document.querySelector(".error") // pega o elemento de erro
            errorSaida.style.color = "red" // seta a cor dele vermelha
            return;
        } else {
            const saida = document.querySelector(".saida") // pega o elemento saida
            saida.style.display = "block" // seta ele para display block

            const errorSaida = document.querySelector(".error") // pega o elemento erro
            errorSaida.style.color = "#fff" // seta a cor branca

            let printIP = document.querySelector(".printIP") // pega o elemento
            printIP.innerHTML = `IP: ${data.ip}` // seta a valor pego na API

            let printVersion = document.querySelector(".printVersion")
            printVersion.innerHTML = `Version: ${data.version}`

            let printCity = document.querySelector(".printCity")
            printCity.innerHTML = `City: ${data.city}`

            let printRegion = document.querySelector(".printRegion")
            printRegion.innerHTML = `Region: ${data.region}`

            let printCountry = document.querySelector(".printCountry")
            printCountry.innerHTML = `Country: ${data.country_name}`

            let printLat = document.querySelector(".printLat")
            printLat.innerHTML = `Latitude: ${data.latitude}`

            let printLong = document.querySelector(".printLong")
            printLong.innerHTML = `Longitude: ${data.longitude}`

            let printTime = document.querySelector(".printTime")
            printTime.innerHTML = `Time zone: ${data.timezone}`

            let printAsc = document.querySelector(".printAsc")
            printAsc.innerHTML = `ASN: ${data.asn}`

            let printOrg = document.querySelector(".printOrg")
            printOrg.innerHTML = `Organization: ${data.org}`
        }
      })
      .catch(error => {
        console.error(error); // printa o erro no console
      });
}