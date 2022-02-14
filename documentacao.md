# Seletores

Conecta um elemento HTML com o CSS

## Tipos

* Global Selector `*`
* Element/Type selectors `h1, h2, h3`
* ID Selector `#caixa, #corpo, #container`
* Class Selector `.red, .botoes, .labels`
* Attribute selector, Pseudo-class, Pseudo-element, e outras

# CSS

## BoxModel

o CSS trabalha com essa ideia de caixas, ou seja, o box model. Mas o quê exatamente é esse box model?

É uma caixa retangular. Essa caixa possui as mesmas propriedades de uma caixa 2D, e tem como propriedades:

    Tamanho (largura x altura width e height, respectivamente)
    Conteúdo: o content
    Bordas: o border
    Preenchimento interno: o padding
    Espaços fora da caixa: a margin

Quase todo elemento de uma página é considerado uma caixa: Posicionamentos, tamanhos, espaçamentos, bordas, cores, então, em suma, elementos HTML são caixas, assim como quase tudo no CSS.

## Cascata

A escolha do browser(navegador) de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

    Seu estilo é lido de cima para baixo, ou seja, caso haja algum selector com informações conflitantes, o mais embaixo é o que será atribuído.

São levados em consideração 3 fatores:

A origem do estilo;

A especificidade;

A importância;

### Especificidade

É um cálculo matemático, onde cada tipo de seletor e origem do estilo possuem valores a serem considerados.

Os mais fracos são universal selector, combinators e negation pseudo-class, com o valor de 0. Em seguida, com valor de 1, são os element type selector e pseudo-elements.

Também temos os classes e attribute selectors, com valor de 10, ou seja, são mais fortes que os anteriores.

O segundo mais forte, ID selector, com um valor de 100, vence todos os selectors anteriores.

Por fim, temos o inline, com o valor 1000, quaisquer desses selectors anteriormente citado

## At-rules

São regras relacionadas ao comportamento do CSS, começa com um sinal de @ seguido do identificador e do valor.

São as seguintes:

    @import serve para incluir um CSS externo.
    @media são regras condicionais para vários dispositivos.
    @font-face é para colocar fontes externas.
    @keyframes serve para as animations do CSS.

## Funções

 * nome seguido de abre e fecha parentesis
 * recebe argumentos

### Exemplos
    @import url("http://urlaqui.com.style.css");

    {
        color: rgb(255,0,100);
        width: calc(100% -10px);
    }

## Vendor prefixes

São coisas que permitem que browsers adiocionem features a fim de colocar em uso alguma novidade que vemos no CSS.

Exemplos:

