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

            <form id="signupForm" action="login.html" method="post">
                <div class="input-field">
                    
                    <div class="without-err-text">
                        <p id="uType">Usertype</p>
                        <div class="radio-buttons-wrap" id="radio-buttons-wrap">
                            <input type="radio" id="public" name="uType" value="Public"/>
                            <label for="public">Public</label>
                            <input type="radio" id="tech" name="uType" value="Tech"/>
                            <label for="tech">Tech</label>
                        </div>
                    </div>
                    
                    <span class="err-text hidden" id="uType_err"></span>

                </div>

                <div class="input-field">
                    <div class="without-err-text">
                        <label for="email">email</label>
                        <input type="text" id="email" name="email"/>
                    </div>                    

                    <span class="err-text hidden" id="email_err"></span>
                </div>
                <div class="input-field">
                    <div class="without-err-text">
                        <label for="uname">Username</label>
                        <input type="text" id="uname" name="uname"/>
                    </div>
                    <span class="err-text hidden" id="uname_err"></span>
                </div>
                <div class="input-field">
                    <div class="without-err-text">
                        <label for="photo">Avatar</label>
                        <input type="file" id="photo" name="photo"/>
                    </div>
                    <span class="err-text hidden" id="photo_err"></span>
                </div>
                <div class="input-field">
                    <div class="without-err-text">
                        <label for="pw">Password</label>
                        <input type="password" id="pw" name="pw"/>
                    </div>
                    <span class="err-text hidden" id="pw_err"></span>
                </div>
                <div class="input-field">
                    <div class="without-err-text">
                        <label for="cPw">Confirm Password</label>
                        <input type="password" id="cPw" name="cPw"/>
                    </div>
                    <span class="err-text hidden" id="cPw_err"></span>
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

    <script src="js/eventRegisterSignup.js"></script>
</body>

</html>