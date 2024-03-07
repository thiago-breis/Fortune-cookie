import React, {Component} from 'react'

class Botao extends Component{
    

    render(){
        return(
            <button onClick={this.props.acao} className={this.props.className}>{this.props.nome}</button>
        )
    }


}

export default Botao