<template>
    <div>
        <!-- ENTETE du site -->
        <div class="scroll-up-btn">
            <i class="fas fa-angle-up"></i>
        </div>
        <nav class="navbarre" id="fondNavBarre">
            <div class="max-width">
                <div class="logo"><nuxt-link to="index">Portfo<span id="partie" >lio.</span></nuxt-link></div>
                <ul class="menu">
                    <li><nuxt-link to="/" class="menu-btn">Accueil</nuxt-link></li>
                    <li><nuxt-link to="profil" class="menu-btn">Profil</nuxt-link></li>
                    <li><nuxt-link to="documentation" class="menu-btn">Documentation</nuxt-link></li>
                    <li><nuxt-link to="preuves" class="menu-btn">Preuves techniques</nuxt-link></li>
                    <li><nuxt-link to="veilles" class="menu-btn">Veilles</nuxt-link></li>
                    <li><nuxt-link to="apprentissage" class="menu-btn">Apprentissage</nuxt-link></li>
                </ul>
                <div class="menu-btn">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: ['testScroll'],
        data() {
            return {
                fond: 'navbarre-scroll'
            }
        },
        mounted() {
            window.addEventListener('scroll', function(e) {
                if (window.scrollY > 100)
                {
                    document.getElementById('fondNavBarre').classList.add('navbarre-sticky')
                } else
                {
                    document.getElementById('fondNavBarre').classList.remove('navbarre-sticky')
                }
            })
        }
    }
</script>