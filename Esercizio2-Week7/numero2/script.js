class Pagination {
    constructor(_idTable, _items = [], _pageSize = 10) {
        this.table = document.getElementById(_idTable); // variabile table prende l'id della table in html
        this.items = _items; // righe tabella, vedi array
        this.pageSize = _pageSize; // numero di righe nella pagina
        this.currentPage = 1; // pagina corrente
        this.maxPages = Math.ceil(this.items.length / this.pageSize); // numero max di pagine: numero righe tabella totale / numero di righe nella pagina - es. 10(righe totali) / 2(righe per pagina) = 5(pagine)
        this.makePageButtons();
        this.getVisibleItems();
    }

    // Funzione che crea i bottoni
    makePageButtons() {
        // Primo
        let firstBtn = document.getElementById('primo');
        firstBtn.addEventListener('click', () => {
            this.changePage(1);
        });

        // Precedente
        let prevBtn = document.getElementById('precedente');
        prevBtn.addEventListener("click", () => {
            this.prev()
        })

        // Successivo
        let nextBtn = document.getElementById('successivo');
        nextBtn.addEventListener("click", () => {
            this.next()
        })

        // Ultimo
        let lastBtn = document.getElementById('ultimo');
        lastBtn.addEventListener('click', () => {
            this.changePage(5);
        });
    }

    // Funzione che cambia pagina in avanti
    next() {
        if (this.currentPage < this.maxPages) {
            this.currentPage += 1;
        } else {
            this.currentPage = this.maxPages;
        }
        this.getVisibleItems()
    }

    // Funzione che cambia pagina indietro
    prev() {
        if (this.currentPage > 1) {
            this.currentPage -= 1;
        } else {
            this.currentPage = 1;
        }
        this.getVisibleItems();
    }
    
    // Funzione che cambia pagina in base alla currentPage
    changePage(page) {
        this.currentPage = page;
        if (this.currentPage < 1) {
            this.currentPage = 1;
        } else if (this.currentPage > this.maxPages) {
            this.currentPage = this.maxPages;
        }
        this.getVisibleItems()
    }

    // Funzione per creare le righe in tabella
    getVisibleItems() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = this.currentPage * this.pageSize;
        const lista = this.items.slice(start, end);
        const wrapper = document.querySelector('#wrapper');
        let strHtml = '';
        lista.forEach((item) => {
            strHtml += `<tr>
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.cognome}</td>
            <td>${item.classe}</td>
            </tr>`;
        })
        wrapper.innerHTML = strHtml;
    }
}

const users = [
    {id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A'},
    {id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A'},
    {id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A'},
    {id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A'},
    {id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A'},
    {id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A'},
    {id: 7, nome: 'Gianni', cognome: 'Bianchi', classe: 'A'},
    {id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A'},
    {id: 9, nome: 'Alessia', cognome: 'Laci', classe: 'A'},
    {id: 10, nome: 'Maria', cognome: 'Hola', classe: 'A'}
];

let pagination = new Pagination("table", users, 2);