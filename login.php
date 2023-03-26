<!DOCTYPE html>
<html>
    
    <head>
        <title>Ask ALL</title>
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
        <script src="js/eventHandlers.js"></script>
    </head>

    <body>
        <div id="container">

            <main id="header-auth">
                <p id="logo">Ask ALL</p>
            </main>
            
            <main id="profile-auth"></main>
            
            <main id="main-left"></main>
            
            <main id="main-center">
                
                <form id="loginForm" action="publicQ.html" method="post">
                    <div class="input-field">
                        <div class="without-err-text">
                            <label for="uname">Username</label>
                            <input type="text" id="uname" name="uname"/>
                        </div>
                        <span class="err-text hidden" id="uname_err"></span>
                    </div>
                    <div class="input-field">
                        <div class="without-err-text">
                            <label for="pw">Password</label>
                            <input type="password" id="pw" name="pw"/>
                        </div>
                        <span class="err-text hidden" id="pw_err"></span>
                    </div>
                    <div class="input-field">
                        <input type="submit" value="Sign in-public"/>
                    </div>
                    <button type="button" onclick="location.href='signup.html'">Sign up</button>
                </form>
                
                <a href="techQ.html">Sign in-tech</a>

            </main> 
            
            <main id="main-right"></main>
            
            <main id="footer-auth">
                <p id="copyrights">(C) 2023. JinYi Kim all rights reserved.</p>
            </main>

        </div>

        <script src="js/eventRegisterLogin.js"></script>
    </body>

</html>