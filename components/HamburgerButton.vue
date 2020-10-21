<template functional>
  <a
    role="button"
    class="navbar-burger"
    aria-label="menu"
    aria-expanded="false"
    @click="listeners.click"
  >
    <span class="burger" aria-hidden="true"></span>
    <span class="burger" aria-hidden="true"></span>
    <span class="burger" aria-hidden="true"></span>
  </a>
</template>
// <style lang="scss" scoped>
//     span {
//       margin: 4px 4px 4px 4px;
//     }

//     .burger {
//       display: block;
//       order: 1;
//       z-index: 1;
//       width: 25px;
//       height: 5px;
//       background-color: white;
//       margin: 4px;
//       transition: .8s;
//       -webkit-transition: .8s;
//     }

//     .change .burger:nth-child(1) {
//       -webkit-transform: rotate(-45deg);
//       transform:rotate(-45deg) translate(-5px, 8px);
//     }
    
//     .change .burger:nth-child(2) {
//         opacity: 0;
//     }
    
//     .change .burger:nth-child(3) {
//       -webkit-transform: rotate(45deg);
//       transform: rotate(45deg) translate(-5px, -8px);
//     }
// </style>
