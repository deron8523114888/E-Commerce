import React from 'react';
import ReactDOM from 'react-dom';

//建立一個DOM物件
let element = <h1>[1]Hello, world!</h1>
//使用ReactDOM.render把剛建立的物件element插入目標DOM中
ReactDOM.render(element, document.getElementById('root'));


//--------------------------------------------------------------------------------------------------------------------------------------
// setInterval 每間隔 1 秒呼叫 displayTime 這個 function
// function 內每次都會 render, 並找到 root1 的元件作覆寫
const displayTime = () =>{
  let nowTime = (
    <div>
      <span>[2]現在時間：{new Date().toLocaleTimeString()}</span>
    </div>
  )
  ReactDOM.render(nowTime,document.getElementById('timer'))
}
setInterval(displayTime,1000)


//--------------------------------------------------------------------------------------------------------------------------------------
// Class 作為 Tag, 並藉由建構子參數 name 的值作顯示
class ClassTag extends React.Component {
  render() {
      return <h1>[3]Hello, {this.props.name}！</h1>
  }
}
let titleDiv = (
  <div>
    <ClassTag name="GQSM" />
    <ClassTag name="Horse" />
  </div>
)
ReactDOM.render(titleDiv, document.getElementById('classTag'))


//--------------------------------------------------------------------------------------------------------------------------------------
// 物件可放進 CSS 參數, 根據不同建構子需求作填入
class HelloCSS extends React.Component {
  render(){
    return <p style={this.props.style}>{this.props.content}</p>
  }
}
class TitleDiv extends React.Component {
  render(){
      return (
        <div>
            <HelloCSS content="[4]比較大的字" style={ {'font-size':18} } />
            <HelloCSS content="[4]比較小的字" style={ {'font-size':12} } />
        </div>
      )
  }
}
ReactDOM.render(<TitleDiv />,document.getElementById('helloCSS'))


//--------------------------------------------------------------------------------------------------------------------------------------
// 將固定不變的值改為物件本身自帶, 而不要用建構子參數的方式
// 物件創造完成後, 針對要更改的參數, 在 Class 內更新, 而不要從外部丟參數的方式更新
class NowTime extends React.Component {
  //使用類別中的constructor建構子，參數中傳入props是必要的
  constructor(props){
      super(props)
      this.state = {time : new Date().toLocaleTimeString()}
  }
  //加入組件建構完成後執行的事件，目前設定每秒更改 setState 的參數 time
  componentDidMount(){
    const upTime = () =>{
        this.setState({time : new Date().toLocaleTimeString()})
    }
    setInterval(upTime,1000)   
  }
  
  // state 被修改時會執行的函式
  componentDidUpdate(){
    //執行內容
    console.log('時間一分一秒在跑...')
  }

  render(){
      return <h1>[5]現在時間是{this.state.time}</h1>
  }
}
ReactDOM.render(<NowTime />,document.getElementById('timerInClass'))

//----------------------------------ERROR---------------------------------
class TimerClose extends React.Component {
  constructor(props){
    super(props)
    this.state = {time : 5}
  }

  componentDidMount(){
    const upTime = () =>{
      this.setState({time : 4})
    }
    setInterval(upTime, 1000)   
  }
  
  // state 被修改時會執行的函式
  componentDidUpdate(){
    if(this.state.time == 0){
      ReactDOM.unmountComponentAtNode(document.getElementById('timerClose'))
    }
    //執行內容
    console.log('時間一分一秒在跑...')
  }

  //組件結束時會執行的事件
  componentWillUnmount(){ 
    //這裡記錄移除掉的時間
    console.log('已移除')
  }

  render(){
      return <h1>[6]{this.state.time}秒後將會移除</h1>
  }
}
ReactDOM.render(<TimerClose />, document.getElementById('timerClose'))
//----------------------------------ERROR---------------------------------