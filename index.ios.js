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
      escolhaUsuario: " "
    }
  }

  mudaEstado(escolhaUser){
    this.setState({
      escolhaUsuario: escolhaUser
    })
  }
  render(){
    return(
      <View style={Estilo.geral}>
        <Text>Escolha do computador: </Text>
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