p {
	-webkit-background-clip: text; /*Chrome, Safari, iOS e Android*/
	-moz-background-clip: text; /* Mozilla (Firefox) */
	-ms-background-clip: text; /* Internet Explorer ou Edge*/
	-o-background-clip: text; /* Opera */

Você também pode consultar se a feature pode ser utilizada através dos sites:

https://ireade.github.io/which-vendor-prefix

https://caniuse.com

## Valores
 * cada propriedade possui valores `property: value`
 * estudo constante a fim de entender as propriedades e seus valores

### Tipos numéricos
 * <integer>        Numero inteiro: -10, 1, 25
 * <number>         Numero Decimal -2.4, 2.5, 50.4
 * <dimension>      É um <number> com uma unidade junto: 90deg, 2s, 8px
 * <percentagem>    Representa a fração de outro numero: 50%, 10%, 25%

### Unidades Comuns
 * <length> - é um dos mais usados no CSS e representa um valor de distância: px, em, vw
 * <angle> - representa um ângulo: deg, rad, turn
 * <time> - representa um tempo: s, ms
 * <resolution> - representa resoluções para dispositivos: dpi

## Distancias

### Distancias absolutas

São fixas e não alteram seu valor

    | Unidade  | Nome                | Equivalência         |
    |----------|---------------------|----------------------|
    | cm       | Centímetros         | 1cm = 96px/2.54      | 
    | in       | Inches (polegadas)  | 1in = 2.54cm = 96px  | 
    | px       | Pixels              | 1px = 1/96th of 1in  |

### Distancias Relativas

São relativas a um outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.
Benefício: Maior adaptação aos diferentes tipos de tela.

    | Unidade  | Relativo a                                    |
    |----------|-----------------------------------------------|
    | em       | Tamanho da font do elemento pai               |
    | rem      | Tamanho da font do elemento raiz (root/html)  | 
    | vw       | 1% da viewport wid                            |    
    | vh       | 1% da viewport height                         |

    Normalmente o tamanho da font padrão do navegador é de 16px e para mudar esse valor temos que fazer a alteração no root ou no elemento html.

    Ex: 

    :root {
	    font-size: 18px;
    }

    html {
	    font-size: 18px;
    }

    O viewport é a parte da tela que está sendo exibida. No caso dos navegadores web, é o que é exibido na janela/tela do documento. Conteúdos que estão fora do viewport só serão exibidos quando feito um scroll da área de visualização.

## Posições
Representa um conjunto de coordenadas 2
    top, right, bottom, left e center
Usado para alguns tipos de propriedades como o background-position
Não confundir com a propriedade position

## Box Model
 * Uma caixa retangular
 * Possui propriedades de uma caixa 2D 
    - altura e largura : Width e Height
    - Conteudo : content
    - Bordas : border
    - Preenchimento interno : padding
    - Espaços fora da caixa : margin 

### Box Sizing
E é por isso que é tão importante conhecer a propriedade do box-sizing.

Por padrão o navegador vai calcular o tamanho da caixa pelo content-box e vai somar com os outros boxes, no exemplo acima no lugar de 100px a caixa vai ficar com uma largura de 140px. Para que isso não aconteça, é possível mudar qual vai ser a referência para o calculo do tamanho da caixa adicionando a propriedade box-sizing: border-box;.

Dessa forma o elemento vai ficar com a largura (width) determinado, que no caso do exemplo citado é de 100px.
Normalmente usa-se o código abaixo como forma de "resetar" o box-sizing que vem por padrão nos navegadores.
* {
   box-sizing: border-box;
}

### display block vs display inline
Display block: Ocupa toda a linha, colocando o proximo elemento abaixo desse
               Width e Height são respeitados
               padding, margin, border irão funcionar normalmente.

Display inline: Elemento ao lado do outro
                Width e Height não funcionam
                somente valores horintais de margin, padding e border.

## Page Layouts
Nessa aula vamos ver alguns dos métodos usados para posicionar os elementos na tela.

    Tables
    Floats e clear
    Frameworks e Grid Systems
    Flexbox
    Grid

## Posicionamentos
Controla onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

    Name: position
    Value: static | relative | absolute | fixed

Lembrando que o fluxo normal dos elementos é ficar um abaixo do outro, a não ser no caso de elementos inline, que ficam um ao lado do outro.

 * Static
    Por padrão todos os elementos vem com o position: static
 
 * Relative
    Quando o position é relative os elementos são deslocados do seu posicionamento normal, mas sem afetar o posicionamento de outros elementos da página.
    "Desbloqueando" as propriedades top, rigth, left, bottom e z-index
 
 * Absolute
    Quando o position é absolute o elemento é deslocado saindo do fluxo normal. O elemento de position absolute é posicionado em relação ao seu parent element mais próximo. Se esse elemento "pai" não existir, ele será posicionando em relação ao bloco contendo a raiz do elemento.

 * Fixed
    Quando aplicado o position fixed é como se criasse um elemento flutuante que fica fixo na página, independente do scrolling feito.

 * Element Stacking
    É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem da posição do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.
 
 * Flexbox
    Nos permite posicionar os elementos dentro da caixa
    Controle em uma dimensão (horizontal ou vertical)
    Alinhamento, direcionamento, ordenar e tamanhos

    div.parent {
	    display: flex;  
    }

    Flex-direction

        Qual a direção do flex: horizontal ou vertical
        row | column

    Alinhamento

        justify-content
        align-items

 * Grid
    