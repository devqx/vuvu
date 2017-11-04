const Header = ()=>(

    <div>
        <div className="navbar">
            <span className="logo"><a href="/"> <img src="static/logo.png" height="140px"/> </a></span>
            <ul className="nav">
                <li className="nav_item">
                    <a href="/"> Home </a>
                </li>

                <li className="nav_item">
                    <a href="/about"> About </a>
                </li>

                <li className="nav_item">
                    <a href="/about"> Why Vuvu </a>
                </li>

                <li className="nav_item">
                    <a href="/about"> Activities </a>
                </li>

                <li className="nav_item">
                    <a href="/contact"> Join </a> 
                </li>

            </ul>
        </div>
   

        <style jsx global>
        {`
        .navbar{
            background:transparent;
            z-index:9999;
            position:absolute;
            width:100%;
            height:60px;
            
        }
        
        ul{
            margin:0;
        }
        .logo{
            float:left;
            margin: 12px 70px;
            color:#fff;
        }
        .logo a {
            color:#fff;
            text-decoration:none;
            font-size:20px;
        }
        ul.nav{
            
            color:#fff;
            float:right;
            margin: 12px 70px;
            
        }
        .nav_item{
            padding:6px 10px;
            list-style-type:none;
            display:inline-block;
            box-sizing:border-box;
        
        }
        .nav_item:hover{
          
            border: 1px solid #fff;
            box-shadow: 0px 19px 38px rgba(0,0,0,0.25);
            transition: all .35s;

        }
        .nav_item a{
            text-decoration:none;
            color:#fff;
            font-size:1.24rem;
        }
        
        `}
    </style>

    </div>

 
)

export default Header;