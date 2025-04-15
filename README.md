# Indexador de LINKS

Este é um projeto simples para criar uma página de índice de links. Ele permite que você centralize todos os seus links importantes em um único lugar, facilitando o compartilhamento em diversas plataformas.

## Visão Geral

O projeto consiste em arquivos HTML, CSS e JS, seguindo o padrão do mercado, permitindo que você personalize os links e a aparência de acordo com suas necessidades. É ideal para quem busca uma maneira fácil e rápida de criar uma página de links sem depender de serviços externos.

## Como Usar

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/danieldouglas26/privatebio.git
    cd privatevio-main
    ```

2.  **Edite o arquivo `index.html`:**

    * Abra o arquivo `index.html` em um editor de texto.
    * Procure pela seção de links (`<ul class="links-list">`).
    * Modifique os itens da lista (`<li>`) para adicionar seus próprios links. Cada item `<li>` contém um link (`<a>`) com o texto e o `href` desejado.

        ```html
        <ul class="links-list">
            <li>
                <a href="[https://seu-link-aqui.com](https://seu-link-aqui.com)" target="_blank" rel="noopener noreferrer" class="link-button website">
                    <i class="fas fa-globe"></i> Seu Website
                </a>
            </li>
            <li>
                <a href="[https://instagram.com/seu_usuario](https://instagram.com/seu_usuario)" target="_blank" rel="noopener noreferrer" class="link-button instagram">
                    <i class="fab fa-instagram"></i> Instagram
                </a>
            </li>
            </ul>
        ```

    * **Personalize os ícones:** Os ícones são carregados da biblioteca Font Awesome. Você pode alterar o ícone de cada link modificando a classe dentro da tag `<i>`. Consulte a [documentação do Font Awesome](https://fontawesome.com/icons) para encontrar outros ícones. Certifique-se de incluir a biblioteca Font Awesome no `<head>` do seu `index.html` (o link para o CDN já está incluído no código base).

    * **Edite o logotipo e o nome:** Altere o `src` da tag `<img>` para o seu logotipo e o texto dentro da tag `<h1>` para o seu nome ou título.

        ```html
        <img src="/assets/seu-logo.png" alt="Seu Logotipo" class="logo">
        <h1 class="name">Seu Nome</h1>
        ```

    * **Personalize o rodapé:** Edite o texto dentro da tag `<footer class="footer">` para o seu texto de rodapé.

3.  **Personalize o visual (opcional):**

    * Abra o arquivo `css/style.css` para modificar as cores, fontes, espaçamentos e outros estilos da sua página de links. As variáveis CSS estão definidas no início do arquivo (`:root`) para facilitar a alteração das cores principais.

4.  **Hospede sua página:**

    * Você pode hospedar este projeto em diversas plataformas gratuitas para sites estáticos, como:
        * **GitHub Pages:** Uma opção fácil se o seu projeto já está no GitHub. Consulte a [documentação do GitHub Pages](https://docs.github.com/en/pages) para saber como configurar.
        * **Netlify:** Oferece implantação contínua e HTTPS grátis. [Netlify](https://www.netlify.com/).
        * **Vercel:** Similar ao Netlify, também oferece uma ótima experiência para hospedar sites estáticos. [Vercel](https://vercel.com/).

## Estrutura de Arquivos

.
├── assets/
│   └── seu-logo.png      (Opcional: sua imagem de logotipo)
├── css/
│   ├── libs/
│   │   └── all.min.css   (Biblioteca Font Awesome)
│   └── style.css         (Estilos CSS personalizados)
├── js/
│   ├── libs/
│   │   └── tsparticles.bundle.min.js (Biblioteca de partículas de fundo - opcional)
│   └── script.js         (Script JavaScript para funcionalidades adicionais)
└── index.html            (Arquivo HTML principal)
README.md


## Personalização Avançada (Opcional)

* **Adicionar mais links:** Basta duplicar um item da lista `<li>` dentro da `<ul class="links-list">` e modificar o `href` e o texto do link.
* **Adicionar mais estilos:** Edite o arquivo `css/style.css` para alterar a aparência da sua página.
* **Remover o fundo de partículas:** Se você não deseja o efeito de partículas no fundo, você pode remover a tag `<div id="tsparticles"></div>` no `index.html` e remover ou comentar a linha de importação do `tsparticles.bundle.min.js` no final do `<body>`.
* **Adicionar funcionalidades com JavaScript:** O arquivo `js/script.js` pode ser usado para adicionar interatividade ou outras funcionalidades à sua página.

## Contribuição

Sinta-se à vontade para contribuir com este projeto através de pull requests. Sugestões de melhorias, correções de bugs e novas funcionalidades são bem-vindas.

## Licença

GNU GENERAL PUBLIC LICENSE

## Demonstração

<li>https://bio.capsys.com.br</li>
