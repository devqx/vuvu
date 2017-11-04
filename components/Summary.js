export default ()=>(
    <div>
        <h1 className="text-center"> A New Kind Of Social </h1>
        <hr style={{'width':'60px'}} />
    <section className="container">
        <div>
            <div className="col">
                <h1>Connect With Friends </h1>
               
                <center><img src="/../static/user.png"/></center>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                </p>
            </div>

            <div className="col">
            <h1> Tag With Any One </h1>
            <center><img src="/../static/user.png"/></center>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                </p>
            </div>

            <div className="col">
            <h1> Take Rides </h1>
            <center><img src="/../static/user.png"/></center>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                </p>
            </div>

            <div className="col">
            <h1> Socialise </h1>
            <center><img src="/../static/user.png"/></center>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                </p>
            </div>


            <div className="col">
            <h1> Create Events </h1>
            <center><img src="/../static/user.png"/></center>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                </p>
            </div>

            <div className="col">
            <h1> Meet Any One </h1>
            <center><img src="/../static/user.png"/></center>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                </p>
            </div>

        </div>

    </section>


    <style jsx>
            {
                `
                .container{
                    margin:80px 40px 80px;
                    display:flex;

                }
                .col{
                    width:30%;
                    float:left;
                    padding:10px;
                    margin-left:8px;
                    margin-bottom: 15px;
                    box-shadow: 0 19px 38px rgba(0,0,0,0.25);
                    
                }
                .col h1{
                    text-align:center;
                    color:#000;
                    
                }
                .col:hover h1{
                    color:purple;
                }
                .text-center{
                    text-align:center;
                    color:purple;
                    font-size:30px;
                    
                }
               
               
                `
            }
        </style>
        
    </div>
)