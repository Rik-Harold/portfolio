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
                    <li><nuxt-link to="/" class="menu-btn">Profil</nuxt-link></li>
                    <li><nuxt-link to="/realisations" class="menu-btn">Réalisations</nuxt-link></li>
                    <!-- <li><nuxt-link to="/" class="menu-btn">Preuves techniques</nuxt-link></li> -->
                    <li><nuxt-link to="/#contact" class="menu-btn">Contact</nuxt-link></li>
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
        name: 'Entete',
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