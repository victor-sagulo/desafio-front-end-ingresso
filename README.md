<h1 align=center>Ingresso.com Home Page</h1>

Essa aplicação foi realizada em mobile-first, e as seguintes tecnologias foram utilizadas:

<ul>
    <li>ReactJs</li>
    <li>TypeScript</li>
    <li>Bibliotecas:</li>
    <ul>
        <li>Axios</li>
        <li>ContextApi</li>
        <li>React-Icons</li>
        <li>Styled-Components</li>
        <li>React-Multi-Carousel</li>
    </ul>
</ul>

<h2 align=center>Features</h2>

<ul>
    <li>Api -> Os filmes listados foiram feitos apartir da propria api da ingresso.com, fonecida no desafio.
    </li>
    <li>Botões do header -> Um deles é funcional, o botao de seleção de cidade, nele o usuário pode clicar nele onde abrira um pequeno modal com a outra opção e sem a opão que ja esta selecionada no momento.</br>
    Esse pequeno modal abre com um botão dentro onde, quando clicado, ele altera o endpoint da requisição e altera a cidade.</br>
    </li>
    
</ul>

<h2 align=center> Informações adicionais</h2>

<ul>
    <li>
        <h3>Header :</h3>
        - Foi utilizado da classe window e seu atributo InnerWidth para capturar a largura da viewport e realizar uma reenderização condicional, para obter uma versão de header mobile e desktop.
    </li>
    <li>
        <h3>Carrossel :</h3>
        - Foi utilizado da biblioteca react-multi-carousel, onde nela ja possui varios atributos e estilos que podemos atribuir de forma definitiva ou ate dinamicamente, alem de ja ser responsivo, nele voce pode declarar diversos breakpoints de forma rapida e limpa.
    </li>
</ul>
