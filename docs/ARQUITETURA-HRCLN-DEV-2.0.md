# HRCLN Dev 2.0 — Arquitetura e evolução

## Objetivo
Transformar a presença da HRCLN Dev em um portal comercial de agência, capaz de apresentar serviços, Landing Pages, catálogos, e-commerce, sistemas e soluções por nicho, deixando a arquitetura preparada para o futuro HRCLN CORE.

## Site comercial
- Home
- Soluções
- Landing Pages
- Catálogos
- Sistemas
- Segmentos
- Portfólio
- Planos
- Sobre
- Contato

## Linhas de produto
1. Sites profissionais
2. Landing Pages
3. Catálogos digitais
4. E-commerce
5. Sistemas Web

## Segmentos prioritários
- Barbearia
- Salão de beleza
- Estética
- Restaurante
- Loja
- Moda/Ateliê
- Cosméticos
- Perfumaria
- Suplementos
- Pet Shop
- Imobiliária
- Prestadores de serviços

## Cases incorporados
- Fabiano Reis Imóveis — https://fabianoreisimoveis.com.br/
- Ateliê Natália Huebra — https://darkgreen-okapi-436692.hostingersite.com/
- Chocolano — https://lightcoral-flamingo-375199.hostingersite.com/
- Viviane Araújo Imóveis — https://hotpink-bear-209688.hostingersite.com/
- Projetos históricos do portfólio de Marcos Herculano

## HRCLN CORE — futuro
A arquitetura planejada para a próxima geração é:

Frontend / produtos
→ API Node.js + Express
→ MySQL/MariaDB
→ Storage de uploads
→ multiempresa com `empresa_id`
→ autenticação e permissões
→ módulos por nicho

Módulos-base previstos:
- Auth
- Empresas
- Usuários
- Clientes
- Profissionais
- Serviços
- Produtos
- Categorias
- Agendamentos
- Pedidos
- Vendas
- Financeiro
- Relatórios
- Configurações

A migração de Firebase não deve ser feita de forma destrutiva. Cada módulo deve ser migrado, testado e validado antes de desligar sua dependência anterior.
