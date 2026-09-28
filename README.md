# Estação Pizzaria — reformulação de 28/09/2026

## Atualizar a versão já publicada
Substitua o conteúdo anterior pelos arquivos deste pacote, incluindo **refinement.css**, **styles.css**, **script.js**, **index.html** e **assets/**. Não envie apenas o HTML. A versão contém busca no cardápio, área do app redesenhada e nenhuma seta/emoji decorativo.

Depois do envio, aguarde a atualização do GitHub Pages e reabra o endereço do site.


Site estático em HTML, CSS e JavaScript, com a identidade amarela e marrom da Estação. Pronto para enviar ao GitHub. Não exige npm, compilação, chave de API ou banco de dados.

## Visualizar
Extraia o ZIP e abra `index.html` no navegador. Mantenha os arquivos e a pasta `assets` juntos. `preview-desktop.png` mostra a primeira tela da versão entregue.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub (público caso use o plano gratuito).
2. Extraia o ZIP e envie seu conteúdo por **Add file → Upload files**. Não envie o ZIP: o `index.html` deve ficar diretamente na raiz do repositório.
3. Inclua a pasta `assets` inteira, com as fotos e os QR codes.
4. Salve o envio na branch `main`.
5. Em **Settings → Pages → Build and deployment**, escolha **Deploy from a branch**.
6. Selecione **main** e **/(root)**. Clique em **Save**.
7. Aguarde o GitHub exibir o link publicado.

O cardápio está incorporado no HTML. Nenhum botão de cardápio abre PDF ou Google Drive.

Documentação oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Conteúdo incluído
- Página inicial com fotografia do cardápio da Estação.
- Cardápio completo na página: 201 itens em 14 categorias expansíveis, com descrições e preços.
- Três pizzas em destaque, com descrições do cardápio.
- Navegação entre categorias sem sair do site, incluindo opções doces, bebidas e porções.
- Oferta confirmada pelo solicitante: BAIXE O APP – GANHE 20% DE DESCONTO.
- App Android e iPhone/iPad: botões e um QR code para cada loja.
- Fotografias das publicações enviadas, com links para o Instagram.
- Endereço e botão de rota no Google Maps.
- Menu para celular, botões fixos para app/pedido e aviso de privacidade.
- Imagens locais e fontes do sistema.

## QR codes
`assets/qr-android.png` abre:
https://play.google.com/store/apps/details?id=com.wabiz.delivery.estacaopizzaria

`assets/qr-iphone.png` abre:
https://apps.apple.com/br/app/id1457245182

Os QR codes já funcionam antes da publicação do site porque apontam diretamente para as lojas oficiais. Podem ser impressos mantendo a borda branca e o formato quadrado. Teste a leitura no tamanho final antes de imprimir em quantidade.

## Editar depois
- Textos, links e informações: `index.html`.
- Estrutura visual básica: `styles.css`. A nova direção visual está em `refinement.css`, carregado depois.
- Busca: código em `script.js`, sem envio de consultas para serviços externos.
- Menu e aviso de privacidade: `script.js`.
- Cardápio: edite os nomes, descrições e valores na seção `native-menu` de `index.html`. As categorias usam `details`, com itens em `menu-item`. Nas pizzas, mantenha os preços B e G alinhados aos tamanhos do cardápio.
- Fotografias: arquivos em `assets`. As duas imagens do Instagram são prints; seu enquadramento fica nas regras `.photo-crop` no CSS. Fotografias originais podem ser utilizadas no lugar desses recortes.
- Aplicativos: altere os links no HTML e gere novos QR codes se os endereços das lojas mudarem. Mudar o link do botão não altera o conteúdo do QR.

## Escopo
O site é a apresentação da Estação e direciona o pedido para a Wabiz. Não possui carrinho próprio, pagamentos, painel administrativo, reserva ou conexão com a API da Wabiz.

Os botões de categoria abrem o cardápio dentro da própria página. Os botões de pedido abrem o delivery e não adicionam itens automaticamente ao carrinho. Os valores foram transcritos do cardápio fornecido: atualize-os sempre que houver mudança e confirme o preço final no canal de pedido.

O desconto de 20% foi confirmado pelo solicitante e está anunciado no topo, no link do aplicativo e na seção de download. Não foram inventados cupom, validade, pedido mínimo ou restrição a primeira compra. As condições específicas devem estar disponíveis no app. Horários e telefone não foram presumidos.

Veja `CREDITOS.md` para origens das fotos e fontes de informação.
