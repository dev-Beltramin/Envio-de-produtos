


$(document).ready(() => {
    $("#cep").mask('00000-000')

    $("#btn-buscar").click(() => {
        const cep = $('#cep').val()

        const endpoint = `https://viacep.com.br/ws/${cep}/json`

        $.ajax(endpoint).done((res) => {

            const endereco = res.logradouro
            const bairro = res.bairro

            $('#endereco').val(`${endereco} - Jd ${bairro}`)


        })
    })
})