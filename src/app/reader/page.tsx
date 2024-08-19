"use client";
import { useState } from "react";

const ReaderPage = () => {
    const [currentPage, setCurrentPage] = useState(0);

    

    // this will go elsewhere, but not now. 
  const pages = [
    {
        title: "A Revolução do JavaScript: Como Tudo Começou",
        content: `
            Nos primórdios da internet, as páginas web eram pouco mais que simples documentos de texto com algumas imagens. Era uma época de curiosidade e experimentação, mas faltava algo que tornasse a web verdadeiramente interativa. Foi então que, em 1995, a Netscape Communications, uma das empresas pioneiras na internet, decidiu que era hora de transformar a experiência do utilizador online.

            Brendan Eich, um programador com uma visão singular, foi recrutado pela Netscape para criar uma nova linguagem de script que pudesse ser usada tanto por programadores experientes quanto por designers sem formação técnica. O objetivo? Dar vida às páginas web, permitindo que reagissem às ações dos utilizadores de maneiras até então impensáveis.

            Em apenas 10 dias, Eich desenvolveu a primeira versão do que conhecemos hoje como JavaScript. Originalmente chamado de "Mocha" e depois "LiveScript", o nome JavaScript foi estrategicamente escolhido para capitalizar sobre a popularidade do Java, uma linguagem totalmente diferente que estava em voga na época. Apesar das semelhanças no nome, JavaScript e Java partilham muito pouco em comum, exceto por uma sintaxe ligeiramente similar.

            Este foi o primeiro passo na transformação da web, de um meio passivo de leitura para uma plataforma interativa e dinâmica, onde os utilizadores podiam, finalmente, interagir de formas mais significativas.
        `,
    },
    {
        title: "A Internet nos Anos 90: O Contexto que Moldou o JavaScript",
        content: `
            A internet dos anos 90 era um território inexplorado, onde a maioria dos utilizadores navegava a velocidades incrivelmente lentas, em comparação com os padrões de hoje. Conectar-se à internet significava ouvir o som do modem a tentar estabelecer ligação, num processo que podia demorar vários minutos. As páginas eram simples, compostas principalmente por texto e algumas imagens, e cada clique podia significar uma espera longa enquanto a página carregava.

            Nesse cenário, a criação de uma linguagem que pudesse adicionar interatividade sem sobrecarregar ainda mais os tempos de carregamento era crucial. O HTML, a linguagem principal usada para criar páginas web, era estático e limitava-se a apresentar informação. Não havia formas fáceis de criar animações, validar formulários em tempo real, ou atualizar partes da página sem a recarregar completamente.

            O JavaScript surgiu como a solução para esses desafios. Introduziu funcionalidades que permitiram aos programadores criar páginas que podiam reagir às ações dos utilizadores, como clicar num botão ou enviar um formulário, sem a necessidade de recarregar a página inteira. Isso foi revolucionário e ajudou a definir o que a web viria a tornar-se nos anos seguintes.

            Vale a pena recordar que a internet dos anos 90 também era o lar de algumas das primeiras comunidades online, como as páginas pessoais do GeoCities, onde qualquer pessoa podia criar um site gratuito e partilhar as suas paixões com o mundo. Estes sites, muitas vezes adornados com gifs animados e música de fundo, capturavam o espírito de experimentação e liberdade que caracterizava a web nessa época.
        `,
    },
    {
        title: "Netscape Navigator: O Navegador que Mudou Tudo",
        content: `
            Antes de termos o Google Chrome, o Safari ou o Firefox, o Netscape Navigator era o navegador que dominava a internet. Lançado em 1994, o Navigator rapidamente se tornou a porta de entrada para a web para milhões de pessoas em todo o mundo. Mas a Netscape não estava apenas interessada em fornecer um navegador; queria moldar o futuro da internet.

            Uma das maiores inovações do Netscape Navigator foi o suporte a imagens embutidas no texto, algo que hoje consideramos garantido, mas que na época foi uma verdadeira revolução. Além disso, com o lançamento do JavaScript em 1995, a Netscape deu aos programadores as ferramentas necessárias para criar páginas web mais dinâmicas e interativas.

            Este período de inovação culminou com a Oferta Pública Inicial (IPO) da Netscape em 1995, um evento que muitos consideram o início do boom das dot-com. A Netscape tornou-se um símbolo do potencial ilimitado da internet, e o seu navegador, o Navigator, foi o principal veículo para essa exploração digital.

            No entanto, o sucesso da Netscape chamou a atenção da Microsoft, que rapidamente decidiu entrar na corrida com o seu próprio navegador, o Internet Explorer. Isso marcou o início da famosa "Guerra dos Navegadores", uma competição feroz que moldaria o futuro da web.
        `,
    },
    {
        title: "A Guerra dos Navegadores: JavaScript no Centro da Batalha",
        content: `
            Nos anos 90, a competição entre a Netscape e a Microsoft não era apenas uma batalha de navegadores; era uma batalha pelo controle da própria internet. A Netscape, com o seu Navigator, estava na liderança, mas a Microsoft, com recursos aparentemente ilimitados, não estava disposta a ficar para trás. 

            O Internet Explorer foi lançado em 1995 como parte do Windows 95 Plus! e rapidamente começou a ganhar terreno, graças em grande parte à estratégia da Microsoft de integrá-lo diretamente no Windows. Esta integração significava que milhões de utilizadores tinham acesso imediato ao Internet Explorer, o que acelerou a sua adoção.

            Mas a guerra entre os navegadores não foi travada apenas com táticas de mercado. A incompatibilidade entre o JavaScript da Netscape e o JScript da Microsoft criou uma verdadeira dor de cabeça para os programadores web. Eles tinham que garantir que as suas páginas funcionassem tanto no Navigator quanto no Internet Explorer, o que frequentemente significava escrever código redundante ou implementar soluções complexas.

            Esta guerra tecnológica culminou com o desenvolvimento do ECMAScript, um padrão criado pela ECMA International em 1997, que visava unificar as diferentes versões do JavaScript e garantir a compatibilidade entre navegadores. O ECMAScript foi essencial para o futuro do JavaScript e para o desenvolvimento de uma web mais harmoniosa.
        `,
    },
    {
        title: "A Jornada de Brendan Eich: O Impacto Duradouro do JavaScript",
        content: `
            Brendan Eich pode não ser um nome conhecido por todos, mas o impacto do seu trabalho é sentido diariamente por qualquer pessoa que utiliza a internet. Após criar o JavaScript em apenas 10 dias, Eich continuou a desempenhar um papel crucial na evolução da web. Ele permaneceu na Netscape durante a maior parte dos anos 90 e, mais tarde, cofundou a Mozilla Foundation, a organização responsável pelo Firefox.

            O Firefox, lançado em 2004, foi uma resposta direta ao domínio do Internet Explorer e rapidamente conquistou uma base de utilizadores leal, graças à sua ênfase na segurança, na privacidade e na conformidade com os padrões web.

            Mas o impacto de Eich vai além de qualquer navegador. Sob a sua liderança, o JavaScript evoluiu de uma linguagem simples para uma ferramenta poderosa, capaz de suportar aplicações complexas tanto no frontend quanto no backend, com o advento do Node.js.

            Hoje, o JavaScript é uma das linguagens de programação mais utilizadas no mundo. É a espinha dorsal da web moderna, usada para criar tudo, desde simples interações de utilizador até complexas aplicações web. O legado de Eich está vivo em cada linha de código JavaScript escrita e em cada página web interativa que visitamos.
        `,
    },
    {
        title: "O Futuro do JavaScript: Novos Horizontes e Possibilidades Infinitas",
        content: `
            À medida que a tecnologia continua a avançar, o JavaScript está a expandir-se para além das fronteiras da web tradicional. Com o surgimento de novas tecnologias como o Node.js, o JavaScript não está mais confinado ao frontend; agora, também alimenta o backend, permitindo que os programadores usem uma única linguagem para construir aplicações completas.

            O JavaScript também está a fazer incursões em áreas como o desenvolvimento de jogos, inteligência artificial e até mesmo realidade virtual. Tecnologias como o Electron estão a permitir que o JavaScript seja usado para criar aplicações de desktop, enquanto o React Native facilita o desenvolvimento de aplicações móveis usando JavaScript.

            O futuro do JavaScript parece promissor. Com uma comunidade global ativa e um ecossistema em constante expansão, o JavaScript está bem posicionado para continuar a ser uma peça central na programação por muitos anos. As futuras versões do ECMAScript prometem trazer ainda mais funcionalidades e melhorias, garantindo que o JavaScript permaneça relevante numa paisagem tecnológica em rápida evolução.

            À medida que novas plataformas e dispositivos continuam a emergir, o JavaScript está preparado para se adaptar e conquistar novos horizontes, desde a inteligência artificial até aplicações imersivas que ainda nem conseguimos imaginar.
        `,
    },
];



















    const nextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (index: number) => {
        setCurrentPage(index);
    };

    return (
        <div className="w-full h-90 flex flex-col">
            <div className="flex-grow p-6 ">
                <h1 className="text-4xl font-bold mb-8">{pages[currentPage].title}</h1>
                <div className="text-lg whitespace-pre-line leading-relaxed">
                    {pages[currentPage].content}
                </div>
            </div>

            <div className="p-4 bg-gray-100 fixed bottom-0 left-0 right-0">
                <div className="flex justify-between items-center">
                    <button 
                        onClick={prevPage} 
                        disabled={currentPage === 0}
                        className={`bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Página Anterior
                    </button>

                    <div className="flex items-center gap-2">
                        {pages.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => goToPage(index)}
                                className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${index === currentPage ? 'bg-blue-500 scale-110' : 'bg-gray-300'}`}
                                title={`Ir para a página ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={nextPage} 
                        disabled={currentPage === pages.length - 1}
                        className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ${currentPage === pages.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Página Seguinte
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReaderPage;
