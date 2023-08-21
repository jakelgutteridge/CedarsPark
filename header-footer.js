// Get references to the header and footer divs
const headerDiv = document.getElementById('header');
const footerDiv = document.getElementById('footer');
const headerlineDiv = document.getElementById('headerline');

// Define the injected HTML content for header and footer
const headerHTML = `
  <header>
    <center>
    <span style="line-height: 1;">
      <table cellpadding="0px" cellspacing="0px" style="width: 100%; max-width: 950px; background-image: url("/headerbg.png");">
        <tr>
          <td>
            <a href="https://www.cedarspark.info" style="color: #FFFFFF;">
              <img src="/logo.png" height="50" style="float: left; padding: 12px 0px 12px 0px;">
            </a>
          </td>
          <td>
            <div class="nav" style="float: right;">
              <div class="dropdown">
                <div class="dropbtn">
                  <img src="/menu.png" style="float: right;">
                </div>
                <div class="dropdown-content">
                  <a href="/history">History</a>
                  <a href="/nature">Nature</a>
                  <a href="https://photos.app.goo.gl/TS6vdoSJqanieQee7" target="_blank">Photos</a>
                  <a href="/friends">Friends</a>
                  <a href="/memorials">Memorials</a>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
      </span>
    </center>
  </header>
`;





const headerlineHTML = `
    <header>
    <center>
    <span style="line-height: 0.5;">
      <table cellpadding="0px" cellspacing="0px" style="width: 100%; max-width: 950px; background-image: url("/headerbgline.png"); background-repeat: no-repeat; background-size: 100% 100%;">
        <tr>
          <td>
            <span style="font-size: 1px;">&nbsp;</span>
          </td>
        </tr>
      </table>
      </span>
    </center>
  </header>
`;



const footerHTML = `
  <footer>
    <center>
      <table cellpadding="3px 0px 3px 0px" cellspacing="0px" style="width: 100%; max-width: 950px;">
        <tr>
          <td>
            <a href="https://goo.gl/maps/qGNjaJsKsYP7dyQz8" target="_blank" style="color: #ffffff;">Theobalds Lane, Cheshunt EN8 8RU</a>
          </td>
          <td>
            <span style="float: right;">
              <small>FOCP 2021&ndash;2023</small>
            </span>
          </td>
        </tr>
      </table>
    </center>
  </footer>
`;

// Inject the HTML content into the header and footer divs
headerDiv.innerHTML = headerHTML;
footerDiv.innerHTML = footerHTML;
headerlineDiv.innerHTML = headerlineHTML;
