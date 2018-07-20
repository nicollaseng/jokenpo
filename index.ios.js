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
    width:200,
    height:200
  },
  viewImagem: {
    marginVertical: 30,
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
  },
  palco: {
    alignItems: 'center'
  },
  resultado: {
    color: 'red',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10
  }
})

const {imagem, viewImagem, painelBotao, botao, palco, resultado} = Estilo

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      escolhaUsuario: " ",
      escolhaComputador: " ",
      resultado: "",
      imagem: ""
    }
  }

  mudaEstado(escolhaUser){
    const optComputer = new Array()
    optComputer[0]= "Pedra"
    optComputer[1]= "Tesoura"
    optComputer[2]= "Papel"
    var sorteio = Math.floor(Math.random()*3)
    var res
    var imagemJokenpo
    if(escolhaUser === 'Pedra'){
      var imagemJokenpoJogador= <Image source ={require('./img/pedra.png')}/>
      if(optComputer[sorteio] === 'Pedra'){
        var imagemJokenpoComputador= <Image source ={require('./img/pedra.png')}/>
        res = 'Empate'
      }else if(optComputer[sorteio] === 'Papel'){
        var imagemJokenpoComputador= <Image source ={require('./img/papel.png')}/>
        res = 'Perdeu'
      }else if(optComputer[sorteio] === 'Tesoura'){
        var imagemJokenpoComputador= <Image source ={require('./img/tesoura.png')}/>
        res = 'Ganhou'
      }
    }
    if(escolhaUser === 'Papel'){
      var imagemJokenpoJogador = <Image source ={require('./img/papel.png')}/>
      if(optComputer[sorteio] === 'Pedra'){
        var imagemJokenpoComputador= <Image source ={require('./img/pedra.png')}/>
        res = 'Ganhou'
      }else if(optComputer[sorteio] === 'Papel'){
        var imagemJokenpoComputador= <Image source ={require('./img/papel.png')}/>
        res = 'Empate'
      }else if(optComputer[sorteio] === 'Tesoura'){
        var imagemJokenpoComputador= <Image source ={require('./img/tesoura.png')}/>
        res = 'Perdeu'
      }
    }
    if(escolhaUser === 'Tesoura'){
      var imagemJokenpoJogador = <Image source ={require('./img/tesoura.png')}/>
      if(optComputer[sorteio] === 'Pedra'){
        var imagemJokenpoComputador= <Image source ={require('./img/pedra.png')}/>
        res = 'Perdeu'
      }else if(optComputer[sorteio] === 'Papel'){
        var imagemJokenpoComputador= <Image source ={require('./img/papel.png')}/>
        res = 'Ganhou'
      }else if(optComputer[sorteio] === 'Tesoura'){
        var imagemJokenpoComputador= <Image source ={require('./img/tesoura.png')}/>
        res = 'Empate'
      }
    }

    this.setState({
      escolhaUsuario: escolhaUser,
      escolhaComputador: optComputer[sorteio],
      resultado: res,
      imagemJogador: imagemJokenpoJogador,
      imagemComputador: imagemJokenpoComputador,
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
        <View style={palco}>
          <Text style={resultado}>{this.state.resultado} </Text>
          <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
          <Text>{this.state.imagemJogador}</Text>
          <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
          <Text>{this.state.imagemComputador}</Text>
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