<script>
  import { onMount } from "svelte";

  let showMobileMenu = false;

  const navItems = [
    { label: "Cidade de Refúgio", href: "#" },
    { label: "Sobre", href: "#" },
    { label: "Galeria", href: "#" },
    { label: "Contatos", href: "#" }
  ];

  const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

  const mediaQueryHandler = e => {
    if (!e.matches) {
      showMobileMenu = false;
    }
  };

  onMount(() => {
    const mediaListener = window.matchMedia("(max-width: 767px)");

    mediaListener.addListener(mediaQueryHandler);
  });
</script>

<nav>
  <div class="nav-menu">
    <div class="nav-items">
      <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
        <div class="menu-line"></div>
      </div>
      <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
        {#each navItems as item}
        <li>
          <a href={item.href}>{item.label}</a>
        </li>
        {/each}
      </ul>
    </div>
    <div class="contact-item">
      <p><img alt="icone-facebook" src="https://img.icons8.com/ios/50/ffffff/facebook-new.png"/></p>
      <p><img alt="icone-instagram" src="https://img.icons8.com/ios/50/ffffff/instagram-new--v1.png"/></p>
      <p><img alt="icone-whatsapp" src="https://img.icons8.com/ios/50/ffffff/whatsapp--v1.png"/></p>
    </div>
  </div>
</nav>

<style>
  nav {
    background-color: rgb(12, 60, 80);
    height: 3.5rem;
  }

  .nav-menu {
    max-width: 61.25rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
  }

  .mobile-icon {
    width: 50px;
    height: 1.25rem;
    position: relative;
    cursor: pointer;
  }

  .mobile-icon:after,
  .mobile-icon:before,
  .menu-line {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.125rem;
    background-color: #fff;
    transition: all 0.4s;
    transform-origin: center;
  }

  .mobile-icon:before,
  .menu-line {
    top: 0;
  }

  .mobile-icon:after,
  .menu-line {
    bottom: 0;
  }

  .mobile-icon:before {
    width: 66%;
  }

  .mobile-icon:after {
    width: 33%;
  }

  .menu-line {
    margin: auto;
  }

  .mobile-icon:hover:before,
  .mobile-icon:hover:after,
  .mobile-icon.active:before,
  .mobile-icon.active:after,
  .mobile-icon.active .menu-line {
    width: 100%;
  }

  .mobile-icon.active:before,
  .mobile-icon.active:after {
    top: 50%;
    transform: rotate(-45deg);
  }

  .mobile-icon.active .menu-line {
    transform: rotate(45deg);
  }

  .navbar-list {
    display: none;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    padding: 0 2.5rem;
  }

  .navbar-list.mobile {
    background-color:  rgb(12, 60, 82);
    position: fixed;
    display: block;
    height: calc(100% - 4rem);
    bottom: 0;
    left: 0;
  }

  .navbar-list li {
    list-style-type: none;
    position: relative;
  }

  .navbar-list li:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .navbar-list a {
    color: #fff;
    text-decoration: none;
    display: flex;
    height: 3rem;
    align-items: center;
    padding: 0 0.6rem;
  }

  .contact-item {
    display: flex;
  }

  .contact-item p img {
    width: 70%;
    margin: auto;
  }

  @media only screen and (min-width: 48rem) {
    .mobile-icon {
      display: none;
    }

    .navbar-list {
      display: flex;
      padding: 0;
    }

    .navbar-list a {
      display: inline-flex;
    }
  }
</style>