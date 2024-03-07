import React, { Component } from 'react'
import Botao from './components/Botao'
import './estilo.css'


class App extends Component{
    constructor(props){
        super(props);
        this.state = {

            textoFrase: ''
        }
        this.frases = ['“Pare de procurar eternamente; a felicidade está bem ao seu lado”',
           '“Você passará por algumas experiências maravilhosas”',
           '“Você vai herdar uma grande quantia em dinheiro”',
           '“Generosidade e perfeição são seus eternos objetivos”',
           '“Sua mente é criativa, original e perspicaz”',
           '“Seus princípios valem mais para você do que dinheiro ou sucesso”',
           '“O vício de hoje pode se tornar a virtude de amanhã”',
           '“A vontade das pessoas é a melhor das leis”'

        ]
    }


    quebrarBiscoito = () => {
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
        this.setState({textoFrase: this.frases[numeroAleatorio]})
    }
    
    
    //cada item tem q ter uma id unica: e eh so passar ele na div.
    render = () => {
        return  (
               
            <div className="container">
              <img className="img" alt="biscoito" src={require('./assets/biscoito.png')} /><br />
              <Botao acao={this.quebrarBiscoito} className="botao" nome="ABRIR BISCOITO" />
              {console.log(this.frases.length - 1)}
              <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
            )
    }
}



export default App