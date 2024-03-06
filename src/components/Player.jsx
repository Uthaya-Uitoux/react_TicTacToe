import { useState } from "react"

export default function Player({initialName, symbol, isActive}){
    const[playerName, setPlayerName]= useState(initialName);
    const [isEditing, setIsEditing]= useState(false);
    
    function handleEdit(){
       // setIsEditing(isEditing ? false : true); - -one method of having the opp statement
    /* setIsEditing(!isEditing);//Easy method to change the previous value - in repeating this code does not give the opp value to the previous value.
     setIsEditing(!isEditing);//Both line gives the true value*/
     //3rd method
    setIsEditing(editing=>!editing);//easy method tochange the value using prev state
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }

      let editablePlayerName = <span className='player-name'>{playerName}</span>;
      //let btnCaption='Edit';
      if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
       //btnCaption='Save';
      }

    return(
        <li className={isActive ? 'active' : undefined}>
        <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </span>
        </li>
    )
}