export default ()=>(
    <div>
        <h1 className="text-center">
            VuVuTag In Numbers 
        </h1>
        <hr style={{'width': '60px'}} />
    <section className="container">
        <div className="stats">
            <h2>  Active Users  </h2>
            <span className="number"> 9800202 </span>
        </div>

        <div className="stats">
            <h2>  Events Created </h2>
            <span className="number"> 9800202 </span>
        </div>

        <div className="stats">
            <h2>  Users Tagged </h2>
            <span className="number"> 9800202 </span>
        </div>

    </section>
    <center><a href="" className="join_btn"> Get Started </a></center>

    <style jsx>
        {
            `
            .container{
                display:flex;
                
                width: 60%;
                margin: 80px auto;

            }
            .text-center{
                text-align:center;
                color:purple;
                font-size:30px;
                font-weight: 700;
            }
            .stats{
                width: 200px;
                height: 200px;
                border-radius: 100%;
                background:purple;
                margin-left: 40px;
                color:#fff;
                font-weight: bolder;
                position:relative;
            }
            .stats h2{
                position:absolute;
                top: 35%;
                left:16%;
            }
            .stats span{
                position:absolute;
                width: auto;
                height: auto;
                background:#000;
                color:#fff;
                top:10%;
                border-radius:100%;
                padding:10px;
                transform: rotate(-345deg);
                box-shadow: 0 19px 58px rgba(0,0,0,0.30);
            }
            .join_btn{

                background:#fff;
                padding:15px 30px;
                border:1px solid purple;
                cursor:pointer;
                color:purple;
                font-size:19px;
                border-radius:5px;
                text-decoration:none;
                display:inline-block;
                margin-bottom: 50px;
            }
            .join_btn:hover{
                background:purple;
                transition: all 0.25s;
                color:#fff;
            }
            
            `
        }
    </style>
    </div>
)