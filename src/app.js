
import React, {Component} from 'react'; // 这两个模块必须引入
import { Button, Radio, Icon } from 'antd';


import "./app.css"
const a={
    b:2
}
const {b}=a
const size ="large"
export default class Hello extends Component{
    render() {
        return (
            <div>
                 <Button>测试一下</Button>
                 <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />Backward
          </Button>
          <Button type="primary">
            Forward<Icon type="right" />
          </Button>
        </Button.Group>
              Hello1231 world
              正常导入图片
              <img src={require("../assets/1.jpg")} />
              CSS图片{b}
              <div id="tu">
            
              </div>
             
            </div>
        );
    }
}