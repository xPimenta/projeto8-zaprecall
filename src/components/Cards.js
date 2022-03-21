import { useState } from "react"
// import Card from './Card';

export default function Cards() {

    const deck = [{
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    }, {
        question: "O React é __",
        answer: "Uma biblioteca JavaScript para construção de interfaces"
    }, {
        question: "Componentes devem iniciar com __",
        answer: "Letra maiúscula"
    }, {
        question: "Podemos colocar __ dentro do JSX",
        answer: "Expressões"
    }, {
        question: "O ReactDOM nos ajuda __ ",
        answer: "Interagindo com a DOM para colocar componentes React na mesma"
    }, {
        question: "Usamos o npm para __",
        answer: "Gerenciar os pacotes necessários e suas dependências"
    }, {
        question: "Usamos props para __",
        answer: "Passar diferentes informações para componentes"
    }, {
        question: "Usamos estado (state) para __",
        answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
    ]

    const [aberto, setAberto] = useState(false)
    
    // function qStat(status){
    //     if(questStatus === "init" && status === "not-init"){
    //         setQuestStatus("not-init")
    //     }else{
    //         setQuestStatus("init")
    //     }
    // }

    let classe = 'question-card'
    let src = "./assets/play.png"
    
    if(aberto){
        classe = 'opened-card'
        src = './assets/setinha.png'
    }
    

    function toggleCard(){
        setAberto(!aberto)
    }

    
    let deckmap = deck.map((quest, i) => 
        <div key={i} className={classe} onClick={toggleCard}>
            <p> {aberto ? quest.question : ("Pergunta " + (i+1)) } </p>
            <img src={src} alt="img"/>
        </div>
    )
    return (deckmap);
}

// return(
// <div className="cards">
//     <div className="question-card">
//       <p>Pergunta x</p>
//       <img src="./assets/play.png" />
//     </div>

//     <div className="opened-card">
//       <p>Pergunta xasdas dsadsadsadasdasdasas</p>
//       <img src="./assets/setinha.png" />
//     </div>

//     <div className="answer-card">
//       <p>Pergunta x</p>

//       <div className="answers">
//         <button>Não lembrei</button>
//         <button >Quase não lembrei</button>
//         <button >Zap!</button>
//       </div>
//     </div>
//   </div>
// );
// }