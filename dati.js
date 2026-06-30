/* ============================================================================
   CONTENUTI DEL MESE  —  è l'UNICO file che modifichi ogni mese.

   • Cambia cliente e mese.
   • In "posts" ogni { ... } è un contenuto. Copia un blocco per aggiungerne uno.
   • In "media" scrivi il nome del file (mettilo nella cartella "media/").
       foto →  { tipo:"foto",  src:"media/nomefoto.jpg" }
       reel →  { tipo:"video", src:"media/nomereel.mp4" }
       carosello → più foto nello stesso "media".
   • Lascia src:"" se la foto non è ancora pronta: comparirà un segnaposto.
   ============================================================================ */

window.PIANO = {

  cliente: "Grotta Marcello",
  mese:    "Luglio 2026",

  posts: [

    {
      data: "2026-07-02", ora: "18:30",
      canale: "Entrambi", formato: "Carosello",
      media: [
        { tipo:"foto", src:"media/sala-archi-01.jpg" },
        { tipo:"foto", src:"media/sala-archi-02.jpg" },
        { tipo:"foto", src:"media/sala-archi-03.jpg" }
      ],
      caption: "Scendi dove la pietra racconta. Tre archi, luce calda e i tavoli che profumano di sera.\nGrotta Marcello ti aspetta sotto Cagliari, dove il tufo diventa rifugio. Prenoti? Link in bio.",
      hashtag: "#grottamarcello #cagliari #aperitivocagliari #tufo #cocktailbar"
    },

    {
      data: "2026-07-05", ora: "13:00",
      canale: "Instagram", formato: "Reel",
      media: [
        { tipo:"video", src:"media/impasto.mp4" }
      ],
      caption: "Sessanta secondi, dodici ore di lievitazione. Guarda nascere la nostra base, una bolla alla volta.",
      hashtag: "#pizzacagliari #lievitazione #dietrolequinte #reelcibo #grottamarcello"
    },

    {
      data: "2026-07-09", ora: "19:00",
      canale: "Entrambi", formato: "Post",
      media: [
        { tipo:"foto", src:"media/tufo-sour.jpg" }
      ],
      caption: "Il nostro Tufo Sour: gin sardo, mirto, limone e un soffio di salvia. Nato nella roccia, servito al tramonto.",
      hashtag: "#cocktail #ginsardo #mirto #signaturedrink #grottamarcello #cagliaribynight"
    }

  ]
};
