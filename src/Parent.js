import React from 'react'
import FirstChild from "./FirstChild"
import SecondChild from "./SecondChild"

const arrObj1 = [{user:"Arshaq",age:25},{user:"Areeb",age:20},{user:"Arif",age:22}]
const arrObj2 = [{user:"Junaid",age:25},{user:"jawwad",age:20},{user:"Addel",age:22}]

function Parent() {
    let title1 = 'Mera Babbu'
    let title2 = 'Mere Babu ny thana thaya'
    return (
        <div>
            <h1>I'm  Parent</h1>
            <FirstChild name={title1} age='22' />
            <SecondChild name={title2} age={19} />
        </div>
    )
}

export default Parent;
