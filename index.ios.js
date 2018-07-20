import React, {Component} from 'react'
import {
  Text,
  View,
  AppRegistry,
  Button
} from 'react-native'

const Estilo = {
  geral: {
    marginVertical: 40
  }
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      escolhaUsuario: " ",
      escolhaComputador: " ",
      resultado: ""
    }
  }

  mudaEstado(escolhaUser){
    const optComputer = new Array()
    optComputer[0]= "Pedra"
    optComputer[1]= "Tesoura"
    optComputer[2]= "Papel"
    var sorteio = Math.random()*3
    sorteio = Math.floor(sorteio)

    this.setState({
      escolhaUsuario: escolhaUser,
      escolhaComputador: optComputer[sorteio],
    })

    
  }

  render(){
    return(
      <View style={Estilo.geral}>
        <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado: </Text>
        <Button title="Pedra" onPress={() => this.mudaEstado("Pedra")}></Button>
        <Button title="Papel" onPress={() => this.mudaEstado("Papel")}></Button>
        <Button title="Tesoura" onPress={() => this.mudaEstado("Tesoura")}></Button>
      </View>
    )
  }
}

AppRegistry.registerComponent('app3', () => App)