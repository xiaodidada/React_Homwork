import React,{ Component } from 'react';
import './ListItem.css'
class ListItem extends Component
{
  constructor(props)
  {
    super(props)
  }
  onFinishBtnClick = () =>{
    this.props.markDone(this.props.item)

  }
  render(){
    const item = this.props.item;
    if (item.done)
    {
      return <p className = 'done-item'> <font color='green'>&#9745; </font>{this.props.item.content}</p>;
    }else{
      return <p className = 'item'>
      <font color='red'>&#9746; </font>
      {this.props.item.content}
      <button onClick={this.onFinishBtnClick}>Done</button>
      </p>;
    }
  }
  
}
export default ListItem;