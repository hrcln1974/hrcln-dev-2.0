# HRCLN Dev 2.0

Entrega estática e autocontida do portal comercial da HRCLN Dev.

## Estrutura
- `index.html`: home
- `solucoes.html`: linhas de solução
- `landing-pages.html`: biblioteca de Landing Pages
- `catalogos.html`: modelos de catálogo
- `sistemas.html`: produtos/sistemas e visão do HRCLN CORE
- `segmentos.html`: páginas/segmentos planejados
- `portfolio.html`: cases com filtros
- `planos.html`: referência comercial
- `sobre.html`: posicionamento e processo
- `contato.html`: formulário para WhatsApp
- `assets/`: CSS, JS e imagens otimizadas

## Deploy Hostinger
1. Envie o conteúdo desta pasta para `public_html`.
2. Confirme que `index.html` está na raiz.
3. Aponte o domínio para a pasta publicada.
4. Ative SSL.

## Validação
Esta entrega foi validada localmente por inspeção de arquivos, referências internas e carregamento HTTP local das páginas. Os quatro domínios externos foram consultados separadamente; a conectividade externa não é assumida pelo teste local.

## Próxima evolução
Migrar gradualmente módulos de negócio para `HRCLN CORE`: Node.js + Express + MySQL/MariaDB, multiempresa com `empresa_id`, autenticação, permissões e APIs por domínio.
