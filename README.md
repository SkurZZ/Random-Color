# Color Flipper Project

Este projeto, **Color Flipper**, é um simples trocador de cores desenvolvido como parte do desafio proposto pela [freeCodeCamp](https://www.freecodecamp.org/portuguese/news/40-projetos-em-javascript-para-iniciantes-ideias-simples-para-comecar-a-programar-em-js/#como-criar-um-trocador-de-cores). Ele oferece uma maneira interativa de gerar cores aleatórias e aplicá-las ao fundo da página com um clique.

## Demonstração
Você pode conferir a [demo do projeto aqui](https://random-color-olive.vercel.app/).

## Como Funciona
Ao clicar no botão "Click Me", o JavaScript gera uma cor hexadecimal aleatória e a aplica ao fundo da página. A cor gerada é exibida em formato hexadecimal no texto acima do botão.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

## Como Utilizar
1. Clone ou faça o download deste repositório.
2. Abra o arquivo `index.html` em seu navegador web.
3. Clique no botão "Click Me" para gerar e aplicar uma nova cor ao fundo da página.

## Estrutura do Projeto
- **index.html**: Contém a estrutura HTML básica do projeto.
- **style.css**: Folha de estilos que define a aparência do projeto.
- **script.js**: Script JavaScript que manipula a lógica de troca de cores.

## Customização
Você pode personalizar as cores editando as variáveis no arquivo `style.css` sob o seletor `:root`. Sinta-se à vontade para explorar e ajustar conforme suas preferências.

### Paleta de Cores
O projeto utiliza uma paleta de cores definida como variáveis CSS. Você pode ajustar essas variáveis para criar uma paleta de cores personalizada.

Exemplo:
```css
:root {
  /* Definição das cores utilizadas no projeto */
  --clr-primary-1: hsl(205, 86%, 17%);
  --clr-primary-2: hsl(205, 77%, 27%);
  /* ... outras cores ... */
}
```
