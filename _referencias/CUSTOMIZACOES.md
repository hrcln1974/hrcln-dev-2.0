# ⚙️ Guia de Customizações - Portfólio Marcos Roberto Herculano

Todas as customizações rápidas que você pode fazer no `index.html`.

## 🔍 Encontrar e Substituir

Use Ctrl+F (ou Cmd+F no Mac) para encontrar rapidamente:

---

## 📞 1. ALTERAÇÕES ESSENCIAIS

### Seu Telefone WhatsApp
**Procure:** `5521991525359`
**Substitua por:** Seu número com código do país (ex: 5521987654321)

### Seu Email
**Procure:** `contato@hrcln.dev`
**Substitua por:** Seu email real (ex: seu.email@gmail.com)

### Seu LinkedIn
**Procure:** `linkedin.com/in/marcos-herculano`
**Substitua por:** Seu perfil LinkedIn

### Seu GitHub
**Procure:** `github.com/hercullanohrcln`
**Substitua por:** Seu perfil GitHub

### Seu Instagram
**Procure:** `instagram.com/hrclndev`
**Substitua por:** Seu perfil Instagram

---

## 🎨 2. ALTERAÇÕES VISUAIS

### Mudar Cores da Paleta

Procure por `:root {` perto da linha 50:

```css
:root {
    --gold: #C8A24A;        /* Cor dourada principal */
    --dark: #0B0B0B;        /* Fundo muito escuro */
    --dark-secondary: #1B1B1B;  /* Fundo escuro secundário */
    --text: #E5E5E5;        /* Cor do texto principal */
    --text-secondary: #A0A0A0;  /* Cor do texto secundário */
}
```

