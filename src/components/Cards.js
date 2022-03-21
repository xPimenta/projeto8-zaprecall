// import { useState } from "react"
import Card from './Card';

export default function Cards({ deck, updateNumCompleted, updateStatusIcon, updateZapAmount, reestart, updateReestart }) {
    return (
        <div className="deck">
            {deck.map(({ question, answer }, questionNum) => {
                return (
                    <Flashcard
                        questionNum={questionNum + 1}
                        key={questionNum + 1}
                        question={question}
                        answer={answer}
                        updateNumCompleted={updateNumCompleted}
                        updateStatusIcon={updateStatusIcon}
                        updateZapAmount={updateZapAmount}
                        reestart={reestart}
                        updateReestart={updateReestart}
                    />
                )
            })
            }
        </div>
    )
}

// return(
// <div className="cards">sad
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