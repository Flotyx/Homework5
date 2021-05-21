import React from 'react'

class ToDoForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            value : ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

     handleChange(event)
    {
       this.setState(
        {
           value: event.target.value
        })
    }

   handleSubmit(event)
   {
        event.preventDefault()
        if(this.state.value != "")
        {
            this.props.onAdd(this.state.value)
            this.setState({value:''})
        }
   }

    render()
    {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text"  value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="Add"/>
            </form>
         </div>
        )
    }
}
export default ToDoForm 