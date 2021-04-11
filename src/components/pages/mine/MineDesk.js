import React from 'react'

class MineDesk extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            node: 'http://127.0.0.1:8000',

            dataSource: [],
            
        }
        this.getChain =  this.getChain.bind(this);
        this.MineNode = this.MineNode.bind(this);
        this.ResolveChain = this.ResolveChain.bind(this);
        this.onHandlechangePort = this.onHandlechangePort.bind(this);
    }
    MineNode(){
        fetch(this.state.node+'/mine')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              dataSource: result,
             
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    getChain(){
        
        fetch(this.state.node+'/chain')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              dataSource: result.chain,
             
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )

    }
    ResolveChain(){
        fetch('http://localhost:8000/nodes/resolve')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              dataSource: result.chain,
             
            });
            alert(result.message)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )

    }
    onHandlechangePort(event){
        this.setState({node: event.target.value});
    }
    render(){
        return (
            <>
            </>
        )
    }
}

export default MineDesk
