# Estação Pizzaria

Site responsivo em HTML, CSS e JavaScript, pronto para um repositório GitHub. Não precisa instalar programas, usar npm ou compilar arquivos.

## Abrir no computador

Extraia o ZIP e abra `index.html` no navegador. Mantenha `styles.css`, `script.js` e a pasta `assets` junto dele.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (público, caso use o GitHub Free).
2. Extraia o ZIP. Envie **o conteúdo da pasta**, e não o ZIP, usando **Add file → Upload files**.
3. Confira se `index.html` está na raiz do repositório, junto com `styles.css`, `script.js` e `assets/`. Não coloque tudo dentro de outra pasta.
4. Salve o envio em um commit na branch `main`.
5. Abra **Settings → Pages**.
6. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
7. Selecione a branch `main`, a pasta **/(root)** e clique em **Save**.
8. Aguarde a publicação. O endereço aparecerá na área Pages.

Documentação oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## O que está funcionando

- Layout para celular, tablet e computador.
- Menu de navegação no celular, com suporte a teclado e tecla Escape.
- Botões para o delivery oficial na Wabiz.
- Links para o Instagram fornecido.
- Perguntas frequentes expansíveis.
- Botão de pedido fixo no celular.
- Imagens locais: não depende de imagens carregadas em sites de terceiros.
- Fontes do sistema: sem dependência de Google Fonts.
- Links de pedido e perguntas frequentes funcionam mesmo sem JavaScript.

## Como editar

- Textos e links: `index.html`.
- Cores, fontes e espaçamento: `styles.css`. As cores principais estão nas variáveis `:root` no início.
- Comportamento do menu: `script.js`.
- Logo: `assets/logo.png`.
- Foto principal: substitua `assets/pizza.jpg` por uma foto própria e ajuste o texto alternativo no HTML. Ao usar foto real da pizzaria, remova a legenda “Imagem ilustrativa”.
- Ícone da aba: `assets/favicon.png`.

## Escopo e informações

Os pedidos são finalizados **na Wabiz**, em https://estacaopizzaria.wabiz.delivery/. Este pacote não implementa um carrinho próprio, pagamento, painel administrativo ou integração com a API da Wabiz. O Instagram configurado é https://www.instagram.com/estacaopizzaria/.

A logo e as cores foram obtidas da página de delivery enviada. A foto principal é ilustrativa, de banco de imagens; não representa um produto real da Estação. Veja `CREDITOS.md`.

Não foram inventados preços, sabores, endereço, telefone, horários ou avaliações. O site encaminha essas consultas para os canais da pizzaria. Confira os links e a disponibilidade do delivery antes de divulgar.

Não há analytics, cookies próprios ou formulário de coleta de dados. Ao abrir Wabiz e Instagram, passam a valer as condições desses serviços.

## Estrutura

- `index.html`: página completa.
- `styles.css`: identidade visual e adaptação às telas.
- `script.js`: menu e ano do rodapé.
- `assets/`: logo, favicon e foto.
- `README.md`: instruções.
- `CREDITOS.md`: origem das imagens.
