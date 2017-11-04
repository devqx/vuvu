import Head from 'next/head';
import Header from '../components/Header';
import Script from 'react-load-script';
import Welcome from '../components/Welcome';
import Summary from '../components/Summary';
import Events from '../components/Events';
import Bg from '../components/Bg';
import Vuvunum from '../components/Vuvunum';
import Blog from '../components/Blog';
import VuvuFooter from '../components/VuvuFooter';


class Slides extends React.Component{

    constructor(props){
        super(props);

        this.loadSequenceJs = this.loadSequenceJs.bind(this);
        this.addJsScripts = this.addJsScripts.bind(this);

        
    }

    render(){
        return (

            <div>
            <Head>
                <title>Homepage | Welcome to VuvuTag </title>
                <link href="https://fonts.googleapis.com/css?family=Raleway:400,500" rel="stylesheet" />
                
            </Head>
            <Header></Header>

        <div id="sequence">

            <ul className="seq-canvas">
                <li className="step1">
                <div className="content">
                    <h2 data-seq>Powered by VuvuTag</h2>
                    <h3 data-seq>The social Network of your choice.</h3>
                </div>
                </li>
        
                <li className="step2">
                <div className="content">
                    <h2 data-seq>Create Events and Tag Friends</h2>
                    <h3 data-seq>Meet, connect , Gist, Chat without restriction<br />Welcome to the social of network.</h3>
                </div>
                </li>
        
                <li className="step3">
                <div className="content">
                    <h2 data-seq>No Restrictions, Endless Possibilities</h2>
                    <h3 data-seq>Use the HTML and CSS syntax you're used to. <br />No JavaScript knowledge required.</h3>
                </div>
                </li>   
            </ul>

            </div>

            <Welcome />
            <Summary />
            <p></p>
            <Bg/>
            <Vuvunum />
            <Events title="Browse Events" />
            <Blog title="From The Blog"/>
            <VuvuFooter />

           
            <style jsx>{

                `  
                /* Style the Sequence container */
                #sequence {
                    position: relative;
                    width: 100%;
                    height: 585px;
                    max-width: 100%;
                    overflow: hidden;
                    margin: 0 auto;
                    padding: 0;
                    font-family: sans-serif;
                  }
                  
                  /* Reset */
                  #sequence .seq-canvas,
                  #sequence .seq-canvas > * {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                  }
                  
                  /* Make the canvas the same dimensions as the container and prevent lines from
                     wrapping so each step can sit side-by-side */
                  #sequence .seq-canvas {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    white-space: nowrap;
                    font-size: 0;
                  }
                  
                  /* Make the steps the same size as the container and sit side-by-side */
                  #sequence .seq-canvas > * {
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                    height: 100%;
                    white-space: normal;
                    text-align: center;
                    color: white;
                  }
                  
                  /* Used to vertically center align the .content element */
                  #sequence .seq-canvas > li:before {
                    content: "";
                    display: inline-block;
                    vertical-align: middle;
                    height: 100%;
                  }
                  
                  /* Vertically center align the .content element */
                  #sequence .content {
                    display: inline-block;
                    vertical-align: middle;
                    margin: 0 4%;
                    font-size: 16px;
                  }
                  
                  #sequence .step1, .step2, .step3 {
                    /*background-color: #279fe5;*/
                    background-image: url('https://badoocdn.com/aco/team.badoo.com/v2/-/-/i/team-site/promo/jobs/sz___size__/jobs.c1eb430f6119fc1355f6.jpg');
                    width:100vw;
                    background-position: center top;
                    background-repeat: no-repeat;
                    height:600px;
                  }
                  
                  #sequence .step2 {
                    /*background-color: #f96852;*/
                  }
                  
                  #sequence .step3 {
                    /*background-color: #2bbf8e;*/
                  }
                  
                  #sequence h2,
                  #sequence h3 {
                    margin: 0;
                    display: block;
                    line-height: 120%;
                    opacity: 0;
                    -webkit-transition-duration: 0.4s;
                    transition-duration: 0.4s;
                  }
                  
                  #sequence h2 {
                    margin-bottom: .5em;
                    font-family: 'Roboto', sans-serif;
                    font-size: 2.6em;
                    -webkit-transform: translate(0, -20px);
                    transform: (0, -20px);
                    
                  }
                  
                  #sequence h3 {
                    font-size: 1.4em;
                    -webkit-transform: translate(0, 20px);
                    transform: translate(0, 20px);
                  }
                
                  /* animate in positions for content */
                  #sequence .seq-in h2, 
                  .seq-in h3 {
                      opacity: 1;
                      -webkit-transform: translate();
                      transform: translate(0,0);
                  }
                
                   /* animate out positions for content */
                
                   #sequence .seq-out h2, 
                   .seq-out h3 {
                       opacity: 1;
                       -webkit-transform: translate();
                       transform: translate(0,0);
                       -webkit-transition-duration: .4s;
                       transition-duration: .4s;
                   }

                   
                
                `
            }
            </style>

            <style jsx global>
                {
                 `
                    body,html{
                        margin:0;
                        padding:0;
                    }
                    `
                }
            </style>  

        </div>

        )
    
    }
componentDidMount(){

    //this.addJsScripts() ); 

   
}

loadSequenceJs(){

    // Get the Sequence element
  var sequenceElement = document.getElementById("sequence");
  
    var options = {
      keyNavigation: true,
      fadeStepWhenSkipped: false,
      autoPlay: true,
      autoPlayInterval: 3000
    }
  
    // Launch Sequence on the element, and with the options we specified above
   var sequence =  sequence(sequenceElement, options)

   //return sequence;
}

addJsScripts(){

    var scripts = [
        'https://cdn.jsdelivr.net/npm/sequencejs@2.0.0/scripts/imagesloaded.pkgd.min.js',
        'https://cdn.jsdelivr.net/npm/sequencejs@2.0.0/scripts/hammer.min.js',
        'https://cdn.jsdelivr.net/npm/sequencejs@2.0.0/scripts/sequence.min.js',

    ];

    scripts.map( script => {
        var scriptEl = document.createElement('script');
        scriptEl.src = script;
        document.body.appendChild(scriptEl);
    })

 return this.loadSequenceJs();
     
}

}


export default Slides;