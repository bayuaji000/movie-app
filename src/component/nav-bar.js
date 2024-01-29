class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
              * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
              }
              :host{
                  padding: 20px;
                  display: flex;
                  flex-direction: column;
                  color: white;
              }
  
              .search-container {
                display: flex;
                float: right;
                padding: 10px;
              }
              
              .navbar h1 {
                float: left;
                margin-left: 20px;
              }

              .Movies {
                color: red;
              }
  
              input[type=search] {
                width: 70%;
                height: auto;
                box-sizing: border-box;
                border: 2px solid #ccc;
                border-radius: 4px;
                font-size: 16px;
                background-color: #e8e6e6;
                padding: 10px;
              }

              button {
                width: 80px;
                cursor: pointer;
                background-color: Red;
                color: white;
                border-radius: 4px;
                margin-left: 4px;
              }
  
              button:hover {
                background: #87110f;             
              }
          </style>
  
          <div class="navbar">
          <h1>Bay <span class="Movies">Movies</span></h1>
          <div class="search-container">
                  <input placeholder="Search Movies" id="searchElement" type="search">
                  <button id="searchButtonElement" type="submit">Search</button>
                </div>
                </div>
          `;
    this.shadowDOM
      .querySelector('#searchButtonElement')
      .addEventListener('click', this._clickEvent);
  }
}

customElements.define('nav-bar', NavBar);
