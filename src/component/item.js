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
                  margin: 10px 4px;
                  text-align: center;
                  padding: 10px;
                  background: #1f1e1e;
                  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                  border-radius: 5px;
                }
                img {
                  width: 100%;
                }
  
                #paragraf-ringkas {
                  overflow: hidden;
                  max-height: 30px; /* Set tinggi maksimum paragraf ringkas di sini */
                }
  
                @media screen and (max-width: 550px) {
                  :host {
                    width: 40%;
                    display: flex;
                    margin: 10px 4px;
                    font-size: 10px;
                  }
                }
            
            </style>
              <div class="daftar" data-id="${this._movie.id}">
                <div id="${this._movie.name}">
                  <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="card-img card-img-top" alt="${this._movie.name}" />
                  <h3>${this._movie.title}</h3>
                  <h4>⭐ ${this._movie.vote_average}</h4>
                  <h4>Date: ${this._movie.release_date}</h4>
                </div>
              </div>
              `;
  }
}

customElements.define('card-item', item);
