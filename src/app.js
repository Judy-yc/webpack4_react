// hello.js
import React, {Component} from 'react'; // 这两个模块必须引入
import './assets/css/style.css';  // 导入css
let name = 'Alans';
const {a,b}={a:1,b:2}
export default class Hello extends Component{
    render() {
        console.log(3)
        return (
            <div>
                {name}
            </div>
        );
    }
}