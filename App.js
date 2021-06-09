//libraries

import { StatusBar } from 'expo-status-bar';
import React ,{Component} from 'react';
import { StyleSheet, Text, View ,Image ,Button, TouchableOpacity} from 'react-native';


export default class App extends Component{


  constructor(){
    super()
    this.state={
      result:"",
      fno:"",
      secno:"",
      op:"",
      ans: ""
    }
  }

  calculate(){
    let ans = eval(this.state.fno+this.state.op + this.state.result);
    if(this.state.op=="%")
      ans = (eval(this.state.fno+"*"+ this.state.result))/100;
    console.log(ans)
      this.setState({
        result: ans
      });
    console.log(this.state.result)
  }
  onPressed(text){
    console.log(text);
     this.setState({
        result:this.state.result+text            //showing result on res box
     })
  }

  OnClear(){
    this.setState({
      result:"",
      fno:"",
      op:"",
    })
  }
  OnCut(){
    let newres = this.state.result.toString().slice(0, -1);
    this.setState({
      ...this.state,
      result: newres      
    })
  }
 


  onOperationPressed(text){
    console.log(text);
    switch(text){
      case "+":this.setState({
        op:"+",
        fno:this.state.result,
        result: ""
      });
        break;
      case "-":this.setState({
        op:"-",
        fno:this.state.result,
        result: ""
      });
        break;
      case "*":this.setState({
        op:"*",
        fno:this.state.result,
        result: ""
      });
        break;
      case "/":this.setState({
        op:"/",
        fno:this.state.result,
        result: ""
      });
        break;
      case "%":this.setState({
        op:"%",
        fno:this.state.result,
        result: ""
      });
        break;
      case "=":
        this.calculate();
        break;
      
    }
  }

  render(){
    let rows=[];
    let row=[];
    row.push(<TouchableOpacity onPress={()=>this.OnClear()} style={{flexDirection:'row'}}>
        <Text style={{fontSize:27}}>C</Text>
      </TouchableOpacity>);
    row.push(<TouchableOpacity onPress={()=>this.onOperationPressed("%")} style={{flexDirection:'row'}}>
    <Text style={{fontSize:27}}>%</Text>
  </TouchableOpacity>);
  row.push(<TouchableOpacity onPress={()=>this.OnCut()} style={{flexDirection:'row'}}>
  <Text style={{fontSize:27}}>x</Text>
</TouchableOpacity>);
rows.push(<View style={{flexDirection:'row',flex:1,justifyContent:'space-around',alignItems:'center'}}>{row}</View>);
    for(let i=0;i<4;i++){
    row=[];
    let nums=[[7,8,9],[4,5,6],[1,2,3],['00',0,'.']];
    for(let j=0;j<3;j++){
      row.push(<TouchableOpacity onPress={()=>this.onPressed(nums[i][j])} style={{flexDirection:'row'}}>
        <Text style={{fontSize:27}}>{nums[i][j]}</Text>
      </TouchableOpacity>);
    }
    rows.push(<View style={{flexDirection:'row',flex:1,justifyContent:'space-around',alignItems:'center'}}>{row}</View>);
   }

    return (
      <View style={styles.maincont}>
          <View style={styles.resbox}>
            <Text style={{fontSize:40,color:'#777'}}>{this.state.result}</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              {rows}
            </View>
            <View style={styles.operations}>
                 <TouchableOpacity onPress={()=>this.onOperationPressed("+")}>
                      <Text style={{fontSize:20}}>+</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>this.onOperationPressed("-")}>
                      <Text style={{fontSize:20}}>_</Text>
                 </TouchableOpacity >
                 <TouchableOpacity onPress={()=>this.onOperationPressed("*")}>
                      <Text style={{fontSize:20}}>*</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>this.onOperationPressed("/")}>
                      <Text style={{fontSize:20}}>/</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>this.onOperationPressed("=")}>
                      <Text style={{fontSize:20}}>=</Text>
                 </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }



}


const styles=StyleSheet.create({
  maincont:{
    flex:1,
    backgroundColor:'yellow'
  },

  resbox:{
    backgroundColor:'#',
    flex:4,
    alignItems:'flex-end',
    justifyContent:'center'
  },

  buttons:{
    backgroundColor:'green',
    flexGrow:7,
    flexDirection:'row'
  },

  numbers:{
    backgroundColor:'#f4f4f4',
    flex:8
  },

  operations:{
    backgroundColor:'#c96',
    flex:2,
    justifyContent:'space-around',
    alignItems:'center',
    
  }
  
 

 
});

