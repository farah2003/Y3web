import React, { Component } from 'react';


class Header extends Component {
    state={
        value:"",
        text:"",
        list:[]
    }
    change=(e)=>{
  
this.setState({
    value:e.target.value
})
    }
    printchange=()=>{
        
        const {value,list}=this.state
        list.push(value)
        this.setState({
            list
        })
        console.log(list)
    }
    render() {
        const{list}=this.state
        console.log('list in render',list)
       
        return (
            <div>
            <div style ={{display:'flex',flexDirection:'row',marginTop:40,marginLeft:20}}>
           
            
                <div style={{alignItems:'center',marginRight:20}}>
                   <img src={require('../component /assets/ebay.png')} alt="img" style={{width:100,height:100,paddingTop:0}}/>
                </div>

                <div style={{alignItems:'center',marginRight:20,borderStyle:'soild',borderColor:'#F0FFF0',marginTop:40}}>
               <details>
                   <summary> find</summary>
                  <div style={{backgroundColor:'#F0FFF0',borderWidth:2 ,borderColor:'#F0FFF0',width:200,height:200}} >
                      <h1>dgh</h1>
                      <h1>dgh</h1>
                      <h1>dgh</h1>
                      <h1>dgh</h1>
                      <h1>dgh</h1>
                      <h1>dgh</h1>
                  </div>
               </details>
                </div>


                <div style={{alignItems:'center',marginRight:20}}>
                    <input type="text" defaultValue={this.state.value} onChange={this.change} style={{width:300,height:30,marginTop:30}}/>
                    <button onClick={this.printchange}>click</button>
                    {list.map(item=>{
                    return(
                        <div>
                <h1>{item}</h1>
                        </div>
                    )
                })}
                </div>
            
              
                
            </div>
            </div>
        );
    }
}

export default Header;