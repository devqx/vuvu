
export default ()=>(

    <section>
        <div className="vuvu_logo">
            <img src="/static/logo.png" height="180px" />
        </div>
       
       <div className="welcome_message">
            <h1> WHATS VUVUTAG ? </h1>
            <hr style={{'width': '60px'}}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation 
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation  
                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
           <button className="btn_tour">
               Take A Tour
           </button>
       </div>

        <style jsx>
        {
            `
            .vuvu_logo{
                text-align:center;
                margin-top:40px;
                margin-bottom:0px;
            }
            .welcome_message{
                width:60%;
                height:auto;
                box-shadow: 0 19px 38px rgba(0,0,0, 0.25);
                margin:0 auto;
                margin-bottom:80px;
                margin-top:0px;
                border-radius:3px;
                text-align:center;
            }
            .welcome_message h1{
                padding-top: 40px;
                color:purple;
            }
            .welcome_message p{
                padding: 30px;
            }
            .btn_tour{
              background:purple;
              padding:15px 30px;
              border:1px solid purple;
              margin-bottom: 20px; 
              cursor:pointer;
              color:#fff;
              font-size:19px;
              border-radius:5px;
            `
        }
    </style>

    </section>

    
)

