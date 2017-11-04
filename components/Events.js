export default ({title})=>(

    <section>
        <div className="container clearfix">
            <h1> {title} </h1>
            <hr style={{width: '60px'}}/>
        </div>

        <div className="events">

            <div className="events_item">
                <img src="/static/bg.jpg" width="100%"/>
                <div className="event_description">
                <h1>Event Name </h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                <span> 132 Tagged Users </span>
            </div>
            </div>
            

            <div className="events_item">
                
            <img src="/static/bg.jpg" width="100%"/>

            <div className="event_description">

                <h1>Event Name </h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                <span> 132 Tagged Users </span>
                </div>
            </div>

            <div className="events_item">

                <img src="/static/bg.jpg" width="100%"/>

                <div className="event_description">

                <h1>Event Name </h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                <span> 132 Tagged Users </span>
                </div>
            </div>

            
        </div>

        <center><a href="" className="events_btn"> Browse More </a></center>
        <style jsx>
            {
                `
                .container{
                    
                   margin:60px 60px 40px 40px; 
                }
                .container h1{
                    text-align:center;
                    font-size:30px;
                    color:purple;
                    
                }
                .clearfix::after {
                    content: "";
                    clear: both;
                    display: table;
                }
                .events{
                    display:flex;
                    margin:90px 40px;
                }
                .events_item{
                    width:31%;
                    margin-left:10px;
                    height:400px;
                    box-shadow: 0 0 12px rgba(0,0,0,0.25);
                }
                .events_item img{
                    border-radius: 2px;
                    border-bottom-left-radius:0px;
                    border-bottom-right-radius:0px;
                    
                }
                .event_description{
                   padding:20px;
                }
                .events_btn{
                    display:block;
                    text-align:center;
                    text-decoration:none;
                    margin-top:-40px;
                    font-size: 24px;
                    margin-bottom: 15px;
                    
                  
                }
                `
            }
        </style>
    </section>
)