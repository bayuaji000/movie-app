class item extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
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
                  display: flex;
                  width: 250px;
                  margin: 8px 8px;
                  text-align: center;
                  background: #1f1e1e;
                  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                  border-radius: 6px;
                }

                img {
                  width: 100%;
                  border-top-left-radius: 6px;
                  border-top-right-radius: 6px;
                }

                h3 {
                  color: white;
                }

                h4 {
                  color: #d4d4d4;
                }

                h5 {
                  color: #d4d4d4;
                }
  
                #paragraf-ringkas {
                  overflow: hidden;
                  max-height: 30px; /* Set tinggi maksimum paragraf ringkas di sini */
                }
  
                @media screen and (max-width: 550px) {
                  :host {
                    width: 40%;
                    display: flex;
                    margin: 4px 4px;
                    font-size: 10px;
                  }
                }
            
            </style>
              <div class="daftar" data-id="${this._movie.id}">
                <div id="${this._movie.name}">
                  <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="card-img" alt="${this._movie.name}" />
                  <h3>${this._movie.title}</h3>
                  <h4>⭐ ${(this._movie.vote_average).toFixed(1)}</h4>
                  <h5>${this._movie.release_date}</h5>
                </div>
              </div>
              `;
  }
}

customElements.define('card-item', item);
