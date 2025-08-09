// import React, { useState, useEffect } from "react";
// import Photo from '../Images/Photo.png';

// function Perfil() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       {windowWidth <= 1250 ? ( 
//         <div className='Perfil2'>
//           <img src={Photo} alt="Foto do perfil"/>
//           <h1>UsuárioAdministrador</h1>  
//         </div>
//       ) : (
//         <div className='Perfil'>
//           <img src={Photo} alt="Foto do perfil"/>
//           <h1>Olá UsuárioAdministrador</h1>  
//         </div>
//       )}
//     </div>
//   );
// }

// export default Perfil;