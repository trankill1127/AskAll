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
            
            <main id="profile-auth">
                <div id="pSet">
                    <img id="uPhoto" alt="" src="images/KJY.jpg"/>
                    <p id="uName">JinnieK</p>
                </div>
            </main>
            
            <main id="main-left"></main>
            
            <main id="main-center">
                
                <form id="qForm" action="publicQ.html" method="post">
                    <div class="input-field">
                        <span class="charCnt" id="uQ_charCnt">0 / 1500 ( Left : 1500 )</span>
                        <textarea id="uQ" name="uQ" cols="10" rows="5"></textarea>
                        <span class="err-text hidden" id="uQ_err"></span>
                    </div>
                    <div class="input-field">
                        <input type="submit" value="Done"/>
                    </div>
                </form>
                
            </main> 
            
            <main id="main-right"></main>
            
            <main id="footer-auth">
                <p id="copyrights">(C) 2023. JinYi Kim all rights reserved.</p>
            </main>

        </div>

        <script src="js/eventRegisterQ.js"></script>
    </body>

</html>