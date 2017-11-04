export default ()=>(
    <section className="container">
        <div className="bg_imge">
            <div className="description">
                <h1> A new Kind Of Social Just for you </h1>
                <center><a href="" className="tour_btn1"> Take A Tour </a></center>
            </div>
          
        </div>

        <style jsx>
            {
                `
                .bg_imge{
                    background-image: url(../static/bg.jpg);
                    background-size:100% 100%;
                    background-repeat: none;
                    background-position: center top;
                    position:relative;
                    width:100%;
                    height:400px;
                }
                .container{
                    margin: 80px 0px;
                }
                .description{
                    position:absolute;
                    top:40%;
                    left:33%;
                    color:#fff;
                    font-weight:700;
                    font-size: 25px;
                }
                .tour_btn1{
                    display:block;
                    border:1px solid #fff;
                    border-radius:5px;
                    text-align:center;
                    padding: 8px 12px;
                    width:150px;
                    color:#fff;
                    text-decoration:none;
                    margin-top:40px;
                    background:transparent;
                }
                .tour_btn1:hover{
                    color:#fff;
                    background: purple;
                    transition: all 0.25s;
                    border:none;
                    font-size: 18px;
                }
                `
            }
        </style>
    </section>
)