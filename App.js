import React,{Component} from 'react';
import Subject from './components/Subject';
import Toc from './components/Toc';
import Content from './components/Content';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mode:'read',
      welcome:{title:'Welcome', desc:'Hello React !'},
      subject:{title:'WEB',sub:'World wide web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML IS FOR INFOMATION'},
        {id:2, title:'CSS', desc:'CSS IS DESIGN'},
        {id:3, title:'JAVASCRIPT', desc:'JAVASCRIPT IS FOR INTERACTIVE'},
        {id:4, title: 'react', desc:'react is simple!'}
      ]

    }
  }
  render(){
    var _title,_desc= null;
    if(this.state.mode=== 'welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    }else if(this.state.mode==='read'){
      _title=this.state.contents[0].title;
      _desc=this.state.contents[0].desc;
    }

  return (
    <div className="App">      
       
      {/*<Subject title={this.state.subject.title}
       sub={this.state.subject.sub}/>*/}
         <header>
           <h1><a href="/" onClick={function(e){
           console.log(e);
           e.preventDefault();
          // this.state.mode='welcome';
           this.setState({
             mode:'welcome'
           })
           }.bind(this)} > {this.state.subject.title} </a></h1>
          {this.state.subject.sub}
        </header>

      <Toc data={this.state.contents}/>  
      <Content title={_title} desc={_desc}/>  

    </div>
  );
 }
}

export default App;