**Exemplos de cores:**
- Ouro escuro: `#8B7500`
- Ouro claro: `#FFD700`
- Rosa: `#FF1493`
- Azul: `#00BFFF`
- Verde: `#00FF00`
- Use [colordot.co](https://colordot.co) para escolher!

### Mudar Logo

Procure: `<div class="logo">MH</div>`

Substitua por: Seu nome, iniciais ou logo

Exemplos:
- `MRH` (para Marcos Roberto Herculano)
- `MARCOS` (nome completo)
- `💻 Dev` (com emoji)

### Mudar Título da Página

Procure: `<title>Marcos Roberto Herculano - Desenvolvedor Web</title>`

Substitua por seu título personalizado

### Mudar Descrição (Meta)

Procure: `<meta name="description" content="`

Substitua pela sua descrição (máx 160 caracteres)

---

## 📝 3. ALTERAÇÕES DE CONTEÚDO

### Alterar Texto da Seção Hero

Procure:
```html
<h1>Marcos Roberto <span class="gold">Herculano</span></h1>
<p class="subtitle">Desenvolvedor Web em Formação</p>
```

Substitua por seu nome e profissão.

### Alterar Descrição Hero

Procure:
```html
<p class="description">
    Criando soluções digitais modernas, responsivas e de impacto.<br>
    Código com propósito. Transformando ideias em projetos reais.
</p>
```

Substitua pela sua descrição pessoal.

### Alterar Seção "Sobre Mim"

Procure `<!-- SEÇÃO SOBRE -->` e modifique:
- Nome
- Descrição pessoal
- Missão
- Pontos-chave (com `✓`)

### Alterar Serviços

Procure `<!-- SEÇÃO SERVIÇOS -->` e modifique cada card:

```html
<div class="service-card">
    <div class="service-card-content">
        <div class="service-icon">💻</div>  <!-- Mude o emoji -->
        <h3>Desenvolvimento de Sites</h3>   <!-- Mude o título -->
        <p>Sites profissionais...</p>        <!-- Mude a descrição -->
    </div>
</div>
```

### Alterar Tecnologias

Procure `<!-- SEÇÃO TECNOLOGIAS -->` e modifique:

```html
<div class="tech-card">
    <div class="tech-icon">📄</div>        <!-- Emoji -->
    <h3>HTML5</h3>                         <!-- Nome da tech -->
    <p>Semântica e estrutura...</p>        <!-- Descrição -->
</div>
```

---

## 🖼️ 4. ALTERAR IMAGENS

### Mudar Foto Banner (Hero)

Procure: `<img src="img/banner.png" alt="Marcos Roberto Herculano">`

Substitua o caminho: `src="img/sua-imagem.jpg"`

**Dica:** Coloque a imagem na pasta `img/` com a mesma nomenclatura.

### Mudar Imagens dos Projetos

Procure `<!-- SEÇÃO PROJETOS -->` ou `<!-- PORTFÓLIO COMPLETO -->`

Cada projeto tem:
```html
<img src="img/emprestimo.png" alt="Sistema de Empréstimo" class="project-image">
```

Substitua `src="img/seu-projeto.png"` se quiser trocar a imagem.

---

## 📊 5. ALTERAR PROJETOS

### Adicionar Novo Projeto

1. Copie um card inteiro de projeto:
```html
<div class="portfolio-card">
    <img src="img/seu-projeto.png" alt="Seu Projeto" class="portfolio-image">
    <div class="portfolio-content">
        <p class="portfolio-number">09</p>
        <h3>Nome do Projeto</h3>
        <p class="portfolio-category">Categoria</p>
        <p>Descrição do projeto...</p>
        <div class="portfolio-technologies">
            <span class="tech-badge">HTML5</span>
            <span class="tech-badge">CSS3</span>
            <span class="tech-badge">JavaScript</span>
        </div>
        <a href="https://seu-link.com" target="_blank" class="portfolio-button">Ver Projeto →</a>
    </div>
</div>
```

2. Mude o número (09, 10, 11...)
3. Mude o nome, categoria, descrição
4. Mude o link do projeto
5. Cole na seção `<!-- PORTFÓLIO COMPLETO -->`

### Remover Projeto

Procure o projeto que quer remover e delete o bloco `<div class="portfolio-card">...</div>` inteiro.

### Reordenar Projetos

Corte e cole os cards `portfolio-card` na ordem que desejar.

---

## 🎯 6. ALTERAR CONTATO

### Mudar Email do Formulário

Procure:
```html
<form class="contact-form" action="https://formsubmit.co/contato@hrcln.dev" method="POST">
```

Substitua `contato@hrcln.dev` por seu email real.

### Adicionar Novo Campo no Formulário

Copie e cole antes do botão submit:

```html
<div class="form-group">
    <label for="phone">Seu Telefone</label>
    <input type="tel" id="phone" name="phone" required>
</div>
```

### Remover Campo do Formulário

Delete o `<div class="form-group">...</div>` inteiro.

---

## 🔧 7. ALTERAR FOOTER

### Mudar Slogan

Procure: `<div class="footer-slogan">Código com propósito. Soluções que transformam.</div>`

Substitua pela sua frase.

### Alterar Links Sociais no Footer

Procure `<!-- FOOTER -->` e modifique:

```html
<div class="social-links">
    <a href="https://wa.me/seu-numero" target="_blank">WhatsApp</a>
    <a href="mailto:seu-email@email.com">Email</a>
    <a href="https://github.com/seu-usuario" target="_blank">GitHub</a>
    <a href="https://linkedin.com/in/seu-perfil" target="_blank">LinkedIn</a>
    <a href="https://instagram.com/seu-usuario" target="_blank">Instagram</a>
</div>
```

### Alterar Copyright

Procure: `&copy; 2026 Marcos Roberto Herculano.`

Substitua por seu nome.

---

## 📱 8. ALTERAR RESPONSIVIDADE

### Mudar Ponto de Quebra (Breakpoint)

Para devices pequenos, procure `@media (max-width: 768px)` e `@media (max-width: 480px)`

Se quiser mudar quando o menu fica mobile, altere `768px` para outro valor.

### Mudar Tamanho de Fontes Mobile

Procure a seção `@media (max-width: 768px)` e modifique:

```css
.hero h1 {
    font-size: 2.2rem;  /* Mude este valor */
}
```

---

## 🎨 9. ALTERAR EFEITOS E ANIMAÇÕES

### Desabilitar Animações

Procure `animation:` em vários lugares e mude para:

```css
animation: none;
```

### Aumentar Velocidade de Animações

Procure `transition: var(--transition);` (que é `all 0.3s ease`)

Mude para mais rápido: `all 0.1s ease` ou mais lento: `all 0.5s ease`

### Remover Hover Effects

Procure `:hover` e delete o bloco inteiro.

---

## 🔐 10. SEGURANÇA

### Ocultar Email

Se não quiser exibir seu email publicamente:

Procure o email em `.contact-item` e mude para:
```html
<a href="mailto:seu-email@email.com">Clique aqui para enviar email</a>
```

### Proteger Formulário

O formulário já tem proteção contra bots (`_captcha: false`).

---

## 🌐 11. SEO

### Alterar Meta Description

Procure: `<meta name="description" content="`

Esta é a descrição que aparece no Google.

### Alterar Palavras-chave

Procure: `<meta name="keywords" content="`

Adicione palavras relevantes: `desenvolvedor, web, HTML, CSS, JavaScript`

### Alterar Open Graph (Compartilhamento)

Procure `<!-- Open Graph -->` e altere:

```html
<meta property="og:title" content="Seu Título">
<meta property="og:description" content="Sua Descrição">
```

---

## 🚀 12. DICAS PROFISSIONAIS

### Mudar Domínio Customizado

1. Configure seu domínio em GitHub/Vercel/Netlify
2. Não precisa mudar nada no código

### Adicionar Google Analytics

Procure `</head>` e adicione antes:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SEU_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-SEU_ID');
</script>
```

### Adicionar Favicon

1. Crie uma imagem 32x32px
2. Nomeie como `favicon.ico`
3. Coloque na pasta raiz
4. Procure `</head>` e adicione:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

---

## ✅ CHECKLIST DE CUSTOMIZAÇÕES BÁSICAS

- [ ] Alterou seu telefone WhatsApp?
- [ ] Alterou seu email?
- [ ] Alterou seu nome no hero?
- [ ] Alterou sua profissão/descrição?
- [ ] Atualizou links de redes sociais?
- [ ] Verificou cores (se quer mudar)?
- [ ] Removeu projetos que não quer?
- [ ] Adicionou novos projetos?
- [ ] Testou no computador?
- [ ] Testou no celular?

---

## 📞 Suporte

Se algo não funcionar:

1. Use Ctrl+Shift+Del para limpar cache
2. Tente em outro navegador
3. Verifique o console (F12 > Console)
4. Procure pela mensagem de erro

---

**Bom proveito customizando seu portfólio! 🚀**

*Quanto mais você personalizar, mais seu portfólio reflete sua identidade profissional!*
