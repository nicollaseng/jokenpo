import React, {Component} from 'react'
import {
  Text,
  View,
  AppRegistry,
  Button,
  Image,
  StyleSheet
} from 'react-native'

const Estilo = StyleSheet.create({
  imagem: {
    width:300,
    height:300
  },
  viewImagem: {
    marginVertical: 40,
    alignItems: 'center'
  },
  painelBotao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  botao: {
    width: 90,
  }
})

const {geral, imagem, viewImagem, painelBotao, botao} = Estilo

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
    var sorteio = Math.floor(Math.random()*3)
    var res

    if(escolhaUser === 'Pedra'){
      if(optComputer[sorteio] === 'Pedra'){
        res = 'Empate'
      }else if(optComputer[sorteio] === 'Papel'){
        res = 'Perdeu'
      }else if(optComputer[sorteio] === 'Tesoura'){
        res = 'Ganhou'
      }
    }
    if(escolhaUser === 'Papel'){
      if(optComputer[sorteio] === 'Pedra'){
        res = 'Ganhou'
      }else if(optComputer[sorteio] === 'Papel'){
        res = 'Empate'
      }else if(optComputer[sorteio] === 'Tesoura'){
        res = 'Perdeu'
      }
    }
    if(escolhaUser === 'Tesoura'){
      if(optComputer[sorteio] === 'Pedra'){
        res = 'Perdeu'
      }else if(optComputer[sorteio] === 'Papel'){
        res = 'Ganhou'
      }else if(optComputer[sorteio] === 'Tesoura'){
        res = 'Empate'
      }
    }

    this.setState({
      escolhaUsuario: escolhaUser,
      escolhaComputador: optComputer[sorteio],
      resultado: res
    })

    
  }

  render(){
    return(
      <View>
        <Topo />
        <View sytle={painelBotao}>
          <View style={botao}>
                <Button title="Pedra" onPress={() => this.mudaEstado("Pedra")}></Button>
          </View>
          <View style={botao}>
                <Button title="Papel"onPress={() => this.mudaEstado("Papel")}></Button>
          </View>
          <View style={botao}>      
                <Button title="Tesoura" onPress={() => this.mudaEstado("Tesoura")}></Button>
          </View>
        </View>
        <View>
          <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
          <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
          <Text>Resultado: {this.state.resultado} </Text>
        </View>
      </View>
    )
  }
}

class Topo extends Component {
  render(){
    return(
      <View style={viewImagem}>
        <Image source={require('./img/jokenpo.png')}
               style={imagem} />
      </View>
    )
  }
}


AppRegistry.registerComponent('app3', () => App)