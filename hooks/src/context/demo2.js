  
import React,{useContext} from 'react'
import MyContext from './Context';
import MyContext from './Context';
import DemoChild from './DemoChild';
function Demo2() {
    console.log('Demo Render');
    const val = useContext(MyContext);
    console.log(val);
    return (
        <div>
            <DemoChild/>
        </div>
    )
}

export default  React.memo(Demo2)