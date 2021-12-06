import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo Component');
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)

//Create a functional component
//in the functional parentherese destructure the name prop(which we have taken from ParentComp.js)
//and in the JSX lets render that name property 
//also add a console statement which says rendering memo component

//go back to ParentComp commentout the Regcomp and PureComp and 
//instead include MemoComp

//we need a way to avoid re-rendering this Memo functional component
//and we can do that by using React.memo()
//in Memo component what we have to do is export React.memo and then passin Memo component
//as its argument

//i.e export default React.memo(MemoComp)

//React.memo() is introduced in version 16.6 