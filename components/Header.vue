<template>
    <div>
        <!-- ENTETE du site -->
        <div class="scroll-up-btn">
            <i class="fas fa-angle-up"></i>
        </div>
        <!-- Barre de navigation resposive -->
        <nav class="navbarre" id="fondNavBarre">
            <div class="max-width">
                <!-- Titre du site -->
                <div class="logo"><nuxt-link to="/">Portfo<span id="partie" >lio.</span></nuxt-link></div>
                <!-- Liens de navigation -->
                <ul :class="{ 'active': clique }" class="menu">
                    <li><nuxt-link to="accueil" class="menu-btn">Accueil</nuxt-link></li>
                    <li><nuxt-link to="profil" class="menu-btn">Profil</nuxt-link></li>
                    <li><nuxt-link to="documentation" class="menu-btn">Documentation</nuxt-link></li>
                    <li><nuxt-link to="preuves" class="menu-btn">Preuves techniques</nuxt-link></li>
                    <li><nuxt-link to="veilles" class="menu-btn">Veilles</nuxt-link></li>
                    <li><nuxt-link to="apprentissage" class="menu-btn">Apprentissage</nuxt-link></li>
                </ul>
                <!-- Bouton d'ouverture du menu responsive -->
                <div class="menu-btn">
                    <i :class="{ 'active': clique }" @click="clique = !clique" class="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                fond: 'navbarre-scroll',
                clique: false
            }
        },
        mounted() {
            // Animation de la navbarre au scroll
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