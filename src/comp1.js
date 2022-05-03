import React from 'react'

const Comp1 = (props) => {
   function testmethod(){
        props.test('Kumar');
    }
    return (
        <div>
            {props.myname}
          <button click={testmethod()}>Submit</button>
        </div>
    )
}

export default Comp1
