$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const novaImg = $('#endereço-imagem').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${novaImg}" />`).appendTo(novoItem)
        $(`
            <div class="imagemLink">
                <a href="${novaImg}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#endereço-imagem').val('')
    })
})