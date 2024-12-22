import OnixBlogv1 from "./components/Blogs/OnixBlogv1"

function App() {

  return (
    <OnixBlogv1
    />
  )
}

export default App

// styleOnixBlog='bg-[#000]'
//       headerProps={{
//         styles: {
//           header: "bg-transparent backdrop-blur-sm text-white",
//           nav: "hover:text-[#BD2137]"
//         },
//         content: {
//           nav: ["Main", "Top", "2024", "Wu-Kong", "Contact"]
//         }
//       }}
//       mainProps={{
//         id: "Main",
//         styles: {
//           main: "bg-[url('https://4kwallpapers.com/images/wallpapers/resident-evil-4-3840x2160-11094.jpg')] bg-cover bg-center",
//           h1: "font-extrabold text-white uppercase",
//           p: "text-white",
//           button: "bg-gradient-to-tr from-[#000] to-[#000] text-white text-bold uppercase border-2 border-[#36608A] hover:from-[#36608A]",
//         },
//         content: {
//           video: "https://www.youtube.com/embed/j5Xv2lM9wes",
//           h1: "Explora los Mejores Videojuegos, Recomendaciones y Reseñas"
//         },
//       }}
//       postProps={{
//         id: "Top",
//         styles: {
//           h2: "text-white text-3xl font-semibold",
//           _h3: "text-white text-xl font-semibold",
//           _p: "text-white",
//           containerDescription: "bg-[#BD213722] border-[5px] border-[#BD213788] shadow-md hover:shadow-[#BD213788] rounded-lg",
//           _path: "text-[#BD2137] underline hover:text-[#BD213777]"
//         },
//         content: {
//           h2: "Top 4 Juegos del Mes: Diciembre 2024",
//           posts: [
//             {
//               _img: "https://i0.wp.com/enderg.com/wp-content/uploads/2023/09/cover_large-e1695930545262.webp?fit=600%2C671&ssl=1",
//               _h3: "Marvel's Spider-Man 2",
//               _p: "Vive la experiencia definitiva de ser Spider-Man con Peter Parker y Miles Morales. Explora Nueva York como nunca antes, con mejoras en la jugabilidad, una historia emocionante y gráficos de última generación.",
//               _namePath: "¿Por qué jugarlo?"
//             },
//             {
//               _img: "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/ba706e54d68d10a0eb6ab7c36cdad9178c58b7fb7bb03d28.png",
//               _h3: "Baldur's Gate 3",
//               _p: "Un RPG épico basado en Dungeons & Dragons. Forma un grupo, toma decisiones cruciales, y explora un mundo rico en narrativa. Cada elección tiene consecuencias significativas.",
//               _namePath: "¿Por qué jugarlo?"
//             },
//             {
//               _img: "https://m.media-amazon.com/images/I/81+nZRC5SBL.jpg",
//               _h3: " Super Mario Bros. Wonder",
//               _p: "Mario regresa en una nueva aventura de plataformas 2D con innovaciones sorprendentes. Descubre los poderes del 'Wonder Flower' y explora niveles llenos de creatividad y sorpresas.",
//               _namePath: "¿Por qué jugarlo?"
//             },
//             {
//               _img: "https://image.api.playstation.com/vulcan/ap/rnd/202305/2420/83ef93949d474052cc87b86617a5498505d4b50390280394.jpg",
//               _h3: "Alan Wake 2",
//               _p: "Una combinación única de thriller psicológico y survival horror. Sumérgete en una historia oscura y aterradora mientras desentrañas los misterios de Bright Falls.",
//               _namePath: "¿Por qué jugarlo?"
//             }
//           ]
//         }
//       }}
//       aboutProps={{
//         id: "2024",
//         styles: {
//           about: "bg-[url(https://wallpapers.com/images/hd/1920-x-1080-gaming-man-with-torch-jxdiv57yhj4ejdyj.jpg)] bg-cover bg-center bg-fixed text-white",
//           img: "object-contain relative",
//           h2: "font-extrabold relative",
//           p: "font-medium text-lg bg-[#00000099] p-4"
//         },
//         content: {
//           img: "https://png.pngtree.com/png-vector/20240801/ourmid/pngtree-3d-game-controller-png-image_13331475.png",
//           h2: "La Relevancia de los Juegos Battle Royale en 2024",
//           paragraphs: [
//             { p: "Los juegos Battle Royale continúan siendo una fuerza dominante en la industria de los videojuegos en 2024. Este género ha demostrado su capacidad para evolucionar y mantener a los jugadores cautivados con experiencias dinámicas y competitivas. Títulos icónicos como Fortnite, Apex Legends y Call of Duty: Warzone han alcanzado cifras impresionantes, generando más de $5 mil millones en ingresos durante el año." },
//             { p: "Su éxito se debe a una combinación de factores: actualizaciones constantes con nuevos mapas y modos de juego, eventos en vivo que atraen a millones de espectadores, y una accesibilidad que permite jugar en consolas, PC y dispositivos móviles." }
//           ]
//         }
//       }}
//       articleProps={{
//         id: "Wu-Kong",
//         styles: {
//           containerDescription: "text-white text-end",
//           h3: "text-white",
//           text: "text-white"
//         },
//         content: {
//           h2: "Wu Kong: El Éxito Sorprendente del Año en Videojuegos",
//           p: "Wu Kong, inspirado en la legendaria novela china Viaje al Oeste, ha capturado la atención de millones de jugadores en 2024 gracias a su impresionante mezcla de narrativa, jugabilidad y gráficos de última generación. Desarrollado por Game Science, este juego de acción y rol destaca por su estética visual increíblemente detallada y su enfoque en las leyendas chinas, lo que le ha dado un toque único en el mercado.",
//           img: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/campaigns/black-myth-wukong-bundle/geforce-black-myth-wukong-banner-xl-offset-desktop.jpg",
//           h3: "Exito global",
//           text: "Wu Kong no solo es un juego, sino un fenómeno cultural que ha redefinido lo que significa fusionar arte y tecnología en el mundo de los videojuegos. Si aún no lo has probado, este es el momento perfecto para descubrir por qué es el título más aclamado del año."
//         }
//       }}
//       contactProps={{
//         styles: {
//           contact: "bg-black text-white",
//           icon: "fill-[#BD2137]",
//           h2: "text-[#BD2137] text-3xl",
//           h3: "text-[#BD2137] text-3xl",
//           input: "bg-[#020202] border border-[#BD2137]",
//           textArea: "bg-[#020202] border border-[#BD2137]",
//           button: "bg-[#BD2137] hover:bg-[#BD213777]"
//         }
//       }}
//       footerProps={{
//         styles: {
//           footer: "bg-black text-white border-t border-[#333]"
//         }
//       }}