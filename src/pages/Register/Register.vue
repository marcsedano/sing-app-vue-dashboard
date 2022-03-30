<template>
  <div class="test">
    <b-row no-gutters class="custom-div-row">
      <b-col cols="7" class="main-part d-none d-md-none d-lg-flex">
        <div class="d-flex custom">
            <img class="img-resp" src="../../assets/esed/white_logo_esed.png" alt="..." width="1000px" />
        </div>
      </b-col>
      <b-col cols="12" lg="5" class="login-part d-flex align-center justify-center">             
        <b-row no-gutters class="align-start">
          <b-col cols="12" class="login-part d-flex align-center justify-center flex-column">
            <img class="img-resp" src="../../assets/esed/blue_logo_esed.png" alt="..." width="90px" />
            <div class="login-wrapper pt-md-4 pt-0"> 
              <Widget class="widget-auth mx-auto" style="background:none;">
                <div class="form-container">
                  <div class="right-content">
                    <h3 class="form-title">Register</h3>
                    <form class="form-horizontal">
                      <div class="form-group">
                        <label>Username / Email</label>
                        <input type="email" class="form-control">
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control">
                      </div>
                      <div class="form-group">
                        <label>Confirm Password</label>
                        <input type="password" class="form-control">
                      </div>
                      <button class="btn signin">Register</button>
                      <div class="remember-me">
                        <input type="checkbox" class="checkbox mr-2">
                        <span class="check-label">I agree with the <a href="https://flatlogic.com" rel="nofollow noopener noreferrer" target="_blank"> Privacy Policy </a></span>
                      </div>
                    </form>
                    <span class="separator">OR</span>
                    <ul class="social-links">
                      <li><a href=""><i class="fa fa-google"></i> Login with Google</a></li>
                      <li><a href=""><i class="fa fa-github"></i> Login with Github</a></li>
                    </ul>
                    <span class="signup-link">Already have an account? <router-link to="/login" class="sidebar-link">Sign in</router-link></span>
                  </div>
                </div>
              </Widget>
            </div>
          </b-col>
        </b-row>
        <footer class="contentFooter">
          Sing App Vue Dashboard Free Template - Made by <a href="https://flatlogic.com" rel="nofollow noopener noreferrer" target="_blank">Flatlogic</a>
        </footer>
      </b-col>
    </b-row>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      return {
        email: 'admin@flatlogic.com',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        createFullName: 'John Smith',
        createEmail: 'john@flatlogic.com',
        createPassword: '123456',
        password: '123456',
        passRules: [
          v => !!v || 'Password is required',
          v => v.length >= 6 || 'Min 6 characters'
        ]
      }
    },
    methods: {
      login(){
        window.localStorage.setItem('authenticated', true);
        this.$router.push('/dashboard');
      }
    },
    created() {
      if (window.localStorage.getItem('authenticated') === 'true') {
        this.$router.push('/dashboard');
      }
    }
  }

</script>
<style src="./Register.scss" lang="scss" scoped />
