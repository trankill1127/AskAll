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
                
                <div class="qaSet">
                    <div class="qa">
                        <div class="qnb">
                            <div class="question">
                                <p class="q">Q. What is Senioritis?</p>
                                <p class="p_td">
                                    <span class="t">4:01 PM </span>
                                    <span class="d">Jan 29, 2023</span>
                                </p>
                                <span class="p_u">user1</span>
                                <img class="p_p" alt="" src="images/unknown.png"/>
                            </div>
                        </div>
                        <div class="answers">
                            <div class="answer">
                                <p class="a">A. We are for technical problems, not vocabulary.</p>
                                <p class="p_td">
                                    <span class="t">4:11 PM </span>
                                    <span class="d">Jan 29, 2023</span>
                                </p>
                                <span class="p_u">user20</span>
                                <img class="p_p" alt="" src="images/unknown.png"/>
                            </div>
                            <div class="answer">
                                <p class="a">A. a supposed affliction of students in their final year of high school or college, characterized by a decline in motivation or performance.</p>
                                <p class="p_td">
                                    <span class="t">4:02 PM </span>
                                    <span class="d">Jan 29, 2023</span>
                                </p>
                                <span class="p_u">user35</span>
                                <img class="p_p" alt="" src="images/unknown.png"/>
                            </div> 
                        </div>
                    </div>
                </div>
                    
                <form id="aForm" action="techQ.html" method="post">
                    <p class="input-field">
                        <span class="charCnt" id="uA_charCnt">0 / 1500 ( Left : 1500 )</span>
                        <textarea id="uAnswer" name="uAnswer" cols="10" rows="5"></textarea>
                        <span class="err-text hidden" id="uA_err"></span>
                    </p>
                    <p class="input-field">
                        <input type="submit" value="Done"/>
                    </p>
                </form>
                
            </main> 
            
            <main id="main-right"></main>
            
            <main id="footer-auth">
                <p id="copyrights">(C) 2023. JinYi Kim all rights reserved.</p>
            </main>

        </div>

        <script src="js/eventRegisterA.js"></script>
    </body>

</html>