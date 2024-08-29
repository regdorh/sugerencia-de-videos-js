const main = (() => {
    
    const insertar = (url, id) => {
        const elemento = document.getElementById(id)
        elemento.setAttribute("src", url);
    };
    
    return { 
        mostrarVideo: (url, id) => insertar(url, id) 
    };
})();


class Multimedia {
    #url;
    constructor(url){
        this.#url = url;
    };

    get url(){
        return this.#url;
    };
    set url(nuevaUrl){
        this.#url = nuevaUrl
    }

    setInicio(){
        return `Este método es para realizar un cambio en la URL del video`
    }
}


class Reproductor extends Multimedia {
    
    #id;
    constructor(url, id){
        super(url);
        this.#id = id;
    }

    get id(){
        return this.#id;
    }
    
    playMultimedia(){
        main.mostrarVideo(this.url, this.id)
    }
    
    setInicio(tiempo){
        let url = this.url;
        
        if(url.includes("?")){
            url += `&start=${tiempo}`
        } else {
            url += `?start-${tiempo}`
        }
        this.url = url;
        console.log(this.url)
    }
}

let mostrarMusica = new Reproductor("https://www.youtube.com/embed/wFgJz5kd2l8?si=LEcT6bzr6uQiYrj3", 'musica')
let mostrarPelicula = new Reproductor("https://www.youtube.com/embed/lC2xtjSlxog?si=w4Tmr8O1uItUFsIk", 'peliculas')
let mostrarSerie = new Reproductor("https://www.youtube.com/embed/Ioj21AwS7ws?si=b0stloRUQOXYpTIO", 'series');

mostrarMusica.setInicio(3000)

mostrarMusica.playMultimedia()
mostrarPelicula.playMultimedia()
mostrarSerie.playMultimedia()