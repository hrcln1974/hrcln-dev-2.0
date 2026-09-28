# Validação da entrega

Data: 2026-09-28

## Testes executados
- 10 páginas HTML presentes.
- 10 páginas servidas por HTTP local com status 200.
- CSS carregado com status 200.
- JavaScript carregado com status 200.
- Imagens principais carregadas com status 200.
- Referências locais de `href` e `src` verificadas sem arquivos ausentes.
- URLs dos quatro projetos externos incorporadas ao portfólio.
- Imagens do portfólio original convertidas para WebP e redimensionadas para reduzir peso.

## Observação
A validação local confirma a integridade do pacote e seus fluxos estáticos. Os sites externos foram consultados separadamente na web; a disponibilidade desses serviços não é controlada pelo pacote da HRCLN Dev.

## Pós-deploy recomendado
1. Publicar em ambiente de homologação.
2. Testar em desktop e celular reais.
3. Confirmar domínio, HTTPS, favicon, e-mail e WhatsApp.
4. Rodar Lighthouse/PageSpeed.
5. Validar sitemap e robots no domínio final.
6. Fazer backup antes da publicação definitiva.
