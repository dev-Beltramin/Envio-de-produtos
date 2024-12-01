


$(document).ready(() => {
    $("#cep").mask('00000-000')

    $("#btn-buscar").click(() => {
        const cep = $('#cep').val()

        const endpoint = `https://viacep.com.br/ws/${cep}/json`

       
        fetch(endpoint)
            .then(res => {
                return res.json()
            })
            .then((json) => {
                const endereco = json.logradouro
                const bairro = json.bairro

                $('#endereco').val(`${endereco} - Jd ${bairro}`)


            })

    })
})